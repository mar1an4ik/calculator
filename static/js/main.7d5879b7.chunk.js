(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,n,r){},11:function(e,n,r){"use strict";r.r(n);var t=r(0),i=r(1),a=r.n(i),c=r(3),l=r.n(c),u=(r(9),r(10),function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",t=parseFloat(n),i=parseFloat(r);switch(e){case"+":return t+i;case"-":return t-i;case"*":return t*i;case"/":return t/i;case"%":return t%i;default:alert("No such operator")}});var s=function(){var e=[".","0","3","2","1","6","5","4","9","8","7","m-","mr","mc"].reverse(),n=["%","+/-","AC"].reverse(),r=["=","+","-","*","m+","/"].reverse(),i=a.a.createRef(),c=a.a.createRef(),l=[],s=function(){return l[l.length-1]},o=function(e){return"."==s().slice(-1)?(alert("You should enter the number"),1):isNaN(Number(s()))&&isNaN(Number(e))?(l[l.length-1]=e,i.current.innerHTML=l.join(""),1):void 0},m=function(){return s()||"0"==s()?s()&&s().includes(".")?(alert("Too many dots or dot is NaN"),1):void 0:(alert("NaN"),1)},d=function(e){for(var n=0;n<e.length;n++)(e[n].includes("(")||e[n].includes(")"))&&(e[n]=e[n].replace("(",""),e[n]=e[n].replace(")",""))},v=function(e){return d(e),function(e){for(var n=0;n<=e.length-2;n++)if("*"==e[n]||"/"==e[n]||"%"==e[n]){var r=u(e[n],e[n-1],e[n+1]);e.splice(n-1,3,String(r)),n--}}(e),function(e){for(var n=0;n<=e.length;n++)if("+"==e[n]||"-"==e[n]){var r=u(e[n],e[n-1],e[n+1]);e.splice(n-1,3,String(r)),n--}}(e),Number(e)},N=function(e){var n;return d(e),isNaN(Number(e[e.length-1]))&&isNaN(Number(e[e.length-2]))?(alert("Your cant do it"),e):(e[n=isNaN(Number(e[e.length-2]))?e.length-1:e.length-2]="("+String(-e[n])+")",e)},f=function(e){if("="==e.target.value)return i.current.innerHTML=String(v(l)),l.length=1,void(l[0]=i.current.innerHTML);if("m+"!=e.target.value)if("m-"!=e.target.value){if("AC"==e.target.value)return i.current.innerHTML="0",void(l.length=0);if("mc"!=e.target.value)return"mr"==e.target.value?(i.current.innerHTML=c.current.innerHTML,l.length=1,void(l[0]=c.current.innerHTML)):"+/-"==e.target.value?(l=N(l),void(i.current.innerHTML=l.join(""))):void function(e){if((!isNaN(e.value)||void 0!=s())&&(!isNaN(e.value)||!s()||")"==s().slice(-1)||1!=o(e.value))&&("."!=e.value||!m())){if(isNaN(parseFloat(e.value))&&"."!=e.value||isNaN(parseFloat(s())))l.push(e.innerHTML);else{var n=s()+e.value;l.splice(l.length-1,1,n)}i.current.innerHTML=l.join("")}}(e.target);c.current.innerHTML=String(0)}else!function(e){if(isNaN(Number(s())))alert("Finish your expression!");else{if(0!=e.length){var n=v(e);return c.current.innerHTML=String(Number(c.current.innerHTML)-n),e.length=0,e}c.current.innerHTML=String(Number(c.current.innerHTML)-Number(i.current.innerHTML))}}(l);else!function(e){if(0!=e.length){if(!isNaN(Number(s()))){var n=v(e);return c.current.innerHTML=String(Number(c.current.innerHTML)+n),e.length=0,e}alert("Finish your expression!")}else c.current.innerHTML=String(Number(c.current.innerHTML)+Number(i.current.innerHTML))}(l)},h=e.map((function(e){return"0"==e?Object(t.jsx)("button",{id:"zero",value:e,onClick:f,children:e}):Object(t.jsx)("button",{className:"blackButtons",value:e,onClick:f,children:e})})),b=n.map((function(e){return Object(t.jsx)("button",{value:e,className:"whiteButtons",onClick:f,children:e})})),g=r.map((function(e){return Object(t.jsx)("button",{value:e,className:"yellowButtons",onClick:f,children:e})}));return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsxs)("div",{className:"calculator",children:[Object(t.jsx)("div",{className:"labelBig",ref:i,children:"0"}),"//Label for result",Object(t.jsx)("div",{className:"labelSmall",ref:c,children:"0"}),'//Label for "m+" and "m-"',Object(t.jsxs)("div",{className:"columns",children:[Object(t.jsxs)("div",{className:"firstColumn",children:[Object(t.jsx)("div",{className:"firstColumnSmallFirst",children:b}),Object(t.jsx)("div",{className:"firstColumnSmallSecond",children:h})]}),Object(t.jsx)("div",{className:"secondColumn",children:g})]})]}),Object(t.jsxs)("div",{children:["Created for Test Task by  ",Object(t.jsxs)("span",{className:"marian",children:[" \xa9",Object(t.jsx)("i",{children:"marianelement@gmail.com"})]})]})]})},o=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,12)).then((function(n){var r=n.getCLS,t=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;r(e),t(e),i(e),a(e),c(e)}))};l.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(s,{})}),document.getElementById("root")),o()},9:function(e,n,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.7d5879b7.chunk.js.map