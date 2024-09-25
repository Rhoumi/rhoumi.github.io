console.log("prompt.js");

// Prompt object
Prompt = function() {
  this.before_cursor = [];
  this.after_cursor = [];
  this.blinking = false;
  this.blink();
}

// Make the cursor blink
Prompt.prototype.blink = function(){
  this.blinking = !this.blinking;
  setTimeout(function(){this.blink()}.bind(this),500);
}

// Send commands to prompt with key values
Prompt.prototype.send = function(key){
  if (key.length == 1) {
    this.before_cursor.push(key);
  } else if (key == "ArrowLeft" && this.before_cursor.length) {
    if (this.before_cursor.length) this.after_cursor.unshift(this.before_cursor.pop());
  } else if (key == "ArrowRight" && this.after_cursor.length) {
    if (this.after_cursor.length) this.before_cursor.push(this.after_cursor.shift());
  } else if (key == "Backspace" && this.before_cursor.length) {
    this.before_cursor.pop();
  } else if (key == "Home") {
    while (this.before_cursor.length) {
      this.send("ArrowLeft");
    }
  } else if (key == "End") {
    while (this.after_cursor.length) {
      this.send("ArrowRight");
    }
  }
  this.blinking = true;
}

// Paste prompt content
Prompt.prototype.paste = function(str){
  while (this.before_cursor.length) this.before_cursor.pop();
  while (this.after_cursor.length) this.after_cursor.pop();
  let chars = str.split('');
  for (var i = 0; i < chars.length; i++) {
    this.before_cursor.push(chars[i]);
  }
  this.cursor = ' ';
}

// Empty prompt content
Prompt.prototype.clear = function(){
  while (this.before_cursor.length) this.before_cursor.pop();
  while (this.after_cursor.length) this.after_cursor.pop();
  this.cursor = ' ';
}

// Print prompt text content, if show_blink is true the output will contain cursor
Prompt.prototype.print = function(show_blink) {
  let before_cursor = this.before_cursor.join('');
  let after_cursor = this.after_cursor.join('');
  return this.blinking && show_blink ? before_cursor + '_' + after_cursor.slice(1) : before_cursor + after_cursor
}

/*
 
// Use example

let log = document.getElementById("log");
let prompt_output = document.getElementById("prompt_output");
let prompt = new Prompt(80);

document.addEventListener("keydown",function(e){
  if (e.key != "Enter") {
    prompt.send(e.key);
  } else {
    if ( prompt.print() == 'yes' ) {
      log.innerText = "Cool !";
    } else if ( prompt.print() == 'no') {
      log.innerText = "Not cool.";
    }
    prompt.clear();
  } 
});

function print_prompt() {
  prompt_output.innerText = prompt.print(true);
  setTimeout(print_prompt,17);
}

print_prompt();

*/
