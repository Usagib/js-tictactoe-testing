!function(e){var n={};function t(l){if(n[l])return n[l].exports;var r=n[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(l,r,function(n){return e[n]}.bind(null,r));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var l=(e,n,t)=>({name:e,token:n,turn:t});let r,o;const u=(()=>{const e=[null,null,null,null,null,null,null,null,null];return{tiles:e,checkWinCondition:()=>{let n=!1;return null!=e[0]&&e[0]===e[1]&&e[1]===e[2]&&(n=!0),null!=e[3]&&e[3]===e[4]&&e[4]===e[5]&&(n=!0),null!=e[6]&&e[6]===e[7]&&e[7]===e[8]&&(n=!0),null!=e[0]&&e[0]===e[3]&&e[3]===e[6]&&(n=!0),null!=e[1]&&e[1]===e[4]&&e[4]===e[7]&&(n=!0),null!=e[2]&&e[2]===e[5]&&e[5]===e[8]&&(n=!0),null!=e[0]&&e[0]===e[4]&&e[4]===e[8]&&(n=!0),null!=e[6]&&e[6]===e[4]&&e[4]===e[2]&&(n=!0),n},checkDrawCondition:()=>{let n=!0;return e.includes(null)&&(n=!1),n},setTile:(n,t)=>(e[t]=n.token,!0),currentPlayer:(e,n)=>!0===e.turn?e:n,changeTurn:(e,n)=>{[e.turn,n.turn]=[n.turn,e.turn]}}})();let i=[];document.getElementById("gameStart").addEventListener("click",()=>{s()}),document.getElementById("btnReset").addEventListener("click",()=>{window.location.reload()});const c=()=>{[...document.querySelectorAll(".cell")].forEach(e=>{e.style.pointerEvents="none"})},d=()=>{for(let e=0;e<9;e+=1)document.getElementById("cell"+e).innerHTML="";document.getElementById("winner-text").innerHTML="",[...document.querySelectorAll(".cell")].forEach(e=>{e.style.pointerEvents="auto"})},m=()=>{for(let e=0;e<9;e+=1)i[e]=document.getElementById("cell"+e)},a=()=>{function e(e,n){e.addEventListener("click",()=>{r.turn?(e.innerHTML="X",u.tiles[n]="X"):(e.innerHTML="O",u.tiles[n]="O"),m(),r.turn?document.getElementById("info").innerText=r.name+" 's move":document.getElementById("info").innerText=o.name+" 's move",u.changeTurn(r,o),(()=>{const e=u.checkWinCondition(),n=u.checkDrawCondition();e&&(c(),document.getElementById("info").innerText="Congratulations!",document.getElementById("winner-text").innerText="Winner!",document.getElementById("btnReset").style.display="inline"),n&&(c(),document.getElementById("info").innerText="game over",document.getElementById("winner-text").innerText="Draw!",document.getElementById("btnReset").style.display="inline")})(),e.style.pointerEvents="none"})}for(let n=0;n<9;n+=1)e(i[n],n)},s=()=>{d(),r=l(document.getElementById("player01Name").value,"X",!0),o=l(document.getElementById("player02Name").value,"O",!1),document.getElementById("info").innerText=r.name+" 's move",m(),a(),document.getElementById("btnNewGame").style.display="none"}}]);