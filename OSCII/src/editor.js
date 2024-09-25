// EDITOR
/* Info */
let help_x, help_y;

function info(frame,unset) {
  if (mode == 8) {
text(
//"                                                                                \n"+
//"                                                                                \n"+
//"          __ __ _____ _____       _____ _____       _____ _____ _____           \n"+
//"         |  |  |     | | | |     |     |     |     |  |  |   __|   __|          \n"+
//"         |     |  |  |     |     |_   _|  |  |     |  |  |__   |   __|          \n"+
//"         |__|__|_____|__|__|      |___||_____|     |_____|_____|_____|          \n"+
//"                   _____ _____ _____ _____ _____       _____                    \n"+
//"                  |     |   __|     |     |     |     |     |                   \n"+
//"                  |  |  |__   |   --||   | |   |      |__/__|                   \n"+
//"                  |_____|_____|_____|_____|_____|       |__|                    \n"+
"                                                                                \n"+
" ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  \n"+
" :::: ___________ : ___________ : ___________ : ___________ : ___________ ::::  \n"+
" ::::|  _______  |:|  _________|:|  _________|:|____   ____|:|____   ____|::::  \n"+
" ::::| |:::::::| |:| |_________ :| |::::::::::::::::| |:::::::::::| |:::::::::  \n"+
" ::::| |:::::::| |:|_________  |:| |::::::::::::::::| |:::::::::::| |:::::::::  \n"+
" ::::| |_______| |: _________| |:| |_________ : ____| |____ : ____| |____ ::::  \n"+
" ::::|___________|:|___________|:|___________|:|___________|:|___________|::::  \n"+
" ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  \n"+
"                                                                                \n"+
"  (c) Adel Faure 2024 contact@adelfaure.net                                     \n"+
"                                                                                \n"+
"                                                                                \n"+
"  OSCII is a web software for drawing and live-coding textmode visuals          \n"+
"  and sounds                                                                    \n"+
"                                                                                \n"+
"  WARNING : You are curently using the unstable QWERTY fork version of OSCII    \n"+
"  Real version is available at https://adelfaure.net/tools/liblab               \n"+
"  this version was clumsily made by ralt144mi                                   \n"+
"                                                                                \n"+
"  Other point : saving file will currently only save drawing, everything in     \n"+
"  code will be lost.                                                            \n"+
"                                                                                \n"+
"  Git repository : https://gitlab.com/adelfaure/oscii.git                       \n"+
"                                                                                \n"+
"                                                                                \n"+
"                 Use arrows keys to scroll and move this text                   \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"                         _____ _____ ____  _____ __ __                          \n"+
"                        |     |     |    \\|   __|  |  |                         \n"+
"                         |   ||  |  |  |  |   __|-   -|                         \n"+
"                        |_____|__|__|____/|_____|__|__|                         \n"+
"                                                                                \n"+
"     I. Interface                                                               \n"+
"    II. Modes                                                                   \n"+
"   III. Keys                                                                    \n"+
"    IV. Read and code                                                           \n"+
"     V. Variables                                                               \n"+ 
"    VI. Functions                                                               \n"+
"   VII. Instruments                                                             \n"+
"  VIII. License                                                                 \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"             _____ _____ _____ _____ _____ _____ _____ _____ _____              \n"+
"            |     |     |     |   __|  _  |   __|  _  |     |   __|             \n"+
"             |   ||  |  |_   _|   __|    _|   __|     |   --|   __|             \n"+
"            |_____|__|__||___||_____|__\\__|__|  |__|__|_____|_____|             \n"+
"                                                                                \n"+
"                                                                                \n"+
"  Fig.1 : Diplayed infos at top of the screen                                   \n"+
"                                                                                \n"+
"         A           B                                                          \n"+
"         |           |                                                          \n"+
"                                                                                \n"+
"    Mode 123456789 : Help                                                       \n"+
"    step = 1; cursor = 39,19; data = 11,0,255; cam = 0,0; sel = 1,1; scale = 3; \n"+
"                                                                                \n"+
"    |         |               |                |          |          |          \n"+
"    C         D               E                F          G          H          \n"+
"                                                                                \n"+
"    A. Modes numbers and selected mode                                          \n"+
"    B. Name of the selected mode                                                \n"+
"    C. Current step, value by which will move cursor and selection              \n"+
"    D. Cursor coordinates                                                       \n"+
"    E. Data values of the character under the cursor. First value is            \n"+
"    background color code, second is foreground color code, third is            \n"+
"    glyph code.                                                                 \n"+
"    F. Camera coordinates                                                       \n"+
"    G. Selection width and height                                               \n"+
"    H. Zoom level                                                               \n"+
"                                                                                \n"+
" Fig.2 : Table shown in draw and color mode in top left of the screen           \n"+
"                                                                                \n"+
"    A                  A. Keyboard keys                                         \n"+
"    |                  B. Shapes or colors corresponding to keys                \n"+
"                                                                                \n"+
"    1234567890                                                                  \n"+
"    ##########  --B                                                             \n"+
"    AZERTYUIOP                                                                  \n"+
"    ##########                                                                  \n"+
"    QSDFGHJKLM                                                                  \n"+
"    ##########                                                                  \n"+
"    WXCVBN,;:!                                                                  \n"+
"    ##########                                                                  \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"                         __ __ _____ ____  _____ _____                          \n"+
"                        |  V  |     |    \\|   __|   __|                         \n"+
"                        |     |  |  |  |  |   __|__   |                         \n"+
"                        |__V__|_____|____/|_____|_____|                         \n"+
"                                                                                \n"+
"                                                                                \n"+
"  Keys     | Mode               | Purpose                                       \n"+
"  ---------|--------------------|---------------------------------------------  \n"+
"  Ctrl + 1 | Draw(1)            | Drawing with semi-graphic characters          \n"+
"  Ctrl + 2 | Write(2)           | Writing text                                  \n"+
"  Ctrl + 3 | Camera(3)          | Moving camera, zomming in and out             \n"+
"  Ctrl + 4 | Color(4)           | Change drawing and writing color              \n"+
"  Ctrl + 5 | Sheet(5)           | Change semi-graphic sheet                     \n"+
"  Ctrl + 6 | Step(6)            | Change step value                             \n"+
"  Ctrl + 7 | Read(7)            | Define reading zone                           \n"+
"  Ctrl + 8 | Code(8)            | Add code to execute for the reader            \n"+
"  Ctrl + 9 | Help(9) // current | Display this page                             \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"                            __ __ _____ _____ _____                             \n"+
"                           |  |  |   __|  |  |   __|                            \n"+
"                           |    -|   __|_ | _|__   |                            \n"+
"                           |__|__|_____||___||_____|                            \n"+
"                                                                                \n"+
"                                                                                \n"+
"  Modes            | Keys       | Function                                      \n"+
"  -----------------|------------|---------------------------------------------  \n"+
"  Any              | Ctrl + S   | save to file                                  \n"+
"                   |            |                                               \n"+
"  Any              | Ctrl + L   | load file (might need to press Enter before)  \n"+
"                   |            |                                               \n"+
"  Draw(1)          | 1234567890 | type shapes                                   \n"+
"                   | AZERTYUIOP |                                               \n"+
"                   | QSDFGHJKLM |                                               \n"+
"                   | WXCVBN,;:! |                                               \n"+
"                   |            |                                               \n"+
"  Write(2)         | Any        | write characters                              \n"+
"                   |            |                                               \n"+
"  Color(4)         | 1234567890 | change foreground color                       \n"+
"                   | AZERTYUIOP |                                               \n"+
"                   |            |                                               \n"+
"  Color(4)         | QSDFGHJKLM | change background color                       \n"+
"                   | WXCVBN,;:! |                                               \n"+
"                   |            |                                               \n"+
"  Sheet(5)         | 12345      | change sheet                                  \n"+
"                   |            |                                               \n"+
"  Step(6)          | 1234567890 | change step value                             \n"+
"                   | AZERTYUIOP |                                               \n"+
"                   | QSDFGHJKLM |                                               \n"+
"                   | WXCVBN,;:! |                                               \n"+
"                   |            |                                               \n"+
"  Help(9)          | Arrow keys | move text                                     \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Arrow keys | move cursor                                   \n"+
"  Read(7) Code(8)  |            |                                               \n"+
"                   |            |                                               \n"+
"  Camera(3)        | Arrow keys | move camera                                   \n"+
"                   |            |                                               \n"+
"  Camera(3)        | I          | zoom in                                       \n"+
"                   |            |                                               \n"+
"  Camera(3)        | O          | zoom out                                      \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Ctrl +     | change selection size                         \n"+
"  Read(7)          | Arrow keys |                                               \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Ctrl + C   | copy selection                                \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Ctrl + V   | paste selection                               \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Ctrl + P   | pick color                                    \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Ctrl + I   | invert foreground and background color        \n"+
"  Color(3)         |            |                                               \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Ctrl + F   | fill selection foreground and background      \n"+
"                   |            | with current colors                           \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Ctrl + Z   | Undo                                          \n"+
"                   |            |                                               \n"+
"  Draw(1) Write(2) | Ctrl + Y   | Redo                                          \n"+
"                   |            |                                               \n"+
"  Read(7)          | Spacebar   | Start to read current selection               \n"+
"                   |            |                                               \n"+
"  Code(8)          | Enter      | Activate / deactivate current code line       \n"+
"                   |            |                                               \n"+
"  Code(8)          | Ctrl +     | Add an empty line                             \n"+
"                   | Enter      |                                               \n"+
"                   |            |                                               \n"+
"  Code(8)          | Escape     | Execute current code line                     \n"+
"                   |            |                                               \n"+
"  Code(8)          | Ctrl +     | Move current line up                          \n"+
"                   | Up Arrow   |                                               \n"+
"                   |            |                                               \n"+
"  Code(8)          | Ctrl +     | Move current line down                        \n"+
"                   | Down Arrow |                                               \n"+
"                                                                                \n"+
"  IMPORTANT : Except in write and code mode, keys are not case sensitive        \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"   _____ _____ _____ ____      _____ _____ ____      _____ _____ ____  _____    \n"+
"  |  _  |   __|  _  |    \\    |  _  |     |    \\    |     |     |    \\|   __|   \n"+
"  |    _|   __|     |  |  |   |     |  |  |  |  |   |   --|  |  |  |  |   __|   \n"+
"  |__\\__|_____|__|__|____/    |__|__|__|__|____/    |_____|_____|____/|_____|   \n"+
"                                                                                \n"+
"                                                                                \n"+
"  Reader mode purpose is to define zones to \"read\". That mean that each       \n"+
"  codeline written in Code(8) will be executed for each character in the        \n"+
"  defined zone. The zones are read from left to right col by col.               \n"+
"                                                                                \n"+
"  To define such a zone, move the cursor to place the upper left corner of the  \n"+
"  zone, define its size with Ctrl + Arrows keys and press spacebar to confirm   \n"+
"  its placement. Only one zone can be defined at a time, precedent one will be  \n"+
"  erased by the new one.                                                        \n"+
"                                                                                \n"+
"  While by default each character read will trigger every activated code line,  \n"+
"  the way to filter executed code by character is the `d` variable. d[0] being  \n"+
"  character color, d[1] background color, d[2] character code. You can find     \n"+
"  the character under cursor data information on the interface                  \n"+
"  `data = 11,0,255`, 11 being black color code of background, 0 being white     \n"+
"  color code and 255 being empty character.                                     \n"+
"                                                                                \n"+
"  For example :                                                                 \n"+
"                                                                                \n"+
"    - if (d[2] != 255) O[0].play();                                             \n"+
"                                                                                \n"+
"  Will play the sound from the first oscillator of the O[0-99] list.            \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"             _____ __ __ _____ _____ _____ _____ _____ _____ _____              \n"+
"            |   __|  |  |     |     |     |     |     |     |   __|             \n"+
"            |   __|  |  |  |  |   --|_   _||   ||  |  |  |  |__   |             \n"+
"            |__|  |_____|__|__|_____||___||_____|_____|__|__|_____|             \n"+
"                                                                                \n"+
"                                                                                \n"+
"  write(A,B,C,D,E)                                                              \n"+
"                                                                                \n"+
"    Do : write a message at a given position                                    \n"+
"                                                                                \n"+
"    Arguments :                                                                 \n"+
"                                                                                \n"+
"    A. Message, must be a string                                                \n"+
"    B. X position, must be integer                                              \n"+
"    C. Y position, must be integer                                              \n"+
"    D. Message foreground color, optional, white by default                     \n"+
"    E. Message background color, optional, black by default                     \n"+
"                                                                                \n"+
"  s(A)                                                                          \n"+
"                                                                                \n"+
"    Do : parse value to string                                                  \n"+
"                                                                                \n"+
"    Arguments :                                                                 \n"+
"                                                                                \n"+
"    A. Anything that can be converted to string                                 \n"+
"                                                                                \n"+
"  sg(A,B,C,D,E)                                                                 \n"+
"                                                                                \n"+
"    Do : set glyph at position                                                  \n"+
"                                                                                \n"+
"    Arguments :                                                                 \n"+
"                                                                                \n"+
"    A. Glyph code [0-199]                                                       \n"+
"    B. X position, must be integer                                              \n"+
"    C. Y position, must be integer                                              \n"+
"    D. Message foreground color, optional, white by default                     \n"+
"    E. Message background color, optional, black by default                     \n"+
"                                                                                \n"+
"  [array].i(A)                                                                  \n"+
"                                                                                \n"+
"    Do : check if array contain value, return true or false                     \n"+
"                                                                                \n"+
"    Arguments :                                                                 \n"+
"                                                                                \n"+
"    A. Value, string, integer, float, object etc.                               \n"+
"                                                                                \n"+
"  I(A)                                                                          \n"+
"                                                                                \n"+
"    Do : parse float to integer                                                 \n"+
"                                                                                \n"+
"    Arguments :                                                                 \n"+
"                                                                                \n"+
"    A. Float                                                                    \n"+
"                                                                                \n"+
"  II(A)                                                                         \n"+
"                                                                                \n"+
"    Do : check if integer, return true or false                                 \n"+
"                                                                                \n"+
"    Arguments :                                                                 \n"+
"                                                                                \n"+
"    A. Value, float or integer                                                  \n"+
"                                                                                \n"+
"  r(A,B)                                                                        \n"+
"                                                                                \n"+
"    Do : return random interger                                                 \n"+
"                                                                                \n"+
"    Arguments :                                                                 \n"+
"                                                                                \n"+
"    A. minimum value                                                            \n"+
"    B. maximum value                                                            \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"             __ __ _____ _____ _____ _____ _____ ___   _____ _____              \n"+
"            |  |  |  _  |  _  |     |  _  |  _  |   | |   __|   __|             \n"+
"            |  |  |     |    _||   ||     |  _ -|   |_|   __|__   |             \n"+
"             \\___/|__|__|__\\__|_____|__|__|_____|_____|_____|_____|             \n"+
"                                                                                \n"+
"                                                                                \n"+
"  E                                                                             \n"+
"                                                                                \n"+
"    Use : object that can be used as global, E[\"foo\"] = bar                   \n"+
"                                                                                \n"+
"  [A-G][0-9]                                                                    \n"+
"                                                                                \n"+
"    Use : tones frequency values, C4 = 261.63, A6 = 1760 etc.                   \n"+
"                                                                                \n"+
"  [A-G]s[0-9]                                                                   \n"+
"                                                                                \n"+
"    Use : semi-tones frequency values, Cs4 = 277.1, As6 = 1864.6 etc.           \n"+
"                                                                                \n"+
"  N[0-62]                                                                       \n"+
"                                                                                \n"+
"    Use : tones stored in an array, N[28] = C4, N[47] = A6 etc.                 \n"+
"                                                                                \n"+
"  Ns[0-107]                                                                     \n"+
"                                                                                \n"+
"    Use : tones and semi-tones in an array, Ns[51] = Cs4, N[83] = As6 etc.      \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"       _____ _____ _____ _____ _____ __ __ __ __ _____ _____ _____ _____        \n"+
"      |     |     |   __|     |  _  |  |  |  V  |   __|     |     |   __|       \n"+
"       |   ||  |  |__   |_   _|    _|  |  |     |   __|  |  |_   _|__   |       \n"+
"      |_____|__|__|_____||___||__\\__|_____|__V__|_____|__|__||___||_____|       \n"+
"                                                                                \n"+
"                                                                                \n"+
"  O[0-99].f                                                                     \n"+
"                                                                                \n"+
"    Use : change frequency of oscillators                                       \n"+
"                                                                                \n"+
"  O[0-99].g                                                                     \n"+
"                                                                                \n"+
"    Use : change gain of oscillators (float value)                              \n"+
"                                                                                \n"+
"  O[0-99].i                                                                     \n"+
"                                                                                \n"+
"    Use : change attack duration (in seconds, float value)                      \n"+
"                                                                                \n"+
"  O[0-99].o                                                                     \n"+
"                                                                                \n"+
"    Use : change release duration (in seconds, float value)                     \n"+
"                                                                                \n"+
"  O[0-99].l                                                                     \n"+
"                                                                                \n"+
"    Use : change length of oscillator notes (full gain duration, in seconds,    \n"+
"    float value)                                                                \n"+
"                                                                                \n"+
"  O[0-99].w                                                                     \n"+
"                                                                                \n"+
"    Use : change wave type of oscillator (\"'sine'\", \"'triangle'\", \"'square'\")   \n"+
"                                                                                \n"+
"  O[0-99].a                                                                     \n"+
"                                                                                \n"+
"    Use : change active state of oscillator (true or false)                     \n"+
"                                                                                \n"+
"  O[0-99].s                                                                     \n"+
"                                                                                \n"+
"    Use : change oscillator to sample player (\"'kick'\",\"'snare'\",\"'hit'\",       \n"+
"    \"'hat'\",\"'clap'\",\"'bell'\")                                                  \n"+
"                                                                                \n"+
"  O[0-99].p                                                                     \n"+
"                                                                                \n"+
"    Use : change pitch of sample player (float value)                           \n"+
"                                                                                \n"+
"  O[0-99].play()                                                                \n"+
"                                                                                \n"+
"    Use : play oscillator                                                       \n"+
"                                                                                \n"+
"  ...........................................................................   \n"+
"                                                                                \n"+
"                   ___   _____ _____ _____ _____ _____ _____                    \n"+
"                  |   | |     |     |   __|     |     |   __|                   \n"+
"                  |   |_ |   ||   --|   __|  |  |   --|   __|                   \n"+
"                  |_____|_____|_____|_____|__|__|_____|_____|                   \n"+
"                                                                                \n"+
"                                                                                \n"+
"  This program is free software: you can redistribute it and/or modify it       \n"+
"  under the terms of the GNU General Public License as published by the Free    \n"+
"  Software Foundation, either version 3 of the License, or (at your option)     \n"+
"  any later version.                                                            \n"+
"                                                                                \n"+
"  This program is distributed in the hope that it will be useful, but WITHOUT   \n"+
"  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or         \n"+
"  FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for     \n"+
"  more details.                                                                 \n"+
"                                                                                \n"+
"  You should have received a copy of the GNU General Public License along with  \n"+
"  this program.  If not, see <https://www.gnu.org/licenses/>.                   \n"+
"                                                                                "
,help_x,help_y,unset);
  }
  let info_col = Math.floor(display_cols/6);
  print(0,0,1,11,"Mode ",unset);
  for (var x = 1; x < 10; x++) {
    print(x+4,0,mode+1 == x ? 11 : 1,mode+1 == x ? 1 : 11,x,unset);
  }
  print(14,0,1,11,' : ',unset);
  print(17,0,fg_color,bg_color,mode_names[mode],unset);
  print(17,0,fg_color,bg_color,mode_names[mode],unset);
  let data = get_glyph_data("typed",get_glyph_pos(cursors[0][0]+cam[0],cursors[0][1]+cam[1]));
  print(0,1,1,11,"step = "+step+"; cursor = "+cursors[0][0]+','+cursors[0][1]+"; data = "+data[0]+','+data[1]+','+data[2]+';'+" cam = "+cam[0]+','+cam[1]+"; sel = "+cursors_sel_w+','+cursors_sel_h+"; scale = "+scale+';',unset);
  if (mode == 0) {
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 10; x++) {
        print(x,y*2+3,last_key_position == (y*10+x) ? 11 : 1,last_key_position == (y*10+x) ? 1 : 11,keys[(y*10+x)],unset);
        set_glyph("ui",cam[0]+x,y*2+4+cam[1],unset ? 0 : last_key_position == (y*10+x) ? fg_color : bg_color,unset ? 0 : last_key_position == (y*10+x) ? bg_color : fg_color,unset ? 0 : (y*10+x)+40*sheet); 
      }
    }
  }
  if (mode == 3) {
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 10; x++) {
        let fg = unset ? 0 : (y*10+x) < 20 ? (y*10+x) : (y*10+x)-20 == 11 ? 1 : 11;
        let bg = unset ? 0 : (y*10+x) < 20 ? (y*10+x) == 11 ? 1 : 11 : (y*10+x)-20;
        print(x,y*2+2,last_key_position == (y*10+x) ? 11 : 1,last_key_position == (y*10+x) ? 1 : 11,keys[(y*10+x)],unset);
        print(x,y*2+3,last_key_position == (y*10+x) ? bg : fg,last_key_position == (y*10+x) ? fg : bg,'A',unset);
        set_glyph("ui",cam[0]+x,y+11+cam[1],unset ? 0 : last_key_position == (y*10+x) ? fg_color : bg_color,unset ? 0 : last_key_position == (y*10+x) ? bg_color : fg_color,unset ? 0 : (y*10+x)+40*sheet); 
      }
    }
  }
  if (mode == 4) {
    print(0,2,1,11,"Sheet ",unset);
    for (var x = 1; x < 6; x++) {
      print(x+5,2,sheet+1 == x ? 11 : 1,sheet+1 == x ? 1 : 11,x,unset);
    }
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 10; x++) {
        set_glyph("ui",cam[0]+x,y+3+cam[1],unset ? 0 : last_key_position == (y*10+x) ? fg_color : bg_color,unset ? 0 : last_key_position == (y*10+x) ? bg_color : fg_color,unset ? 0 : (y*10+x)+40*sheet); 
      }
    }
  }
  set_readers(unset);
  if (mode == 0 || mode == 1 || mode == 6) {
    set_cursors(unset);
  }
  if (mode == 7) {
    for (var i = 0; i < code_lines.length; i++) {
      print(0,i+2, temp_code_lines[i] ? 5 : active_code_lines[i] ? 0 : force_code_lines[i] ? 6 : error_code_lines[i] ? 2 : 1,11,'- ' + code_lines[i].print(i == sel_line ? true : false),unset);
    }
  }
  if (unset && patterns["every"](frame,[reader_speed])) {
    reader_pos = reader_pos < readers_sel_w-1 ? reader_pos + 1 : 0;
  }
}

