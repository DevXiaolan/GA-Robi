(this.webpackJsonppage=this.webpackJsonppage||[]).push([[0],{13:function(e,t,n){var r=n(8),o=n(9),i=n(10),c=n(5).randomGeneList,s=n(2),a=s.getRandomIntNum,u=s.getRobiTestAveScore,h=s.calScores,l=function(){"use strict";function e(){o(this,e),this.crowdNums=200,this.genesCrowd=Array.from(Array(this.crowdNums),(function(){return c()})),this.currentCrwodScores=this.__getGenesScore(),this.__showScore(this.currentCrwodScores),this.stopEvo=!0}return i(e,[{key:"__makeCrowdIteration",value:function(){for(var e=[],t=0;t<this.crowdNums/2;t++){var n=this.__randomPickTwoGeneIndex(this.currentCrwodScores),o=r(n,2),i=o[0],c=o[1],s=this.__makeChildGeneList(this.genesCrowd[i],this.genesCrowd[c]),a=r(s,2),u=a[0],h=a[1];e.push(u),e.push(h)}this.genesCrowd=e,this.currentCrwodScores=this.__getGenesScore()}},{key:"__getGenesScore",value:function(){return this.genesCrowd.map((function(e){return u(e,100)}))}},{key:"__randomPickTwoGeneIndex",value:function(e){for(var t=[],n=0;!(t.length>=2);){var r=a(400-Math.floor(n/100),500),o=a(0,199);o!==t[0]&&(n+=1,e[o]>r&&t.push(o))}return t}},{key:"__makeChildGeneList",value:function(e,t){var n=a(0,242),r=e.slice(0,n).concat(t.slice(n)),o=t.slice(0,n).concat(e.slice(n));return[this.__geneMutate(r),this.__geneMutate(o)]}},{key:"__geneMutate",value:function(e){return e.map((function(e){return a(0,1e3)<1?a(1,6):e}))}},{key:"__showScore",value:function(e){var t=h(e),n=r(t,3),o=n[0],i=n[1],c=n[2];console.log("MAX SCORE: ",o),console.log("MIN SCORE: ",i),console.log("AVE SCORE: ",c)}},{key:"getEvolvedGeneList",value:function(e){for(var t=0;t<e;t++)console.log("-----------------\u7b2c ".concat(t+1," \u6b21\u8fed\u4ee3-------------------")),this.__makeCrowdIteration(),this.__showScore(this.currentCrwodScores);var n=this.currentCrwodScores,r=Math.max.apply(null,n),o=n.indexOf(r);return this.genesCrowd[o]}},{key:"stopAsyncEvolution",value:function(){this.stopEvo=!0}},{key:"asyncGetEvolvedGeneList",value:function(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},o=0;this.stopEvo=!1;var i=setInterval((function(){if(n.__makeCrowdIteration(),r(n.currentCrwodScores,o),++o>=e||!0===n.stopEvo){var c=n.currentCrwodScores,s=Math.max.apply(null,c),a=c.indexOf(s);t(n.genesCrowd[a]),clearInterval(i)}}),50);return new Promise((function(e,n){t=e,n}))}}]),e}();e.exports={GA:l}},19:function(e,t,n){},2:function(e,t,n){var r=n(7).Robi;function o(){for(var e=new Array(10),t=0;t<10;t++){e[t]=new Array(10);for(var n=0;n<10;n++)e[t][n]=Math.round(Math.random())+1}return e}e.exports={getRandomRect:o,getRobiTestAveScore:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=0,i=0;i<t;i++){var c=o(),s=new r(e,c),a=s.autoExe();n+=a}var u=Math.round(n/t);return u},getRandomIntNum:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},getStrStatu:function(e){return("00000"+e.toString(3)).slice(-5)},getPlainStatu:function(e){var t={0:"\u5899",1:"\u7a7a",2:"\u573e"};return e.split("").map((function(e){return t[e]})).join("")},calScores:function(e){return[Math.max.apply(null,e),Math.min.apply(null,e),e.reduce((function(e,t){return e+t}),0)/e.length]},getPlainCommand:function(e){return{0:"\u539f\u5730\u4e0d\u52a8",1:"\u5411\u4e0a\u79fb\u52a8",2:"\u5411\u4e0b\u79fb\u52a8",3:"\u5411\u5de6\u79fb\u52a8",4:"\u5411\u53f3\u79fb\u52a8",5:"\u968f\u673a\u79fb\u52a8",6:"\u6e05\u626b\u5783\u573e"}[e]}}},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n.n(o),c=n(11),s=n.n(c),a=(n(19),n(4)),u=n.n(a),h=n(12),l=n(3),d=(n(21),n(30)),v=n(5),m=n(2),b=n(7),f=n(13);var A=function(){var e=Object(o.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)(Object(m.getRandomRect)()),s=Object(l.a)(c,2),a=s[0],A=s[1],p=Object(o.useState)(0),j=Object(l.a)(p,2),g=j[0],O=j[1],w=Object(o.useState)(0),C=Object(l.a)(w,2),x=C[0],k=C[1],_=Object(o.useState)(0),G=Object(l.a)(_,2),y=G[0],S=G[1],M=Object(o.useState)(0),N=Object(l.a)(M,2),L=N[0],E=N[1],P=Object(o.useState)(""),R=Object(l.a)(P,2),T=R[0],Y=R[1],F=Object(o.useRef)(),D=null,V=function(){0!==L&&W(),setTimeout((function(){return n.asyncAutoExe(200,100,(function(e,t,n,r){A(d.a(t)),O(n[0]),k(n[1]),S(e),E(r+1)}))}),200)},W=function(){var e=Object(m.getRandomRect)();n.resetGame(e),A(n.rect),O(n.position[0]),k(n.position[1]),S(n.score),E(0)},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(m.calScores)(e),r=Object(l.a)(n,3),o=r[0],i=r[1],c=r[2];I("-----------------\u7b2c ".concat(t," \u6b21\u8fed\u4ee3-------------------")),I("\u6700\u9ad8\u5206\uff1a".concat(o)),I("\u6700\u4f4e\u5206\uff1a".concat(i)),I("\u5e73\u5747\u5206\uff1a".concat(c))},Q=function(){var e=Object(h.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I("\u5f00\u59cb\u7528\u9057\u4f20\u7b97\u6cd5\u751f\u6210\u57fa\u56e0\u5e8f\u5217\uff081000 \u6b21\u8fed\u4ee3\uff09..."),D=new f.GA,t=D.currentCrwodScores,K(t),e.next=6,D.asyncGetEvolvedGeneList(1e3,(function(e,t){K(e,t+1)}));case 6:n=e.sent,I(n.join(""),"\u9057\u4f20\u7b97\u6cd5\u57fa\u56e0");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){D&&D.stopAsyncEvolution()},U=function(){F.current.innerHTML=""},I=function(e,t){var n=F.current;if(t){var r=document.createElement("h5");r.appendChild(document.createTextNode(t)),n.appendChild(r),r.scrollIntoView({block:"end",inline:"nearest",behavior:"smooth"})}if(e){var o=document.createElement("p");o.appendChild(document.createTextNode(e)),n.appendChild(o),o.scrollIntoView({block:"end",inline:"nearest",behavior:"smooth"})}};return Object(o.useEffect)((function(){n&&(A(n.rect),O(n.position[0]),k(n.position[1]),S(n.score),E(0))}),[n]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"console-wrapper",children:[Object(r.jsxs)("div",{className:"console-btns",children:[Object(r.jsx)("button",{onClick:function(){I(Object(v.randomGeneList)().join(""),"\u968f\u673a\u57fa\u56e0")},children:"\u751f\u6210\u968f\u673a\u57fa\u56e0\u5e8f\u5217"}),Object(r.jsx)("button",{onClick:function(){I(Object(v.simpleOptimizeGeneList)().join(""),"\u7b80\u5355\u4f18\u5316\u57fa\u56e0\u5e8f\u5217")},children:"\u751f\u6210\u7b80\u5355\u4f18\u5316\u57fa\u56e0"}),Object(r.jsx)("button",{onClick:Q,children:"\u5f00\u59cb\u9057\u4f20\u7b97\u6cd5\u751f\u6210\u57fa\u56e0"}),Object(r.jsx)("button",{onClick:B,children:"\u505c\u6b62\u9057\u4f20\u7b97\u6cd5"}),Object(r.jsx)("button",{onClick:U,children:"\u6e05\u7a7a\u7ed3\u679c\u680f"})]}),Object(r.jsx)("div",{className:"console-result",ref:F})]}),function(){var e=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(r.jsxs)("p",{className:n?"head-command":"normal-command",children:[Object(r.jsx)("span",{className:"command-title",children:e}),Object(r.jsx)("span",{className:"command-content",children:t})]})};return Object(r.jsxs)("div",{className:"gene-wrapper",children:[Object(r.jsx)("textarea",{className:"gene-input",placeholder:"\u8bf7\u586b\u5165\u957f\u5ea6\u4e3a 243 \u7684\u57fa\u56e0\u5e8f\u5217...",value:T,onChange:function(e){Y(e.target.value)}}),Object(r.jsxs)("div",{className:"command",children:[e("\u4e0a\u4e0b\u5de6\u53f3\u4e2d (xxxxx)","\u6307\u4ee4",!0),T.split("").map((function(t,n){var r=Object(m.getStrStatu)(n),o=Object(m.getPlainStatu)(r),i=Object(m.getPlainCommand)(t);return e("".concat(o," (").concat(r,")"),"".concat(i," (").concat(t,")"))}))]}),Object(r.jsx)("button",{onClick:function(){!function(e){if(243===e.length){var t=new b.Robi(e,Object(m.getRandomRect)());i(t),alert("Robi \u5df2\u6210\u529f\u8bbe\u7f6e\u65b0\u7684\u57fa\u56e0\u5e8f\u5217")}else alert("\u57fa\u56e0\u68c0\u6d4b\u5931\u8d25\uff1a\u8bf7\u8f93\u5165\u957f\u5ea6\u4e3a 243 \u7684\u6b63\u786e\u57fa\u56e0\u5e8f\u5217")}(T.split("").map((function(e){return parseInt(e)})))},children:"\u751f\u6210 Robi"})]})}(),Object(r.jsxs)("div",{className:"game-container",children:[Object(r.jsxs)("p",{className:"game-desc",children:[Object(r.jsx)("b",{children:"\u6e38\u620f\u89c4\u5219\uff1a"}),"\u884c\u52a8 200 \u6b65\uff0c\u6210\u529f\u6e05\u626b\u4e00\u5904\u5783\u573e\u52a0 10 \u5206\uff0c\u82e5\u5728\u6ca1\u6709\u5783\u573e\u5904\u6267\u884c\u6e05\u626b\u52a8\u4f5c\u6263 1 \u5206\uff0c\u649e\u5899\uff08\u8d85\u51fa\u8fb9\u754c\uff09\u6263 5 \u5206\u3002\uff08\u603b\u5171 100 \u4e2a\u683c\u5b50\uff0c\u5927\u7ea6 50 \u4e2a\u5783\u573e\uff09"]}),n?Object(r.jsxs)("div",{className:"game-wrapper",children:[Object(r.jsxs)("h1",{children:["\u7b2c ",L," \u6b65\uff0c\u5206\u6570\uff1a",y]}),Object(r.jsx)("div",{className:"rect-wrapper",children:a.map((function(e,t){return Object(r.jsx)("div",{className:"rect-row",children:e.map((function(e,n){return Object(r.jsxs)("div",{className:"rect-unit",children:[2===e?"X":"",g===n&&x===t?Object(r.jsx)("img",{className:"robi-img",src:"data:image/png;base64,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",alt:"role"}):null]},n)}))},t)}))}),Object(r.jsx)("button",{onClick:V,children:"\u8fd0\u884c"}),Object(r.jsx)("button",{onClick:W,children:"\u91cd\u7f6e"})]}):"\u7b49\u5f85 Robi \u7684\u751f\u6210..."]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),i(e),c(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),p()},5:function(e,t,n){var r=n(2),o=r.getRandomIntNum,i=r.getStrStatu;function c(){return Array.from(new Array(243),(function(){return 5}))}e.exports={randomGeneList:function(){return Array.from(new Array(243),(function(){return o(1,6)}))},randomMoveGeneList:c,simpleOptimizeGeneList:function(){return c().map((function(e,t){var n=i(t);return"2"===n[4]?6:"0"===n[0]||"2"===n[1]?2:"0"===n[1]||"2"===n[0]?1:"0"===n[2]||"2"===n[3]?4:"0"===n[3]||"2"===n[2]?3:"2"!==n[4]&&6===e?5:e}))}}},7:function(e,t,n){var r=n(4),o=n(22),i=n(8),c=n(9),s=n(10);function a(e){return new Promise((function(t){return setTimeout(t,e)}))}var u=function(){"use strict";function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[[]];c(this,e),this.rect=n,this.genList=t,this.position=[0,0],this.score=0,this.stop=!1}return s(e,[{key:"__move",value:function(e,t){this.position[e]+=t;var n=i(this.position,2),r=n[0],o=n[1];void 0!==this.rect[o]&&void 0!==this.rect[o][r]||(this.position[e]+=-t,this.score-=5)}},{key:"__moveUp",value:function(){this.__move(1,-1)}},{key:"moveDown",value:function(){this.__move(1,1)}},{key:"__moveLeft",value:function(){this.__move(0,-1)}},{key:"__moveRight",value:function(){this.__move(0,1)}},{key:"__moveRandom",value:function(){var e=Math.round(Math.random()),t=0===Math.round(Math.random())?-1:1;this.__move(e,t)}},{key:"__stay",value:function(){}},{key:"__clearItem",value:function(){var e=i(this.position,2),t=e[0],n=e[1];2===this.rect[n][t]?(this.rect[n][t]=1,this.score+=10):this.score-=1}},{key:"__exeCommand",value:function(e){switch(e){case 0:this.__stay();break;case 1:this.__moveUp();break;case 2:this.moveDown();break;case 3:this.__moveLeft();break;case 4:this.__moveRight();break;case 5:this.__moveRandom();break;case 6:this.__clearItem()}}},{key:"__detectPosition",value:function(){var e=this,t=function(t,n){return void 0===e.rect[t]?0:e.rect[t][n]||0},n=i(this.position,2),r=n[0],o=n[1];return[t(o-1,r),t(o+1,r),t(o,r-1),t(o,r+1),t(o,r)].join("")}},{key:"__exeByGeneList",value:function(){var e=this.__detectPosition(),t=parseInt(e,3),n=this.genList[t];this.__exeCommand(n)}},{key:"autoExe",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;this.stop=!1;for(var t=0;t<e&&!this.stop;t++)this.__exeByGeneList();return this.score}},{key:"asyncAutoExe",value:function(){var e=o(r.mark((function e(){var t,n,o,i,c=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=c.length>0&&void 0!==c[0]?c[0]:200,n=c.length>1&&void 0!==c[1]?c[1]:100,o=c.length>2&&void 0!==c[2]?c[2]:function(){},this.stop=!1,i=0;case 5:if(!(i<t)){e.next=15;break}if(!this.stop){e.next=8;break}return e.abrupt("break",15);case 8:return this.__exeByGeneList(),o(this.score,this.rect,this.position,i),e.next=12,a(n);case 12:i++,e.next=5;break;case 15:return e.abrupt("return");case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"resetGame",value:function(e){this.stop=!0,this.rect=e,this.position=[0,0],this.score=0}}]),e}();e.exports={Robi:u}}},[[28,1,2]]]);
//# sourceMappingURL=main.3280a28f.chunk.js.map