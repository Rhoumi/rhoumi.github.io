/* Glyphs */

const glyphs = {
  "code" : new Uint8Array(cols*rows*3),
  "typed" : new Uint8Array(cols*rows*3),
  "ui" : new Uint8Array(cols*rows*3),
  "visible" : new Uint8Array(cols*rows*3)
}

function get_glyph_pos(x,y,_cols,_rows) {
  if (!_cols) _cols = cols;
  if (!_rows) _rows = rows;
  if (x < 0 || x >= _cols || y < 0 || y >= _rows) {
    return -1;
  }
  return (_cols * y + x)*3;
}

function get_glyph_data(type,glyph_pos) {
  if (glyph_pos < 0) return false;
  return [
    glyphs[type][glyph_pos],
    glyphs[type][glyph_pos + 1],
    glyphs[type][glyph_pos + 2]
  ];
}

function is_glyph_transparent(glyph_data) {
  return !(!glyph_data[0] && !glyph_data[1] && !glyph_data[2]);
}

let glyphs_drawn_n = 0;

function set_glyph(type,x,y,bg,fg,glyph,_cols,_rows) {
  let glyph_pos = get_glyph_pos(x,y,_cols,_rows);
  let glyph_data = get_glyph_data(type,glyph_pos);
  if ( !glyph_data
   ||  glyph_data[0] == bg 
   &&  glyph_data[1] == fg 
   &&  glyph_data[2] == glyph) return false;
  glyphs[type][glyph_pos] = bg;
  glyphs[type][glyph_pos + 1] = fg;
  glyphs[type][glyph_pos + 2] = glyph;
  return true;
}

function fill_glyphs(type,bg,fg,glyph) {
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      set_glyph(type,x,y,bg,fg,glyph);
    }
  }
}

/* Cam */

var cam;

/* KEYS */

let fg_color = 0;
let bg_color = 11;
let sheet = 0;
let mode = 8;
let mode_names = ["Draw","Write","Move camera","Change color","Change sheet","Change step","Read","Code","Help"];
let control_down = false;
let step = 1;

function editor_keyup(e) {
  if (e.key == "Control") {
    control_down = false;
  }
}

/* Draw glyph */

function get_sprite_position(glyph) {
  let y = Math.floor(glyph/64);
  let x = glyph - y * 64;
  return [x,y];
}

function draw_glyph(bg,fg,x,y,glyph){
  let sprite_pos = get_sprite_position(glyph);
  context.fillStyle = colors[bg];
  context.fillRect(x*size[0],y*size[1],size[0],size[1]);
  context.drawImage(sprites[fg], size[0]*sprite_pos[0], size[1]*sprite_pos[1], size[0], size[1], x*size[0], y*size[1], size[0], size[1]);
}

var draw_n = 0;

function draw(frame) {
  let dir = Number.isInteger(frame/2);
  for (
  var y = dir ? cam[1] : (cam[1] + cam[3]); 
  dir ? (y < cam[1] + cam[3]) : (y > cam[1]); 
  dir ? (y++) : (y--)) {
    for ( var x = cam[0]; x < cam[0] + cam[2]; x++) {
      let rdm = 5000000 / (cam[2]*cam[3]) + Math.random() * (10000000 / (cam[2]*cam[3]));
      if (draw_n > rdm) continue;
      let glyph_pos = get_glyph_pos(x,y);
      let typed_data = get_glyph_data("typed",glyph_pos);
      let ui_data = get_glyph_data("ui",glyph_pos);
      let ui_draw = ui_data[0] || ui_data[1] || ui_data[2];
      var data = ui_draw ? ui_data : typed_data;
      let draw_need = set_glyph("visible",x-cam[0],y-cam[1],data[0],data[1],data[2]);
      if (draw_need && data) {
        draw_glyph(data[0],data[1],x-cam[0],y-cam[1],data[2]);
        draw_n++;
      }
    }
  }
}

/* UI */

// text

