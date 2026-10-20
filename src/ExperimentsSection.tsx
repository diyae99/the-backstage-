import {ExperimentGallery} from './ExperimentGallery';
import {useEffect,useRef,useState} from 'react';
import {experiments,experimentSection as copy,site,type Experiment} from './data';

function Poster({experiment}:{experiment:Experiment}){
 return <img className="experiment-poster" src={experiment.poster} alt={experiment.posterAlt} width={experiment.width} height={experiment.height} loading="lazy" decoding="async"/>;
}
function ExperimentDialog({experiment,onClose}:{experiment:Experiment|null;onClose:()=>void}){
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{
  if(!experiment)return;
  const trigger=document.activeElement instanceof HTMLElement?document.activeElement:null;
  const dialog=ref.current;const old=document.body.style.overflow;
  dialog?.showModal();document.body.style.overflow='hidden';
  return ()=>{dialog?.close();document.body.style.overflow=old;trigger?.focus({preventScroll:true});};
 },[experiment]);
 return <dialog ref={ref} aria-labelledby="experiment-title" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}} onKeyDown={e=>{
  if(e.key!=='Tab')return;
  const items=Array.from(e.currentTarget.querySelectorAll<HTMLElement>('button,a[href],[tabindex="0"]'));
  const first=items[0],last=items[items.length-1];
  if((e.shiftKey&&document.activeElement===first)||(!e.shiftKey&&document.activeElement===last)){e.preventDefault();(e.shiftKey?last:first)?.focus();}
 }}><button className="dialog-close" aria-label={copy.close} autoFocus onClick={onClose}>{site.ui.close} <span aria-hidden="true">×</span></button>{experiment&&<div className="dialog-content experiment-details"><Poster experiment={experiment}/><h2 id="experiment-title">{experiment.title}</h2><div className="experiment-copy" tabIndex={0} aria-label="Production details">{experiment.synopsis.length>0&&<div><h3>{copy.synopsis}</h3>{experiment.synopsis.map(p=><p key={p}>{p}</p>)}</div>}{experiment.performanceDates.length>0&&<div><h3>{copy.dates}</h3><ol className="performance-timeline">{experiment.performanceDates.map(performance=><li key={performance.isoDate}><time dateTime={performance.isoDate}>{performance.date}</time><span>{performance.description}</span></li>)}</ol></div>}{experiment.festivals.length>0&&<div><h3>{copy.festivals}</h3><ul>{experiment.festivals.map(festival=><li key={festival}>{festival}</li>)}</ul></div>}{experiment.awards.length>0&&<div><h3>{copy.awards}</h3>{experiment.awards.map(award=><article className="experiment-award" key={award.title}><h4>{award.title}</h4><p className="award-event">{award.event}</p><p>{award.description}</p></article>)}</div>}</div></div>}</dialog>;
}
export function ExperimentsSection(){
 const [experiment,setExperiment]=useState<Experiment|null>(null);
 const [gallery,setGallery]=useState<Experiment|null>(null);
 return <><section id="selected-experiments" className="experiments section-pad" aria-labelledby="experiments-title"><h2 className="reveal" id="experiments-title">{copy.title}</h2><div className="experiment-grid">{experiments.map(item=><article className="experiment reveal" key={item.id}><Poster experiment={item}/><h3>{item.title}</h3><div className="experiment-actions"><button className="text-link" disabled={!item.gallery.length} aria-describedby={!item.gallery.length?`gallery-status-${item.id}`:undefined} aria-haspopup="dialog" aria-label={`${copy.viewGallery}: ${item.title}`} onClick={()=>setGallery(item)}>{copy.viewGallery} <span aria-hidden="true">↗</span></button><button className="text-link" aria-haspopup="dialog" aria-label={`${copy.discover}: ${item.title}`} onClick={()=>setExperiment(item)}>{copy.discover} <span aria-hidden="true">↗</span></button></div>{!item.gallery.length&&<p className="gallery-pending" id={`gallery-status-${item.id}`}>{copy.galleryPending}</p>}</article>)}</div></section><ExperimentGallery experiment={gallery} onClose={()=>setGallery(null)}/><ExperimentDialog experiment={experiment} onClose={()=>setExperiment(null)}/></>;
}
