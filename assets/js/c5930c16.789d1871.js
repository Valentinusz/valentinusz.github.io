"use strict";(self.webpackChunkvalentinusz_github_io=self.webpackChunkvalentinusz_github_io||[]).push([[2381],{9485:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var d=r(5893),a=r(1151);const l={},s="Storage",i={id:"webprog/storage/storage",title:"Storage",description:"IStorage",source:"@site/notes/webprog/01_storage/02_storage.mdx",sourceDirName:"webprog/01_storage",slug:"/webprog/storage/storage",permalink:"/notes/webprog/storage/storage",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Valentinusz",lastUpdatedAt:1699997027,formattedLastUpdatedAt:"2023. nov. 14.",sidebarPosition:2,frontMatter:{},sidebar:"notesSidebar",previous:{title:"IO",permalink:"/notes/webprog/storage/io"}},t={},c=[{value:"<code>IStorage</code>",id:"istorage",level:2},{value:"<code>$condition</code>, <code>$updater</code>",id:"condition-updater",level:3},{value:"<code>$params</code>",id:"params",level:3},{value:"<code>Storage</code>",id:"storage-1",level:2},{value:"<code>add(T $record): string</code>",id:"addt-record-string",level:3},{value:"Param\xe9terek",id:"param\xe9terek",level:4},{value:"Visszat\xe9r\xe9s",id:"visszat\xe9r\xe9s",level:4},{value:"<code>findById(string $id)</code>",id:"findbyidstring-id",level:3},{value:"Param\xe9terek",id:"param\xe9terek-1",level:4},{value:"Visszat\xe9r\xe9s",id:"visszat\xe9r\xe9s-1",level:4},{value:"<code>findAll(array $params = []): array</code>",id:"findallarray-params---array",level:3},{value:"Param\xe9terek",id:"param\xe9terek-2",level:4},{value:"Visszat\xe9r\xe9s",id:"visszat\xe9r\xe9s-2",level:4},{value:"<code>findMany(callable $condition): array</code>",id:"findmanycallable-condition-array",level:3},{value:"Param\xe9terek",id:"param\xe9terek-3",level:4},{value:"Visszat\xe9r\xe9s",id:"visszat\xe9r\xe9s-3",level:4},{value:"<code>findOne(array $params = []): mixed</code>",id:"findonearray-params---mixed",level:3},{value:"Param\xe9terek",id:"param\xe9terek-4",level:4},{value:"Visszat\xe9r\xe9s",id:"visszat\xe9r\xe9s-4",level:4},{value:"<code>update(string $id, mixed $record)</code>",id:"updatestring-id-mixed-record",level:3},{value:"Param\xe9terek",id:"param\xe9terek-5",level:4},{value:"<code>updateMany(callable $condition, callable $updater)</code>",id:"updatemanycallable-condition-callable-updater",level:3},{value:"Param\xe9terek",id:"param\xe9terek-6",level:4},{value:"Visszat\xe9r\xe9s",id:"visszat\xe9r\xe9s-5",level:4},{value:"<code>delete(string $id)</code>",id:"deletestring-id",level:3},{value:"Param\xe9terek",id:"param\xe9terek-7",level:4},{value:"<code>deleteMany(callable $condition)</code>",id:"deletemanycallable-condition",level:3},{value:"Param\xe9terek",id:"param\xe9terek-8",level:4}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"storage",children:"Storage"}),"\n",(0,d.jsx)(n.h2,{id:"istorage",children:(0,d.jsx)(n.code,{children:"IStorage"})}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.code,{children:"IStorage"})," interf\xe9sz alapvet\u0151 lek\xe9rdez\u0151 \xe9s m\xf3dos\xedt\xf3 m\u0171veleteket defini\xe1l."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"interface IStorage {\n    function add(mixed $record): string;\n    function findById(string $id);\n    function findAll(array $params = []);\n    function findMany(callable $condition);\n    function findOne(array $params = []);\n    function update(string $id, mixed $record);\n    function updateMany(callable $condition, callable $updater);\n    function delete(string $id);\n    function deleteMany(callable $condition);\n}\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"M\u0171velet"}),(0,d.jsx)(n.th,{children:"Le\xedr\xe1s"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"add($record)"})}),(0,d.jsxs)(n.td,{children:["Besz\xfarja a ",(0,d.jsx)(n.code,{children:"$record"})," rekordot t\xe1rol\xf3ba. Visszaadja az rekordhoz rendelt kulcsot."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"findById(string $id)"})}),(0,d.jsxs)(n.td,{children:["Visszaadja az ",(0,d.jsx)(n.code,{children:"$id"})," kulcs\xfa rekordot."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"findAll(array $params = [])"})}),(0,d.jsx)(n.td,{children:"Visszaadja az \xf6sszes elemet."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"findMany(callable $condition)"})}),(0,d.jsxs)(n.td,{children:["Visszaadja az \xf6sszes ",(0,d.jsx)(n.code,{children:"$condition"})," felt\xe9telnek megfelel\u0151 elemet."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"findOne(array $params = [])"})}),(0,d.jsx)(n.td,{children:"Visszaad egy elemet."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"update(string $id, mixed $record)"})}),(0,d.jsxs)(n.td,{children:["Fel\xfcl\xedrja az ",(0,d.jsx)(n.code,{children:"$id"})," kulcs\xfa rekordot a ",(0,d.jsx)(n.code,{children:"$record"})," rekorddal."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"updateMany(callable $condition, callable $updater)"})}),(0,d.jsxs)(n.td,{children:["Friss\xedti a ",(0,d.jsx)(n.code,{children:"$condition"})," felt\xe9telnek megfelel\u0151 rekordokat, az ",(0,d.jsx)(n.code,{children:"$updater"})," f\xfcggv\xe9ny alapj\xe1n."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"delete(string $id)"})}),(0,d.jsxs)(n.td,{children:["T\xf6rli az ",(0,d.jsx)(n.code,{children:"$id"})," kulcs\xfa rekordot."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"deleteMany(callable $condition)"})}),(0,d.jsxs)(n.td,{children:["T\xf6rli a ",(0,d.jsx)(n.code,{children:"$condition"})," felt\xe9telnek megfelel\u0151 rekordokat."]})]})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"condition-updater",children:[(0,d.jsx)(n.code,{children:"$condition"}),", ",(0,d.jsx)(n.code,{children:"$updater"})]}),"\n",(0,d.jsx)(n.p,{children:"Ezeket a f\xfcggv\xe9nyeket mindig \xfagy kell defini\xe1lni, hogy egyetlen param\xe9ter\xfck rekord legyen."}),"\n",(0,d.jsx)(n.h3,{id:"params",children:(0,d.jsx)(n.code,{children:"$params"})}),"\n",(0,d.jsxs)(n.p,{children:["N\xe9h\xe1ny m\u0171velet rendelkezik egy ",(0,d.jsx)(n.code,{children:"array $params"})," param\xe9terrel. Ez egy olyan asszociat\xedv t\xf6mb\xf6t v\xe1r ami adattag-\xe9rt\xe9k\np\xe1rokat tartalmaz."]}),"\n",(0,d.jsx)(n.h2,{id:"storage-1",children:(0,d.jsx)(n.code,{children:"Storage"})}),"\n",(0,d.jsxs)(n.p,{children:["Az ",(0,d.jsx)(n.code,{children:"IStorage"})," oszt\xe1ly megval\xf3s\xedt\xe1sa."]}),"\n",(0,d.jsxs)(n.admonition,{type:"info",children:[(0,d.jsx)(n.p,{children:"A Storage elemeinek nem kell azonosnak lennie, ez azonban er\u0151sen aj\xe1nlott, mert ennek feltev\xe9se n\xe9lk\xfcl nem tudn\xe1nk a\nn\xe9vtelen f\xfcggv\xe9nyeket haszn\xe1l\xf3 met\xf3dusokat norm\xe1lisan haszn\xe1lni."}),(0,d.jsxs)(n.p,{children:["Innent\u0151l ",(0,d.jsx)(n.code,{children:"T"})," alatt az adott ",(0,d.jsx)(n.code,{children:"Storage"})," p\xe9ld\xe1ny elemeinek t\xedpus\xe1t \xe9rtj\xfck."]})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"/**\n * Class representing a queryable collection of elements.\n * @template T\n * @implements IStorage<T>\n */\nclass Storage implements IStorage {\n    /** @var T[] array of records */\n    protected array $contents;\n\n    /** @var IFileIO FileIO implementation to use for reading and writing records */\n    protected IFileIO $io;\n\n    public function __construct(IFileIO $io, $assoc = true) {\n        $this->io = $io;\n        $this->contents = (array)$this->io->load($assoc);\n    }\n\n    public function __destruct() {\n        $this->io->save($this->contents);\n    }\n    ...\n}\n"})}),"\n",(0,d.jsxs)(n.admonition,{type:"note",children:[(0,d.jsx)(n.p,{children:"A PHP nem t\xe1mogatja a generikus programoz\xe1st ez\xe9rt a legjobb amit tudunk, hogy a k\xfcl\xf6nb\xf6z\u0151 statikus elemz\u0151 programoknak\n(amik p\xe9ld\xe1ul a fejleszt\u0151 k\xf6rnyezet\xfcnkben is fut) dokument\xe1ci\xf3s kommenteket \xedrunk."}),(0,d.jsx)(n.p,{children:"Ezek megismer\xe9se nem c\xe9lja a t\xe1rgynak, mindenesetre szerintem hasznos tudni."})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"addt-record-string",children:(0,d.jsx)(n.code,{children:"add(T $record): string"})}),"\n",(0,d.jsxs)(n.p,{children:["Besz\xfarja a ",(0,d.jsx)(n.code,{children:"Storage"}),"-be a megadott rekordot."]}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"T $record"}),": a besz\xfarand\xf3 rekord"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"visszat\xe9r\xe9s",children:"Visszat\xe9r\xe9s"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"string"}),": a besz\xfart rekordhoz rendelt azonos\xedt\xf3"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"findbyidstring-id",children:(0,d.jsx)(n.code,{children:"findById(string $id)"})}),"\n",(0,d.jsx)(n.p,{children:"Visszaadja a megadott kulcs\xfa rekordot."}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek-1",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"string $id"}),": a keresend\u0151 rekord kulcsa."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"visszat\xe9r\xe9s-1",children:"Visszat\xe9r\xe9s"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"T"}),": a keresett rekord"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"null"}),": ha nem l\xe9tezik rekord a megadott kulccsal"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"findallarray-params---array",children:(0,d.jsx)(n.code,{children:"findAll(array $params = []): array"})}),"\n",(0,d.jsx)(n.p,{children:"Visszaadja az \xf6sszes rekordot."}),"\n",(0,d.jsxs)(n.p,{children:["Ha a ",(0,d.jsx)(n.code,{children:"$params"})," asszociat\xedv t\xf6mb nem \xfcres csak azokat az ",(0,d.jsx)(n.code,{children:"$r"})," rekordokat adja vissza, ahol minden ",(0,d.jsx)(n.code,{children:"$params"}),"-beli\n",(0,d.jsx)(n.code,{children:"$key => $value"})," kulcs \xe9rt\xe9k p\xe1r eset\xe9n ",(0,d.jsx)(n.code,{children:"$r[$key] === value"}),"."]}),"\n",(0,d.jsx)(n.admonition,{type:"danger",children:(0,d.jsxs)(n.p,{children:["Ha a ",(0,d.jsx)(n.code,{children:"Storage"})," nem ",(0,d.jsx)(n.strong,{children:"csak"})," azonos fel\xe9p\xedt\xe9s\u0171 asszociat\xedv t\xf6mb\xf6ket tartalmaz \xe9s ",(0,d.jsx)(n.code,{children:"$params"})," nem \xfcres, szinte biztosan\nkiv\xe9telt dob a met\xf3dus."]})}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek-2",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"array $params = []"}),": az adattagok \xe9rt\xe9k\xe9re vonatkoz\xf3 felt\xe9telek asszociat\xedv t\xf6mbje, ahol a kulcs az adattag neve\n\xe9rt\xe9ke pedig az adott adattag elv\xe1rt \xe9rt\xe9ke."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"visszat\xe9r\xe9s-2",children:"Visszat\xe9r\xe9s"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"T[]"}),": az \xf6sszes rekord (vagy ",(0,d.jsx)(n.code,{children:"$params"})," eset\xe9n a felt\xe9telnek megfelel\u0151 rekordok)"]}),"\n"]}),"\n",(0,d.jsxs)(n.admonition,{type:"example",children:[(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",metastring:"title='data.json'",children:'{\n    "1": {"a": 5, "b": "A"},\n    "2": {"a": 4, "b": "A"},\n    "3": {"a": 4, "b": "B"},\n    "4": {"a": 3, "b": "B"}\n}\n'})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:"$storage = new Storage(new JsonIO('data.json'), true);\n\n$storage->findAll();\n"})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"array (size=4) ...\n"})}),(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"$params"}),":"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-php",children:'$storage->findAll(["b" => "B"]);\n'})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"array (size=2)\n  3 =>\n    array (size=2)\n      'a' => int 4\n      'b' => string 'B' (length=1)\n  4 =>\n    array (size=2)\n      'a' => int 3\n      'b' => string 'B' (length=1)\n"})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"findmanycallable-condition-array",children:(0,d.jsx)(n.code,{children:"findMany(callable $condition): array"})}),"\n",(0,d.jsx)(n.p,{children:"Visszaadja az \xf6sszes felt\xe9telnek megfelel\u0151 elemet."}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek-3",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"callable(T): bool $condition"}),": egy ",(0,d.jsx)(n.code,{children:"T"}),"-b\u0151l ",(0,d.jsx)(n.code,{children:"bool"}),"-ba k\xe9pez\u0151 f\xfcggv\xe9ny"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"visszat\xe9r\xe9s-3",children:"Visszat\xe9r\xe9s"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"T[]"}),": a felt\xe9telnek megfelel\u0151 rekordok"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"findonearray-params---mixed",children:(0,d.jsx)(n.code,{children:"findOne(array $params = []): mixed"})}),"\n",(0,d.jsx)(n.p,{children:"Visszaad egy rekordot."}),"\n",(0,d.jsx)(n.admonition,{type:"danger",children:(0,d.jsx)(n.p,{children:"Nem random!"})}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek-4",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"array $params = []"}),": az adattagok \xe9rt\xe9k\xe9re vonatkoz\xf3 felt\xe9telek asszociat\xedv t\xf6mbje, ahol a kulcs az adattag neve\n\xe9rt\xe9ke pedig az adott adattag elv\xe1rt \xe9rt\xe9ke."]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"visszat\xe9r\xe9s-4",children:"Visszat\xe9r\xe9s"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"T"}),": egy elem"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"null"}),": ha nincs egy (a felt\xe9telnek megfelel\u0151) rekord sem"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"updatestring-id-mixed-record",children:(0,d.jsx)(n.code,{children:"update(string $id, mixed $record)"})}),"\n",(0,d.jsx)(n.p,{children:"Fel\xfcl\xedrja a megadott kulcs\xfa rekordot a megadott rekorddal."}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek-5",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"string $id"}),": a lecser\xe9lend\u0151 rekord kulcsa"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"T $record"}),"\u02d9: az \xfaj rekord"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"updatemanycallable-condition-callable-updater",children:(0,d.jsx)(n.code,{children:"updateMany(callable $condition, callable $updater)"})}),"\n",(0,d.jsx)(n.p,{children:"Friss\xedti a megadott felt\xe9telnek megfelel\u0151 rekordokat, a megadott f\xfcggv\xe9ny alapj\xe1n."}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek-6",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"callable(T): bool $condition"}),": egy ",(0,d.jsx)(n.code,{children:"T"}),"-b\u0151l ",(0,d.jsx)(n.code,{children:"bool"}),"-ba k\xe9pez\u0151 f\xfcggv\xe9ny"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"callable(T): T $updater"}),": egy ",(0,d.jsx)(n.code,{children:"T"}),"-b\u0151l ",(0,d.jsx)(n.code,{children:"T"}),"-be k\xe9pez\u0151 f\xfcggv\xe9ny"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"visszat\xe9r\xe9s-5",children:"Visszat\xe9r\xe9s"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"T"}),": egy elem"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"null"}),": ha nincs egy (a felt\xe9telnek megfelel\u0151) rekord sem"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"deletestring-id",children:(0,d.jsx)(n.code,{children:"delete(string $id)"})}),"\n",(0,d.jsx)(n.p,{children:"T\xf6rli a megadott kulcs\xfa rekordot."}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek-7",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"string $id"}),": a t\xf6rlend\u0151 rekord kulcsa"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"deletemanycallable-condition",children:(0,d.jsx)(n.code,{children:"deleteMany(callable $condition)"})}),"\n",(0,d.jsx)(n.p,{children:"T\xf6rli az \xf6sszes predik\xe1tumnak megfelel\u0151 kulcsot."}),"\n",(0,d.jsx)(n.h4,{id:"param\xe9terek-8",children:"Param\xe9terek"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"callable(T): bool $condition"}),": egy ",(0,d.jsx)(n.code,{children:"T"}),"-b\u0151l ",(0,d.jsx)(n.code,{children:"bool"}),"-ba k\xe9pez\u0151 f\xfcggv\xe9ny"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var d=r(7294);const a={},l=d.createContext(a);function s(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);