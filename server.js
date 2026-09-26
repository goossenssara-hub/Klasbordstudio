const http=require("http"),fs=require("fs"),path=require("path"),crypto=require("crypto");
const root=__dirname,rooms=new Map(),mime={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"};
const send=(res,status,data,type="application/json")=>{res.writeHead(status,{"Content-Type":type,"Cache-Control":"no-store"});res.end(type.includes("json")?JSON.stringify(data):data)};
const body=req=>new Promise(resolve=>{let d="";req.on("data",c=>d+=c);req.on("end",()=>{try{resolve(JSON.parse(d||"{}"))}catch{resolve({})}})});
const code=()=>Math.random().toString(36).slice(2,8).toUpperCase();
http.createServer(async(req,res)=>{
 let u=new URL(req.url,"http://localhost"),p=u.pathname;
 if(req.method==="POST"&&p==="/api/rooms"){let c;do c=code();while(rooms.has(c));rooms.set(c,{question:"",students:new Map(),answers:[]});return send(res,200,{code:c})}
 let m=p.match(/^\/api\/room\/([A-Z0-9]+)(?:\/(join|answer|question|student))?$/i);
 if(m){let c=m[1].toUpperCase(),action=m[2],room=rooms.get(c);if(!room)return send(res,404,{error:"room not found"});
  if(!action&&req.method==="GET")return send(res,200,{question:room.question,answers:room.answers});
  if(action==="join"&&req.method==="POST"){let b=await body(req),token=crypto.randomBytes(12).toString("hex");room.students.set(token,{name:String(b.name||"Leerling").slice(0,50)});return send(res,200,{token})}
  if(action==="question"&&req.method==="POST"){let b=await body(req);room.question=String(b.question||"").slice(0,500);room.answers=[];return send(res,200,{ok:true})}
  if(action==="answer"&&req.method==="POST"){let b=await body(req),s=room.students.get(b.token);if(!s)return send(res,403,{error:"invalid token"});room.answers.push({name:s.name,answer:String(b.answer||"").slice(0,2000),at:Date.now()});return send(res,200,{ok:true})}
  if(action==="student"&&req.method==="GET")return send(res,200,{question:room.question});
 }
 let file=p==="/"?"index.html":decodeURIComponent(p.slice(1));file=path.normalize(file).replace(/^(\.\.[/\\\\])+/, "");let fp=path.join(root,file);
 if(!fp.startsWith(root))return send(res,403,"Forbidden","text/plain");
 fs.readFile(fp,(e,d)=>e?send(res,404,"Not found","text/plain"):send(res,200,d,mime[path.extname(fp)]||"application/octet-stream"));
}).listen(3600,"0.0.0.0",()=>console.log("Klasbordstudio draait op http://localhost:3600 (en via je lokale IP op poort 3600)"));