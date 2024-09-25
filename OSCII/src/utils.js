                                    // Instruments

const C0 = 16.35,
Cs0	= 17.32,
D0 = 18.35,
Ds0	= 19.45,
E0 = 20.60,
F0 = 21.83,
Fs0	= 23.12,
G0 = 24.50,
Gs0	= 25.96,
A0 = 27.50,
As0	= 29.14,
B0 = 30.87,
C1 = 32.70,
Cs1	= 34.65,
D1 = 36.71,
Ds1	= 38.89,
E1 = 41.20,
F1 = 43.65,
Fs1	= 46.25,
G1 = 49.00,
Gs1	= 51.91,
A1 = 55.00,
As1	= 58.27,
B1 = 61.74,
C2 = 65.41,
Cs2	= 69.30,
D2 = 73.42,
Ds2	= 77.78,
E2 = 82.41,
F2 = 87.31,
Fs2	= 92.50,
G2 = 98.00,
Gs2	= 103.8,
A2 = 110.00,
As2	= 116.5,
B2 = 123.47,
C3 = 130.81,
Cs3	= 138.5,
D3 = 146.83,
Ds3	= 155.5,
E3 = 164.81,
F3 = 174.61,
Fs3	= 185.0,
G3 = 196.00,
Gs3	= 207.6,
A3 = 220.00,
As3	= 233.0,
B3 = 246.94,
C4 = 261.63,
Cs4	= 277.1,
D4 = 293.66,
Ds4	= 311.1,
E4 = 329.63,
F4 = 349.23,
Fs4	= 369.9,
G4 = 392.00,
Gs4	= 415.3,
A4 = 440.00,
As4	= 466.1,
B4 = 493.88,
C5 = 523.25,
Cs5	= 554.3,
D5 = 587.33,
Ds5	= 622.2,
E5 = 659.25,
F5 = 698.46,
Fs5	= 739.9,
G5 = 783.99,
Gs5	= 830.6,
A5 = 880.00,
As5	= 932.3,
B5 = 987.77,
C6 = 1046.50,
Cs6	= 1108.7,
D6 = 1174.66,
Ds6	= 1244.5,
E6 = 1318.51,
F6 = 1396.91,
Fs6	= 1479.9,
G6 = 1567.98,
Gs6	= 1661.2,
A6 = 1760.00,
As6	= 1864.6,
B6 = 1975.53,
C7 = 2093.00,
Cs7	= 2217.4,
D7 = 2349.32,
Ds7	= 2489.0,
E7 = 2637.02,
F7 = 2793.83,
Fs7	= 2959.9,
G7 = 3135.96,
Gs7	= 3322.4,
A7 = 3520.00,
As7	= 3729.3,
B7 = 3951.07,
C8 = 4186.01,
Cs8	= 4434.9,
D8 = 4698.63,
Ds8	= 4978.0,
E8 = 5274.04,
F8 = 5587.65,
Fs8	= 5919.9,
G8 = 6271.93,
Gs8	= 6644.8,
A8 = 7040.00,
As8	= 7458.6,
B8 = 7902.13;