function text(txt,x,y,unset,fg,bg) {
  if (fg == undefined) fg = 0;
  if (bg == undefined) bg = 11;
  let lines = txt.split('\n');
  for (var l = 0; l < lines.length; l++) {
    let str = lines[l];
    for (var i = 0; i < str.length; i++) {
      set_glyph("ui",cam[0]+i+x,cam[1]+y+l,unset ? 0 : 20+bg,unset ? 0 : 20+fg,unset ? 0 : char_set.indexOf(str[i]));
    }
  }
}

/* Characters */

function write(str,x,y,fg,bg) {
  if (fg == undefined) fg = 0;
  if (bg == undefined) bg = 11;
  for (var i = 0; i < str.length; i++) {
    set_glyph("typed",i+x,y,20+bg,20+fg,char_set.indexOf(str[i]));
  }
}

/* Print */

function print(x,y,fg,bg,info,unset) {
  let str = String(info);
  for (var i = 0; i < str.length; i++) {
    set_glyph("ui",cam[0]+i+x,cam[1]+y,unset ? 0 : 20+bg,unset ? 0 : 20+fg,unset ? 0 : char_set.indexOf(str[i]));
  }
}

/* Instruments */

const O = [];

for (var i = 0; i < 100; i++) {
  O.push(new Instrument({}));
}

/* Code */

let sel_line = 0;
var code_lines = [];
var active_code_lines = [];
var force_code_lines = [];
var error_code_lines = [];
var temp_code_lines = [];
var temp_codes = [];
let code_clipboard = '';
let E = {};

for (var i = 0; i < rows-2; i++) {
  code_lines.push(new Prompt());
  active_code_lines.push(false);
  force_code_lines.push(false);
  error_code_lines.push(false);
  temp_code_lines.push(false);
  temp_codes.push(false);
}

/* Reader */

let readers_sel_w = 0;
let readers_sel_h = 0;
let reader_pos = 0;
let reader_speed = 10;
const readers = [];

function read(d){
  for (var i = 0; i < active_code_lines.length; i++) {
    if (force_code_lines[i]) force_code_lines[i] = false;
    if (!active_code_lines[i] || error_code_lines[i]) continue;
    try {
      if (temp_code_lines[i]) {
        eval(temp_codes[i]);
      } else {
        eval(code_lines[i].print());
      }
    } catch(e) {
      force_code_lines[i] = false;
      active_code_lines[i] = false;
      error_code_lines[i] = true;
    }
  }
}

function set_readers(unset) {
  for (var i = 0; i < readers.length; i++) {
    if (readers[i][3] != reader_pos) continue;
    let x = readers[i][0];
    let y = readers[i][1];
    let glyph_pos = get_glyph_pos(x,y);
    let typed_data = get_glyph_data("typed",glyph_pos);
    if (unset && patterns["every"](frame,[reader_speed])) {
      read(typed_data);
    }
    set_glyph("ui",x,y,unset ? 0 : typed_data[1],unset ? 0 : typed_data[0],unset ? 0 : typed_data[2]);
  }
}

function define_readers() {
  while (readers.length) readers.pop();
  readers_sel_w = cursors_sel_w;
  readers_sel_h = cursors_sel_h;
  for (var i = 0; i < cursors.length; i++) {
    let reader = [
      cursors[i][0] + cam[0],       cursors[i][1] + cam[1],
      cursors[i][0]-cursors[0][0],  cursors[i][0]-cursors[0][0]
    ];
    readers.push(reader);
  }
}

/* Cursors */

let cursors_sel_w = 1;
let cursors_sel_h = 1;
const cursors = [];

function move_cursors(x,y) {
  for (var i = 0; i < cursors.length; i++) {
    cursors[i][0] += x;
    cursors[i][1] += y;
  }
}

