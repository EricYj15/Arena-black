var gdjs;(function(n){n.PixiFiltersTools.registerFilterCreator("Outline",new class extends n.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(r,e){return new PIXI.filters.OutlineFilter}updatePreRender(r,e){}updateDoubleParameter(r,e,t){const i=r;e==="thickness"?i.thickness=t:e==="padding"&&(i.padding=t)}getDoubleParameter(r,e){const t=r;return e==="thickness"?t.thickness:e==="padding"?t.padding:0}updateStringParameter(r,e,t){const i=r;e==="color"&&(i.color=n.rgbOrHexStringToNumber(t))}updateColorParameter(r,e,t){const i=r;e==="color"&&(i.color=t)}getColorParameter(r,e){const t=r;return e==="color"?t.color:0}updateBooleanParameter(r,e,t){}getNetworkSyncData(r){const e=r;return{t:e.thickness,p:e.padding,c:e.color}}updateFromNetworkSyncData(r,e){const t=r;t.thickness=e.t,t.padding=e.p,t.color=e.c}})})(gdjs||(gdjs={}));
//# sourceMappingURL=outline-pixi-filter.js.map
