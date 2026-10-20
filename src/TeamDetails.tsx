import {useEffect, useRef} from 'react';
import {site, members, projectLeads, projectHighlights, type Member} from './data';

export function ContactDetails(){
 return <address className="contact-details"><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a><div>{site.contact.phones.map(phone=><a key={phone.href} href={phone.href}>{phone.label}</a>)}</div></address>;
}

export function BioDialog({member,onClose}:{member:Member|null;onClose:()=>void}){
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{
  if(!member)return;
  const dialog=ref.current;
  const trigger=document.activeElement instanceof HTMLElement?document.activeElement:null;
  const overflow=document.body.style.overflow;
  dialog?.showModal();
  document.body.style.overflow='hidden';
  return ()=>{dialog?.close();document.body.style.overflow=overflow;trigger?.focus({preventScroll:true});};
 },[member]);
 return <dialog ref={ref} className="bio-dialog" aria-labelledby="bio-title" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}} onKeyDown={e=>{
  if(e.key!=='Tab')return;
  const items=Array.from(e.currentTarget.querySelectorAll<HTMLElement>('button,a[href],[tabindex="0"]'));
  const first=items[0],last=items[items.length-1];
  if((e.shiftKey&&document.activeElement===first)||(!e.shiftKey&&document.activeElement===last)){
   e.preventDefault();(e.shiftKey?last:first)?.focus();
  }
 }}><button className="dialog-close" autoFocus onClick={onClose} aria-label={site.ui.closeBio}>{site.ui.close} <span aria-hidden="true">×</span></button>{member&&<div className="dialog-content"><p className="eyebrow">{member.role}</p><h2 id="bio-title">{member.name}</h2><div className="bio-copy" tabIndex={0} aria-label={`${member.name} biography`}>{member.bio.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></div>}</dialog>;
}

export function ProjectLeads({onReadBio}:{onReadBio:(member:Member)=>void}){
 const leads=projectLeads.flatMap(lead=>{const member=members.find(m=>m.id===lead.memberId);return member?[{...lead,member}]:[];});
 if(!leads.length)return null;
 return <section className="section-pad project-leads" aria-labelledby="leads-title"><h2 id="leads-title">{site.ui.projectLeads}</h2><div className="responsibility-grid">{leads.map(lead=><article key={`${lead.memberId}-${lead.responsibility}`}><img src={lead.member.image} alt={lead.member.imageAlt} width="800" height="1000" loading="lazy"/><h3>{lead.member.name}</h3><p>{lead.role}</p><p>{lead.responsibility}</p><button className="text-link" onClick={()=>onReadBio(lead.member)} aria-haspopup="dialog">{site.ui.readBio}</button></article>)}</div></section>;
}

export function ProjectHighlights(){
 if(!projectHighlights.length)return null;
 return <section className="section-pad project-highlights" aria-labelledby="highlights-title"><h2 id="highlights-title">{site.ui.projectHighlights}</h2><div className="responsibility-grid">{projectHighlights.map(item=><article key={item.id}><img src={item.image} alt={item.imageAlt} width="1200" height="800" loading="lazy"/>{item.year&&<p className="eyebrow">{item.year}</p>}<h3>{item.title}</h3><p>{item.description}</p>{item.url&&<a className="text-link" href={item.url}>{site.ui.discoverProject}</a>}</article>)}</div></section>;
}