function set_cursors(unset) {
  for (var i = 0; i < cursors.length; i++) {
    let x = cursors[i][0] + cam[0];
    let y = cursors[i][1] + cam[1];
    let glyph_pos = get_glyph_pos(x,y);
    let typed_data = get_glyph_data("typed",glyph_pos);
    set_glyph("ui",x,y,unset ? 0 : typed_data[1],unset ? 0 : typed_data[0],unset ? 0 : typed_data[2]);
  }
}

let last_key_position = -1;

function type(key) {
  glyph = key == ' ' ? -1 : mode == 1 ? char_set.indexOf(key) : last_key_position+40*sheet;
  for (var i = 0; i < cursors.length; i++) {
    let x = cursors[i][0] + cam[0];
    let y = cursors[i][1] + cam[1];
    set_glyph("typed",x,y,bg_color+(mode == 1 ? 20 :0),fg_color+(mode == 1 ? 20 :0),glyph);
  }
  move_cursors(step,0);
}

function fill() {
  for (var i = 0; i < cursors.length; i++) {
    let data = get_glyph_data("typed",get_glyph_pos(cursors[i][0]+cam[0],cursors[i][1]+cam[1]));
    set_glyph("typed",cursors[i][0]+cam[0],cursors[i][1]+cam[1],bg_color + (data[0] >= 20 ? 20 : 0),fg_color + (data[1] >= 20 ? 20 : 0),data[2]);
  }
}

function copy() {
  for (var i = 0; i < cursors.length; i++) {
    let data = get_glyph_data("typed",get_glyph_pos(cursors[i][0]+cam[0],cursors[i][1]+cam[1]));
    if (data) {
      cursors[i][2] = [data[0],data[1],data[2]];
    }
  }
}

function put_in_memory(){
  let memory = [];
  for (var i = 0; i < cursors.length; i++) {
    let glyph_pos = get_glyph_pos(cursors[i][0]+cam[0],cursors[i][1]+cam[1]);
    let data = get_glyph_data("typed",glyph_pos);
    memory.push([
      [glyph_pos    , data[0]],
      [glyph_pos + 1, data[1]],
      [glyph_pos + 2, data[2]]
    ])
  }
  past_memory.push(memory);
}

function paste() {
  for (var i = 0; i < cursors.length; i++) {
    if (!cursors[i][2]) continue;
    set_glyph("typed",cursors[i][0]+cam[0],cursors[i][1]+cam[1],cursors[i][2][0],cursors[i][2][1],cursors[i][2][2]);
  }
}

function paste_zone(zone,start_x,start_y) {
  let w = zone[zone.length-2];
  let h = zone[zone.length-1];
  let x = 0;
  let y = 0;
  for (var i = 0; i < w*h; i++) {
    y = Math.floor(i/w);
    x = i - y*w;
    set_glyph("typed",start_x+x,start_y+y,zone[i*3],zone[i*3+1],zone[i*3+2]);
  }
}

function save_zone() {
  let w = cursors_sel_w;
  let h = cursors_sel_h;
  let start_x = cursors[0][0]+cam[0];
  let start_y = cursors[0][1]+cam[1];
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      let data = get_glyph_data("typed",get_glyph_pos(start_x+x,start_y+y));
      if (data) {
        set_glyph("export",x,y,data[0],data[1],data[2],w,h);
      }
    }
  }
}

function save_sprite() {
  let w = cursors_sel_w;
  let h = cursors_sel_h;
  let start_x = cursors[0][0]+cam[0];
  let start_y = cursors[0][1]+cam[1];
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      let data = get_glyph_data("typed",get_glyph_pos(start_x+x,start_y+y));
      if (data) {
        data[0] = data[0] == 13 ? 200 :
                  data[0] ==  7 ? 201 :
                  data[0] == 14 ? 202 :
                  data[0] ==  1 ? 203 :
                  data[0] == 10 ? 204 :
                  data[0] == 17 ? 205 :
                  data[0] == 16 ? 206 :
                  data[0] ==  6 ? 207 :
                  data[0] == 18 ? 208 :
                  data[0] ==  8 ? 209 :
                  data[0] ==  9 ? 210 : data[0];
        data[1] = data[1] == 13 ? 200 :
                  data[1] ==  7 ? 201 :
                  data[1] == 14 ? 202 :
                  data[1] ==  1 ? 203 :
                  data[1] == 10 ? 204 :
                  data[1] == 17 ? 205 :
                  data[1] == 16 ? 206 :
                  data[1] ==  6 ? 207 :
                  data[1] == 18 ? 208 :
                  data[1] ==  8 ? 209 :
                  data[1] ==  9 ? 210 : data[1];
        set_glyph("sprite",x,y,data[0],data[1],data[2],w,h);
      }
    }
  }
}

