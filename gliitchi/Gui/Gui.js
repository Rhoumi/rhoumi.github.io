import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class GLIITCHIGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `<style>.my-pedal {align-content:normal;align-items:normal;align-self:auto;aspect-ratio:auto;backface-visibility:visible;border-collapse:separate;border-image-repeat:stretch;box-decoration-break:slice;box-sizing:border-box;break-inside:auto;caption-side:top;clear:none;color-interpolation:srgb;color-interpolation-filters:linearrgb;column-count:auto;column-fill:balance;column-span:none;contain:none;direction:ltr;display:block;dominant-baseline:auto;empty-cells:show;flex-direction:row;flex-wrap:nowrap;float:none;font-kerning:auto;font-optical-sizing:auto;font-size-adjust:none;font-stretch:100%;font-style:normal;font-synthesis:weight style small-caps;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-weight:400;grid-auto-flow:row;hyphens:manual;image-orientation:from-image;image-rendering:auto;ime-mode:auto;isolation:auto;justify-content:normal;justify-items:normal;justify-self:auto;line-break:auto;list-style-position:outside;mask-type:luminance;mix-blend-mode:normal;-moz-box-align:stretch;-moz-box-direction:normal;-moz-box-orient:horizontal;-moz-box-pack:start;-moz-float-edge:content-box;-moz-force-broken-image-icon:0;-moz-orient:inline;-moz-text-size-adjust:auto;-moz-user-focus:none;-moz-user-input:auto;-moz-user-modify:read-only;-moz-window-dragging:default;object-fit:fill;offset-rotate:auto;outline-style:none;overflow-anchor:auto;overflow-wrap:normal;paint-order:normal;pointer-events:auto;position:unset;print-color-adjust:economy;resize:none;ruby-align:space-around;ruby-position:alternate;scroll-behavior:auto;scroll-snap-align:none;scroll-snap-type:none;scrollbar-gutter:auto;scrollbar-width:auto;shape-rendering:auto;stroke-linecap:butt;stroke-linejoin:miter;table-layout:auto;text-align:center;text-align-last:auto;text-anchor:start;text-combine-upright:none;text-decoration-line:none;text-decoration-skip-ink:auto;text-decoration-style:solid;text-emphasis-position:over right;text-justify:auto;text-orientation:mixed;text-rendering:auto;text-transform:none;text-underline-position:auto;touch-action:none;transform-box:border-box;transform-style:flat;unicode-bidi:isolate;user-select:auto;vector-effect:none;visibility:visible;-webkit-line-clamp:none;white-space:normal;word-break:normal;writing-mode:horizontal-tb;z-index:auto;appearance:none;break-after:auto;break-before:auto;clip-rule:nonzero;fill-rule:nonzero;fill-opacity:1;stroke-opacity:1;-moz-box-ordinal-group:1;order:0;flex-grow:0;flex-shrink:1;-moz-box-flex:0;stroke-miterlimit:4;overflow-block:visible;overflow-inline:visible;overflow-x:visible;overflow-y:visible;overscroll-behavior-block:auto;overscroll-behavior-inline:auto;overscroll-behavior-x:auto;overscroll-behavior-y:auto;flood-opacity:1;opacity:1;shape-image-threshold:0;stop-opacity:1;border-block-end-style:solid;border-block-start-style:solid;border-bottom-style:solid;border-inline-end-style:solid;border-inline-start-style:solid;border-left-style:solid;border-right-style:solid;border-top-style:solid;column-rule-style:none;accent-color:auto;animation-delay:0s;animation-direction:normal;animation-duration:0s;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;background-attachment:scroll;background-blend-mode:normal;background-clip:border-box;background-image:none;background-origin:padding-box;background-position-x:0%;background-position-y:0%;background-repeat:repeat;background-size:contain;border-image-outset:0;border-image-slice:100%;border-image-width:1;border-spacing:0px 0px;box-shadow:rgba(0, 0, 0, 0.7) 4px 5px 6px 0px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px;caret-color:rgb(33, 37, 41);clip-path:none;color:rgb(33, 37, 41);color-scheme:normal;column-width:auto;content:normal;counter-increment:none;counter-reset:none;counter-set:none;cursor:auto;d:none;filter:none;flex-basis:auto;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-language-override:normal;font-size:16px;font-variant-alternates:normal;font-variation-settings:normal;grid-template-areas:none;hyphenate-character:auto;letter-spacing:normal;line-height:24px;list-style-type:disc;mask-clip:border-box;mask-composite:add;mask-image:none;mask-mode:match-source;mask-origin:border-box;mask-position-x:0%;mask-position-y:0%;mask-repeat:repeat;mask-size:auto;offset-anchor:auto;offset-path:none;perspective:none;quotes:auto;rotate:none;scale:none;scrollbar-color:auto;shape-outside:none;stroke-dasharray:none;stroke-dashoffset:0px;stroke-width:1px;tab-size:8;text-decoration-thickness:auto;text-emphasis-style:none;text-overflow:clip;text-shadow:none;transition-delay:0s;transition-duration:0s;transition-property:all;transition-timing-function:ease;translate:none;vertical-align:baseline;will-change:auto;word-spacing:0px;clip:auto;-moz-image-region:auto;object-position:50% 50%;perspective-origin:82px 283.625px;fill:rgb(0, 0, 0);stroke:none;transform-origin:82px 283.625px;grid-template-columns:none;grid-template-rows:none;border-image-source:none;list-style-image:none;grid-auto-columns:auto;grid-auto-rows:auto;transform:none;column-gap:normal;row-gap:normal;marker-end:none;marker-mid:none;marker-start:none;grid-column-end:auto;grid-column-start:auto;grid-row-end:auto;grid-row-start:auto;max-block-size:none;max-height:none;max-inline-size:none;max-width:none;cx:0px;cy:0px;offset-distance:0px;text-indent:0px;x:0px;y:0px;border-bottom-left-radius:15px;border-bottom-right-radius:15px;border-end-end-radius:15px;border-end-start-radius:15px;border-start-end-radius:15px;border-start-start-radius:15px;border-top-left-radius:15px;border-top-right-radius:15px;block-size:567.25px;height:567.25px;inline-size:164px;min-block-size:0px;min-height:0px;min-inline-size:0px;min-width:0px;width:164px;outline-offset:0px;scroll-margin-block-end:0px;scroll-margin-block-start:0px;scroll-margin-bottom:0px;scroll-margin-inline-end:0px;scroll-margin-inline-start:0px;scroll-margin-left:0px;scroll-margin-right:0px;scroll-margin-top:0px;padding-block-end:1px;padding-block-start:1px;padding-bottom:1px;padding-inline-end:1px;padding-inline-start:1px;padding-left:1px;padding-right:1px;padding-top:1px;r:0px;shape-margin:0px;rx:auto;ry:auto;scroll-padding-block-end:auto;scroll-padding-block-start:auto;scroll-padding-bottom:auto;scroll-padding-inline-end:auto;scroll-padding-inline-start:auto;scroll-padding-left:auto;scroll-padding-right:auto;scroll-padding-top:auto;border-block-end-width:1px;border-block-start-width:1px;border-bottom-width:1px;border-inline-end-width:1px;border-inline-start-width:1px;border-left-width:1px;border-right-width:1px;border-top-width:1px;column-rule-width:0px;outline-width:0px;-webkit-text-stroke-width:0px;bottom:-258.967px;inset-block-end:-258.967px;inset-block-start:57.7167px;inset-inline-end:1140px;inset-inline-start:212px;left:212px;margin-block-end:2px;margin-block-start:2px;margin-bottom:2px;margin-inline-end:2px;margin-inline-start:2px;margin-left:2px;margin-right:2px;margin-top:2px;right:1140px;text-underline-offset:auto;top:57.7167px;background-color:rgb(128, 128, 128);border-block-end-color:rgb(73, 73, 73);border-block-start-color:rgb(73, 73, 73);border-bottom-color:rgb(73, 73, 73);border-inline-end-color:rgb(73, 73, 73);border-inline-start-color:rgb(73, 73, 73);border-left-color:rgb(73, 73, 73);border-right-color:rgb(73, 73, 73);border-top-color:rgb(73, 73, 73);column-rule-color:rgb(33, 37, 41);flood-color:rgb(0, 0, 0);lighting-color:rgb(255, 255, 255);outline-color:rgb(33, 37, 41);stop-color:rgb(0, 0, 0);text-decoration-color:rgb(33, 37, 41);text-emphasis-color:rgb(33, 37, 41);-webkit-text-fill-color:rgb(33, 37, 41);-webkit-text-stroke-color:rgb(33, 37, 41);background:rgb(128, 128, 128) none repeat scroll 0% 0% / contain;background-position:0% 0%;border-color:rgb(73, 73, 73);border-style:solid;border-width:1px;border-top:1px solid rgb(73, 73, 73);border-right:1px solid rgb(73, 73, 73);border-bottom:1px solid rgb(73, 73, 73);border-left:1px solid rgb(73, 73, 73);border-block-start:1px solid rgb(73, 73, 73);border-block-end:1px solid rgb(73, 73, 73);border-inline-start:1px solid rgb(73, 73, 73);border-inline-end:1px solid rgb(73, 73, 73);border:1px solid rgb(73, 73, 73);border-radius:15px;border-image:none 100% / 1 / 0 stretch;border-block-width:1px;border-block-style:solid;border-block-color:rgb(73, 73, 73);border-inline-width:1px;border-inline-style:solid;border-inline-color:rgb(73, 73, 73);border-block:1px solid rgb(73, 73, 73);border-inline:1px solid rgb(73, 73, 73);overflow:visible;overscroll-behavior:auto;page-break-before:auto;page-break-after:auto;page-break-inside:auto;offset:none;columns:auto auto;column-rule:3px none rgb(33, 37, 41);font:400 16px / 1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-variant:normal;marker:none;text-emphasis:none rgb(33, 37, 41);-webkit-text-stroke:0px rgb(33, 37, 41);list-style:outside;margin:2px;margin-block:2px;margin-inline:2px;scroll-margin:0px;scroll-margin-block:0px;scroll-margin-inline:0px;outline:rgb(33, 37, 41) none 0px;padding:1px;padding-block:1px;padding-inline:1px;scroll-padding:auto;scroll-padding-block:auto;scroll-padding-inline:auto;flex-flow:row nowrap;flex:0 1 auto;gap:normal;grid-row:auto;grid-column:auto;grid-area:auto;grid-template:none;grid:none;place-content:normal;place-self:auto;place-items:normal legacy;inset:57.7167px auto auto 212px;inset-block:57.7167px auto;inset-inline:212px auto;mask:none;mask-position:0% 0%;text-decoration:rgb(33, 37, 41);transition:all 0s ease 0s;animation:0s ease 0s 1 normal none running none;-webkit-background-clip:border-box;-webkit-background-origin:padding-box;-webkit-background-size:contain;-moz-border-start-color:rgb(73, 73, 73);-moz-border-start-style:solid;-moz-border-start-width:1px;-moz-border-end-color:rgb(73, 73, 73);-moz-border-end-style:solid;-moz-border-end-width:1px;-webkit-border-top-left-radius:15px;-webkit-border-top-right-radius:15px;-webkit-border-bottom-right-radius:15px;-webkit-border-bottom-left-radius:15px;-moz-transform:none;-webkit-transform:none;-moz-perspective:none;-webkit-perspective:none;-moz-perspective-origin:82px 283.625px;-webkit-perspective-origin:82px 283.625px;-moz-backface-visibility:visible;-webkit-backface-visibility:visible;-moz-transform-style:flat;-webkit-transform-style:flat;-moz-transform-origin:82px 283.625px;-webkit-transform-origin:82px 283.625px;-moz-appearance:none;-webkit-appearance:none;-webkit-box-shadow:rgba(0, 0, 0, 0.7) 4px 5px 6px 0px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px;-webkit-filter:none;-moz-font-feature-settings:normal;-moz-font-language-override:normal;color-adjust:economy;-moz-hyphens:manual;-webkit-text-size-adjust:auto;word-wrap:normal;-moz-tab-size:8;-moz-margin-start:2px;-moz-margin-end:2px;-moz-padding-start:1px;-moz-padding-end:1px;-webkit-flex-direction:row;-webkit-flex-wrap:nowrap;-webkit-justify-content:normal;-webkit-align-content:normal;-webkit-align-items:normal;-webkit-flex-grow:0;-webkit-flex-shrink:1;-webkit-align-self:auto;-webkit-order:0;-webkit-flex-basis:auto;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;grid-column-gap:normal;grid-row-gap:normal;-webkit-mask-repeat:repeat;-webkit-mask-position-x:0%;-webkit-mask-position-y:0%;-webkit-mask-clip:border-box;-webkit-mask-origin:border-box;-webkit-mask-size:auto;-webkit-mask-composite:add;-webkit-mask-image:none;-moz-user-select:auto;-webkit-user-select:auto;-moz-transition-duration:0s;-webkit-transition-duration:0s;-moz-transition-timing-function:ease;-webkit-transition-timing-function:ease;-moz-transition-property:all;-webkit-transition-property:all;-moz-transition-delay:0s;-webkit-transition-delay:0s;-moz-animation-name:none;-webkit-animation-name:none;-moz-animation-duration:0s;-webkit-animation-duration:0s;-moz-animation-timing-function:ease;-webkit-animation-timing-function:ease;-moz-animation-iteration-count:1;-webkit-animation-iteration-count:1;-moz-animation-direction:normal;-webkit-animation-direction:normal;-moz-animation-play-state:running;-webkit-animation-play-state:running;-moz-animation-fill-mode:none;-webkit-animation-fill-mode:none;-moz-animation-delay:0s;-webkit-animation-delay:0s;-webkit-box-align:stretch;-webkit-box-direction:normal;-webkit-box-flex:0;-webkit-box-orient:horizontal;-webkit-box-pack:start;-webkit-box-ordinal-group:1;-moz-border-start:1px solid rgb(73, 73, 73);-moz-border-end:1px solid rgb(73, 73, 73);-webkit-border-radius:15px;-moz-border-image:none 100% / 1 / 0 stretch;-webkit-border-image:none 100% / 1 / 0 stretch;-webkit-flex-flow:row nowrap;-webkit-flex:0 1 auto;grid-gap:normal;-webkit-mask:none;-webkit-mask-position:0% 0%;-moz-transition:all 0s ease 0s;-webkit-transition:all 0s ease 0s;-moz-animation:0s ease 0s 1 normal none running none;-webkit-animation:0s ease 0s 1 normal none running none;};</style>
<div id="GLIITCHI" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; width: 164px; position: relative; top: 0px; left: 0px; height: 567.25px;" class="resize-drag my-pedal"><div id="GLIITCHI" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 33px; left: 11.2px; width: 135.6px; height: 116.25px;" class="resize-drag"></div><div id="GLIITCHI" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 153.25px; left: 1px; width: 156px; height: 286.75px;" class="resize-drag"></div><div id="GLIITCHI" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 444px; left: 9.33333px; width: 139.333px; height: 116.25px;" class="resize-drag"></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 15.2px; width: 56.2667px; height: 78.25px;" class="drag"><webaudio-knob id="/GLIITCHI/Mix/AudioIn" style="touch-action: none; display: block;" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="2" step="0.0001" width="40" height="40"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: currentcolor none medium; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 73.4667px; width: 71.3333px; height: 78.25px;" class="drag"><webaudio-knob id="/GLIITCHI/Mix/GlitchiMix" style="touch-action: none; display: block;" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="2" step="0.0001" width="40" height="40"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: currentcolor none medium; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 191.5px; left: 25px; width: 42px; height: 78.25px;" class="drag"><webaudio-knob id="/GLIITCHI/Glitch/g̷l̵i̷t̷c̷h̴" style="touch-action: none; display: block;" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="1" max="20000" step="1" width="40" height="40"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: currentcolor none medium; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 189.25px; left: 69px; width: 66px; height: 80.5px;" class="drag"><webaudio-switch id="/GLIITCHI/Glitch/Rec" style="touch-action: none;" src="./img/switches/switch_1.png" sprites="100" width="64" height="40"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-switch{
  display:inline-block;
  margin:0;
  padding:0;
  font-family: sans-serif;
  font-size: 11px;
  cursor:pointer;
}
.webaudio-switch-body{
  display:inline-block;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-switch-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/switches/switch_1.png&quot;); background-size: 100% 200%; width: 64px; height: 40px; outline: currentcolor none medium; background-position: 0px 0px;"><div class="webaudioctrl-tooltip"></div></div>
</webaudio-switch></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 271.75px; left: 56.9167px; width: 46.15px; height: 166.25px;" class="drag"><webaudio-knob id="/GLIITCHI/Glitch/TONE" style="touch-action: none; display: block;" src="./img/knobs/vslider1.png" sprites="100" min="0.5" max="2" step="0.0001" width="40" height="128"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/vslider1.png&quot;); background-size: 40px 12928px; outline: currentcolor none medium; width: 40px; height: 128px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 480px; left: 13.3333px; width: 133.333px; height: 78.25px;" class="drag"><webaudio-knob id="/GLIITCHI/Effects/EchoVerb Dry/Wet" style="touch-action: none; display: block;" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="1" step="0.001" width="40" height="40"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: currentcolor none medium; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><label for="GLIITCHI" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 160px; left: 2px; top: 3.71666px;" class="drag" contenteditable="false">GLIITCHI</label><label for="Mix" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 131.6px; left: 16.2px; top: 39.7167px;" class="drag" contenteditable="false">Mix</label><label for="Glitch" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 152px; left: 6px; top: 159.967px;" class="drag" contenteditable="false">Glitch</label><label for="Effects" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 135.333px; left: 14.3333px; top: 450.717px;" class="drag" contenteditable="false">Effects</label><label for="AudioIn" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 54.2667px; left: 18.2px; top: 117.967px;" class="drag" contenteditable="false">AudioIn</label><label for="GlitchiMix" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 69.3333px; left: 76.4667px; top: 117.967px;" class="drag" contenteditable="false">GlitchiMix</label><label for="g̷l̵i̷t̷c̷h̴" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 28px; top: 240.467px;" class="drag" contenteditable="false">g̷l̵i̷t̷c̷h̴</label><label for="Rec" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 64px; left: 72px; top: 240.467px;" class="drag" contenteditable="false">Rec</label><label for="TONE" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 44.15px; left: 59.9167px; top: 408.717px;" class="drag" contenteditable="false">TONE</label><label for="EchoVerb Dry/Wet" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 131.333px; left: 16.3333px; top: 528.967px;" class="drag" contenteditable="false">EchoVerb Dry/Wet</label></div>`;
  
        this.isOn;
            this.state = new Object();
            this.setKnobs();
            this.setSliders();
            this.setSwitches();
            //this.setSwitchListener();
            this.setInactive();
            // Change #pedal to .my-pedal for use the new builder
            this._root.querySelector('.my-pedal').style.transform = 'none';
            //this._root.querySelector("#test").style.fontFamily = window.getComputedStyle(this._root.querySelector("#test")).getPropertyValue('font-family');
  
            // Compute base URI of this main.html file. This is needed in order
            // to fix all relative paths in CSS, as they are relative to
            // the main document, not the plugin's main.html
            this.basePath = getBaseURL();
            console.log("basePath = " + this.basePath)
  
            // Fix relative path in WebAudio Controls elements
            this.fixRelativeImagePathsInCSS();
  
            // optionnal : set image background using a relative URI (relative
            // to this file)
        //this.setImageBackground("/img/BigMuffBackground.png");
          
        // Monitor param changes in order to update the gui
        window.requestAnimationFrame(this.handleAnimationFrame);
      
              }
          
              fixRelativeImagePathsInCSS() {
                 
      // change webaudiocontrols relative paths for spritesheets to absolute
          let webaudioControls = this._root.querySelectorAll(
              'webaudio-knob, webaudio-slider, webaudio-switch, img'
          );
          webaudioControls.forEach((e) => {
              let currentImagePath = e.getAttribute('src');
              if (currentImagePath !== undefined) {
                  //console.log("Got wc src as " + e.getAttribute("src"));
                  let imagePath = e.getAttribute('src');
                  e.setAttribute('src', this.basePath + '/' + imagePath);
                  //console.log("After fix : wc src as " + e.getAttribute("src"));
              }
          });
  
          let sliders = this._root.querySelectorAll('webaudio-slider');
          sliders.forEach((e) => {
              let currentImagePath = e.getAttribute('knobsrc');
              if (currentImagePath !== undefined) {
                  let imagePath = e.getAttribute('knobsrc');
                  e.setAttribute('knobsrc', this.basePath + '/' + imagePath);
              }
          });

          // BMT Get all fonts
          // Need to get the attr font
          let usedFonts = "";
          let fonts = this._root.querySelectorAll('label[font]');
          fonts.forEach((e) => {
              if(!usedFonts.includes(e.getAttribute("font"))) usedFonts += "family=" + e.getAttribute("font") + "&";
          });
          let link = document.createElement('link');
          link.rel = "stylesheet";
          if(usedFonts.slice(0, -1)) link.href = "https://fonts.googleapis.com/css2?"+usedFonts.slice(0, -1)+"&display=swap";
          document.querySelector('head').appendChild(link);
          
          // BMT Adapt for background-image
          let divs = this._root.querySelectorAll('div');
          divs.forEach((e) => {
              if('background-image' in e.style){
                let currentImagePath = e.style.backgroundImage.slice(4, -1);
                if (currentImagePath !== undefined) {
                    let imagePath = e.style.backgroundImage.slice(5, -2);
                    if(imagePath != "") e.style.backgroundImage = 'url(' + this.basePath + '/' + imagePath + ')';
                }
              }
          });
          
              }
          
              setImageBackground() {
                 
      // check if the shadowroot host has a background image
          let mainDiv = this._root.querySelector('#main');
          mainDiv.style.backgroundImage =
              'url(' + this.basePath + '/' + imageRelativeURI + ')';
  
          //console.log("background =" + mainDiv.style.backgroundImage);
          //this._root.style.backgroundImage = "toto.png";
      
              }
          
              attributeChangedCallback() {
                 
            console.log('Custom element attributes changed.');
            this.state = JSON.parse(this.getAttribute('state'));
        let tmp = '/PingPongDelayFaust/bypass';
        
        if (this.state[tmp] == 1) {
          this._root.querySelector('#switch1').value = 0;
          this.isOn = false;
        } else if (this.state[tmp] == 0) {
          this._root.querySelector('#switch1').value = 1;
          this.isOn = true;
        }
  
        this.knobs = this._root.querySelectorAll('.knob');
        console.log(this.state);
  
        for (var i = 0; i < this.knobs.length; i++) {
          this.knobs[i].setValue(this.state[this.knobs[i].id], false);
          console.log(this.knobs[i].value);
        }
      
              }
          handleAnimationFrame = () => {
        this._root.getElementById('/GLIITCHI/Mix/AudioIn').value = this._plug.audioNode.getParamValue('/GLIITCHI/Mix/AudioIn');
        

        this._root.getElementById('/GLIITCHI/Mix/GlitchiMix').value = this._plug.audioNode.getParamValue('/GLIITCHI/Mix/GlitchiMix');
        

        this._root.getElementById('/GLIITCHI/Glitch/g̷l̵i̷t̷c̷h̴').value = this._plug.audioNode.getParamValue('/GLIITCHI/Glitch/g̷l̵i̷t̷c̷h̴');
        

        this._root.getElementById('/GLIITCHI/Glitch/TONE').value = this._plug.audioNode.getParamValue('/GLIITCHI/Glitch/TONE');
        

        this._root.getElementById('/GLIITCHI/Effects/EchoVerb Dry/Wet').value = this._plug.audioNode.getParamValue('/GLIITCHI/Effects/EchoVerb Dry/Wet');
        

          this._root.getElementById('/GLIITCHI/Glitch/Rec').value = 1 - this._plug.audioNode.getParamValue('/GLIITCHI/Glitch/Rec');
         
window.requestAnimationFrame(this.handleAnimationFrame);
         }
      
              get properties() {
                 
        this.boundingRect = {
            dataWidth: {
              type: Number,
              value: null
            },
            dataHeight: {
              type: Number,
              value: null
            }
        };
        return this.boundingRect;
      
              }
          
              static get observedAttributes() {
                 
        return ['state'];
      
              }
          
              setKnobs() {
                 this._root.getElementById("/GLIITCHI/Mix/AudioIn").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/GLIITCHI/Mix/AudioIn", e.target.value));
this._root.getElementById("/GLIITCHI/Mix/GlitchiMix").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/GLIITCHI/Mix/GlitchiMix", e.target.value));
this._root.getElementById("/GLIITCHI/Glitch/g̷l̵i̷t̷c̷h̴").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/GLIITCHI/Glitch/g̷l̵i̷t̷c̷h̴", e.target.value));
this._root.getElementById("/GLIITCHI/Glitch/TONE").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/GLIITCHI/Glitch/TONE", e.target.value));
this._root.getElementById("/GLIITCHI/Effects/EchoVerb Dry/Wet").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/GLIITCHI/Effects/EchoVerb Dry/Wet", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 this._root.getElementById("/GLIITCHI/Glitch/Rec").addEventListener("change", (e) =>this._plug.audioNode.setParamValue("/GLIITCHI/Glitch/Rec", 1 - e.target.value));

              }
          
              setInactive() {
                 
        let switches = this._root.querySelectorAll(".switch webaudio-switch");
  
        switches.forEach(s => {
          console.log("### SWITCH ID = " + s.id);
          this._plug.audioNode.setParamValue(s.id, 0);
        });
      
              }
          }
      try {
          customElements.define('wap-gliitchi', 
                                GLIITCHIGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      