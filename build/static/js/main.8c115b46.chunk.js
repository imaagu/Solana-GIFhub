(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{100:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":129,"1":11,"2":56,"3":95,"4":212,"5":242,"6":241,"7":15,"8":22,"9":151,"10":90,"11":107,"12":88,"13":232,"14":101,"15":243,"16":189,"17":61,"18":118,"19":75,"20":19,"21":233,"22":212,"23":125,"24":219,"25":97,"26":200,"27":190,"28":206,"29":80,"30":24,"31":96},"secretKey":{"0":239,"1":161,"2":16,"3":234,"4":90,"5":120,"6":175,"7":15,"8":106,"9":15,"10":40,"11":20,"12":150,"13":204,"14":31,"15":1,"16":171,"17":228,"18":255,"19":76,"20":15,"21":36,"22":138,"23":31,"24":187,"25":92,"26":138,"27":69,"28":31,"29":249,"30":135,"31":140,"32":129,"33":11,"34":56,"35":95,"36":212,"37":242,"38":241,"39":15,"40":22,"41":151,"42":90,"43":107,"44":88,"45":232,"46":101,"47":243,"48":189,"49":61,"50":118,"51":75,"52":19,"53":233,"54":212,"55":125,"56":219,"57":97,"58":200,"59":190,"60":206,"61":80,"62":24,"63":96}}}')},104:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"myepicproject","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"}]}}],"metadata":{"address":"FBmP35HNBK1Jt6SNihNZ5YB8ZSCQiZwZpTUJ3Kobb3aY"}}')},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t){},115:function(e,t){},144:function(e,t){},145:function(e,t){},168:function(e,t,n){},169:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var r=n(22),c=n.n(r),a=n(99),i=n.n(a),s=(n(110),n(111),n(1)),o=n.n(s),u=n(3),l=n(9),f=n(100),b=n(8),d=n(25),p=(n(168),n.p+"static/media/twitter-logo.4844b78f.svg"),m=(n(169),n(10)),j="_buildspace",h="imAagamJain",g=function(e){return"https://twitter.com/".concat(e)},x=function(){return Object(m.jsxs)("div",{className:"footer-container",children:[Object(m.jsxs)("div",{className:"footer-container__twitter_header",children:[Object(m.jsxs)("div",{className:"footer-container__twitter_header__container",children:[Object(m.jsx)("img",{alt:"Twitter Logo",className:"footer-container__twitter_header__container__twitter-logo",src:p}),Object(m.jsx)("a",{className:"footer-container__twitter_header__container__footer-text",href:g(j),target:"_blank",rel:"noreferrer",children:"built on @".concat(j)})]}),Object(m.jsxs)("div",{className:"footer-container__twitter_header__container",children:[Object(m.jsx)("img",{alt:"Twitter Logo",className:"footer-container__twitter_header__container__twitter-logo",src:p}),Object(m.jsx)("a",{className:"footer-container__twitter_header__container__footer-text",href:g(h),target:"_blank",rel:"noreferrer",children:"built by @".concat(h)})]})]}),Object(m.jsx)("div",{className:"footer-container__copyright",children:Object(m.jsxs)("span",{children:["Made by Aagam \xa9 ",(new Date).getFullYear()]})})]})},v=n(104),w=window.solana,O=d.d.SystemProgram,_=(d.d.Keypair,Object.values(f._keypair.secretKey)),y=new Uint8Array(_),k=d.d.Keypair.fromSecretKey(y),N=new b.PublicKey(v.metadata.address),S=Object(b.clusterApiUrl)("devnet"),K="finalized",A=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(l.a)(a,2),s=i[0],f=i[1],p=Object(r.useState)([]),j=Object(l.a)(p,2),h=j[0],g=j[1],_=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!w){e.next=10;break}if(!w.isPhantom){e.next=9;break}return e.next=5,w.connect({onlyIfTrusted:!0});case 5:t=e.sent,c(t.publicKey.toString()),e.next=10;break;case 9:alert("Solana object not found! Get a Phantom Wallet");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=5;break}return e.next=3,w.connect();case 3:t=e.sent,c(t.publicKey.toString());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==s.length){e.next=2;break}return e.abrupt("return");case 2:return f(""),console.log("Gif link:",s),e.prev=4,t=L(),n=new d.a(v,N,t),e.next=9,n.rpc.addGif(s,{accounts:{baseAccount:k.publicKey,user:t.wallet.publicKey}});case 9:return e.next=11,G();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("Error sending GIF:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=L(),n=new d.a(v,N,t),e.next=5,n.account.baseAccount.fetch(k.publicKey);case 5:r=e.sent,g(r.gifList),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),g(null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(e){var t=e.target.value;f(t)},L=function(){var e=new b.Connection(S,K);return new d.b(e,window.solana,K)},E=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=L(),n=new d.a(v,N,t),console.log("ping"),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:k.publicKey,user:t.wallet.publicKey,systemProgram:O.programId},signers:[k]});case 6:return console.log("Created a new BaseAccount w/ address:",k.publicKey.toString()),e.next=9,G();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(r.useEffect)((function(){n&&(console.log("Fetching GIF list..."),G())}),[n]),console.log(n),Object(m.jsxs)("div",{className:""===n||null===n?"authed-container":"container",children:[Object(m.jsxs)("div",{className:"header-container",children:[Object(m.jsx)("p",{className:"header",children:"\ud83d\uddbc GIFhub"}),Object(m.jsx)("p",{className:"sub-text",children:"View your GIF collection in the metaverse \u2728"}),""===n||null===n?Object(m.jsx)("button",{className:"cta-button connect-wallet-button",onClick:y,children:"Connect to Wallet"}):null===h?Object(m.jsx)("div",{className:"connected-container",children:Object(m.jsx)("button",{className:"cta-button submit-gif-button",onClick:E,children:"Do One-Time Initialization For GIF Program Account"})}):Object(m.jsxs)("div",{className:"connected-container",children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A()},children:[Object(m.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:s,onChange:I}),Object(m.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(m.jsx)("div",{className:"gif-grid",children:h.map((function(e,t){return Object(m.jsx)("div",{className:"gif-item",children:Object(m.jsx)("img",{src:e.gifLink})},t)}))})]})]}),Object(m.jsx)(x,{})]})},G=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(A,{})})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.8c115b46.chunk.js.map