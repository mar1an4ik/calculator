(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,r,n){},11:function(e,r,n){"use strict";n.r(r);var t=n(0),i=n(1),a=n.n(i),c=n(3),l=n.n(c),u=(n(9),n(10),function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",t=parseFloat(r),i=parseFloat(n);switch(e){case"+":return t+i;case"-":return t-i;case"*":return t*i;case"/":return t/i;case"%":return t%i;default:alert("No such operator")}});var s=function(){var e=[".","0","3","2","1","6","5","4","9","8","7","m-","mr","mc"].reverse(),r=["%","+/-","AC"].reverse(),n=["=","+","-","*","m+","/"].reverse(),i=a.a.createRef(),c=a.a.createRef(),l=[],s=function(){return l[l.length-1]},o=function(e){if(isNaN(Number(s()))&&isNaN(Number(e))||"."==s().slice(-1))return alert("You should enter the number"),1},m=function(){return s()||"0"==s()?s()&&s().includes(".")?(alert("Too many dots or dot is NaN"),1):void 0:(alert("NaN"),1)},N=function(e){for(var r=0;r<e.length;r++)(e[r].includes("(")||e[r].includes(")"))&&(e[r]=e[r].replace("(",""),e[r]=e[r].replace(")",""))},d=function(e){return N(e),function(e){for(var r=0;r<=e.length-2;r++)if("*"==e[r]||"/"==e[r]||"%"==e[r]){var n=u(e[r],e[r-1],e[r+1]);e.splice(r-1,3,String(n)),r--}}(e),function(e){for(var r=0;r<=e.length;r++)if("+"==e[r]||"-"==e[r]){var n=u(e[r],e[r-1],e[r+1]);e.splice(r-1,3,String(n)),r--}}(e),Number(e)},f=function(e){var r;return N(e),isNaN(Number(e[e.length-1]))&&isNaN(Number(e[e.length-2]))?(alert("Your cant do it"),e):(e[r=isNaN(Number(e[e.length-2]))?e.length-1:e.length-2]="("+String(-e[r])+")",e)},v=function(e){if(!i.current.innerHTML)throw new Error("Not found");if("="==e.target.value)return i.current.innerHTML=String(d(l)),void(l.length=0);if("m+"!=e.target.value)if("m-"!=e.target.value){if("AC"==e.target.value)return i.current.innerHTML="0",void(l.length=0);if("mc"!=e.target.value)return"mr"==e.target.value?(i.current.innerHTML=c.current.innerHTML,l.length=1,void(l[0]=c.current.innerHTML)):"+/-"==e.target.value?(l=f(l),void(i.current.innerHTML=l.join(""))):void function(e){if((!isNaN(e.value)||void 0!=s())&&(!isNaN(e.value)||!s()||")"==s().slice(-1)||1!=o(e.value))&&("."!=e.value||!m())){if(isNaN(parseFloat(e.value))&&"."!=e.value||isNaN(parseFloat(s())))l.push(e.innerHTML);else{var r=s()+e.value;l.splice(l.length-1,1,r)}i.current.innerHTML=l.join("")}}(e.target);c.current.innerHTML=String(0)}else!function(e){if(isNaN(Number(s())))alert("Finish your expression!");else{if(0!=e.length){var r=d(e);return c.current.innerHTML=String(Number(c.current.innerHTML)-r),e.length=0,e}c.current.innerHTML=String(Number(c.current.innerHTML)-Number(i.current.innerHTML))}}(l);else!function(e){if(0!=e.length){if(!isNaN(Number(s()))){var r=d(e);return c.current.innerHTML=String(Number(c.current.innerHTML)+r),e.length=0,e}alert("Finish your expression!")}else c.current.innerHTML=String(Number(c.current.innerHTML)+Number(i.current.innerHTML))}(l)},h=e.map((function(e){return"0"==e?Object(t.jsx)("button",{id:"zero",value:e,onClick:v,children:e}):Object(t.jsx)("button",{className:"blackButtons",value:e,onClick:v,children:e})})),b=r.map((function(e){return Object(t.jsx)("button",{value:e,className:"whiteButtons",onClick:v,children:e})})),g=n.map((function(e){return Object(t.jsx)("button",{value:e,className:"yellowButtons",onClick:v,children:e})}));return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsxs)("div",{className:"calculator",children:[Object(t.jsx)("div",{className:"labelBig",ref:i,children:"0"}),"//Label for result",Object(t.jsx)("div",{className:"labelSmall",ref:c,children:"0"}),'//Label for "m+" and "m-"',Object(t.jsxs)("div",{className:"columns",children:[Object(t.jsxs)("div",{className:"firstColumn",children:[Object(t.jsx)("div",{className:"firstColumnSmallFirst",children:b}),Object(t.jsx)("div",{className:"firstColumnSmallSecond",children:h})]}),Object(t.jsx)("div",{className:"secondColumn",children:g})]})]}),Object(t.jsxs)("div",{children:["Created for Test Task by  ",Object(t.jsxs)("span",{className:"marian",children:[" \xa9",Object(t.jsx)("i",{children:"marianelement@gmail.com"})]})]})]})},o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(r){var n=r.getCLS,t=r.getFID,i=r.getFCP,a=r.getLCP,c=r.getTTFB;n(e),t(e),i(e),a(e),c(e)}))};l.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(s,{})}),document.getElementById("root")),o()},9:function(e,r,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.6f356a5e.chunk.js.map