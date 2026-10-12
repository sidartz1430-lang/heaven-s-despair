import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const data=JSON.parse(fs.readFileSync(path.join(root,'dist/data.json'),'utf8'));
assert.equal(data.characters.length,269);
assert.equal(data.characters.filter(c=>c.kind==='npc').length,239);
assert.equal(data.characters.filter(c=>c.kind==='premade').length,30);
const ids=new Set(data.characters.map(c=>c.id));assert.equal(ids.size,269);
for(const c of data.characters){assert(c.name&&c.basicInfo);for(const asset of [c.image,c.thumbnail]){assert(asset.startsWith('assets/'));assert(!asset.includes('..'));assert(fs.statSync(path.join(root,'dist',asset)).size>1000)}}
for(const edge of data.edges){assert(ids.has(edge.source)&&ids.has(edge.target));assert(['known','hidden'].includes(edge.scope));assert(edge.text&&edge.text.length>5)}
for(const name of ['gong-suyin','wen-ruxue','yan-wuchen'])assert(ids.has(name));
assert(data.edges.some(e=>e.source==='gong-suyin'&&e.target==='wen-ruxue'&&e.scope==='known'));
for(const file of ['index.html','app.js','style.css','data.json']){const text=fs.readFileSync(path.join(root,'dist',file),'utf8');assert(!/sk-voyage-v1-|Bearer\s+[A-Za-z0-9_-]{20}/.test(text),'Credential pattern found in '+file)}
assert(fs.existsSync(path.join(root,'dist/assets/abyss.webp')));
console.log(`PASS: ${data.characters.length} characters, ${data.edges.length} sourced edges, 538 portraits/thumbnails, no credential patterns.`);