const N = [
  C0,
  D0,
  E0,
  F0,
  G0,
  A0,
  B0,
  C1,
  D1,
  E1,
  F1,
  G1,
  A1,
  B1,
  C2,
  D2,
  E2,
  F2,
  G2,
  A2,
  B2,
  C3,
  D3,
  E3,
  F3,
  G3,
  A3,
  B3,
  C4,
  D4,
  E4,
  F4,
  G4,
  A4,
  B4,
  C5,
  D5,
  E5,
  F5,
  G5,
  A5,
  B5,
  C6,
  D6,
  E6,
  F6,
  G6,
  A6,
  B6,
  C7,
  D7,
  E7,
  F7,
  G7,
  A7,
  B7,
  C8,
  D8,
  E8,
  F8,
  G8,
  A8,
  B8
];
const Ns = [
  C0,
  Cs0,
  D0,
  Ds0,
  E0,
  F0,
  Fs0,
  G0,
  Gs0,
  A0,
  As0,
  B0,
  C1,
  Cs1,
  D1,
  Ds1,
  E1,
  F1,
  Fs1,
  G1,
  Gs1,
  A1,
  As1,
  B1,
  C2,
  Cs2,
  D2,
  Ds2,
  E2,
  F2,
  Fs2,
  G2,
  Gs2,
  A2,
  As2,
  B2,
  C3,
  Cs3,
  D3,
  Ds3,
  E3,
  F3,
  Fs3,
  G3,
  Gs3,
  A3,
  As3,
  B3,
  C4,
  Cs4,
  D4,
  Ds4,
  E4,
  F4,
  Fs4,
  G4,
  Gs4,
  A4,
  As4,
  B4,
  C5,
  Cs5,
  D5,
  Ds5,
  E5,
  F5,
  Fs5,
  G5,
  Gs5,
  A5,
  As5,
  B5,
  C6,
  Cs6,
  D6,
  Ds6,
  E6,
  F6,
  Fs6,
  G6,
  Gs6,
  A6,
  As6,
  B6,
  C7,
  Cs7,
  D7,
  Ds7,
  E7,
  F7,
  Fs7,
  G7,
  Gs7,
  A7,
  As7,
  B7,
  C8,
  Cs8,
  D8,
  Ds8,
  E8,
  F8,
  Fs8,
  G8,
  Gs8,
  A8,
  As8,
  B8
];
//

function s(val) {
  return String(val);
}

Array.prototype.i = function(val) {
  return this.includes(val);
}

function sg(glyph,x,y,fg,bg) {
  if (fg == undefined) fg = 0;
  if (bg == undefined) bg = 11;
  set_glyph("typed",x,y,bg,fg,glyph,cols,rows);
}

function I(val){
  return Math.floor(val);
}

function II(val){
  return Number.isInteger(val);
}

function f(a,b){
  if (b == undefined) b = 2;
  return II(I(frame/a)/b);
}

function t(a,b){
  if (b == undefined) b = 2;
  return II(I(frame/aside['t']/a)/b);
}

// Numbers

const numbers = {};
n = function(id, base, limite, progression, reverse){
    if (numbers[id] == undefined) numbers[id] = [ base, 1 ]
    if ( isNaN(numbers[id][0]) ) numbers[id][0] = base
    var to_return = numbers[id][0]
    numbers[id][0] += progression * numbers[id][1]
    if ( !reverse ) {
        if ( numbers[id][0] <= base )         numbers[id][0] = limite
        if ( numbers[id][0] >= limite )       numbers[id][0] = base
    } else {
        if ( numbers[id][0] < base ) {
            numbers[id][1] *= -1
            numbers[id][0] = base
            numbers[id][0] += progression * numbers[id][1]
        }
        if ( numbers[id][0] > limite ) {
            numbers[id][1] *= -1
            numbers[id][0] = limite
            numbers[id][0] += progression * numbers[id][1]
        }
    }
    return to_return
}

// Arrays

const arrays = {};

function a(name,array,step) {
  if (!arrays[name]) {
    arrays[name] = [array,0];
  } else {
    while (step > arrays[name][0].length || step < -arrays[name][0].length) {
      step = step > 0 ? step > arrays[name][0].length ? step - arrays[name][0].length : step
                    : step < -arrays[name][0].length ? step + arrays[name][0].length : step;
    }
    if (step > arrays[name][0].length) step -= arrays[name][0].length;
    arrays[name][0] = array;
    arrays[name][1] = step > 0 ? 
                        arrays[name][1] + step < arrays[name][0].length ? arrays[name][1] + step 
                          : (arrays[name][0].length - (arrays[name][1] + step)) * -1
                      :
                        arrays[name][1] + step > -1 ? arrays[name][1] + step 
                          : arrays[name][0].length + (arrays[name][1] + step);
    if (arrays[name][0][Math.floor(arrays[name][1])] == undefined) {
      arrays[name][1] = 0;
    }
  }
  console.log(arrays[name][0][Math.floor(arrays[name][1])]);
  return arrays[name][0][Math.floor(arrays[name][1])];
}

// Random

function r(min,max) {
  return Math.floor(min + Math.random()*(max-min))
}
