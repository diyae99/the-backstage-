import {useEffect,useRef,useState} from 'react';
import {experimentSection as copy,type Experiment} from './data';

export function ExperimentGallery({experiment,onClose}:{experiment:Experiment|null;onClose:()=>void}){
 const ref=useRef<HTMLDialogElement>(null);
 const touch=useRef<{x:number;y:number}|null>(null);
 const [index,setIndex]=useState(0);
 const count=experiment?.gallery.length??0;
 const move=(direction:number)=>{if(count>1)setIndex(current=>(current+direction+count)%count);};
 useEffect(()=>{
  if(!experiment?.gallery.length)return;
  setIndex(0);
  const dialog=ref.current;
  const trigger=document.activeElement instanceof HTMLElement?document.activeElement:null;
  const overflow=document.body.style.overflow;
  dialog?.showModal();document.body.style.overflow='hidden';
  return ()=>{dialog?.close();document.body.style.overflow=overflow;touch.current=null;trigger?.focus({preventScroll:true});};
 },[experiment]);
 const photo=experiment?.gallery[index];
 return <dialog ref={ref} className="gallery-dialog" aria-labelledby="gallery-title" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}} onKeyDown={e=>{
  if(e.key==='ArrowRight'){e.preventDefault();move(1);}
  if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}
  if(e.key==='Tab'){
   const buttons=Array.from(e.currentTarget.querySelectorAll<HTMLButtonElement>('button:not(:disabled)'));
   const first=buttons[0],last=buttons[buttons.length-1];
   if((e.shiftKey&&document.activeElement===first)||(!e.shiftKey&&document.activeElement===last)){e.preventDefault();(e.shiftKey?last:first)?.focus();}
  }
 }}><div className="gallery-heading"><h2 id="gallery-title">{experiment?.title}</h2><button className="gallery-close" aria-label={copy.closeGallery} onClick={onClose} autoFocus>{copy.closeLabel} <span aria-hidden="true">×</span></button></div>{photo&&<><div className="gallery-stage" onTouchStart={e=>{if(e.touches.length===1)touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY};else touch.current=null;}} onTouchCancel={()=>{touch.current=null;}} onTouchEnd={e=>{
  const start=touch.current;touch.current=null;if(!start||!e.changedTouches.length)return;
  const dx=e.changedTouches[0].clientX-start.x,dy=e.changedTouches[0].clientY-start.y;
  if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3)move(dx<0?1:-1);
 }}><img key={photo.src} src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} draggable={false}/></div><div className="gallery-controls"><button onClick={()=>move(-1)} disabled={count<2} aria-label={copy.previous}><span aria-hidden="true">←</span></button><p aria-live="polite" aria-atomic="true">{String(index+1).padStart(2,'0')} / {String(count).padStart(2,'0')}</p><button onClick={()=>move(1)} disabled={count<2} aria-label={copy.next}><span aria-hidden="true">→</span></button></div></>}</dialog>;
}