function resize_selection(e) {
  if (e.key == "ArrowLeft") {
    for (var j = 0; j < step; j++) {
      let max_x = -Infinity;
      for (var i = 0; i < cursors.length; i++) {
        if (cursors[i][0] > max_x) max_x = cursors[i][0];
      }
      let new_pos = []
      for (var i = 0; i < cursors.length; i++) {
        if (cursors[i][0] == max_x && i) {
          cursors.splice(i,1);
          i--;
        }
      }
    }
    cursors_sel_w = cursors.length == 1 ? 1 : cursors_sel_w - step;
    cursors_sel_h = cursors.length == 1 ? 1 : cursors_sel_h;
  }
  if (e.key == "ArrowUp") {
    for (var j = 0; j < step; j++) {
      let max_y = -Infinity;
      for (var i = 0; i < cursors.length; i++) {
        if (cursors[i][1] > max_y) max_y = cursors[i][1];
      }
      let new_pos = []
      for (var i = 0; i < cursors.length; i++) {
        if (cursors[i][1] == max_y && i) {
          cursors.splice(i,1);
          i--;
        }
      }
    }
    cursors_sel_w = cursors.length == 1 ? 1 : cursors_sel_w;
    cursors_sel_h = cursors.length == 1 ? 1 : cursors_sel_h - step;
  }
  if (e.key == "ArrowRight") {
    for (var j = 0; j < step; j++) {
      let max_x = -Infinity;
      for (var i = 0; i < cursors.length; i++) {
        if (cursors[i][0] > max_x) max_x = cursors[i][0];
      }
      let new_pos = []
      for (var i = 0; i < cursors.length; i++) {
        if (cursors[i][0] == max_x) {
          new_pos.push([cursors[i][0]+1,cursors[i][1],false]);
        }
      }
      for (var i = 0; i < new_pos.length; i++) {
        cursors.push([new_pos[i][0],new_pos[i][1],false]);
      }
    }
    cursors_sel_w += step;
  }
  if (e.key == "ArrowDown") {
    for (var j = 0; j < step; j++) {
      let max_y = -Infinity;
      for (var i = 0; i < cursors.length; i++) {
        if (cursors[i][1] > max_y) max_y = cursors[i][1];
      }
      let new_pos = []
      for (var i = 0; i < cursors.length; i++) {
        if (cursors[i][1] == max_y) {
          new_pos.push([cursors[i][0],cursors[i][1]+1,false]);
        }
      }
      for (var i = 0; i < new_pos.length; i++) {
        cursors.push([new_pos[i][0],new_pos[i][1],false]);
      }
    }
    cursors_sel_h += step;
  }
}

/* Render */

let frame = 0;

function render() {
  
  for (var i = 0; i < ui.length; i++) {
    ui[i](frame,false);
  }

  let past_draw_n = draw_n;
  draw_n = 0;
  
  draw(frame);
  
  for (var i = 0; i < ui.length; i++) {
    ui[i](frame,true);
  }
  
  frame++;
}

// LOAD
let input = document.createElement("input");
input.type = "file";
//input.accept = ".png";
input.addEventListener("change",function(e){
  let file = input.files[0];
  let fr = new FileReader();
  fr.addEventListener("load", function(){
    glyphs["typed"] = new Uint8Array(_base64ToArrayBuffer(String(fr.result).slice("data:application/octet-stream;base64,".length)));
  }.bind(this.sprites), false);
  fr.readAsDataURL(file); 
});

