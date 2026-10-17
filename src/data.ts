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
 contact:{backgroundImage:'/images/contact-group.jpeg',email:'',socials:[] as {label:string;url:string}[]},
 nav:[{id:'accueil',label:'Home'},{id:'le-lab',label:'About the Lab'},{id:'projets',label:'Projects'},{id:'equipe',label:'Team'},{id:'contact',label:'Contact'}],
 ui:{skip:'Skip to content',home:'The Backstage Creative Lab — Home',menu:'Menu',close:'Close',mainNavigation:'Main navigation',footerNavigation:'Footer navigation',edition:'ONE LAB. MANY POSSIBILITIES.',discoverLab:'Discover the Lab',exploreProjects:'Explore our projects',artLabel:'A SPACE OF\nPOSSIBILITIES.',enter:'STEP BEHIND THE SCENES',lab:'ABOUT THE LAB',disciplines:'ONE PLAYGROUND, MANY CREATIVE LANGUAGES',projects:'OUR PROJECTS',team:'THE FOUNDING TEAM',contact:'LET’S CONNECT',initiative:'BACKSTAGE — INITIATIVE',portraitSoon:'PORTRAIT COMING SOON',discoverProject:'Discover the project',openProject:'Explore',closeProject:'Close project details',email:'Get in touch',contactSoon:'Contact details coming soon',meet:'LET’S\nCONNECT.',door:'The door is open.',backHome:'Back to home',backTop:'Back to top'},
};
export type ProjectLogo = { src: string; viewBox: string; width: number; height: number };
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
  // Original JPEGs retained byte-for-byte. Viewports remove only empty black margins.
  logo:{src:'/logos/troupe/official-stacked-v2.jpeg',viewBox:'724 957 2871 2113',width:2871,height:2113},
  detailLogo:{src:'/logos/troupe/official-horizontal-v2.jpeg',viewBox:'558 1746 3043 658',width:3043,height:658},
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
export const members = [
 {id:1,name:'Reda El Azami',role:'President / Founder',image:'/team/reda-el-azami.jpg',imageAlt:'Reda El Azami'},
 {id:2,name:'Abderrahim Amor',role:'Vice President / Co-founder',image:'/team/abderrahim-amor.jpg',imageAlt:'Abderrahim Amor'},
 {id:3,name:'Ahmed Belkadi',role:'Secretary General / Co-founder',image:'/team/ahmed-belkadi.jpg',imageAlt:'Ahmed Belkadi'},
 {id:4,name:'Aya Jebili',role:'Treasurer / Co-founder',image:'/team/aya-jebili.jpg',imageAlt:'Aya Jebili'},
 {id:5,name:'Diyae Fanoui',role:'Artistic Director / Co-founder',image:'/team/diyae-fanoui.jpg',imageAlt:'Diyae Fanoui'},
];
