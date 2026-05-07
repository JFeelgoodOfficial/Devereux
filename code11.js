gdjs.winD7Code = {};
gdjs.winD7Code.GDwinObjects1= [];
gdjs.winD7Code.GDwinObjects2= [];
gdjs.winD7Code.GDDEVEREUXObjects1= [];
gdjs.winD7Code.GDDEVEREUXObjects2= [];
gdjs.winD7Code.GDnextObjects1= [];
gdjs.winD7Code.GDnextObjects2= [];
gdjs.winD7Code.GDNewTextObjects1= [];
gdjs.winD7Code.GDNewTextObjects2= [];
gdjs.winD7Code.GDNewSpriteObjects1= [];
gdjs.winD7Code.GDNewSpriteObjects2= [];

gdjs.winD7Code.conditionTrue_0 = {val:false};
gdjs.winD7Code.condition0IsTrue_0 = {val:false};
gdjs.winD7Code.condition1IsTrue_0 = {val:false};
gdjs.winD7Code.condition2IsTrue_0 = {val:false};


gdjs.winD7Code.mapOfGDgdjs_46winD7Code_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.winD7Code.GDnextObjects1});gdjs.winD7Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.winD7Code.GDnextObjects1);

gdjs.winD7Code.condition0IsTrue_0.val = false;
gdjs.winD7Code.condition1IsTrue_0.val = false;
{
gdjs.winD7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.winD7Code.condition0IsTrue_0.val ) {
{
gdjs.winD7Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winD7Code.mapOfGDgdjs_46winD7Code_46GDnextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.winD7Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CountDown8", true);
}}

}


};

gdjs.winD7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winD7Code.GDwinObjects1.length = 0;
gdjs.winD7Code.GDwinObjects2.length = 0;
gdjs.winD7Code.GDDEVEREUXObjects1.length = 0;
gdjs.winD7Code.GDDEVEREUXObjects2.length = 0;
gdjs.winD7Code.GDnextObjects1.length = 0;
gdjs.winD7Code.GDnextObjects2.length = 0;
gdjs.winD7Code.GDNewTextObjects1.length = 0;
gdjs.winD7Code.GDNewTextObjects2.length = 0;
gdjs.winD7Code.GDNewSpriteObjects1.length = 0;
gdjs.winD7Code.GDNewSpriteObjects2.length = 0;

gdjs.winD7Code.eventsList0(runtimeScene);
return;

}

gdjs['winD7Code'] = gdjs.winD7Code;
