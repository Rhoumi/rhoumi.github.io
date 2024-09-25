console.log("instruments");

const AudioContext = window.AudioContext || window.webkitAudioContext;
var audio_context = new AudioContext();  

let Instrument = function(options){
  for(var i in options) this[i] = options[i];
  if (!options.f) this.f = "C2";
  if (!options.g) this.g = "0.01";
  if (!options.i) this.i = "0.01";
  if (!options.o) this.o = "0.5";
  if (!options.l) this.l = "0.1";
  if (!options.r) this.r =  "1";
  if (!options.w) this.w = "'sine'";
  if (!options.a) this.a = "true";
  if (!options.s) this.s = "'none'"; // sample
  if (!options.p) this.p = "1"; // pitch
}

Instrument.prototype.play = function(){
  var active;
  try {
    active = eval(this.a);
  } catch(e) {
    return;
  }
  if (!active) return;
  var frequency, gain, fadeIn, fadeOut, length, res, wave, sample, pitch;
  try {
    frequency = eval(this.f);
    gain = eval(this.g);
    fadeIn = eval(this.i);
    fadeOut = eval(this.o);
    length = eval(this.l);
    res = eval(this.r);
    wave = eval(this.w);
    sample = eval(this.s);
    pitch = eval(this.p);
  } catch(e) {
    return;
  }

  // --- Sample --- 

  // define variables
  var source = false
  
  if (sample != 'none') {
    frequency = 0;
    if ( sample != this.past_sample ){
        this.past_sample = sample
        request = new XMLHttpRequest();
        request.open('GET', "./samples/"+sample+"_low.ogg", true);
        request.responseType = 'arraybuffer';
        var interface_audio_context = this;
        request.onload = function() {
          let audioData = request.response;
          audio_context.decodeAudioData(audioData, function(buffer) {
              interface_audio_context.buffer = buffer;
            },
            function(e){"Error with decoding audio data" + e.error});
        }
        request.send();
    }
      
    source = audio_context.createBufferSource();
    source.buffer = this.buffer;
    source.loop = false;
    source.playbackRate.value = pitch;
  }
  

  // --- Gain and Oscillator --- 

  let gainNode = audio_context.createGain();
  let oscillator = audio_context.createOscillator();

  let full_wave = [];

  if (wave!= "triangle" && wave != "sine" && wave != "sawtooth" && wave != "square") {

    for (var i = 0; i < res; i++){
      for (var j = 0; j < wave.length; j++){
        full_wave.push(wave[j]);
      }
    }

    let imag = new Float32Array(full_wave);
    let real = new Float32Array(full_wave.length);
    let customWave = audio_context.createPeriodicWave(real, imag, {disableNormalization: true}); 
    
    oscillator.setPeriodicWave(customWave);
  } else {
    oscillator.type = wave;
  }
  /*
  switch (wave) {
    case 
  }*/
  // Connection

  gainNode.gain.value = -1;
  try {
    gainNode.gain.setValueCurveAtTime([-1, (1-gain)*-1], 
      audio_context.currentTime, 
      fadeIn
    );
    gainNode.gain.setValueCurveAtTime([(1-gain)*-1, -1], 
      audio_context.currentTime+fadeIn+length,
      fadeOut
    );
  } catch(e) {
    console.log(e.error);
  }
  
  try {
    oscillator.frequency.setValueAtTime(frequency, audio_context.currentTime); // value in hertz
  } catch(e) {
    console.log(e.error);
  }
  
  if (sample != 'none') source.connect(gainNode);
  oscillator.connect(gainNode);
  gainNode.connect(audio_context.destination);
  oscillator.connect(audio_context.destination);
  if (sample != 'none') source.connect(audio_context.destination);
  
  
  if (sample != 'none') source.start(audio_context.currentTime);
  if (sample != 'none') source.stop(audio_context.currentTime+(fadeIn+length+fadeOut)*2);
  oscillator.start(audio_context.currentTime);
  oscillator.stop(audio_context.currentTime+(fadeIn+length+fadeOut)*2);
}
