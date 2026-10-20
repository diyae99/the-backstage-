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

Le site est en anglais (`lang="en"`). Tous les textes anglais, libellés accessibles, métadonnées SEO et chemins des logos sont centralisés dans `src/data.ts`. Les cinq noms et fonctions de l’équipe sont renseignés, sans biographies. La présentation officielle de The Backstage Theatre Troupe et son lien Instagram sont renseignés. La présentation complète de Maqam 2.0, sa signature et sa citation sont intégrées sans coordonnées supplémentaires.

Les trois fichiers officiels sont conservés dans `public/logos/`. Les versions `official-black-transparent.png` et `official-white-transparent.png` sont extraites du JPEG officiel sans redessiner les éléments. Le fond est transformé en canal alpha et les marges sont recadrées avec une réserve de 24 pixels. Les deux variantes partagent exactement le même masque alpha. Le header utilise le noir ; le footer sombre utilise le blanc. Le conteneur `.brand-image` a un fond transparent. Les chemins et dimensions sont centralisés dans `site.images`.

La police utilise Google Fonts, avec polices de repli locales. La navigation, le menu et les fiches fonctionnent au clavier ; les fiches utilisent un dialogue natif (Échap, fermeture et restitution du focus). Les animations respectent la réduction de mouvement.


## Identité de campagne

Palette centralisée dans les variables de `src/styles.css` : noir, anthracite, gris neutres, blanc et rouge profond `#8F0302`. Le rouge clair est réservé aux petits accents lisibles sur fond sombre. Les portraits affichés dans `public/team/` font 800 × 1000 px. Les affiches originales sont conservées sans modification dans `assets/team-sources/` (hors dossier public), et les cadrages reproductibles sont documentés dans `crops.json`. Aucun texte imprimé ni visuel de lancement n’est utilisé dans l’interface.


## Theatre troupe

Les logos originaux sont conservés sans modification dans `public/logos/troupe/`. Les fichiers `-v2` sont les nouvelles références officielles utilisées. `projects[0]` dans `src/data.ts` centralise les textes, le lien Instagram et les cadrages (`viewBox`) : logo vertical sur la carte, horizontal dans la fiche. Le composant affiche les JPEG originaux dans un viewport SVG, en retirant uniquement les marges noires, sans filtre ni modification des couleurs.


## Maqam 2.0

L’emblème officiel, conservé sans modification dans `public/logos/maqam/official-emblem.jpeg`, est affiché intégralement sur fond noir. Le cadrage et les textes sont dans `projects[1]` de `src/data.ts`. Les blocs de présentation (`paragraph`, `quote`, `signature`) sont rendus en HTML, avec une fiche défilante et un bouton de fermeture fixe en haut.

### Biographies, coordonnées et sections à compléter

Les cinq biographies et les coordonnées générales sont centralisées dans `src/data.ts` (`members[].bio`, `site.contact`). Les boutons « Read bio » ouvrent des fenêtres accessibles, avec fermeture par Échap et retour du focus.

Les composants `ProjectLeads` et `ProjectHighlights` se trouvent dans `src/TeamDetails.tsx`. Leurs listes `projectLeads` et `projectHighlights`, dans `src/data.ts`, restent vides et leurs sections sont donc masquées.

- Pour chaque responsable : renseigner `memberId`, son rôle de projet confirmé (`role`) et son projet ou pôle (`responsibility`). Le portrait et le lien vers sa biographie proviennent de Team.
- Pour chaque réalisation achevée : renseigner `id`, `title`, une description factuelle, `image` et `imageAlt`. `year` et `url` sont facultatifs ; utiliser uniquement une date connue et une destination existante.
- Logo de troupe : `public/logos/troupe/official-stacked-v3.jpeg`, source officielle conservée sans modification, affichée entièrement sur fond noir dans la carte et la fiche. Le JPEG fourni ne comporte pas de transparence.
