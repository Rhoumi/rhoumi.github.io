// CANVAS
var context;
function build_canvas() {
  while(document.body.children[0])document.body.removeChild(document.body.children[0]);
  let canvas = document.createElement("canvas");
  canvas.style.transformOrigin = "top left";
  canvas.style.imageRendering = "pixelated";
  canvas.style.transform = "scale("+scale+")";
  document.body.appendChild(canvas);
  canvas.width = Math.floor(window.innerWidth/scale);
  canvas.height = Math.floor(window.innerHeight/scale);
  context = canvas.getContext('2d');
  display_cols = Math.floor(window.innerWidth/size[0]/scale);
  display_rows = Math.floor(window.innerHeight/size[1]/scale);
}
