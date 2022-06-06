
/*
Code generated with Faust version 2.40.12
Compilation options: -lang wasm-ib -cn GLIITCHI -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONGLIITCHI() {
	return '{"name": "GLIITCHI","filename": "GLIITCHI.dsp","version": "2.40.12","compile_options": "-lang wasm-ib -cn GLIITCHI -es 1 -mcd 16 -single -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/04CE478C01BCEBC42FD349FB7BB31F452FDB51B5/web/wap"],"size": 1855052,"inputs": 2,"outputs": 2,"meta": [ { "author": "Rémi GEORGES" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "compile_options": "-lang wasm-ib -cn GLIITCHI -es 1 -mcd 16 -single -ftz 2" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "filename": "GLIITCHI.dsp" },{ "filters_lib_allpass_comb_author": "Julius O. Smith III" },{ "filters_lib_allpass_comb_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_allpass_comb_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/signals.lib" },{ "library_path2": "/libraries/misceffects.lib" },{ "library_path3": "/libraries/delays.lib" },{ "library_path4": "/libraries/maths.lib" },{ "library_path5": "/libraries/platform.lib" },{ "library_path6": "/libraries/reverbs.lib" },{ "library_path7": "/libraries/filters.lib" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "misceffects_lib_name": "Misc Effects Library" },{ "misceffects_lib_version": "2.0" },{ "name": "GLIITCHI" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "reverbs_lib_name": "Faust Reverb Library" },{ "reverbs_lib_version": "0.2" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.1" }],"ui": [ {"type": "vgroup","label": "GLIITCHI","items": [ {"type": "hgroup","label": "Mix","items": [ {"type": "hslider","label": "AudioIn","shortname": "AudioIn","address": "/GLIITCHI/Mix/AudioIn","index": 1039784,"meta": [{ "0": "" },{ "style": "knob" }],"init": 1,"min": 0,"max": 2,"step": 0.0001},{"type": "hslider","label": "GlitchiMix","shortname": "GlitchiMix","address": "/GLIITCHI/Mix/GlitchiMix","index": 176424,"meta": [{ "1": "" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 2,"step": 0.0001}]},{"type": "hgroup","label": "Glitch","meta": [{ "2": "" }],"items": [ {"type": "vslider","label": "g̷l̵i̷t̷c̷h̴","shortname": "g_l_i_t_c_h","address": "/GLIITCHI/Glitch/g̷l̵i̷t̷c̷h̴","index": 224460,"meta": [{ "0": "" },{ "style": "knob" }],"init": 10000,"min": 1,"max": 20000,"step": 1},{"type": "checkbox","label": "Rec","shortname": "Rec","address": "/GLIITCHI/Glitch/Rec","index": 224428,"meta": [{ "1": "" }]},{"type": "vslider","label": "TONE","shortname": "TONE","address": "/GLIITCHI/Glitch/TONE","index": 224440,"meta": [{ "9": "" }],"init": 1,"min": 0.5,"max": 2,"step": 0.0001}]},{"type": "hgroup","label": "Effects","meta": [{ "9": "" }],"items": [ {"type": "vslider","label": "EchoVerb Dry/Wet","shortname": "Wet","address": "/GLIITCHI/Effects/EchoVerb_Dry/Wet","index": 8,"meta": [{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.001}]}]}]}';
}
function getBase64CodeGLIITCHI() { return "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cyI6IDIsIm91dHB1dHMiOiAyLCJtZXRhIjogWyB7ICJhdXRob3IiOiAiUsOpbWkgR0VPUkdFUyIgfSx7ICJjb21waWxhdGlvbl9vcHRpb25zIjogIi1zaW5nbGUgLXNjYWwgLUkgbGlicmFyaWVzLyAtSSBwcm9qZWN0LyAtbGFuZyB3YXNtIiB9LHsgImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWliIC1jbiBHTElJVENISSAtZXMgMSAtbWNkIDE2IC1zaW5nbGUgLWZ0eiAyIiB9LHsgImRlbGF5c19saWJfbmFtZSI6ICJGYXVzdCBEZWxheSBMaWJyYXJ5IiB9LHsgImRlbGF5c19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAiZmlsZW5hbWUiOiAiR0xJSVRDSEkuZHNwIiB9LHsgImZpbHRlcnNfbGliX2FsbHBhc3NfY29tYl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9hbGxwYXNzX2NvbWJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX2FsbHBhc3NfY29tYl9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfbG93cGFzczBfaGlnaHBhc3MxIjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnNfbGliX3ZlcnNpb24iOiAiMC4zIiB9LHsgImxpYnJhcnlfcGF0aDAiOiAiL2xpYnJhcmllcy9zdGRmYXVzdC5saWIiIH0seyAibGlicmFyeV9wYXRoMSI6ICIvbGlicmFyaWVzL3NpZ25hbHMubGliIiB9LHsgImxpYnJhcnlfcGF0aDIiOiAiL2xpYnJhcmllcy9taXNjZWZmZWN0cy5saWIiIH0seyAibGlicmFyeV9wYXRoMyI6ICIvbGlicmFyaWVzL2RlbGF5cy5saWIiIH0seyAibGlicmFyeV9wYXRoNCI6ICIvbGlicmFyaWVzL21hdGhzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg1IjogIi9saWJyYXJpZXMvcGxhdGZvcm0ubGliIiB9LHsgImxpYnJhcnlfcGF0aDYiOiAiL2xpYnJhcmllcy9yZXZlcmJzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg3IjogIi9saWJyYXJpZXMvZmlsdGVycy5saWIiIH0seyAibWF0aHNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHNfbGliX25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzX2xpYl92ZXJzaW9uIjogIjIuNSIgfSx7ICJtaXNjZWZmZWN0c19saWJfbmFtZSI6ICJNaXNjIEVmZmVjdHMgTGlicmFyeSIgfSx7ICJtaXNjZWZmZWN0c19saWJfdmVyc2lvbiI6ICIyLjAiIH0seyAibmFtZSI6ICJHTElJVENISSIgfSx7ICJwbGF0Zm9ybV9saWJfbmFtZSI6ICJHZW5lcmljIFBsYXRmb3JtIExpYnJhcnkiIH0seyAicGxhdGZvcm1fbGliX3ZlcnNpb24iOiAiMC4yIiB9LHsgInJldmVyYnNfbGliX25hbWUiOiAiRmF1c3QgUmV2ZXJiIExpYnJhcnkiIH0seyAicmV2ZXJic19saWJfdmVyc2lvbiI6ICIwLjIiIH0seyAic2lnbmFsc19saWJfbmFtZSI6ICJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5IiB9LHsgInNpZ25hbHNfbGliX3ZlcnNpb24iOiAiMC4xIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJHTElJVENISSIsIml0ZW1zIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiTWl4IiwiaXRlbXMiOiBbIHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiQXVkaW9JbiIsInNob3J0bmFtZSI6ICJBdWRpb0luIiwiYWRkcmVzcyI6ICIvR0xJSVRDSEkvTWl4L0F1ZGlvSW4iLCJpbmRleCI6IDEwMzk3ODQsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAxLCJtaW4iOiAwLCJtYXgiOiAyLCJzdGVwIjogMC4wMDAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkdsaXRjaGlNaXgiLCJzaG9ydG5hbWUiOiAiR2xpdGNoaU1peCIsImFkZHJlc3MiOiAiL0dMSUlUQ0hJL01peC9HbGl0Y2hpTWl4IiwiaW5kZXgiOiAxNzY0MjQsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDIsInN0ZXAiOiAwLjAwMDF9XX0seyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogIkdsaXRjaCIsIm1ldGEiOiBbeyAiMiI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJnzLdszLVpzLd0zLdjzLdozLQiLCJzaG9ydG5hbWUiOiAiZ19sX2lfdF9jX2giLCJhZGRyZXNzIjogIi9HTElJVENISS9HbGl0Y2gvZ8y3bMy1acy3dMy3Y8y3aMy0IiwiaW5kZXgiOiAyMjQ0NjAsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAxMDAwMCwibWluIjogMSwibWF4IjogMjAwMDAsInN0ZXAiOiAxfSx7InR5cGUiOiAiY2hlY2tib3giLCJsYWJlbCI6ICJSZWMiLCJzaG9ydG5hbWUiOiAiUmVjIiwiYWRkcmVzcyI6ICIvR0xJSVRDSEkvR2xpdGNoL1JlYyIsImluZGV4IjogMjI0NDI4LCJtZXRhIjogW3sgIjEiOiAiIiB9XX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJUT05FIiwic2hvcnRuYW1lIjogIlRPTkUiLCJhZGRyZXNzIjogIi9HTElJVENISS9HbGl0Y2gvVE9ORSIsImluZGV4IjogMjI0NDQwLCJtZXRhIjogW3sgIjkiOiAiIiB9XSwiaW5pdCI6IDEsIm1pbiI6IDAuNSwibWF4IjogMiwic3RlcCI6IDAuMDAwMX1dfSx7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiRWZmZWN0cyIsIm1ldGEiOiBbeyAiOSI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJFY2hvVmVyYiBEcnkvV2V0Iiwic2hvcnRuYW1lIjogIldldCIsImFkZHJlc3MiOiAiL0dMSUlUQ0hJL0VmZmVjdHMvRWNob1ZlcmJfRHJ5L1dldCIsImluZGV4IjogOCwibWV0YSI6IFt7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDAxfV19XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class GLIITCHINode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'GLIITCHI', options);

        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);

        // JSON parsing functions
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                || item.type === "hslider"
                || item.type === "button"
                || item.type === "checkbox"
                || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({
                                    path: item.address,
                                    min: parseFloat(item.min),
                                    max: parseFloat(item.max)
                                });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];

        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) { }
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     * Destroy the node, deallocate resources.
     */
    destroy() {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return this.json;
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, GLIITCHINode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, GLIITCHINode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

}

