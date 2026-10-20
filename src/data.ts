export const site = {
 name: 'The Backstage Creative Lab',
 location: 'Tangier, Morocco', label: 'Arts & culture association — Tangier',
 tagline: ['Explore.', 'Experiment.', 'Create together.'],
 introduction: 'A space for ideas still finding their form. In Tangier, we bring artists and young creatives together to explore new ways of creating as a collective.',
 labTitle: 'A place to connect.\nA space to explore.',
 labIntroduction: 'The Backstage Creative Lab is a nonprofit arts and culture association. We believe in encounters that open new horizons, ideas worth sharing, and the power of creating together.',
 principles: [
  {title:'Our mission',text:'Encourage artistic expression and create opportunities to learn, experiment, and produce work together.'},
  {title:'Our vision',text:'Make the Lab an open space where different backgrounds, disciplines, and perspectives come together.'},
  {title:'Our approach',text:'Value the process of exploration, the exchange of ideas, and each person’s growth as much as the finished work.'}
 ],
 disciplines:['Theatre','Performing arts','Music','Audiovisual arts','Visual & digital arts'],
 association:{
  title:'ABOUT THE ASSOCIATION',
  paragraphs:[
   'The Backstage Creative Lab is an independent cultural and artistic association based in Tangier, Morocco. It is dedicated to artistic creation, experimentation, cultural exchange, and the development of emerging creative talents.',
   'The association brings together artists, performers, and creative professionals from different disciplines, creating a collaborative environment where ideas can evolve into meaningful artistic projects.',
  ],
  areasIntroduction:'Our activities are structured around three main areas:',
  areas:[
   {title:'Theatre & Performing Arts',description:'Professional theatrical productions, performances, and artistic collaborations.'},
   {title:'Theatre Laboratory',description:'Workshops, training sessions, and practical learning experiences led by artistic professionals.'},
   {title:'Music & Creative Exploration',description:'Musical projects, collaborative experimentation, and multidisciplinary artistic initiatives.'},
  ],
 },
 projectsTitle:'Ideas\ntake shape.',
 projectsIntroduction:'Two initiatives, one shared ambition: to give ideas room to come to life.',
 teamTitle:'The collective,\nbehind the scenes.',
 teamIntroduction:'Five perspectives, one collective energy. Meet the people who support the Lab and help it move forward.',
 contactTitle:'What could we create together?',
 contactText:'Artists, curious minds, young creatives, and cultural organisations: the Lab is a meeting point. Let’s talk about your ideas, your ambitions, and the possibilities we could imagine together.',
 signature:'Creativity begins behind the scenes.',
 seo:{title:'The Backstage Creative Lab — Arts & creativity in Tangier',description:'The Backstage Creative Lab is a nonprofit arts and culture association in Tangier, Morocco. A space for expression, experimentation, and collective creation through theatre, music, and visual arts.'},
 // Transparent PNGs extracted from the official raster; original files retained.
 images:{hero:'/images/hero-stage.jpg',heroAlt:'Two performers seated together on a theatre stage',logoDark:'/logos/official-black-transparent.png',logoLight:'/logos/official-white-transparent.png',logoWhite:'/logos/official-stacked.jpeg',symbol:'/logos/official-symbol.jpeg',logoWidth:3367,logoHeight:544},
 contact:{backgroundImage:'/images/contact-group.jpeg',email:'thebackstagecreativelab@gmail.com',phones:[{label:'0699904956',href:'tel:+212699904956'},{label:'0615635855',href:'tel:+212615635855'}],socials:[] as {label:string;url:string}[]},
 nav:[{id:'accueil',label:'Home'},{id:'le-lab',label:'About the Lab'},{id:'projets',label:'Projects'},{id:'equipe',label:'Team'},{id:'contact',label:'Contact'}],
 ui:{readBio:'Read bio',closeBio:'Close biography',projectLeads:'Project Leads',projectHighlights:'Project Highlights',skip:'Skip to content',home:'The Backstage Creative Lab — Home',menu:'Menu',close:'Close',mainNavigation:'Main navigation',footerNavigation:'Footer navigation',edition:'ONE LAB. MANY POSSIBILITIES.',discoverLab:'Discover the Lab',exploreProjects:'Explore our projects',artLabel:'A SPACE OF\nPOSSIBILITIES.',enter:'STEP BEHIND THE SCENES',lab:'ABOUT THE LAB',disciplines:'ONE PLAYGROUND, MANY CREATIVE LANGUAGES',projects:'OUR PROJECTS',team:'THE FOUNDING TEAM',contact:'LET’S CONNECT',initiative:'BACKSTAGE — INITIATIVE',portraitSoon:'PORTRAIT COMING SOON',discoverProject:'Discover the project',openProject:'Explore',closeProject:'Close project details',email:'Get in touch',contactSoon:'Contact details coming soon',meet:'LET’S\nCONNECT.',door:'The door is open.',backHome:'Back to home',backTop:'Back to top'},
};
export type ProjectLogo = { src: string; viewBox?: string; width: number; height: number };
export type Project = {
 id: string; title: string; category: string; description: string; presentation?: string; signature?: string;
 content?: { type: 'paragraph' | 'quote' | 'signature'; text: string }[];
 image: string; imageAlt: string; motif: 'theatre' | 'music';
 logo: ProjectLogo; detailLogo?: ProjectLogo; symbol?: string;
 social?: { label: string; url: string };
};
export const projects: Project[] = [
 {
  id:'01', title:'The Backstage Theatre Troupe', category:'Theatre & performing arts',
  description:'A laboratory for theatrical exploration, research and collective creation.',
  presentation:'The Backstage Theatre Troupe is a theatre project of The Backstage Creative Lab. A laboratory for theatrical exploration, it researches, experiments and creates through theatre.',
  image:'', imageAlt:'The Backstage Theatre Troupe official logo', motif:'theatre',
  // Official source retained byte-for-byte and displayed in full.
  logo:{src:'/logos/troupe/official-stacked-v3.jpeg',width:4160,height:4160},
  symbol:'/logos/troupe/official-symbol-v2.jpeg',
  social:{label:'Follow the troupe',url:'https://www.instagram.com/thebackstage.troupe/'},
 },
 {
  id:'02', title:'Maqam 2.0', category:'Music & artistic experimentation',
  signature:'Music Without Time.',
  social:{label:'Follow the band',url:'https://www.instagram.com/maqam2.0/'},
  description:'A young artistic and musical project exploring music across eras, styles and generations through its own sound, energy and perspective.',
  image:'', imageAlt:'Maqam 2.0 official emblem', motif:'music',
  logo:{src:'/logos/maqam/official-emblem.jpeg',viewBox:'1378 815 1329 2496',width:1329,height:2496},
  content:[
   {type:'paragraph',text:'Maqam 2.0 is a young artistic and musical project built around one simple idea: Music Without Time.'},
   {type:'paragraph',text:'We believe music does not belong to one era, style, or generation. At Maqam 2.0, we explore music across different periods and influences, taking what speaks to us and giving it a new identity through our own sound, energy, and perspective.'},
   {type:'paragraph',text:'Our approach can be summed up in one line:'},
   {type:'quote',text:'“We tune the old stories to a new frequency.”'},
   {type:'paragraph',text:'We take familiar melodies, stories, sounds, and influences, and experiment with them rather than simply reproducing them. Sometimes the result is musical, visual, or even theatrical — but music always remains at the center.'},
   {type:'paragraph',text:'Maqam 2.0 is a space for experimentation, creativity, and discovering new ways to experience and connect with music while keeping its spirit alive.'},
   {type:'signature',text:'Maqam 2.0 — Music Without Time.'},
  ],
 },
];
export type Member = {id:number;name:string;role:string;image:string;imageAlt:string;bio:string[]};
export const members: Member[] = [
 {id:1,name:'Reda El Azami',role:'President / Founder',image:'/team/reda-el-azami.jpg',imageAlt:'Reda El Azami',bio:["A theatre director, multidisciplinary artist, and cultural mediator whose practice moves between theatrical creation, dramaturgy, performance, and audiovisual storytelling. Driven by a curiosity for human experience and contemporary forms of expression, he approaches theatre as a space for questioning, experimentation, and transformation — where stories become encounters, emotions become language, and the stage becomes a place to explore the complexities of being human.", "Beyond the stage, his work extends to artistic education, cultural development, and the transmission of knowledge. Through creative projects, workshops, and collaborative processes, he seeks to empower emerging voices, nurture artistic potential, and create opportunities for discovery. His approach is rooted in the belief that art is not merely something to produce, but a journey that transforms both those who create it and those who experience it."]},
 {id:2,name:'Abderrahim Amor',role:'Vice President / Co-founder',image:'/team/abderrahim-amor.jpg',imageAlt:'Abderrahim Amor',bio:["A Moroccan actor, guitarist, and multidisciplinary artist whose practice moves between theatre, music, and visual expression. Grounded in his theatrical experience and ongoing musical training, he explores the connections between sound, movement, image, and storytelling. Through acting, stage writing, photography, and guitar, he seeks to develop an artistic language that brings together different forms of expression while remaining deeply connected to human emotion and experience.", "Drawn to the encounter between theatre and music, he approaches artistic creation as a space for experimentation, where disciplines can intersect and inspire new possibilities. Through performances, artistic workshops, and continuous exploration, he continues to refine his craft and expand his creative perspective, aspiring to create original experiences that transcend conventional boundaries and establish a meaningful connection with audiences."]},
 {id:3,name:'Ahmed Belkadi',role:'Secretary General / Co-founder',image:'/team/ahmed-belkadi.jpg',imageAlt:'Ahmed Belkadi',bio:["A theatre actor whose artistic practice is rooted in sincerity, emotional depth, and the exploration of human experience. Through his participation in theatrical productions, performances, and festivals, he has explored a variety of characters and stage universes, developing a strong interest in the subtle relationship between presence, emotion, and embodiment. His experience in improvisational theatre has further shaped his approach to performance, strengthening his spontaneity, creativity, active listening, and ability to respond instinctively to the unexpected.", "Alongside his artistic journey, he holds a Master's degree in Law, bringing a sense of discipline, analytical thinking, and precision to his creative practice. He approaches theatre as an ongoing process of discovery, where every character offers a new perspective and every performance becomes an opportunity to explore the complexity of human behaviour. Through continuous learning and experimentation, he seeks to deepen his stage presence."]},
 {id:4,name:'Aya Jebili',role:'Treasurer / Co-founder',image:'/team/aya-jebili.jpg',imageAlt:'Aya Jebili',bio:["A theatre actress whose passion for the stage began in childhood and continues to shape her artistic journey. Drawn to the sincerity of performance, the depth of character, and the power of stage presence, she approaches acting as a process of exploration, attentive listening, and emotional discovery. From her first experiences on stage in Ouezzane to her artistic development in Tanger, she has continued to refine her practice through theatre training, exploring the relationship between body, interpretation, and expression.", "Alongside her artistic journey, she pursues university studies in science, bringing curiosity, discipline, and analytical thinking to her approach to theatre. This dual path allows her to explore performance through both observation and imagination, combining a thoughtful perspective with a sensitivity to the human experience. Through continuous learning and artistic experimentation, she seeks to deepen her understanding of characters and develop an authentic stage presence."]},
 {id:5,name:'Diyae Fanoui',role:'Artistic Director / Co-founder',image:'/team/diyae-fanoui.jpg',imageAlt:'Diyae Fanoui',bio:["A cultural practitioner, theatre facilitator, and project coordinator whose work lies at the intersection of artistic creation, community engagement, and cultural development. Through theatre workshops, educational programmes, and cultural initiatives, he approaches art as a space for expression, self-discovery, and collective growth. His experience in cultural mediation and programme coordination has shaped his understanding of how artistic practice can empower young people, encourage participation, and create meaningful connections between individuals and their communities.", "With an interest in technology and digital communication, he also explores new ways to develop, document, and share creative projects. Within The Backstage Creative Lab, he contributes to a vision that places experimentation, collaboration, and knowledge-sharing at the heart of artistic development. He believes that creativity flourishes when people are given the freedom to explore and the confidence to express themselves."]},
];

// Populate only with confirmed project responsibilities, never inferred from association roles.
export type ProjectLead = {memberId:number;role:string;responsibility:string};
export const projectLeads: ProjectLead[] = [];
// Add only documented completed work, with a real image and factual description.
export type ProjectHighlight = {id:string;title:string;description:string;image:string;imageAlt:string;year?:string;url?:string};
export const projectHighlights: ProjectHighlight[] = [];
