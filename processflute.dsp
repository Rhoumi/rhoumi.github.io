import("stdfaust.lib");

parametric_eq = fi.low_shelf(LL,FL) : fi.peak_eq(LP,FP,BP) : fi.high_shelf(LH,FH)
with{
    eq_group(x) = hgroup("[0] PARAMETRIC EQ SECTIONS [tooltip: See Faust's filters.lib
        for info and pointers]",x);
    ls_group(x) = eq_group(vgroup("[1] Low Shelf",x));

    LL = ls_group(hslider("[0] Low Boost|Cut [unit:dB] [style:knob]
        [tooltip: Amount of low-frequency boost or cut in decibels]",0,-40,40,0.1));
    FL = ls_group(hslider("[1] Transition Frequency [unit:Hz] [style:knob] [scale:log]
        [tooltip: Transition-frequency from boost (cut) to unity gain]",200,1,5000,1));

    pq_group(x) = eq_group(vgroup("[2] Peaking Equalizer[tooltip: Parametric Equalizer
        sections from filters.lib]",x));
    LP = pq_group(hslider("[0] Peak Boost|Cut [unit:dB] [style:knob][tooltip: Amount of
        local boost or cut in decibels]",0,-40,40,0.1));
    FP = pq_group(hslider("[1] Peak Frequency [unit:PK] [style:knob] [tooltip: Peak
        Frequency in Piano Key (PK) units (A440 = 49PK)]",49,1,100,1)) : si.smooth(0.999)
        : ba.pianokey2hz;
    Q = pq_group(hslider("[2] Peak Q [style:knob] [scale:log] [tooltip: Quality factor
        (Q) of the peak = center-frequency/bandwidth]",40,1,1000,0.1));

    BP = FP/Q;

    hs_group(x) = eq_group(vgroup("[3] High Shelf [tooltip: A high shelf provides a boost
        or cut above some frequency]",x));
    LH = hs_group(hslider("[0] High Boost|Cut [unit:dB] [style:knob] [tooltip: Amount of
        high-frequency boost or cut in decibels]",0,-40,40,.1));
    FH = hs_group(hslider("[1] Transition Frequency [unit:Hz] [style:knob] [scale:log]
    [tooltip: Transition-frequency from boost (cut) to unity gain]",8000,20,10000,1));
};

////////////////

MAX_DELAY = 2.0;

time_l	= ba.sec2samp(hslider("v:Delay/[0]Delay Left[symbol: delay_l][unit: ms]", 250.0, 0, MAX_DELAY * 1000, 0.1) * 0.001 : si.smoo);
time_r	= ba.sec2samp(hslider("v:Delay/[1]Delay Right[symbol: delay_r][unit: ms]", 166.7, 0, MAX_DELAY * 1000, 0.1) * 0.001 : si.smoo);

feedback = hslider("v:Delay/[2]Feedback[symbol: feedback][unit: %]", 20, 0, 100, 0.1) : si.smoo;

lp_feedback	= hslider("v:Delay/[3]Feedback Lowpass[symbol: lp_feedback][unit: hz][scale: log]", 12000, 20, 20000, 0.1);
hp_feedback	= hslider("v:Delay/[4]Feedback Highpass[symbol: hp_feedback][unit: hz][scale: log]", 60, 20, 20000, 0.1);
dist = hslider("v:Delay/[5]Distortion[symbol: dist_feedback]", 0.1, 0.1, 50, 0.1);

crossfeed = hslider("v:Delay/[6]Crossmix[symbol: crossfeed][unit: %]", 0, 0, 100, 0.1) : si.smoo;

mixer(fb_l, fb_r, in_l, in_r) =
    in_l + (fb_l * feedback * 0.01),
    in_r + (fb_r * feedback * 0.01);

icurve = 1.0 / atan(dist);
atandist(x) = icurve * atan(x * dist);

fb_filter =
    atandist :
    fi.lowpass(2, lp_feedback) :
    fi.highpass(2, hp_feedback);

delay(t) = de.sdelay(ba.sec2samp(MAX_DELAY), 512, t);

crossmix(coef, l, r) =
    l * (1 - coef) + r * coef,
    r * (1 - coef) + l * coef;

LEdelay =
    (mixer : delay(time_l), delay(time_r) : crossmix(crossfeed * 0.01)) ~
    (fb_filter, fb_filter);




coff = hslider("[0]cutoff",250,20,5000,1);

limiter = co.limiter_1176_R4_mono;

gateF1 = checkbox("h:[1]Flute1/Gate");
ProcessFlute1 = hgroup("[1]Flute1", parametric_eq ) :_ ;

gateF2 = checkbox("h:[2]Flute2/Gate");
ProcessFlute2 = hgroup("[2]Flute2", parametric_eq ) :_;

gateF3 = checkbox("h:[3]Flute3/Gate");
ProcessFlute3 = hgroup("[3]Flute3", parametric_eq ) :_;

gateF4 = checkbox("h:[4]Flute4/Gate");
ProcessFlute4 = hgroup("[4]Flute4", parametric_eq ) :_;



process = _ :fi.highpass(4,coff) <: ProcessFlute1*gateF1,ProcessFlute2*gateF2,ProcessFlute3*gateF3,ProcessFlute4*gateF4:>_<:LEdelay:co.limiter_1176_R4_stereo;





