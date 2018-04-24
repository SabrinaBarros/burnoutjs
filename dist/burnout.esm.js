var createMap=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window).document.createElement("div");return r.style="\n    display: grid;\n    grid-template-columns: repeat("+t.cols+", "+n+"px);\n    grid-template-rows: repeat("+t.rows+", "+n+"px);\n    width: "+t.cols*n+"px;\n    height: "+t.rows*n+"px;\n    border: 1px solid;\n  ",r},createCamera=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window).document.createElement("div");return r.style="\n    width: "+t.cols*n+"px;\n    height: "+t.rows*n+"px;\n    border: solid 1px red;\n  ",r},stringifyPosition=function(t){return"grid-area: \n            "+t.rowStart+" / \n            "+t.columnStart+" /\n            "+t.rowEnd+" /\n            "+t.columnEnd},createBlock=function(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).document.createElement("div");return n.classList.add(t.className),n.style=stringifyPosition(t.position),n},createAvatar=function(t){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).document.createElement("div");return n.classList.add(t.className),n.style=stringifyPosition(t.position),n},moveUp=function(t){return{rowStart:t.rowStart-1,columnStart:t.columnStart,rowEnd:t.rowEnd-1,columnEnd:t.columnEnd}},moveDown=function(t){return{rowStart:t.rowStart+1,columnStart:t.columnStart,rowEnd:t.rowEnd+1,columnEnd:t.columnEnd}},moveLeft=function(t){return{rowStart:t.rowStart,columnStart:t.columnStart-1,rowEnd:t.rowEnd,columnEnd:t.columnEnd-1}},moveRight=function(t){return{rowStart:t.rowStart,columnStart:t.columnStart+1,rowEnd:t.rowEnd,columnEnd:t.columnEnd+1}},wasBumped=function(t,n){return n.some(function(n){var r=t.columnStart===n.columnStart,o=t.columnEnd===n.columnEnd,e=t.rowStart===n.rowStart,i=t.rowEnd===n.rowEnd;return r&&o&&(e&&i)})},stringifyTranslate=function(t){return"transform: translate("+t.x+"px, "+t.y+"px);"},keyPress=function(t,n){return t.which===n||t.keyCode===n},setKeyboardControls=function(t,n,r,o,e){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:window,a={currentAvatarPosition:t.startPosition,currentCameraPosition:{x:0,y:0}};i.addEventListener("keydown",function(i){if(keyPress(i,e.up)){var s=moveUp(a.currentAvatarPosition);if(wasBumped(s,r))return;a.currentCameraPosition.y+=o,n.style=n.style.cssText+stringifyTranslate(a.currentCameraPosition),t.ref.style=stringifyPosition(s),a.currentAvatarPosition=s}if(keyPress(i,e.down)){var c=moveDown(a.currentAvatarPosition);if(wasBumped(c,r))return;a.currentCameraPosition.y-=o,n.style=n.style.cssText+stringifyTranslate(a.currentCameraPosition),t.ref.style=stringifyPosition(c),a.currentAvatarPosition=c}if(keyPress(i,e.left)){var l=moveLeft(a.currentAvatarPosition);if(wasBumped(l,r))return;a.currentCameraPosition.x+=o,n.style=n.style.cssText+stringifyTranslate(a.currentCameraPosition),t.ref.style=stringifyPosition(l),a.currentAvatarPosition=l}if(keyPress(i,e.right)){var u=moveRight(a.currentAvatarPosition);if(wasBumped(u,r))return;a.currentCameraPosition.x-=o,n.style=n.style.cssText+stringifyTranslate(a.currentCameraPosition),t.ref.style=stringifyPosition(u),a.currentAvatarPosition=u}})},burnout=function(){var t={mapRef:null,viewRef:null,blocksRefs:[],collisionBlocksPositions:[],blockSize:null,avatar:{ref:null,startPosition:null}};return{defineMap:function(n){var r=createMap(n.map,n.blockSize),o=createCamera(n.view,n.blockSize);o.appendChild(r),t.viewRef=o,t.mapRef=r,t.blockSize=n.blockSize},defineBlock:function(n){var r=createBlock(n);n.collision&&t.collisionBlocksPositions.push(n.position),t.blocksRefs.push(r)},defineAvatar:function(n){var r=createAvatar(n);t.avatar.ref=r,t.avatar.startPosition=n.position},renderMap:function(n){t.blocksRefs.forEach(function(n){t.mapRef.appendChild(n)}),t.mapRef.appendChild(t.avatar.ref),n.appendChild(t.viewRef)},defineControls:function(n){n.keyboard&&setKeyboardControls(t.avatar,t.mapRef,t.collisionBlocksPositions,t.blockSize,n.keyboard)}}},burnout$1=burnout();export default burnout$1;
