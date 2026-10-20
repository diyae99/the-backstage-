# Official production photography

Add only approved photographs to the matching directory:
- cherophobia/: Thanato-Trilogy-s — Act I: Cherophobia
- viens-hier/: Thanato-Trilogy-s — Act II: Viens-hier!

Cherophobia contains all nine supplied photographs. Original uploads and their mapping are preserved in assets/gallery-sources/cherophobia/manifest.json. Web copies retain their aspect ratios, never upscale, and have a maximum edge of 2000 pixels. Viens-hier! contains all ten supplied photographs, with originals and mapping in assets/gallery-sources/viens-hier/manifest.json. Both galleries use distinct folders and independent photo lists.

For each supplied photograph, preserve its proportions, export an optimized web copy with a descriptive filename, then add {src, alt, width, height} to only that production's gallery array. Width and height must be the web file's actual dimensions. Keep unmodified sources outside public/. Never use posters as substitute gallery photographs.

Example entry shape (replace all values with the actual supplied asset):
{src:'/galleries/cherophobia/descriptive-name.webp',alt:'Accurate description of the supplied performance photograph',width:1600,height:1067}

The lightbox supports previous/next buttons, ArrowLeft/ArrowRight, Escape, horizontal touch swipes, focus trapping, and focus restoration. Single-image galleries disable previous/next controls.
