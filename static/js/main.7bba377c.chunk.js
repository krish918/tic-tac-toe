(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(4),r=n(2),i=n(3),a=n(6),c=n(5),o=n(1),l=n(8),u=n.n(l),h=(n(13),n(0)),v=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t="square",n=this.props.winningMove,r=this.props.id;if(null!==n){var i=Object(s.a)(n,3),a=i[0],c=i[1],o=i[2];r!==a&&r!==c&&r!==o||(t="square winner")}return Object(h.jsx)("button",{className:t,onClick:function(){return e.props.onClick()},children:this.props.value})}}]),n}(o.Component),j=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"renderButton",value:function(e){var t=this;return Object(h.jsx)(v,{id:e,winningMove:this.props.winningMove,onClick:function(){return t.props.onClick(e)},value:this.props.square[e]},e)}},{key:"render",value:function(){var e=this,t=this.props.square.map((function(t,n){return e.renderButton(n)}));return Object(h.jsx)("div",{className:"board",children:Object(h.jsx)("div",{className:"board-row",children:t})})}}]),n}(o.Component);var d=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(s.a)(t[n],3),i=r[0],a=r[1],c=r[2];if(e[i]&&e[i]===e[a]&&e[a]===e[c])return{winner:e[i],line:t[n]}}return{winner:null,line:null}},b=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={history:[{square:Array(9).fill(null),rowcol:[null,null]}],move_number:0,nextPlayer:"X",isAscending:!0},s.ROW_COUNT=3,s}return Object(i.a)(n,[{key:"handleClick",value:function(e){console.log(e);var t=this.state.history.slice(0,this.state.move_number+1),n=t[t.length-1].square.slice(),s=d(n).winner;if(null===n[e]&&null===s){var r="X"===this.state.nextPlayer?"O":"X";n[e]=this.state.nextPlayer;var i=e%this.ROW_COUNT+1,a=Math.floor(e/this.ROW_COUNT)+1;this.setState({history:t.concat({square:n,rowcol:[a,i]}),nextPlayer:r,move_number:t.length})}}},{key:"toggleMoveOrder",value:function(){this.setState({isAscending:!this.state.isAscending})}},{key:"gotoMove",value:function(e){console.log(e),this.setState({move_number:e,nextPlayer:e%2===0?"X":"O"})}},{key:"renderHistoryButtons",value:function(e){var t=this,n=this.state.isAscending?e:e.slice().reverse();return n.map((function(e,r){var i=t.state.isAscending?r:n.length-r-1,a="Goto ",c="move-button";i===t.state.move_number&&(a="",c="move-button active-move");var o=a+(0===i?"Beginning":"Move #"+i),l=Object(s.a)(e.rowcol,2),u=l[0],v=l[1],j=null!==u?"[Row: "+u+" Col: "+v+"]":"";return Object(h.jsxs)("li",{className:"move-list",children:[Object(h.jsx)("div",{className:"move-bottom-container",children:Object(h.jsx)("button",{className:c,onClick:function(){return t.gotoMove(i)},children:o})}),Object(h.jsx)("div",{className:"rowcol",children:j})]},i)}))}},{key:"render",value:function(){var e=this,t=this.state.history,n=t[this.state.move_number],s=Object(h.jsx)("ul",{className:"game-status",children:Object(h.jsxs)("li",{children:["Next Player:","X"===this.state.nextPlayer?" X":" O"]})}),r=n.square.length,i=d(n.square),a=i.winner,c=i.line;null!=a?s=Object(h.jsxs)("div",{className:"game-status winner",children:["WINNER: Player ",a]}):this.state.move_number===r&&(s=Object(h.jsx)("div",{className:"game-status draw",children:"GAME DRAW"}));var o=this.renderHistoryButtons(t);return Object(h.jsxs)("div",{className:"game-container",children:[Object(h.jsxs)("div",{className:"game-row",children:[Object(h.jsx)("h2",{className:"game-title",children:"Tic-Tac-Toe"}),Object(h.jsx)(j,{square:n.square,winningMove:c,onClick:function(t){return e.handleClick(t)}}),Object(h.jsx)("div",{children:s})]}),Object(h.jsxs)("div",{className:"game-row history-pane",children:[Object(h.jsx)("h4",{className:"move-history",children:"Move History"}),Object(h.jsx)("ol",{className:"history-container",children:o}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"toggle-button",onClick:function(){return e.toggleMoveOrder()},children:"Toggle Move Order"})})]}),Object(h.jsx)("div",{className:"game-row dummy"})]})}}]),n}(o.Component);u.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7bba377c.chunk.js.map