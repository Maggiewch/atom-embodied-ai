import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

const ROOT = '/Users/wchfting/Desktop/atom';
const OUTS = [path.join(ROOT, '_site', 'index.html'), path.join(ROOT, 'docs', 'index.html')];
marked.setOptions({ gfm: true, breaks: false });

const GROUPS = [
  ['总览', '.'],
  ['01 · 行业地图', '01-landscape'],
  ['02 · 公司档案', '02-companies'],
  ['03 · 真实落地', '03-cases'],
  ['04 · 商业模式', '04-business-models'],
  ['05 · 技术栈', '05-tech-stack'],
  ['06 · 人才', '06-talent'],
  ['07 · 社区', '07-community'],
  ['08 · 可持续性', '08-sustainability'],
  ['09 · 上游产业链', '09-supply-chain'],
  ['10 · 资本', '10-capital'],
  ['维护机制', '_maintenance'],
];
const EXCLUDE = new Set(['_TEMPLATE.md']);

function listMd(dir){
  const abs = path.join(ROOT, dir);
  if(!fs.existsSync(abs)) return [];
  return fs.readdirSync(abs)
    .filter(f => f.endsWith('.md') && !EXCLUDE.has(f))
    .map(f => dir === '.' ? f : `${dir}/${f}`);
}
function firstH1(md, fb){
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].replace(/[*`>#]/g,'').trim() : fb;
}
function idFor(rel){ return rel.replace(/\.md$/,'').replace(/[^\w一-龥.-]+/g,'-'); }

const docs = [];
for(const [label, dir] of GROUPS){
  let files = listMd(dir);
  if(dir === '.'){
    files = files.filter(f => !f.includes('/'));
    const order = ['综述-十大判断.md','README.md'];
    files.sort((a,b)=>(order.indexOf(a)<0?99:order.indexOf(a))-(order.indexOf(b)<0?99:order.indexOf(b)));
  } else {
    files.sort((a,b)=>{
      const an=path.basename(a), bn=path.basename(b);
      if(an==='README.md') return -1; if(bn==='README.md') return 1;
      return an.localeCompare(bn,'zh');
    });
  }
  for(const rel of files){
    const md = fs.readFileSync(path.join(ROOT, rel),'utf8');
    docs.push({ rel, id: idFor(rel), title: firstH1(md, path.basename(rel,'.md')), group: label, md });
  }
}
const relToId = new Map(docs.map(d=>[d.rel, d.id]));

function render(d){
  let html = marked.parse(d.md);
  html = html.replace(/href="([^"#]+\.md)(#[^"]*)?"/g, (m,p)=>{
    const dir = path.dirname(d.rel)==='.' ? '' : path.dirname(d.rel);
    const target = path.posix.normalize(path.posix.join(dir, p));
    return relToId.has(target) ? `href="#${relToId.get(target)}" class="xlink"` : m;
  });
  html = html.replace(/<a href="(https?:[^"]+)"/g, '<a target="_blank" rel="noopener" href="$1"');
  html = html.replace(/<table>/g,'<div class="tw"><table>').replace(/<\/table>/g,'</table></div>');
  return html;
}

let nav = '';
let lastGroup = null;
for(const d of docs){
  if(d.group !== lastGroup){
    if(lastGroup !== null) nav += '</div>';
    nav += `<div class="group"><div class="glabel">${d.group}</div>`;
    lastGroup = d.group;
  }
  nav += `<a data-target="${d.id}" href="#${d.id}">${d.title}</a>`;
}
nav += '</div>';

const sections = docs.map(d => `<section class="doc" id="${d.id}" hidden>${render(d)}</section>`).join('\n');
const buildDate = new Date().toISOString().slice(0,10);

const page = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Atom · 具身智能知识库</title>
<style>
  :root{
    --bg:#FAF8F4; --surface:#ffffff; --side:#F3EFE7;
    --text:#1D1D1F; --muted:#6E6E73; --faint:#9b948a;
    --accent:#7C6853; --accent-soft:#EEE7DC; --line:#E7E1D6; --code:#F4EFE6;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:var(--bg);color:var(--text);
    font-family:-apple-system,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;
    line-height:1.8;display:flex;min-height:100vh}
  h1,h2,h3{font-family:"Songti SC","Noto Serif SC",Georgia,serif;line-height:1.3;letter-spacing:-.01em}

  /* sidebar */
  .side{width:300px;flex-shrink:0;background:var(--side);border-right:1px solid var(--line);
    height:100vh;position:sticky;top:0;overflow-y:auto;padding:26px 0 40px}
  .brand{padding:0 24px 18px}
  .brand .logo{font-family:"Songti SC",serif;font-size:30px;font-weight:700;letter-spacing:-.02em}
  .brand .sub{font-size:13px;color:var(--muted);margin-top:2px}
  .brand .meta{font-size:11px;color:var(--faint);margin-top:8px;font-family:ui-monospace,Menlo,monospace}
  .search{margin:6px 18px 14px}
  .search input{width:100%;padding:9px 12px;border:1px solid var(--line);border-radius:9px;
    background:var(--surface);font-size:13px;color:var(--text);outline:none}
  .search input:focus{border-color:var(--accent)}
  .nav .group{margin-bottom:6px}
  .nav .glabel{font-size:11px;letter-spacing:.12em;color:var(--faint);text-transform:uppercase;
    padding:12px 24px 5px;font-weight:600}
  .nav a{display:block;padding:6px 24px 6px 22px;color:var(--muted);text-decoration:none;
    font-size:13.5px;border-left:2px solid transparent;transition:.12s}
  .nav a:hover{color:var(--text);background:rgba(124,104,83,.06)}
  .nav a.active{color:var(--accent);border-left-color:var(--accent);background:rgba(124,104,83,.09);font-weight:500}

  /* content */
  .content{flex:1;min-width:0;display:flex;justify-content:center;padding:48px 56px 120px}
  .doc{max-width:840px;width:100%;animation:fade .25s ease}
  @keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
  .doc h1{font-size:40px;margin:0 0 22px;font-weight:700}
  .doc h2{font-size:26px;margin:44px 0 16px;padding-bottom:8px;border-bottom:2px solid var(--accent-soft)}
  .doc h3{font-size:19px;margin:30px 0 10px;color:#34302a}
  .doc p{margin:0 0 16px;color:#2b2926}
  .doc ul,.doc ol{margin:0 0 16px;padding-left:24px}
  .doc li{margin:5px 0}
  .doc a{color:var(--accent);text-decoration:none;border-bottom:1px solid var(--accent-soft)}
  .doc a:hover{border-bottom-color:var(--accent)}
  .doc strong{font-weight:700;color:var(--text)}
  .doc blockquote{margin:0 0 18px;padding:10px 0 10px 20px;border-left:3px solid var(--accent);
    color:#5a544c;background:rgba(124,104,83,.04)}
  .doc blockquote p{margin:0;color:#5a544c}
  .doc hr{border:none;border-top:1px solid var(--line);margin:32px 0}
  .doc code{font-family:ui-monospace,Menlo,monospace;font-size:.86em;background:var(--code);
    padding:2px 6px;border-radius:5px;color:#6a4f3a}
  .doc pre{background:var(--code);padding:18px 20px;border-radius:12px;overflow-x:auto;
    margin:0 0 18px;border:1px solid var(--line);line-height:1.55}
  .doc pre code{background:none;padding:0;font-size:13px;color:#3a352e}
  .tw{overflow-x:auto;margin:0 0 18px;border:1px solid var(--line);border-radius:12px}
  .doc table{border-collapse:collapse;width:100%;font-size:13.5px}
  .doc th,.doc td{padding:9px 13px;text-align:left;border-bottom:1px solid var(--line);vertical-align:top}
  .doc th{background:var(--accent-soft);font-weight:600;white-space:nowrap}
  .doc tr:last-child td{border-bottom:none}
  .doc td strong{color:var(--accent)}

  /* mobile */
  .topbar{display:none;position:sticky;top:0;z-index:20;background:var(--side);
    border-bottom:1px solid var(--line);padding:12px 16px;align-items:center;gap:12px}
  .topbar .logo{font-family:"Songti SC",serif;font-weight:700;font-size:18px}
  #burger{background:none;border:1px solid var(--line);border-radius:8px;padding:6px 11px;
    font-size:17px;cursor:pointer;color:var(--text)}
  .scrim{display:none}
  @media(max-width:860px){
    body{flex-direction:column}
    .topbar{display:flex}
    .side{position:fixed;left:0;top:0;z-index:30;transform:translateX(-100%);transition:.22s;
      box-shadow:0 0 40px rgba(0,0,0,.12)}
    body.nav-open .side{transform:none}
    body.nav-open .scrim{display:block;position:fixed;inset:0;z-index:25;background:rgba(0,0,0,.3)}
    .content{padding:28px 20px 90px}
    .doc h1{font-size:30px}
    .doc h2{font-size:22px}
  }
</style>
</head>
<body>
  <div class="topbar">
    <button id="burger" aria-label="菜单">☰</button>
    <span class="logo">Atom</span>
    <span style="font-size:12px;color:var(--muted)">具身智能知识库</span>
  </div>
  <aside class="side">
    <div class="brand">
      <div class="logo">Atom</div>
      <div class="sub">具身智能行业知识库 · 拨开迷雾</div>
      <div class="meta">${docs.length} 篇 · 构建于 ${buildDate}</div>
    </div>
    <div class="search"><input id="search" type="search" placeholder="搜索章节…"></div>
    <nav class="nav">${nav}</nav>
  </aside>
  <div class="scrim" onclick="document.body.classList.remove('nav-open')"></div>
  <main class="content">${sections}</main>
<script>
(function(){
  var docs=[].slice.call(document.querySelectorAll('.doc'));
  var links=[].slice.call(document.querySelectorAll('.nav a[data-target]'));
  function show(id){
    var ok=false;
    docs.forEach(function(d){var on=d.id===id;d.hidden=!on;if(on)ok=true;});
    links.forEach(function(a){a.classList.toggle('active',a.getAttribute('data-target')===id);});
    if(ok){window.scrollTo(0,0);}
    document.body.classList.remove('nav-open');
  }
  function fromHash(){
    var h=decodeURIComponent((location.hash||'').replace(/^#/,''));
    if(h&&document.getElementById(h)){show(h);} else {show(docs[0].id);}
  }
  links.forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();location.hash=a.getAttribute('data-target');});});
  window.addEventListener('hashchange',fromHash);
  var s=document.getElementById('search');
  if(s){s.addEventListener('input',function(){
    var q=s.value.trim().toLowerCase();
    links.forEach(function(a){a.style.display=a.textContent.toLowerCase().indexOf(q)>=0?'':'none';});
    [].slice.call(document.querySelectorAll('.nav .group')).forEach(function(g){
      var any=[].slice.call(g.querySelectorAll('a')).some(function(a){return a.style.display!=='none';});
      g.style.display=any?'':'none';
    });
  });}
  var b=document.getElementById('burger');
  if(b){b.addEventListener('click',function(){document.body.classList.toggle('nav-open');});}
  fromHash();
})();
</script>
</body>
</html>`;

for(const out of OUTS){
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page, 'utf8');
}
fs.writeFileSync(path.join(ROOT, 'docs', '.nojekyll'), '', 'utf8');
console.log('Built:', OUTS.join(' + '), '|', docs.length, 'docs |', (page.length/1024).toFixed(0)+'KB');
