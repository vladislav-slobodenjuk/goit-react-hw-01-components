(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(e,a,t){e.exports={description:"Profile_description__1CBuY",profile:"Profile_profile__3R_lD",avatar:"Profile_avatar__r9FZD",name:"Profile_name__1WMmJ",tag:"Profile_tag__2KFGr",location:"Profile_location__1nXqp",stats:"Profile_stats__3dhz8",item:"Profile_item__3Zaja"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={friendList:"FriendList_friendList__3OaoZ",item:"FriendList_item__1_W2C",online:"FriendList_online__1McaC",offline:"FriendList_offline__16aBc"}},,function(e,a,t){e.exports={statistics:"Statistics_statistics__111pS",statList:"Statistics_statList__oPp8P",statItem:"Statistics_statItem__2Gp2n"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__2v_7s"}},function(e,a,t){e.exports={wrapper:"App_wrapper__1yWfo"}},,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),s=t(8),i=t.n(s),r=t(3),l=t(9),d=t(10),o=t(11),p=t(2),b=t.n(p),m=t(0),u=function(e){var a=e.username,t=e.tag,c=e.avatar,n=e.location,s=e.stats,i=s.followers,r=s.views,l=s.likes;return Object(m.jsxs)("div",{className:b.a.profile,children:[Object(m.jsxs)("div",{className:b.a.description,children:[Object(m.jsx)("img",{src:c,alt:"User avatar",className:b.a.avatar}),Object(m.jsx)("p",{className:b.a.name,children:a}),Object(m.jsxs)("p",{className:b.a.tag,children:["@",t]}),Object(m.jsx)("p",{className:b.a.location,children:n})]}),Object(m.jsxs)("ul",{className:b.a.stats,children:[Object(m.jsxs)("li",{className:b.a.item,children:[Object(m.jsx)("span",{className:"label",children:"Followers"}),Object(m.jsx)("span",{className:"quantity",children:i})]}),Object(m.jsxs)("li",{className:b.a.item,children:[Object(m.jsx)("span",{className:"label",children:"Views"}),Object(m.jsx)("span",{className:"quantity",children:r})]}),Object(m.jsxs)("li",{className:b.a.item,children:[Object(m.jsx)("span",{className:"label",children:"Likes"}),Object(m.jsx)("span",{className:"quantity",children:l})]})]})]})},j=t(1),f=t.n(j),y=t(6),h=t.n(y),O=function(e){var a=e.title,t=e.stats;return Object(m.jsxs)("section",{className:h.a.statistics,children:[a&&Object(m.jsx)("h2",{className:"title",children:a}),Object(m.jsx)("ul",{className:h.a.statList,children:t.map((function(e){return Object(m.jsxs)("li",{className:h.a.statItem,children:[Object(m.jsx)("span",{className:"label",children:e.label}),Object(m.jsx)("span",{className:"percentage",children:e.percentage})]},e.id)}))})]})};O.prototypes={title:f.a.string,stats:f.a.array.isRequired};var x=t(4),_=t.n(x),g=function(e){return Object(m.jsx)("ul",{className:_.a.friendList,children:e.friends.map((function(e){return Object(m.jsxs)("li",{className:_.a.item,children:[Object(m.jsx)("span",{className:e.isOnline?_.a.online:_.a.offline}),Object(m.jsx)("img",{className:"avatar",src:e.avatar,alt:"User avatar",width:"48"}),Object(m.jsx)("p",{className:"name",children:e.name})]},e.id)}))})};g.prototypes={avatar:f.a.string,name:f.a.string,isOnline:f.a.bool,id:f.a.number};var v=t(12),N=t.n(v),w=function(e){return Object(m.jsxs)("table",{className:N.a.transactionHistory,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Type"}),Object(m.jsx)("th",{children:"Amount"}),Object(m.jsx)("th",{children:"Currency"})]})}),Object(m.jsx)("tbody",{children:e.items.map((function(e){var a=e.id,t=e.type,c=e.amount,n=e.currency;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t}),Object(m.jsx)("td",{children:c}),Object(m.jsx)("td",{children:n})]},a)}))})]})};w.prototypes={id:f.a.string,type:f.a.string,amount:f.a.number,currency:f.a.string};var L=t(13),P=t.n(L),U=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("section",{className:P.a.wrapper,children:[Object(m.jsx)(u,{username:r.username,tag:r.tag,location:r.location,avatar:r.avatar,stats:r.stats}),Object(m.jsx)(O,{title:"Upload stats",stats:l}),Object(m.jsx)(g,{friends:d}),Object(m.jsx)(w,{items:o})]})})};t(21);i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e5d20615.chunk.js.map