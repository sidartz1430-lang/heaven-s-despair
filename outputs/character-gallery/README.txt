DEFY THE HEAVENS — CHARACTER ARCHIVE

A private interactive gallery of the world's 239 NPCs and 30 premade characters.
Includes searchable lore, realm/faction filters, bookmarks, spoiler controls,
an interactive relationship graph, and two-character comparison.

Run locally with Node.js:
  node serve.mjs
Then open http://localhost:4173

Validate content:
  node --check dist/app.js
  node validate.mjs

Content source: the saved Defy the Heavens authored-world snapshot dated
2026-10-10. Portraits use the user's archived character artwork, exported as
optimized WebP assets. Unknown affiliations are left unrecorded.

Relationship graph edges are name mentions supported by authored lore excerpts.
They are not invented friendship, romance, or hostility scores. The graph also
supports separate shared-faction and shared-location views. Hidden motives and
hidden edges are displayed only after the visitor unseals spoilers. This is a
spoiler control, not an access boundary; the complete data is packaged with the
private website. Bookmark and comparison choices stay in the visitor's browser.

The site does not call the Voyage API or contain its credentials. It is a static
snapshot and does not automatically follow later edits in Voyage Studio.

Verified in the in-app browser: search, full character record, spoiler consent,
unsealed lore, comparison with shared faction/location and supporting excerpts,
graph mode/zoom, premade filtering, empty results, and 390px mobile layout.
