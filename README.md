# The Backstage Creative Lab

Site vitrine en React, TypeScript et Vite. Aucun backend requis.

## Lancer

```sh
npm install
npm run dev
```

## Construire

```sh
npm run build
npm run preview
```

Tous les contenus sont centralisés dans `src/data.ts` : textes, navigation, projets, membres, coordonnées et chemins des images. Placer les images dans `public/` et renseigner leurs chemins (par exemple `/portrait-president.jpg`). Les portraits et visuels réservent leurs dimensions. Les logos sont contenus sans déformation : utiliser des fichiers recadrés autour du logo pour éviter les grandes marges.

Renseigner `site.contact.email` et `site.contact.socials` (objets `{ label, url }` avec URL complète HTTPS). Sans adresse, le site affiche « Contact details coming soon ». Aucun formulaire simulé.

Le site est en anglais (`lang="en"`). Tous les textes anglais, libellés accessibles, métadonnées SEO et chemins des logos sont centralisés dans `src/data.ts`. Les cinq noms, biographies et descriptions des deux projets restent volontairement en Lorem ipsum.

Les trois fichiers officiels sont conservés dans `public/logos/`. Les versions `official-black-transparent.png` et `official-white-transparent.png` sont extraites du JPEG officiel sans redessiner les éléments. Le fond est transformé en canal alpha et les marges sont recadrées avec une réserve de 24 pixels. Les deux variantes partagent exactement le même masque alpha. Le header utilise le noir ; le footer sombre utilise le blanc. Le conteneur `.brand-image` a un fond transparent. Les chemins et dimensions sont centralisés dans `site.images`.

La police utilise Google Fonts, avec polices de repli locales. La navigation, le menu et les fiches fonctionnent au clavier ; les fiches utilisent un dialogue natif (Échap, fermeture et restitution du focus). Les animations respectent la réduction de mouvement.
