import("stdfaust.lib");
    declare name "gliitchi";
    declare author "Rémi GEORGES";
// 
// 
//   ▄████  ██▓     ██▓ ██▓▄▄▄█████▓ ▄████▄   ██░ ██  ██▓
//  ██▒ ▀█▒▓██▒    ▓██▒▓██▒▓  ██▒ ▓▒▒██▀ ▀█  ▓██░ ██▒▓██▒
// ▒██░▄▄▄░▒██░    ▒██▒▒██▒▒ ▓██░ ▒░▒▓█    ▄ ▒██▀▀██░▒██▒
// ░▓█  ██▓▒██░    ░██░░██░░ ▓██▓ ░ ▒▓▓▄ ▄██▒░▓█ ░██ ░██░
// ░▒▓███▀▒░██████▒░██░░██░  ▒██▒ ░ ▒ ▓███▀ ░░▓█▒░██▓░██░
//  ░▒   ▒ ░ ▒░▓  ░░▓  ░▓    ▒ ░░   ░ ░▒ ▒  ░ ▒ ░░▒░▒░▓  
//   ░   ░ ░ ░ ▒  ░ ▒ ░ ▒ ░    ░      ░  ▒    ▒ ░▒░ ░ ▒ ░
// ░ ░   ░   ░ ░    ▒ ░ ▒ ░  ░      ░         ░  ░░ ░ ▒ ░
//       ░     ░  ░ ░   ░           ░ ░       ░  ░  ░ ░  
//                                  ░                    
// 
// Gliitchi is a kind of glitch reverb/echo effect. Plug and play.
// Glitch effects aren't always fun to listen alone. I find Gliitchi more usefull drowned in reverb and echo, so here is it.
// Gliichi doesn't have much parameters. 4 is enough. Gliitchi has a Mono Input but a stereo output o_o

// ___  ____ ____ ____ _  _ ____ ___ ____ ____ ____ 
// |__] |__| |__/ |__| |\/| |___  |  |___ |__/ [__  
// |    |  | |  \ |  | |  | |___  |  |___ |  \ ___] 

//[REC] : When you press it, you're recording your audio input, it will refresh every one quarter of every second, approximatly.
//        One usefull use, when you have found your favorite quarter of your favorite second <3, unpress the rec to make it glitchier for the rest of your life.
//[Glitch] : Differents combinaisons of glitch, more than 20000, incredible :-o, very sensitive, try it out, it follow random laws, so as life. 
//           I can't help you understand it. Well... i can do it but really boring and not needed.
//[Tone] : It's written Tone but it's more like a tuning device, you can tune up or down the glitch effect, usefull to create polyphonic effect.
//[Echoverb Dry/Wet] : to add the Echoverb effect to the glitch effect, very usefull. Pschit.... psch....*there's a freeverb inside*
//
//Mix part : it's transparent no explications needed

//Yes i put the Readme into the code, i don't follow any rules.

//  / \--------------------, 
//  \_,|                   | 
//     |   ''LE'' Looper   | 
//     |  ,------------------
//     \_/__________________/ 
    
leloop(recstart,dimension,readspeed) = rwtable(dimension,0.0,indexwrite,_,indexread) //This is ''LE'' Loop, the cryptic looper usually working
with{

    record = recstart : int; //Conforming to int to be sure, record works as an On/Off

    indexwrite = (+(1) : %(dimension)) ~ *(record); //Writing in the table until the dimension is full , only when the record is on ;-)
    
    speeddivcoef = readspeed/dimension; //For the readspeed to be relative to the dimension

    partdecimale(x)= x-int(x); //cut everything upon the coma, i don't want it
   
    phasor = speeddivcoef : (+ : partdecimale) ~ _; //Creating a phasor of one sample

    indexread = phasor : *(float(dimension)): int; //Reading the table following the phaser 
  
 };

