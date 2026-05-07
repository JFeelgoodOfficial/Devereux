gdjs.winD6Code = {};
gdjs.winD6Code.GDwinObjects1= [];
gdjs.winD6Code.GDwinObjects2= [];
gdjs.winD6Code.GDDEVEREUXObjects1= [];
gdjs.winD6Code.GDDEVEREUXObjects2= [];
gdjs.winD6Code.GDnextObjects1= [];
gdjs.winD6Code.GDnextObjects2= [];
gdjs.winD6Code.GDNewTextObjects1= [];
gdjs.winD6Code.GDNewTextObjects2= [];
gdjs.winD6Code.GDNewSpriteObjects1= [];
gdjs.winD6Code.GDNewSpriteObjects2= [];

gdjs.winD6Code.conditionTrue_0 = {val:false};
gdjs.winD6Code.condition0IsTrue_0 = {val:false};
gdjs.winD6Code.condition1IsTrue_0 = {val:false};
gdjs.winD6Code.condition2IsTrue_0 = {val:false};


gdjs.winD6Code.mapOfGDgdjs_46winD6Code_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.winD6Code.GDnextObjects1});gdjs.winD6Code.eventsList0 = function(runtimeScene) {
if (gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene)) {
gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Toadlight.mp3", 1, true, 80, 1);
}

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.winD6Code.GDnextObjects1);

gdjs.winD6Code.condition0IsTrue_0.val = false;
gdjs.winD6Code.condition1IsTrue_0.val = false;
{
gdjs.winD6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.winD6Code.condition0IsTrue_0.val ) {
{
gdjs.winD6Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winD6Code.mapOfGDgdjs_46winD6Code_46GDnextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.winD6Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CountDown7", true);
}}

}


};

gdjs.winD6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winD6Code.GDwinObjects1.length = 0;
gdjs.winD6Code.GDwinObjects2.length = 0;
gdjs.winD6Code.GDDEVEREUXObjects1.length = 0;
gdjs.winD6Code.GDDEVEREUXObjects2.length = 0;
gdjs.winD6Code.GDnextObjects1.length = 0;
gdjs.winD6Code.GDnextObjects2.length = 0;
gdjs.winD6Code.GDNewTextObjects1.length = 0;
gdjs.winD6Code.GDNewTextObjects2.length = 0;
gdjs.winD6Code.GDNewSpriteObjects1.length = 0;
gdjs.winD6Code.GDNewSpriteObjects2.length = 0;

gdjs.winD6Code.eventsList0(runtimeScene);
return;

}

gdjs['winD6Code'] = gdjs.winD6Code;
