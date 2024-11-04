gdjs.Tela_32inicialCode = {};
gdjs.Tela_32inicialCode.localVariables = [];
gdjs.Tela_32inicialCode.GDNewTiledSpriteObjects1= [];
gdjs.Tela_32inicialCode.GDNewTiledSpriteObjects2= [];
gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects2= [];
gdjs.Tela_32inicialCode.GDNewSpriteObjects1= [];
gdjs.Tela_32inicialCode.GDNewSpriteObjects2= [];


gdjs.Tela_32inicialCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Tela inicial");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.Tela_32inicialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Tela_32inicialCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Tela_32inicialCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Tela_32inicialCode.GDNewSpriteObjects1.length = 0;
gdjs.Tela_32inicialCode.GDNewSpriteObjects2.length = 0;

gdjs.Tela_32inicialCode.eventsList0(runtimeScene);
gdjs.Tela_32inicialCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Tela_32inicialCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Tela_32inicialCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;
gdjs.Tela_32inicialCode.GDNewSpriteObjects1.length = 0;
gdjs.Tela_32inicialCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Tela_32inicialCode'] = gdjs.Tela_32inicialCode;
