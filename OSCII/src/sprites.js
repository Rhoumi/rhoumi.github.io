function import_sprites_sheets(sprites_sheets_names,sprites_sheets) {
  if (!sprites_sheets) sprites_sheets = [];
  let sprite = new Image();
  sprite.src = "./assets/"+sprites_sheets_names.shift()+".png";
  return new Promise( resolve => {
    sprite.onload = function() {
      if (!sprites_sheets_names.length) {
        sprites_sheets.push(sprite);
        resolve(sprites_sheets);
      } else {
        sprites_sheets.push(sprite);
        return resolve(import_sprites_sheets(sprites_sheets_names,sprites_sheets));
      }
    }
  });
}
