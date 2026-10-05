const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
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
 contactTitle:'What could we\ncreate together?',
 contactText:'Artists, curious minds, young creatives, and cultural organisations: the Lab is a meeting point. Let’s talk about your ideas, your ambitions, and the possibilities we could imagine together.',
 signature:'Creativity begins behind the scenes.',
 seo:{title:'The Backstage Creative Lab — Arts & creativity in Tangier',description:'The Backstage Creative Lab is a nonprofit arts and culture association in Tangier, Morocco. A space for expression, experimentation, and collective creation through theatre, music, and visual arts.'},
 // Transparent PNGs extracted from the official raster; original files retained.
 images:{logoDark:'/logos/official-black-transparent.png',logoLight:'/logos/official-white-transparent.png',logoWhite:'/logos/official-stacked.jpeg',symbol:'/logos/official-symbol.jpeg',logoWidth:3367,logoHeight:544},
 contact:{email:'',socials:[] as {label:string;url:string}[]},
 nav:[{id:'accueil',label:'Home'},{id:'le-lab',label:'About the Lab'},{id:'projets',label:'Projects'},{id:'equipe',label:'Team'},{id:'contact',label:'Contact'}],
 ui:{skip:'Skip to content',home:'The Backstage Creative Lab — Home',menu:'Menu',close:'Close',mainNavigation:'Main navigation',footerNavigation:'Footer navigation',edition:'ONE LAB. MANY POSSIBILITIES.',discoverLab:'Discover the Lab',exploreProjects:'Explore our projects',artLabel:'A SPACE OF\nPOSSIBILITIES.',enter:'STEP BEHIND THE SCENES',lab:'ABOUT THE LAB',disciplines:'ONE PLAYGROUND, MANY CREATIVE LANGUAGES',projects:'OUR PROJECTS',team:'THE FOUNDING TEAM',contact:'LET’S CONNECT',initiative:'BACKSTAGE — INITIATIVE',theatreVisual:'ON STAGE.',musicVisual:'MAQAM.',visualSoon:'VISUAL COMING SOON',portraitSoon:'PORTRAIT COMING SOON',discoverProject:'Discover the project',openProject:'Explore',closeProject:'Close project details',email:'Get in touch',contactSoon:'Contact details coming soon',meet:'LET’S\nCONNECT.',door:'THE DOOR IS OPEN.',backHome:'Back to home',backTop:'Back to top'},
};
export const projects = [
 {id:'01',title:'The Theatre Company',category:'Theatre & performing arts',description:lorem,image:'',imageAlt:'The Theatre Company poster', motif:'theatre'},
 {id:'02',title:'Maqam — Music Band',category:'Music band',description:lorem,image:'',imageAlt:'Maqam — Music Band artwork',motif:'music'}
];
export const members = ['President','Vice President','General Secretary','Treasurer','Artistic Director'].map((role,index)=>({id:index+1,name:'Lorem ipsum',bio:lorem,role,image:'',imageAlt:`Portrait — ${role}`}));
export type Project = typeof projects[number];
