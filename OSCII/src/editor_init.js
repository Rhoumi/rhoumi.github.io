// INIT

const size = [4,8];
var scale = Math.floor(window.innerHeight/32/size[1]);
let cols = 1920/size[0];
let rows = 1080/size[1];

ui.push(info);

document.addEventListener("keydown",function(e){
  editor_keydown(e);
});

document.addEventListener("keyup",function(e){
  editor_keyup(e);
});