// KEYS

function editor_keydown(e) {
  e.preventDefault();
  e.stopPropagation();
  if (e.key == "Control") {
    control_down = true;
  }
  if (control_down) {
    let position = key_position[e.key];
    if (position < mode_names.length) mode = position;
    if (e.key.toLowerCase() == 'a'){
        //glyphs.typed = new Uint8Array(cols*rows*3);
        //fill_glyphs("typed",11,0,-1);
    }
    if (e.key.toLowerCase() == 'l'){
      input.click();
      control_down = false;
    }
    if (e.key.toLowerCase() == 's'){
      arrayBufferToBase64(glyphs["typed"], 'raw', 'liblab')
      control_down = false;
    }
    if (e.key.toLowerCase() == 'm'){
      zone_input.click();
      control_down = false;
    }
    if (e.key.toLowerCase() == 'r'){
      glyphs["sprite"] = new Uint8Array(cursors_sel_w*cursors_sel_h*3+2);
      glyphs["sprite"][glyphs["sprite"].length-2] = cursors_sel_w;
      glyphs["sprite"][glyphs["sprite"].length-1] = cursors_sel_h;
      save_sprite();
      console.log('['+glyphs["sprite"].join(',')+']');
    }
    if (e.key.toLowerCase() == 'e'){
      glyphs["export"] = new Uint8Array(cursors_sel_w*cursors_sel_h*3+2);
      glyphs["export"][glyphs["export"].length-2] = cursors_sel_w;
      glyphs["export"][glyphs["export"].length-1] = cursors_sel_h;
      save_zone();
      arrayBufferToBase64(glyphs["export"], 'raw', 'liblab')
    }
    if ( mode == 6 ) {
      resize_selection(e);
    }
    if ( mode == 0 || mode == 1 ) {
      resize_selection(e);
      if (e.key.toLowerCase() == "c") {
        copy();
      }
      if (e.key.toLowerCase() == "v") {
        put_in_memory();
        paste();
      }
      if (e.key.toLowerCase() == "p") {
        let data = get_glyph_data("typed",get_glyph_pos(cursors[0][0]+cam[0],cursors[0][1]+cam[1]));
        bg_color = data[0];
        fg_color = data[1];
      }
      if (e.key.toLowerCase() == "f") {
        put_in_memory();
        fill();
      }
      if (e.key.toLowerCase() == 'z' && past_memory.length) {
        let undo = past_memory.pop();
        let redo = [];
        for (var i = 0; i < undo.length; i++) {
          let memory = [];
          for (var j = 0; j < undo[i].length; j++) {
            memory.push([undo[i][j][0],glyphs["typed"][undo[i][j][0]]]);
            glyphs["typed"][undo[i][j][0]] = undo[i][j][1];
          }
          redo.push(memory);
        }
        futur_memory.push(redo);
      } 
      if (e.key.toLowerCase() == 'y' && futur_memory.length){
        let redo = futur_memory.pop();
        let undo = [];
        for (var i = 0; i < redo.length; i++) {
          let memory = [];
          for (var j = 0; j < redo[i].length; j++) {
            memory.push([redo[i][j][0],glyphs["typed"][redo[i][j][0]]]);
            glyphs["typed"][redo[i][j][0]] = redo[i][j][1];
          }
          undo.push(memory);
        }
        past_memory.push(undo);
      }
    }
    if ( mode == 0 || mode == 1 || mode == 3 || mode == 4 ) {
      if (e.key.toLowerCase() == "i") {
        let new_fg = bg_color;
        let new_bg = fg_color;
        bg_color = new_bg;
        fg_color = new_fg;
      }
    }
    if (mode == 7) {
      if (e.key == "c") {
        code_clipboard = code_lines[sel_line].print();
      } else if (e.key == "v") {
        code_lines[sel_line].paste(code_clipboard);
      } else if (e.key == "Enter") {
        if (code_lines[rows-3].print().length) return;
        new_code_lines = [];
        new_active_code_lines = [];
        new_force_code_lines = [];
        new_error_code_lines = [];
        new_temp_code_lines = [];
        new_temp_codes = [];
        for (var i = 0; i < rows-2; i++) {
          if (i < sel_line+1) {
            new_code_lines.push(code_lines[i]);
            new_active_code_lines.push(active_code_lines[i]);
            new_force_code_lines.push(force_code_lines[i]);
            new_error_code_lines.push(error_code_lines[i]);
            new_temp_code_lines.push(temp_code_lines[i]);
            new_temp_codes.push(temp_codes[i]);
          } else if (i == sel_line+1) {
            new_code_lines.push(new Prompt());
            new_active_code_lines.push(false);
            new_force_code_lines.push(false);
            new_error_code_lines.push(false);
            new_temp_code_lines.push(false);
            new_temp_codes.push(false);
          } else {
            new_code_lines.push(code_lines[i - 1]);
            new_active_code_lines.push(active_code_lines[i - 1]);
            new_force_code_lines.push(force_code_lines[i - 1]);
            new_error_code_lines.push(error_code_lines[i - 1]);
            new_temp_code_lines.push(temp_code_lines[i - 1]);
            new_temp_codes.push(temp_codes[i - 1]);
          }
        }
        code_lines        = new_code_lines       ;
        active_code_lines = new_active_code_lines;
        force_code_lines  = new_force_code_lines ;
        error_code_lines  = new_error_code_lines ;
        temp_code_lines   = new_temp_code_lines  ;
        temp_codes        = new_temp_codes       ;
        sel_line++;
      } else if (e.key == "ArrowUp") {
        //sel_line = sel_line > 0 ? sel_line - 1 : sel_line;
        if (sel_line > 0) {
          before_code_line = code_lines[sel_line-1];
          code_lines[sel_line-1] = code_lines[sel_line];
          code_lines[sel_line] = before_code_line;
          before_error_code_line = error_code_lines[sel_line-1];
          error_code_lines[sel_line-1] = error_code_lines[sel_line];
          error_code_lines[sel_line] = before_error_code_line;
          before_temp_code_line = temp_code_lines[sel_line-1];
          temp_code_lines[sel_line-1] = temp_code_lines[sel_line];
          temp_code_lines[sel_line] = before_temp_code_line;
          before_temp_code = temp_codes[sel_line-1];
          temp_codes[sel_line-1] = temp_codes[sel_line];
          temp_codes[sel_line] = before_temp_code;
          before_force_code_line = force_code_lines[sel_line-1];
          force_code_lines[sel_line-1] = force_code_lines[sel_line];
          force_code_lines[sel_line] = before_force_code_line;
          before_active_code_line = active_code_lines[sel_line-1];
          active_code_lines[sel_line-1] = active_code_lines[sel_line];
          active_code_lines[sel_line] = before_active_code_line;
          sel_line = sel_line - 1;
        }
      } else if (e.key == "ArrowDown") {
        if (sel_line < rows-2) {
          after_code_line = code_lines[sel_line+1];
          code_lines[sel_line+1] = code_lines[sel_line];
          code_lines[sel_line] = after_code_line;
          after_error_code_line = error_code_lines[sel_line+1];
          error_code_lines[sel_line+1] = error_code_lines[sel_line];
          error_code_lines[sel_line] = after_error_code_line;
          after_temp_code_line = temp_code_lines[sel_line+1];
          temp_code_lines[sel_line+1] = temp_code_lines[sel_line];
          temp_code_lines[sel_line] = after_temp_code_line;
          after_temp_code = temp_codes[sel_line+1];
          temp_codes[sel_line+1] = temp_codes[sel_line];
          temp_codes[sel_line] = after_temp_code;
          after_force_code_line = force_code_lines[sel_line+1];
          force_code_lines[sel_line+1] = force_code_lines[sel_line];
          force_code_lines[sel_line] = after_force_code_line;
          after_active_code_line = active_code_lines[sel_line+1];
          active_code_lines[sel_line+1] = active_code_lines[sel_line];
          active_code_lines[sel_line] = after_active_code_line;
          sel_line = sel_line + 1;
        }
        
        //let code_lines = [];
        //let active_code_lines = [];
        //let force_code_lines = [];
        //let error_code_lines = [];
        //let temp_code_lines = [];
        //let temp_codes = [];
        
      }
    }
  } else {
    if (mode == 8) {
      if (e.key == "ArrowLeft") {
        help_x += step;
      }
      if (e.key == "ArrowRight") {
        help_x -= step;
      }
      if (e.key == "ArrowUp") {
        help_y += step;
      }
      if (e.key == "ArrowDown") {
        help_y -= step;
      }
      if (e.key == "0") {
        help_y = -27;
      }
      if (e.key == "1") {
        help_y = -39;
      }
      if (e.key == "1") {
        help_y = -39;
      }
    } else if (mode == 0 || mode == 1 || mode == 6) {
      if (e.key.length == 1 && mode != 6) {
        put_in_memory();
        last_key_position = key_position[e.key];
        type(e.key);
      } else if (mode == 6 && e.key == ' ') {
        define_readers();
        if (!audio_context) var audio_context = new AudioContext();  
      } else {
        if (e.key == "ArrowLeft") {
          move_cursors(step*-1,0);
        }
        if (e.key == "ArrowRight") {
          move_cursors(step,0);
        }
        if (e.key == "ArrowUp") {
          move_cursors(0,step*-1);
        }
        if (e.key == "ArrowDown") {
          move_cursors(0,step);
        }
        if (e.key == "Backspace") {
          move_cursors(step*-1,0);
          type(' ');
          move_cursors(step*-1,0);
        }
      }
    } else if (mode == 7) {
      if (e.key == "PageUp") {
          var temp = code_lines.pop();
          code_lines.unshift(temp);
          temp = active_code_lines.pop();
          active_code_lines.unshift(temp);
          temp = force_code_lines.pop();
          force_code_lines.unshift(temp);
          temp = error_code_lines.pop();
          error_code_lines.unshift(temp);
          temp = temp_code_lines.pop();
          temp_code_lines.unshift(temp);
          temp = temp_codes.pop();
          temp_codes.unshift(temp);
      } else if (e.key == "PageDown") {
          var temp = code_lines.shift();
          code_lines.push(temp);
          temp = active_code_lines.shift();
          active_code_lines.push(temp);
          temp = force_code_lines.shift();
          force_code_lines.push(temp);
          temp = error_code_lines.shift();
          error_code_lines.push(temp);
          temp = temp_code_lines.shift();
          temp_code_lines.push(temp);
          temp = temp_codes.shift();
          temp_codes.push(temp);
      } else if (e.key == "ArrowUp") {
        sel_line = sel_line > 0 ? sel_line - 1 : sel_line;
      } else if (e.key == "ArrowDown") {
        sel_line = sel_line < rows-2 ? sel_line + 1 : sel_line;
      } else if (e.key == "Escape") {
        force_code_lines[sel_line] = true;
        try {
          eval(code_lines[sel_line].print());
        } catch(e) {
          force_code_lines[sel_line] = false;
          active_code_lines[sel_line] = false;
          error_code_lines[sel_line] = true;
        }
      } else if (e.key == "Enter") {
        if (temp_code_lines[sel_line]) {
          temp_code_lines[sel_line] = false;
        } else {
          active_code_lines[sel_line] = !active_code_lines[sel_line];
        }
        error_code_lines[sel_line] = false;
      } else if (e.key == "Delete") {
        if (active_code_lines[sel_line] && !temp_code_lines[sel_line]) {
          temp_codes[sel_line] = code_lines[sel_line].print();
          temp_code_lines[sel_line] = true;
        }
        code_lines[sel_line].clear();
      } else {
        if (active_code_lines[sel_line] && !temp_code_lines[sel_line]) {
          temp_codes[sel_line] = code_lines[sel_line].print();
          temp_code_lines[sel_line] = true;
        }
        code_lines[sel_line].send(e.key);
      }
    } else if (mode == 2) {
      if (e.key == "ArrowLeft") {
        cam[0] = cam[0] + step*-1 >= 0 ? cam[0] + step*-1 : cam[0];
      }
      if (e.key == "ArrowRight") {
        cam[0] = cam[0] + step < cols - display_cols ? cam[0] + step : cam[0];
      }
      if (e.key == "ArrowUp") {
        cam[1] = cam[1] + step*-1 >= 0 ? cam[1] + step*-1 : cam[1];
      }
      if (e.key == "ArrowDown") {
        cam[1] = cam[1] + step < rows - display_rows ? cam[1] + step : cam[1];
      }
      if (e.key.toLowerCase() == 'o'){
        if (scale == 1) return;
        scale--;
        fill_glyphs("visible",11,0,0);
        build_canvas();
        cam = [cam[0],cam[1],display_cols,display_rows];
      }
      if (e.key.toLowerCase() == 'i'){
        scale++;
        fill_glyphs("visible",11,0,0);
        build_canvas();
        cam = [cam[0],cam[1],display_cols,display_rows];
      }
    } else if (mode == 3) {
      if (e.key.length == 1) {
        last_key_position = key_position[e.key];
        if (last_key_position < 20) {
          fg_color = last_key_position;
        } else {
          bg_color = last_key_position-20;
        }
      }
    } else if (mode == 4) {
      if (e.key.length == 1) {
        last_key_position = key_position[e.key];
        if (last_key_position < 5) {
          sheet = last_key_position;
        }
      }
    } else if (mode == 5) {
      if (e.key.length == 1) {
        last_key_position = key_position[e.key];
        if (last_key_position > -1) {
          step = last_key_position+1;
        }
      }
    }
  }
}