//  / \---------------------------, 
//  \_,|                          | 
//     |    Randomizer Fonction   | 
//     |  ,-------------------------
//     \_/________________________/ 

//UI 
coefal = (vslider("[3]coefal[style:knob]",10000,1,20000, 1):si.smooth(0.001)); //Slider for the random value
// Randomizer Fonction
variablerandom(seed) = vnoiseout*-1
with{
partdecimale(x)= x-int(x);
vnoiseout  = ((1457932343)*(1103515245)) * coefal / (2147483647.0) : partdecimale;
};


//  / \------------------, 
//  \_,|                 | 
//     |    Granulator   | 
//     |  ,----------------
//     \_/_______________/ 


grainOffset=4000*variablerandom(coefal*0.5); //randomize the granulator parameters , offeset and size 
grainSize=6000*variablerandom(coefal)+1000; // it's in samples

SR = 44100; //Fixed samplerate at 44100 because ma.SR or other things doesen't works, need to be fix :-/
buffSize = SR; // 1sec of Buff 

buffCounter = + (1) % buffSize ~ _; // cycle the input buffer from 0 to bufferSize 

grainCounter = + (1) % grainSize ~ _; //cycle the grain from 0 to grainSize

buffer(writeIndex, readIndex, _ ) = rwtable(buffSize, 0.0, writeIndex, _, readIndex); // buffer into the table
fonct =par(i, 2, buffer(int(buffCounter), int(grainCounter + (i * grainOffset)), _)); //granulator fonct for 2 iterations (stereo o_o)

//  / \-------------------, 
//  \_,|                  | 
//     |    Effect Part   | 
//     |  ,-----------------
//     \_/________________/ 

 echo =  _* (dry_wetrvbecho) * echogain:ef.echo(maxDur,duration,feedback)
 with{
     maxDur= 0.6;
     duration= 0.5;
     feedback= 0.6;
     echogain = 0.25;
 };

reverb = ( _* (dry_wetrvbecho) * rvbgain:re.mono_freeverb(fb1, fb2, damp, spread)) 
    with {
        fb1 = 0.9; 
        fb2 = 0.9; 
        damp = 0.8; 
        spread = 1; 
        rvbgain = 0.25;
    }; 


//UI
dry_wetrvbecho = (vslider(" [4]dry_wetrvbecho[style:knob]", 0.5, 0, 1, 0.001));

//       _---~~(~~-_.
//     _{  XXX    )XX)
//   , XX) -~~- ( ,-' )_
//  (  `-,_..`.,X)--X'_,)
// ( `X_)XX(  -~( -_ `, X}
// (_-  _ X~_-~~~~`, X,' )
//   `~ -^(  XXX__;-,((()))
//         ~~~~ {_ -_(())
//                `\  }
//                  { }     Broken Brain part // More UI

lesloop = (leloop(recstart,12000,1*tone)*(drywet)); //This is ''Les'' Loop, just some encapsulated ''le'' loop to make it more understandable for my tired brain

//UI
recstart=(checkbox("[1]recstart"));
tone=(vslider("[5]tone",1,0.5,2,0.0001));

drywet=hslider("[2]drywet[style:knob]",0.5,0,1,0.0001);


//Groups UI


//Conform + add effect
leseffetsla(u,v,w)=u,v,(v:echo:reverb),w,(w:echo:reverb);//1:dry input, 2:dry effect left, 3:wet effect left, 4:dry effect right, 5:wet effect right
additive(x,y,y2,z,z2)=x+y+y2,x+z+z2;//Stereoizer o_o because it's crap too many dry, wet and others things, needed to make it stereo o_o

//''Le'' Process finally, "c'est la vie" :french_flag:
process = 
((_),(lesloop<:fonct))
:_,_,_ //1 is dry input(*gain), 2:left wet, 3:right wet
:leseffetsla:additive:_,_;//Thru the fonction up there to apply effects and conform to stereo o_o