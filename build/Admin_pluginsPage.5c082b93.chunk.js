"use strict";(self.webpackChunkmyapi=self.webpackChunkmyapi||[]).push([[3677],{14928:(A,f,t)=>{t.r(f),t.d(f,{default:()=>F});var e=t(67294),g=t(68547),E=t(15482),h=t(97132),P=t(87751),T=t(84686),d=t(78862),v=t(62031),c=t(49425),a=t(41798),M=t(23724),L=t(23998),b=(n,s,l)=>new Promise((y,r)=>{var p=o=>{try{i(l.next(o))}catch(u){r(u)}},m=o=>{try{i(l.throw(o))}catch(u){r(u)}},i=o=>o.done?y(o.value):Promise.resolve(o.value).then(p,m);i((l=l.apply(n,s)).next())});const C=()=>b(void 0,null,function*(){const{data:n}=yield L.be.get("/admin/plugins");return n}),I=n=>{const s=(0,g.useNotification)();return(0,M.useQuery)("list-enabled-plugins",()=>C(),{onSuccess(){n&&n()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},N=()=>{var n,s;const{formatMessage:l}=(0,h.useIntl)(),{notifyStatus:y}=(0,T.useNotifyAT)();(0,g.useFocusWhenNavigate)();const r=l({id:"global.plugins",defaultMessage:"Plugins"}),p=()=>{y(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:r}))},{status:m,data:i}=I(p);return m!=="success"&&m!=="error"?e.createElement(d.Layout,null,e.createElement(v.Main,{"aria-busy":!0},e.createElement(g.LoadingIndicatorPage,null))):e.createElement(d.Layout,null,e.createElement(v.Main,null,e.createElement(d.HeaderLayout,{title:r,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(d.ContentLayout,null,e.createElement(a.Table,{colCount:2,rowCount:(s=(n=i==null?void 0:i.plugins)==null?void 0:n.length)!=null?s:0+1},e.createElement(a.Thead,null,e.createElement(a.Tr,null,e.createElement(a.Th,null,e.createElement(c.Typography,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(a.Th,null,e.createElement(c.Typography,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),e.createElement(a.Tbody,null,i.plugins.map(({name:u,displayName:x,description:H})=>e.createElement(a.Tr,{key:u},e.createElement(a.Td,null,e.createElement(c.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${u}`,defaultMessage:x}))),e.createElement(a.Td,null,e.createElement(c.Typography,{textColor:"neutral800"},l({id:`global.plugins.${u}.description`,defaultMessage:H}))))))))))},F=()=>{const{formatMessage:n}=(0,h.useIntl)(),s=n({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(g.CheckPagePermissions,{permissions:P.Z.marketplace.main},e.createElement(E.Helmet,{title:s}),e.createElement(N,null))}}}]);
