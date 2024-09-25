/* Setup */

var display_cols;
var display_rows;
let past_memory = [];
let futur_memory = [];
let ui = [];
const sprites = {};

const sprites_sheets_names = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "font_0",
  "font_1",
  "font_2",
  "font_3",
  "font_4",
  "font_5",
  "font_6",
  "font_7",
  "font_8",
  "font_9",
  "font_10",
  "font_11",
  "font_12",
  "font_13",
  "font_14",
  "font_15",
  "font_16",
  "font_17",
  "font_18",
  "font_19"
];

const colors = [
  "#FFF",
  "#666",
  "#F00",
  "#880",
  "#FF0",
  "#8F8",
  "#0FF",
  "#00F",
  "#80F",
  "#F8F",
  "#AAA",
  "#000",
  "#800",
  "#842",
  "#F80",
  "#084",
  "#08F",
  "#008",
  "#408",
  "#F08",
  "#FFF",
  "#666",
  "#F00",
  "#880",
  "#FF0",
  "#8F8",
  "#0FF",
  "#00F",
  "#80F",
  "#F8F",
  "#AAA",
  "#000",
  "#800",
  "#842",
  "#F80",
  "#084",
  "#08F",
  "#008",
  "#408",
  "#F08",
];

const char_set = [
  '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}','~'
]

const key_position_azerty = {
  '&' :  0, '1' :  0,
  'é' :  1, '2' :  1,
  '"' :  2, '3' :  2,
  '\'':  3, '4' :  3,
  '(' :  4, '5' :  4,
  '-' :  5, '6' :  5,
  'è' :  6, '7' :  6,
  '_' :  7, '8' :  7,
  'ç' :  8, '9' :  8,
  'à' :  9, '0' :  9,
  'a' : 10, 'A' : 10,
  'z' : 11, 'Z' : 11,
  'e' : 12, 'E' : 12,
  'r' : 13, 'R' : 13,
  't' : 14, 'T' : 14,
  'y' : 15, 'Y' : 15,
  'u' : 16, 'U' : 16,
  'i' : 17, 'I' : 17,
  'o' : 18, 'O' : 18,
  'p' : 19, 'P' : 19,
  'q' : 20, 'Q' : 20,
  's' : 21, 'S' : 21,
  'd' : 22, 'D' : 22,
  'f' : 23, 'F' : 23,
  'g' : 24, 'G' : 24,
  'h' : 25, 'H' : 25,
  'j' : 26, 'J' : 26,
  'k' : 27, 'K' : 27,
  'l' : 28, 'L' : 28,
  'm' : 29, 'M' : 29,
  'w' : 30, 'W' : 30,
  'x' : 31, 'X' : 31,
  'c' : 32, 'C' : 32,
  'v' : 33, 'V' : 33,
  'b' : 34, 'B' : 34,
  'n' : 35, 'N' : 35,
  ',' : 36, '?' : 36,
  ';' : 37, '.' : 37,
  ':' : 38, '/' : 38,
  '!' : 39, '§' : 39
};


const key_position = {
  '1' :  0, '!' :  0,
  '2' :  1, '@' :  1,
  '3' :  2, '#' :  2,
  '4' :  3, '$' :  3,
  '5' :  4, '%' :  4,
  '6' :  5, '^' :  5,
  '7' :  6, '&' :  6,
  '8' :  7, '*' :  7,
  '9' :  8, '(' :  8,
  '0' :  9, ')' :  9,
  'q' : 10, 'Q' : 10,
  'w' : 11, 'W' : 11,
  'e' : 12, 'E' : 12,
  'r' : 13, 'R' : 13,
  't' : 14, 'T' : 14,
  'y' : 15, 'Y' : 15,
  'u' : 16, 'U' : 16,
  'i' : 17, 'I' : 17,
  'o' : 18, 'O' : 18,
  'p' : 19, 'P' : 19,
  'a' : 20, 'A' : 20,
  's' : 21, 'S' : 21,
  'd' : 22, 'D' : 22,
  'f' : 23, 'F' : 23,
  'g' : 24, 'G' : 24,
  'h' : 25, 'H' : 25,
  'j' : 26, 'J' : 26,
  'k' : 27, 'K' : 27,
  'l' : 28, 'L' : 28,
  ';' : 29, ':' : 29,
  'z' : 30, 'Z' : 30,
  'x' : 31, 'X' : 31,
  'c' : 32, 'C' : 32,
  'v' : 33, 'V' : 33,
  'b' : 34, 'B' : 34,
  'n' : 35, 'N' : 35,
  'm' : 36, 'M' : 36,
  ',' : 37, '<' : 37,
  '.' : 38, '>' : 38,
  '/' : 39, '' : 39
};

const keys = [
  '1','2','3','4','5','6','7','8','9','0','A','Z','E','R','T','Y','U','I','O','P','Q','S','D','F','G','H','J','K','L','M','W','X','C','V','B','N',',',';',':','!'
];

let patterns = {
  "between" : function (value,
filter) {
    return value >= filter[0] && value <= filter[1] ? true : false;
  },
  "outside" : function (value,filter) {
    return value >= filter[0] && value <= filter[1] ? false : true;
  },
  "include" : function (value,filter) {
    let local_filter = [];
    for (var filter_index = 0; filter_index < filter.length; filter_index++) {
      local_filter.push(isNaN(filter[filter_index]) ? value : filter[filter_index]);
    }
    return local_filter.includes(value) ? true : false;
  },
  "exclude" : function (value,filter) {
    let local_filter = [];
    for (var filter_index = 0; filter_index < filter.length; filter_index++) {
      local_filter.push(isNaN(filter[filter_index]) ? value : filter[filter_index]);
    }
    return local_filter.includes(value) ? false : true;
  },
  "every" : function (value,filter) {
    return Number.isInteger(value/filter[0]) ? true : false;
  },
  "except" : function (value,filter) {
    return Number.isInteger(value/filter[0]) ? false : true;
  },
  "superior" : function (value,filter) {
    return value > filter[0] ? true : false;
  },
  "inferior" : function (value,filter) {
    return value < filter[0] ? true : false;
  },
  "blink" : function (value,filter) {
    return Number.isInteger(Math.floor(value/filter[0])/2) ? true : false;
  },
  "deblink" : function (value,filter) {
    return Number.isInteger(Math.floor(value/filter[0])/2) ? false : true;
  },
};

// B64 to STR
function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