// Factory class
class GLIITCHI {

    static fWorkletProcessors;

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "") {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];

        this.fWorkletProcessors = this.fWorkletProcessors || [];
    }

    heap2Str(buf) {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load() {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,

                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                    _isnanf: Number.isNaN,
                    _isinff: function (x) { return !isFinite(x); },
                    _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    _isnan: Number.isNaN,
                    _isinf: function (x) { return !isFinite(x); },
                    _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "GLIITCHI.wasm" : (this.baseURL + "/GLIITCHI.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);

            let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
            let json = this.heap2Str(HEAPU8);
            let json_object = JSON.parse(json);
            let options = { wasm_module: dspModule, json: json };

            if (this.fWorkletProcessors.indexOf(name) === -1) {
                try {
                    let re = /JSON_STR/g;
                    let GLIITCHIProcessorString1 = GLIITCHIProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([GLIITCHIProcessorString1], { type: 'text/javascript' }));
                    await this.context.audioWorklet.addModule(real_url);
                    // Keep the DSP name
                    console.log("Keep the DSP name");
                    this.fWorkletProcessors.push(name);
                } catch (e) {
                    console.error(e);
                    console.error("Faust " + this.name + " cannot be loaded or compiled");
                    return null;
                }
            }
            this.node = new GLIITCHINode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from GLIITCHI-processor was detected.'); }
            return (this.node);
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    }

    async loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createGLIITCHIGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createGLIITCHIGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

    linkExists(url) {
        return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

// Template string for AudioWorkletProcessor

let GLIITCHIProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class GLIITCHIProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                GLIITCHIProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                GLIITCHIProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                GLIITCHIProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                GLIITCHIProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            GLIITCHIProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, GLIITCHIProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.GLIITCHI_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.GLIITCHI_instance.exports;
            this.HEAP = this.GLIITCHI_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                GLIITCHIProcessor.parse_ui(this.json_object.ui, this, GLIITCHIProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('GLIITCHI', GLIITCHIProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "GLIITCHI";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.GLIITCHI = GLIITCHI;
    window.FaustGLIITCHI = GLIITCHI;
    window[dspName] = GLIITCHI;
} else {
    module.exports = { GLIITCHI };
}
