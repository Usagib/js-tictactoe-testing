!function(e){var t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(l,i,function(t){return e[t]}.bind(null,i));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=n(1),i=n.n(l);console.log(i.a);const r=(()=>{let e,t;const n=[],l=(()=>{const e=()=>{[...document.querySelectorAll(".cell")].forEach(e=>{e.style.pointerEvents="auto"})};return{init:()=>{for(let e=0;e<9;e+=1)document.getElementById("cell"+e).innerHTML="";document.getElementById("winner-text").innerHTML="",e()},setCell:(e,t)=>{(void 0)[e]=t},blockCells:()=>{[...document.querySelectorAll(".cell")].forEach(e=>{e.style.pointerEvents="none"})},unblockCells:e}})(),r=()=>{[e.playerTurn,t.playerTurn]=[t.playerTurn,e.playerTurn],e.playerTurn?document.getElementById("info").innerText=e.playerName+" 's move":document.getElementById("info").innerText=t.playerName+" 's move"},o=()=>{const e=l.checkWinCondition(),t=l.checkDrawCondition();e&&(l.blockCells(),document.getElementById("info").innerText="Congratulations!",document.getElementById("winner-text").innerText="Winner!",document.getElementById("btnReset").style.display="inline"),t&&(l.blockCells(),document.getElementById("info").innerText="game over",document.getElementById("winner-text").innerText="Draw!",document.getElementById("btnReset").style.display="inline")};return{init:()=>{l.init(),e=i.a.newPlayer(document.getElementById("player01Name").value,"X",!0),t=i.a.newPlayer(document.getElementById("player02Name").value,"O",!1),document.getElementById("info").innerText=e.playerName+" 's move",(()=>{for(let e=0;e<9;e+=1)n[e]=document.getElementById("cell"+e)})()},turnEnd:r,moveTile:()=>{function t(t,n){t.addEventListener("click",()=>{e.playerTurn?t.innerHTML="X":t.innerHTML="O",l.setCell(n,t.innerHTML),r(),o(),t.style.pointerEvents="none"})}for(let e=0;e<9;e+=1)t(n[e],e)},checkResult:o}})();document.getElementById("gameStart").addEventListener("click",()=>{r.init(),r.moveTile(),document.getElementById("btnNewGame").style.display="none"}),document.getElementById("btnReset").addEventListener("click",()=>{window.location.reload()})},function(e,t){e.exports=()=>({player1:player1,player2:player2,board:{tiles:[null,null,null,null,null,null,null,null,null]},moveTile:(e,t,n)=>(t.tiles[e]=n.token,{board:t}),checkWinCondition:e=>{let t=!1;return null!=e.tiles[0]&&e.tiles[0]===e.tiles[1]&&e.tiles[1]===e.tiles[2]&&(t=!0),null!=e.tiles[3]&&e.tiles[3]===e.tiles[4]&&e.tiles[4]===e.tiles[5]&&(t=!0),null!=e.tiles[6]&&e.tiles[6]===e.tiles[7]&&e.tiles[7]===e.tiles[8]&&(t=!0),null!=e.tiles[0]&&e.tiles[0]===e.tiles[3]&&e.tiles[3]===e.tiles[6]&&(t=!0),null!=e.tiles[1]&&e.tiles[1]===e.tiles[4]&&e.tiles[4]===e.tiles[7]&&(t=!0),null!=e.tiles[2]&&e.tiles[2]===e.tiles[5]&&e.tiles[5]===e.tiles[8]&&(t=!0),null!=e.tiles[0]&&e.tiles[0]===e.tiles[4]&&e.tiles[4]===e.tiles[8]&&(t=!0),null!=e.tiles[6]&&e.tiles[6]===e.tiles[4]&&e.tiles[4]===e.tiles[2]&&(t=!0),t},checkDrawCondition:e=>{let t=!0;return e.tiles.includes(null)&&(t=!1),t}})}]);