let zone_input = document.createElement("input");
zone_input.type = "file";
zone_input.addEventListener("change",function(e){
  let file = zone_input.files[0];
  let fr = new FileReader();
  fr.addEventListener("load", function(){
    paste_zone( 
      new Uint8Array(_base64ToArrayBuffer(String(fr.result).slice("data:application/octet-stream;base64,".length))),
      cursors[0][0]+cam[0],cursors[0][1]+cam[1]
    );
  }.bind(this.sprites), false);
  fr.readAsDataURL(file); 
});

// SAVE
function arrayBufferToBase64(Arraybuffer, Filetype, fileName) {

  // ADD CODE to ArrayBuffer
  for (var i = 0; i < code_lines.length; i++) {
    //let str = '';
    let code_line = code_lines[i].print();
    for (var x = 0; x < cols; x++) {
      let char_code = code_line[x] && code_line[x] != ' ' ? char_set.indexOf(code_line[x]) : 255;
      console.log(char_code);
      //str = code_line[x] ? str + code_line[x] : str + ' ';
    }
  }
  // Regular
  let binary = '';
  const bytes = new Uint8Array(Arraybuffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const file = window.btoa(binary);
  const mimType = Filetype === 'pdf' ? 'application/pdf' : Filetype === 'xlsx' ? 'application/xlsx' :
    Filetype === 'pptx' ? 'application/pptx' : Filetype === 'csv' ? 'application/csv' : Filetype === 'docx' ? 'application/docx' :
      Filetype === 'jpg' ? 'application/jpg' : Filetype === 'png' ? 'application/png' : '';
  const url = `data:${mimType};base64,` + file;

  // download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// PAttern

function pattern(x,y,w,h,pattern,offset_x,offset_y,revert_ox,revert_oy) {
    while (offset_y--){
      if (revert_oy) {
        pattern.unshift(pattern.pop());
      } else {
        pattern.push(pattern.shift());
      }
    }
    while (offset_x--){
      let revert_ox_i = 0;
      for (var py = 0; py < pattern.length;py++) {
        if (revert_ox[revert_ox_i]) {
          pattern[py].unshift(pattern[py].pop());
        } else {
          pattern[py].push(pattern[py].shift());
        }
        revert_ox_i = revert_ox_i < revert_ox.length-1 ? revert_ox_i + 1 : 0;
      }
    }
  let pattern_xi = 0;
  let pattern_yi = 0;
  for (var y_i = 0; y_i < h; y_i++) {
    pattern_yi = !y_i ? 0 : pattern_yi;
    for (var x_i = 0; x_i < w; x_i++) {
      pattern_xi = !x_i ? 0 : pattern_xi;
      set_glyph("typed",x+x_i,y+y_i,pattern[pattern_yi][pattern_xi][0],pattern[pattern_yi][pattern_xi][1],pattern[pattern_yi][pattern_xi][2]);
      pattern_xi = !x_i ? 0 : pattern_xi;
      pattern_xi = pattern_xi < pattern[pattern_yi].length-1 ? pattern_xi + 1 : 0;
    }
    pattern_yi = pattern_yi < pattern.length-1 ? pattern_yi + 1 : 0;
  }
}

/* Init */

import_sprites_sheets(sprites_sheets_names).then(function(sprites_sheets) {
  build_canvas();
  cursors.push([Math.floor(display_cols/2),Math.floor(display_rows/2),false]);
  cam = [0,0/*Math.floor(display_cols/2),Math.floor(display_rows/2)*/,display_cols,display_rows];
  for (var i in sprites_sheets) {
    sprites[i] = sprites_sheets[i];
  }
  fill_glyphs("typed",11,0,-1);
  help_x = Math.floor((display_cols-80)/2);
  help_y = 1;
  window.setInterval(render,17);
});
