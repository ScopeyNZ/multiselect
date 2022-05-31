var VueformMultiselect=function(e){"use strict";function l(e){return-1!==[null,void 0].indexOf(e)}function a(a,t,n){const{object:u,valueProp:o,mode:r}=e.toRefs(a),i=e.getCurrentInstance().proxy,s=n.iv,c=e=>u.value||l(e)?e:Array.isArray(e)?e.map((e=>e[o.value])):e[o.value],d=e=>l(e)?"single"===r.value?{}:[]:e;return{update:e=>{s.value=d(e);const l=c(e);t.emit("change",l,i),t.emit("input",l),t.emit("update:modelValue",l)}}}function t(l,a){const{value:t,modelValue:n,mode:u,valueProp:o}=e.toRefs(l),r=e.ref("single"!==u.value?[]:{}),i=void 0!==a.expose?n:t,s=e.computed((()=>"single"===u.value?r.value[o.value]:r.value.map((e=>e[o.value])))),c=e.computed((()=>"single"!==u.value?r.value.map((e=>e[o.value])).join(","):r.value[o.value]));return{iv:r,internalValue:r,ev:i,externalValue:i,textValue:c,plainValue:s}}function n(l,a,t){const{regex:n}=e.toRefs(l),u=e.getCurrentInstance().proxy,o=t.isOpen,r=t.open,i=e.ref(null),s=e.ref(null);return e.watch(i,(e=>{!o.value&&e&&r(),a.emit("search-change",e,u)})),{search:i,input:s,clearSearch:()=>{i.value=""},handleSearchInput:e=>{i.value=e.target.value},handleKeypress:e=>{if(n&&n.value){let l=n.value;"string"==typeof l&&(l=new RegExp(l)),e.key.match(l)||e.preventDefault()}},handlePaste:e=>{if(n&&n.value){let l=(e.clipboardData||window.clipboardData).getData("Text"),a=n.value;"string"==typeof a&&(a=new RegExp(a)),l.split("").every((e=>!!e.match(a)))||e.preventDefault()}a.emit("paste",e,u)}}}function u(l,a,t){const{groupSelect:n,mode:u,groups:o,disabledProp:r}=e.toRefs(l),i=e.ref(null),s=e=>{void 0===e||null!==e&&e[r.value]||o.value&&e&&e.group&&("single"===u.value||!n.value)||(i.value=e)};return{pointer:i,setPointer:s,clearPointer:()=>{s(null)}}}function o(e,l=!0){return l?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase().trim()}function r(a,t,n){const{options:u,mode:r,trackBy:i,limit:s,hideSelected:c,createTag:d,createOption:v,label:p,appendNewTag:m,appendNewOption:f,multipleLabel:g,object:h,loading:b,delay:y,resolveOnLoad:S,minChars:k,filterResults:L,clearOnSearch:O,clearOnSelect:C,valueProp:w,canDeselect:E,max:V,strict:B,closeOnSelect:T,groups:x,reverse:q,infinite:N,groupOptions:P,groupHideEmpty:_,groupSelect:I,onCreate:D,disabledProp:R,searchStart:M}=e.toRefs(a),z=e.getCurrentInstance().proxy,A=n.iv,j=n.ev,H=n.search,$=n.clearSearch,F=n.update,K=n.pointer,G=n.clearPointer,W=n.focus,U=n.deactivate,J=n.close,Q=e.ref([]),X=e.ref([]),Y=e.ref(!1),Z=e.ref(null),ee=e.ref(N.value&&-1===s.value?10:s.value),le=e.computed((()=>d.value||v.value||!1)),ae=e.computed((()=>void 0!==m.value?m.value:void 0===f.value||f.value)),te=e.computed((()=>{if(x.value){let e=X.value||[],l=[];return e.forEach((e=>{Ne(e[P.value]).forEach((a=>{l.push(Object.assign({},a,e[R.value]?{[R.value]:!0}:{}))}))})),l}{let e=Ne(X.value||[]);return Q.value.length&&(e=e.concat(Q.value)),e}})),ne=e.computed((()=>x.value?xe((X.value||[]).map((e=>{const l=Ne(e[P.value]);return{...e,group:!0,[P.value]:qe(l,!1).map((l=>Object.assign({},l,e[R.value]?{[R.value]:!0}:{}))),__VISIBLE__:qe(l).map((l=>Object.assign({},l,e[R.value]?{[R.value]:!0}:{})))}}))):[])),ue=e.computed((()=>{let e=te.value;return q.value&&(e=e.reverse()),de.value.length&&(e=de.value.concat(e)),qe(e)})),oe=e.computed((()=>{let e=ue.value;return ee.value>0&&(e=e.slice(0,ee.value)),e})),re=e.computed((()=>{switch(r.value){case"single":return!l(A.value[w.value]);case"multiple":case"tags":return!l(A.value)&&A.value.length>0}})),ie=e.computed((()=>void 0!==g&&void 0!==g.value?g.value(A.value,z):A.value&&A.value.length>1?`${A.value.length} options selected`:"1 option selected")),se=e.computed((()=>!te.value.length&&!Y.value&&!de.value.length)),ce=e.computed((()=>te.value.length>0&&0==oe.value.length&&(H.value&&x.value||!x.value))),de=e.computed((()=>!1!==le.value&&H.value?-1!==Be(H.value)?[]:[{[w.value]:H.value,[p.value]:H.value,[ve.value]:H.value,__CREATE__:!0}]:[])),ve=e.computed((()=>i.value||p.value)),pe=e.computed((()=>{switch(r.value){case"single":return null;case"multiple":case"tags":return[]}})),me=e.computed((()=>b.value||Y.value)),fe=e=>{switch("object"!=typeof e&&(e=Ve(e)),r.value){case"single":F(e);break;case"multiple":case"tags":F(A.value.concat(e))}t.emit("select",he(e),e,z)},ge=e=>{switch("object"!=typeof e&&(e=Ve(e)),r.value){case"single":ye();break;case"tags":case"multiple":F(Array.isArray(e)?A.value.filter((l=>-1===e.map((e=>e[w.value])).indexOf(l[w.value]))):A.value.filter((l=>l[w.value]!=e[w.value])))}t.emit("deselect",he(e),e,z)},he=e=>h.value?e:e[w.value],be=e=>{ge(e)},ye=()=>{t.emit("clear",z),F(pe.value)},Se=e=>{if(void 0!==e.group)return"single"!==r.value&&(Ee(e[P.value])&&e[P.value].length);switch(r.value){case"single":return!l(A.value)&&A.value[w.value]==e[w.value];case"tags":case"multiple":return!l(A.value)&&-1!==A.value.map((e=>e[w.value])).indexOf(e[w.value])}},ke=e=>!0===e[R.value],Le=()=>!(void 0===V||-1===V.value||!re.value&&V.value>0)&&A.value.length>=V.value,Oe=e=>{switch(e.__CREATE__&&delete(e={...e}).__CREATE__,r.value){case"single":if(e&&Se(e))return void(E.value&&ge(e));e&&Ce(e),C.value&&$(),T.value&&(G(),J()),e&&fe(e);break;case"multiple":if(e&&Se(e))return void ge(e);if(Le())return;e&&(Ce(e),fe(e)),C.value&&$(),c.value&&G(),T.value&&J();break;case"tags":if(e&&Se(e))return void ge(e);if(Le())return;e&&Ce(e),C.value&&$(),e&&fe(e),c.value&&G(),T.value&&J()}T.value||W()},Ce=e=>{void 0===Ve(e[w.value])&&le.value&&(t.emit("tag",e[w.value],z),t.emit("option",e[w.value],z),ae.value&&Te(e),$())},we=e=>void 0===e.find((e=>!Se(e)&&!e[R.value])),Ee=e=>void 0===e.find((e=>!Se(e))),Ve=e=>te.value[te.value.map((e=>String(e[w.value]))).indexOf(String(e))],Be=(e,l)=>te.value.map((e=>parseInt(e[ve.value])==e[ve.value]?parseInt(e[ve.value]):e[ve.value])).indexOf(parseInt(e)==e?parseInt(e):e),Te=e=>{Q.value.push(e)},xe=e=>_.value?e.filter((e=>H.value?e.__VISIBLE__.length:e[P.value].length)):e.filter((e=>!H.value||e.__VISIBLE__.length)),qe=(e,l=!0)=>{let a=e;return H.value&&L.value&&(a=a.filter((e=>M.value?o(e[ve.value],B.value).startsWith(o(H.value,B.value)):-1!==o(e[ve.value],B.value).indexOf(o(H.value,B.value))))),c.value&&l&&(a=a.filter((e=>!(e=>-1!==["tags","multiple"].indexOf(r.value)&&c.value&&Se(e))(e)))),a},Ne=e=>{let l=e;var a;return a=l,"[object Object]"===Object.prototype.toString.call(a)&&(l=Object.keys(l).map((e=>{let a=l[e];return{[w.value]:e,[ve.value]:a,[p.value]:a}}))),l=l.map((e=>"object"==typeof e?e:{[w.value]:e,[ve.value]:e,[p.value]:e})),l},Pe=()=>{l(j.value)||(A.value=De(j.value))},_e=e=>(Y.value=!0,new Promise(((l,a)=>{u.value(H.value,z).then((l=>{X.value=l||[],"function"==typeof e&&e(l),Y.value=!1})).catch((e=>{console.error(e),X.value=[],Y.value=!1})).finally((()=>{l()}))}))),Ie=()=>{if(re.value)if("single"===r.value){let e=Ve(A.value[w.value]);if(void 0!==e){let l=e[p.value];A.value[p.value]=l,h.value&&(j.value[p.value]=l)}}else A.value.forEach(((e,l)=>{let a=Ve(A.value[l][w.value]);if(void 0!==a){let e=a[p.value];A.value[l][p.value]=e,h.value&&(j.value[l][p.value]=e)}}))},De=e=>l(e)?"single"===r.value?{}:[]:h.value?e:"single"===r.value?Ve(e)||{}:e.filter((e=>!!Ve(e))).map((e=>Ve(e))),Re=()=>{Z.value=e.watch(H,(e=>{e.length<k.value||!e&&0!==k.value||(Y.value=!0,O.value&&(X.value=[]),setTimeout((()=>{e==H.value&&u.value(H.value,z).then((l=>{e!=H.value&&H.value||(X.value=l,K.value=oe.value.filter((e=>!0!==e[R.value]))[0]||null,Y.value=!1)})).catch((e=>{console.error(e)}))}),y.value))}),{flush:"sync"})};if("single"!==r.value&&!l(j.value)&&!Array.isArray(j.value))throw new Error(`v-model must be an array when using "${r.value}" mode`);return u&&"function"==typeof u.value?S.value?_e(Pe):1==h.value&&Pe():(X.value=u.value,Pe()),y.value>-1&&Re(),e.watch(y,((e,l)=>{Z.value&&Z.value(),e>=0&&Re()})),e.watch(j,(e=>{if(l(e))A.value=De(e);else switch(r.value){case"single":(h.value?e[w.value]!=A.value[w.value]:e!=A.value[w.value])&&(A.value=De(e));break;case"multiple":case"tags":(function(e,l){const a=l.slice().sort();return e.length===l.length&&e.slice().sort().every((function(e,l){return e===a[l]}))})(h.value?e.map((e=>e[w.value])):e,A.value.map((e=>e[w.value])))||(A.value=De(e))}}),{deep:!0}),e.watch(u,((e,l)=>{"function"==typeof a.options?S.value&&_e():(X.value=a.options,Object.keys(A.value).length||Pe(),Ie())})),e.watch(p,Ie),{pfo:ue,fo:oe,filteredOptions:oe,hasSelected:re,multipleLabelText:ie,eo:te,extendedOptions:te,fg:ne,filteredGroups:ne,noOptions:se,noResults:ce,resolving:Y,busy:me,offset:ee,select:fe,deselect:ge,remove:be,selectAll:()=>{"single"!==r.value&&fe(oe.value)},clear:ye,isSelected:Se,isDisabled:ke,isMax:Le,getOption:Ve,handleOptionClick:e=>{if(!ke(e))return D&&D.value&&!Se(e)&&e.__CREATE__&&(delete(e={...e}).__CREATE__,(e=D.value(e,z))instanceof Promise)?(Y.value=!0,void e.then((e=>{Y.value=!1,Oe(e)}))):void Oe(e)},handleGroupClick:e=>{if(!ke(e)&&"single"!==r.value&&I.value){switch(r.value){case"multiple":case"tags":we(e[P.value])?ge(e[P.value]):fe(e[P.value].filter((e=>-1===A.value.map((e=>e[w.value])).indexOf(e[w.value]))).filter((e=>!e[R.value])).filter(((e,l)=>A.value.length+1+l<=V.value||-1===V.value)))}T.value&&U()}},handleTagRemove:(e,l)=>{0===l.button?be(e):l.preventDefault()},refreshOptions:e=>{_e(e)},resolveOptions:_e,refreshLabels:Ie}}function i(l,a,t){const{valueProp:n,showOptions:u,searchable:o,groupLabel:r,groups:i,mode:s,groupSelect:c,disabledProp:d}=e.toRefs(l),v=t.fo,p=t.fg,m=t.handleOptionClick,f=t.handleGroupClick,g=t.search,h=t.pointer,b=t.setPointer,y=t.clearPointer,S=t.multiselect,k=t.isOpen,L=e.computed((()=>v.value.filter((e=>!e[d.value])))),O=e.computed((()=>p.value.filter((e=>!e[d.value])))),C=e.computed((()=>"single"!==s.value&&c.value)),w=e.computed((()=>h.value&&h.value.group)),E=e.computed((()=>D(h.value))),V=e.computed((()=>{const e=w.value?h.value:D(h.value),l=O.value.map((e=>e[r.value])).indexOf(e[r.value]);let a=O.value[l-1];return void 0===a&&(a=T.value),a})),B=e.computed((()=>{let e=O.value.map((e=>e.label)).indexOf(w.value?h.value[r.value]:D(h.value)[r.value])+1;return O.value.length<=e&&(e=0),O.value[e]})),T=e.computed((()=>[...O.value].slice(-1)[0])),x=e.computed((()=>h.value.__VISIBLE__.filter((e=>!e[d.value]))[0])),q=e.computed((()=>{const e=E.value.__VISIBLE__.filter((e=>!e[d.value]));return e[e.map((e=>e[n.value])).indexOf(h.value[n.value])-1]})),N=e.computed((()=>{const e=D(h.value).__VISIBLE__.filter((e=>!e[d.value]));return e[e.map((e=>e[n.value])).indexOf(h.value[n.value])+1]})),P=e.computed((()=>[...V.value.__VISIBLE__.filter((e=>!e[d.value]))].slice(-1)[0])),_=e.computed((()=>[...T.value.__VISIBLE__.filter((e=>!e[d.value]))].slice(-1)[0])),I=()=>{b(L.value[0]||null)},D=e=>O.value.find((l=>-1!==l.__VISIBLE__.map((e=>e[n.value])).indexOf(e[n.value]))),R=()=>{let e=S.value.querySelector("[data-pointed]");if(!e)return;let l=e.parentElement.parentElement;i.value&&(l=w.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>l.clientHeight+l.scrollTop&&(l.scrollTop=e.offsetTop+e.offsetHeight-l.clientHeight),e.offsetTop<l.scrollTop&&(l.scrollTop=e.offsetTop)};return e.watch(g,(e=>{o.value&&(e.length&&u.value?I():y())})),e.watch(k,(l=>{if(l){let l=S.value.querySelectorAll("[data-selected]")[0];if(!l)return;let a=l.parentElement.parentElement;e.nextTick((()=>{a.scrollTop>0||(a.scrollTop=l.offsetTop)}))}})),{pointer:h,canPointGroups:C,isPointed:e=>!(!h.value||!(!e.group&&h.value[n.value]==e[n.value]||void 0!==e.group&&h.value[r.value]==e[r.value]))||void 0,setPointerFirst:I,selectPointer:()=>{h.value&&!0!==h.value[d.value]&&(w.value?f(h.value):m(h.value))},forwardPointer:()=>{if(null===h.value)b((i.value&&C.value?O.value[0]:L.value[0])||null);else if(i.value&&C.value){let e=w.value?x.value:N.value;void 0===e&&(e=B.value),b(e||null)}else{let e=L.value.map((e=>e[n.value])).indexOf(h.value[n.value])+1;L.value.length<=e&&(e=0),b(L.value[e]||null)}e.nextTick((()=>{R()}))},backwardPointer:()=>{if(null===h.value){let e=L.value[L.value.length-1];i.value&&C.value&&(e=_.value,void 0===e&&(e=T.value)),b(e||null)}else if(i.value&&C.value){let e=w.value?P.value:q.value;void 0===e&&(e=w.value?V.value:E.value),b(e||null)}else{let e=L.value.map((e=>e[n.value])).indexOf(h.value[n.value])-1;e<0&&(e=L.value.length-1),b(L.value[e]||null)}e.nextTick((()=>{R()}))}}}function s(l,a,t){const{disabled:n}=e.toRefs(l),u=e.getCurrentInstance().proxy,o=e.ref(!1);return{isOpen:o,open:()=>{o.value||n.value||(o.value=!0,a.emit("open",u))},close:()=>{o.value&&(o.value=!1,a.emit("close",u))}}}function c(l,a,t){const{searchable:n,disabled:u}=e.toRefs(l),o=t.input,r=t.open,i=t.close,s=t.clearSearch,c=t.isOpen,d=e.ref(null),v=e.ref(null),p=e.ref(!1),m=e.computed((()=>n.value||u.value?-1:0)),f=()=>{n.value&&o.value.blur(),d.value.blur()},g=()=>{n.value&&!u.value&&o.value.focus()},h=()=>{u.value||(p.value=!0,r())},b=()=>{p.value=!1,setTimeout((()=>{p.value||(i(),s())}),1)};return{multiselect:d,tags:v,tabindex:m,isActive:p,blur:f,focus:g,handleFocus:()=>{g()},activate:h,deactivate:b,handleCaretClick:()=>{b(),f()},handleMousedown:e=>{c.value&&(e.target.isEqualNode(d.value)||e.target.isEqualNode(v.value))?setTimeout((()=>{b()}),0):document.activeElement.isEqualNode(d.value)&&!c.value&&h()}}}function d(l,a,t){const{mode:n,addTagOn:u,openDirection:o,searchable:r,showOptions:i,valueProp:s,groups:c,addOptionOn:d,createTag:v,createOption:p,reverse:m}=e.toRefs(l),f=e.getCurrentInstance().proxy,g=t.iv,h=t.update,b=t.search,y=t.setPointer,S=t.selectPointer,k=t.backwardPointer,L=t.forwardPointer,O=t.isOpen,C=t.open,w=t.blur,E=t.fo,V=e.computed((()=>v.value||p.value||!1)),B=e.computed((()=>void 0!==u.value?u.value:void 0!==d.value?d.value:["enter"])),T=()=>{"tags"===n.value&&!i.value&&V.value&&r.value&&!c.value&&y(E.value[E.value.map((e=>e[s.value])).indexOf(b.value)])};return{handleKeydown:e=>{switch(a.emit("keydown",e,f),e.key){case"Backspace":if("single"===n.value)return;if(r.value&&-1===[null,""].indexOf(b.value))return;if(0===g.value.length)return;h([...g.value].slice(0,-1));break;case"Enter":if(e.preventDefault(),-1===B.value.indexOf("enter")&&V.value)return;T(),S();break;case" ":if(!V.value&&!r.value)return e.preventDefault(),T(),void S();if(!V.value)return!1;if(-1===B.value.indexOf("space")&&V.value)return;e.preventDefault(),T(),S();break;case"Tab":case";":case",":if(-1===B.value.indexOf(e.key.toLowerCase())||!V.value)return;T(),S(),e.preventDefault();break;case"Escape":w();break;case"ArrowUp":if(e.preventDefault(),!i.value)return;O.value||C(),k();break;case"ArrowDown":if(e.preventDefault(),!i.value)return;O.value||C(),L()}},handleKeyup:e=>{a.emit("keyup",e,f)},preparePointer:T}}function v(l,a,t){const{classes:n,disabled:u,openDirection:o,showOptions:r}=e.toRefs(l),i=t.isOpen,s=t.isPointed,c=t.isSelected,d=t.isDisabled,v=t.isActive,p=t.canPointGroups,m=t.resolving,f=t.fo,g=e.computed((()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer",...n.value}))),h=e.computed((()=>!!(i.value&&r.value&&(!m.value||m.value&&f.value.length))));return{classList:e.computed((()=>{const e=g.value;return{container:[e.container].concat(u.value?e.containerDisabled:[]).concat(h.value&&"top"===o.value?e.containerOpenTop:[]).concat(h.value&&"top"!==o.value?e.containerOpen:[]).concat(v.value?e.containerActive:[]),spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(u.value?e.tagDisabled:[]),tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(i.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,inifinite:e.inifinite,inifiniteSpinner:e.inifiniteSpinner,dropdown:[e.dropdown].concat("top"===o.value?e.dropdownTop:[]).concat(i.value&&r.value&&h.value?[]:e.dropdownHidden),options:[e.options].concat("top"===o.value?e.optionsTop:[]),group:e.group,groupLabel:l=>{let a=[e.groupLabel];return s(l)?a.push(c(l)?e.groupLabelSelectedPointed:e.groupLabelPointed):c(l)&&p.value?a.push(d(l)?e.groupLabelSelectedDisabled:e.groupLabelSelected):d(l)&&a.push(e.groupLabelDisabled),p.value&&a.push(e.groupLabelPointable),a},groupOptions:e.groupOptions,option:(l,a)=>{let t=[e.option];return s(l)?t.push(c(l)?e.optionSelectedPointed:e.optionPointed):c(l)?t.push(d(l)?e.optionSelectedDisabled:e.optionSelected):(d(l)||a&&d(a))&&t.push(e.optionDisabled),t},noOptions:e.noOptions,noResults:e.noResults,fakeInput:e.fakeInput}})),showDropdown:h}}function p(l,a,t){const{limit:n,infinite:u}=e.toRefs(l),o=t.isOpen,r=t.offset,i=t.search,s=t.pfo,c=t.eo,d=e.ref(null),v=e.ref(null),p=e.computed((()=>r.value<s.value.length)),m=l=>{const{isIntersecting:a,target:t}=l[0];if(a){const l=t.offsetParent,a=l.scrollTop;r.value+=-1==n.value?10:n.value,e.nextTick((()=>{l.scrollTop=a}))}},f=()=>{o.value&&r.value<s.value.length?d.value.observe(v.value):!o.value&&d.value&&d.value.disconnect()};return e.watch(o,(()=>{u.value&&f()})),e.watch(i,(()=>{u.value&&(r.value=n.value,f())}),{flush:"post"}),e.watch(c,(()=>{u.value&&f()}),{immediate:!1,flush:"post"}),e.onMounted((()=>{window&&window.IntersectionObserver&&(d.value=new IntersectionObserver(m))})),{hasMore:p,infiniteLoader:v}}function m(l,a,t){const{placeholder:n,id:u,valueProp:o,label:r,mode:i,groupLabel:s}=e.toRefs(l),c=t.pointer,d=t.iv,v=t.isSelected,p=t.hasSelected,m=t.multipleLabelText,f=e.ref(null),g=e.computed((()=>{let e=[];return u&&u.value&&e.push(u.value),e.push("multiselect-options"),e.join("-")})),h=e.computed((()=>{let e=[];if(u&&u.value&&e.push(u.value),e.push("multiselect-option"),c.value&&void 0!==c.value[o.value])return e.push(c.value[o.value]),e.join("-")})),b=e.computed((()=>{let e=[];return f.value&&e.push(f.value),n.value&&!p.value&&e.push(n.value),"single"===i.value&&d.value&&void 0!==d.value[r.value]&&e.push(d.value[r.value]),"multiple"===i.value&&p.value&&e.push(m.value),"tags"===i.value&&p.value&&e.push(...d.value.map((e=>e[r.value]))),e.join(", ")})),y=e.computed((()=>b.value));return e.onMounted((()=>{u&&u.value&&document&&document.querySelector&&(f.value=document.querySelector(`[for="${u.value}"]`)?.innerText||null)})),{ariaOwns:g,ariaLabel:b,ariaPlaceholder:y,ariaActiveDescendant:h,ariaOptionId:e=>{let l=[];return u&&u.value&&l.push(u.value),l.push("multiselect-option"),l.push(e[o.value]),l.join("-")},ariaOptionLabel:e=>{let l=[];return v(e)&&l.push("✓"),l.push(e[r.value]),l.join(" ")},ariaGroupLabel:e=>{let l=[];return l.push(e[s.value]),l.join(" ")}}}var f={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1}},setup:(e,l)=>function(e,l,a,t={}){return a.forEach((a=>{a&&(t={...t,...a(e,l,t)})})),t}(e,l,[t,u,s,n,a,c,r,p,i,d,v,m])};const g=["tabindex","id","dir","aria-owns","aria-expanded","aria-label","aria-placeholder","aria-activedescendant"],h=["type","modelValue","value","autocomplete","id","aria-owns","aria-expanded","aria-label","aria-placeholder","aria-activedescendant"],b=["onClick"],y=["type","modelValue","value","id","autocomplete","aria-owns","aria-expanded","aria-label","aria-placeholder","aria-activedescendant"],S=["innerHTML"],k=["innerHTML"],L=["id"],O=["data-pointed","onMouseenter","onClick"],C=["innerHTML"],w=["aria-label"],E=["data-pointed","data-selected","id","aria-label","onMouseenter","onClick"],V=["innerHTML"],B=["id","aria-label","data-pointed","data-selected","onMouseenter","onClick"],T=["innerHTML"],x=["innerHTML"],q=["innerHTML"],N=["value"],P=["name","value"],_=["name","value"];return f.render=function(l,a,t,n,u,o){return e.openBlock(),e.createElementBlock("div",{ref:"multiselect",tabindex:l.tabindex,class:e.normalizeClass(l.classList.container),id:t.searchable?void 0:t.id,dir:t.rtl?"rtl":void 0,"aria-owns":l.ariaOwns,"aria-expanded":l.isOpen,"aria-label":l.ariaLabel,"aria-placeholder":l.ariaPlaceholder,"aria-activedescendant":l.ariaActiveDescendant,onFocusin:a[8]||(a[8]=(...e)=>l.activate&&l.activate(...e)),onFocusout:a[9]||(a[9]=(...e)=>l.deactivate&&l.deactivate(...e)),onKeydown:a[10]||(a[10]=(...e)=>l.handleKeydown&&l.handleKeydown(...e)),onKeyup:a[11]||(a[11]=(...e)=>l.handleKeyup&&l.handleKeyup(...e)),onFocus:a[12]||(a[12]=(...e)=>l.handleFocus&&l.handleFocus(...e)),onMousedown:a[13]||(a[13]=(...e)=>l.handleMousedown&&l.handleMousedown(...e)),role:"combobox"},[e.createCommentVNode(" Search "),"tags"!==t.mode&&t.searchable&&!t.disabled?(e.openBlock(),e.createElementBlock("input",e.mergeProps({key:0,type:t.inputType,modelValue:l.search,value:l.search,class:l.classList.search,autocomplete:t.autocomplete,id:t.searchable?t.id:void 0},t.attrs,{"aria-owns":l.ariaOwns,"aria-expanded":l.isOpen,"aria-label":l.ariaLabel,"aria-placeholder":l.ariaPlaceholder,"aria-activedescendant":l.ariaActiveDescendant,onInput:a[0]||(a[0]=(...e)=>l.handleSearchInput&&l.handleSearchInput(...e)),onKeypress:a[1]||(a[1]=(...e)=>l.handleKeypress&&l.handleKeypress(...e)),onPaste:a[2]||(a[2]=e.withModifiers(((...e)=>l.handlePaste&&l.handlePaste(...e)),["stop"])),ref:"input",role:"combobox"}),null,16,h)):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Tags (with search) "),"tags"==t.mode?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(l.classList.tags)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.iv,((a,n,u)=>e.renderSlot(l.$slots,"tag",{option:a,handleTagRemove:l.handleTagRemove,disabled:t.disabled},(()=>[(e.openBlock(),e.createElementBlock("span",{class:e.normalizeClass(l.classList.tag),key:u},[e.createTextVNode(e.toDisplayString(a[t.label])+" ",1),t.disabled?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(l.classList.tagRemove),onClick:e=>l.handleTagRemove(a,e)},[e.createElementVNode("span",{class:e.normalizeClass(l.classList.tagRemoveIcon)},null,2)],10,b))],2))])))),256)),e.createElementVNode("div",{class:e.normalizeClass(l.classList.tagsSearchWrapper),ref:"tags"},[e.createCommentVNode(" Used for measuring search width "),e.createElementVNode("span",{class:e.normalizeClass(l.classList.tagsSearchCopy)},e.toDisplayString(l.search),3),e.createCommentVNode(" Actual search input "),t.searchable&&!t.disabled?(e.openBlock(),e.createElementBlock("input",e.mergeProps({key:0,type:t.inputType,modelValue:l.search,value:l.search,class:l.classList.tagsSearch,id:t.searchable?t.id:void 0,autocomplete:t.autocomplete},t.attrs,{"aria-owns":l.ariaOwns,"aria-expanded":l.isOpen,"aria-label":l.ariaLabel,"aria-placeholder":l.ariaPlaceholder,"aria-activedescendant":l.ariaActiveDescendant,onInput:a[3]||(a[3]=(...e)=>l.handleSearchInput&&l.handleSearchInput(...e)),onKeypress:a[4]||(a[4]=(...e)=>l.handleKeypress&&l.handleKeypress(...e)),onPaste:a[5]||(a[5]=e.withModifiers(((...e)=>l.handlePaste&&l.handlePaste(...e)),["stop"])),ref:"input",role:"combobox"}),null,16,y)):e.createCommentVNode("v-if",!0)],2)],2)):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Single label "),"single"==t.mode&&l.hasSelected&&!l.search&&l.iv?e.renderSlot(l.$slots,"singlelabel",{key:2,value:l.iv},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.singleLabel)},[e.createElementVNode("span",{class:e.normalizeClass(l.classList.singleLabelText),innerHTML:l.iv[t.label]},null,10,S)],2)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Multiple label "),"multiple"==t.mode&&l.hasSelected&&!l.search?e.renderSlot(l.$slots,"multiplelabel",{key:3,values:l.iv},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.multipleLabel),innerHTML:l.multipleLabelText},null,10,k)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Placeholder "),!t.placeholder||l.hasSelected||l.search?e.createCommentVNode("v-if",!0):e.renderSlot(l.$slots,"placeholder",{key:4},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.placeholder)},e.toDisplayString(t.placeholder),3)])),e.createCommentVNode(" Spinner "),t.loading||l.resolving?e.renderSlot(l.$slots,"spinner",{key:5},(()=>[e.createElementVNode("span",{class:e.normalizeClass(l.classList.spinner)},null,2)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Clear "),l.hasSelected&&!t.disabled&&t.canClear&&!l.busy?e.renderSlot(l.$slots,"clear",{key:6,clear:l.clear},(()=>[e.createElementVNode("span",{class:e.normalizeClass(l.classList.clear),onClick:a[6]||(a[6]=(...e)=>l.clear&&l.clear(...e))},[e.createElementVNode("span",{class:e.normalizeClass(l.classList.clearIcon)},null,2)],2)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Caret "),t.caret&&t.showOptions?e.renderSlot(l.$slots,"caret",{key:7},(()=>[e.createElementVNode("span",{class:e.normalizeClass(l.classList.caret),onClick:a[7]||(a[7]=(...e)=>l.handleCaretClick&&l.handleCaretClick(...e))},null,2)])):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Options "),e.createElementVNode("div",{class:e.normalizeClass(l.classList.dropdown),tabindex:"-1"},[e.renderSlot(l.$slots,"beforelist",{options:l.fo}),e.createElementVNode("ul",{class:e.normalizeClass(l.classList.options),id:l.ariaOwns,role:"listbox"},[t.groups?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(l.fg,((a,n,u)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(l.classList.group),key:u},[e.createElementVNode("div",{class:e.normalizeClass(l.classList.groupLabel(a)),"data-pointed":l.isPointed(a),onMouseenter:e=>l.setPointer(a),onClick:e=>l.handleGroupClick(a),role:"none"},[e.renderSlot(l.$slots,"grouplabel",{group:a,isSelected:l.isSelected,isPointed:l.isPointed},(()=>[e.createElementVNode("span",{innerHTML:a[t.groupLabel]},null,8,C)]))],42,O),e.createElementVNode("ul",{class:e.normalizeClass(l.classList.groupOptions),"aria-label":l.ariaGroupLabel(a),role:"group"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.__VISIBLE__,((n,u,o)=>(e.openBlock(),e.createElementBlock("li",{class:e.normalizeClass(l.classList.option(n,a)),key:o,"data-pointed":l.isPointed(n),"data-selected":l.isSelected(n)||void 0,id:l.ariaOptionId(n),"aria-label":l.ariaOptionLabel(n),onMouseenter:e=>l.setPointer(n),onClick:e=>l.handleOptionClick(n),role:"option"},[e.renderSlot(l.$slots,"option",{option:n,isSelected:l.isSelected,isPointed:l.isPointed,search:l.search},(()=>[e.createElementVNode("span",{innerHTML:n[t.label]},null,8,V)]))],42,E)))),128))],10,w)],2)))),128)):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(l.fo,((a,n,u)=>(e.openBlock(),e.createElementBlock("li",{id:l.ariaOptionId(a),"aria-label":l.ariaOptionLabel(a),class:e.normalizeClass(l.classList.option(a)),key:u,"data-pointed":l.isPointed(a),"data-selected":l.isSelected(a)||void 0,onMouseenter:e=>l.setPointer(a),onClick:e=>l.handleOptionClick(a),role:"option"},[e.renderSlot(l.$slots,"option",{option:a,isSelected:l.isSelected,isPointed:l.isPointed,search:l.search},(()=>[e.createElementVNode("span",{innerHTML:a[t.label]},null,8,T)]))],42,B)))),128))],10,L),l.noOptions?e.renderSlot(l.$slots,"nooptions",{key:0},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.noOptions),innerHTML:t.noOptionsText},null,10,x)])):e.createCommentVNode("v-if",!0),l.noResults?e.renderSlot(l.$slots,"noresults",{key:1},(()=>[e.createElementVNode("div",{class:e.normalizeClass(l.classList.noResults),innerHTML:t.noResultsText},null,10,q)])):e.createCommentVNode("v-if",!0),t.infinite&&l.hasMore?(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(l.classList.inifinite),ref:"infiniteLoader"},[e.renderSlot(l.$slots,"infinite",{},(()=>[e.createElementVNode("span",{class:e.normalizeClass(l.classList.inifiniteSpinner)},null,2)]))],2)):e.createCommentVNode("v-if",!0),e.renderSlot(l.$slots,"afterlist",{options:l.fo})],2),e.createCommentVNode(" Hacky input element to show HTML5 required warning "),t.required?(e.openBlock(),e.createElementBlock("input",{key:8,class:e.normalizeClass(l.classList.fakeInput),tabindex:"-1",value:l.textValue,required:""},null,10,N)):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Native input support "),t.nativeSupport?(e.openBlock(),e.createElementBlock(e.Fragment,{key:9},["single"==t.mode?(e.openBlock(),e.createElementBlock("input",{key:0,type:"hidden",name:t.name,value:void 0!==l.plainValue?l.plainValue:""},null,8,P)):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(l.plainValue,((l,a)=>(e.openBlock(),e.createElementBlock("input",{type:"hidden",name:`${t.name}[]`,value:l,key:a},null,8,_)))),128))],64)):e.createCommentVNode("v-if",!0),e.createCommentVNode(" Create height for empty input "),e.createElementVNode("div",{class:e.normalizeClass(l.classList.spacer)},null,2)],42,g)},f.__file="src/Multiselect.vue",f}(Vue);
