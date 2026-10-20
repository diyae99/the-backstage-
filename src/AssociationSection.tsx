import {site} from './data';

export function AssociationSection(){
 const {association}=site;
 return <section id="association" className="association section-pad" aria-labelledby="association-title">
  <div className="association-introduction reveal">
   <h2 id="association-title">{association.title}</h2>
   <div className="association-copy">{association.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div>
  </div>
  <div className="association-activities reveal">
   <p className="association-areas-intro">{association.areasIntroduction}</p>
   <ol className="association-areas">{association.areas.map(area=><li key={area.title}><h3>{area.title}</h3><p>{area.description}</p></li>)}</ol>
  </div>
 </section>;
}
