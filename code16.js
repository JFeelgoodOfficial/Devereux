gdjs.winD2Code = {};
gdjs.winD2Code.GDwinObjects1= [];
gdjs.winD2Code.GDwinObjects2= [];
gdjs.winD2Code.GDDEVEREUXObjects1= [];
gdjs.winD2Code.GDDEVEREUXObjects2= [];
gdjs.winD2Code.GDnextObjects1= [];
gdjs.winD2Code.GDnextObjects2= [];
gdjs.winD2Code.GDNewTextObjects1= [];
gdjs.winD2Code.GDNewTextObjects2= [];
gdjs.winD2Code.GDNewSpriteObjects1= [];
gdjs.winD2Code.GDNewSpriteObjects2= [];

gdjs.winD2Code.conditionTrue_0 = {val:false};
gdjs.winD2Code.condition0IsTrue_0 = {val:false};
gdjs.winD2Code.condition1IsTrue_0 = {val:false};
gdjs.winD2Code.condition2IsTrue_0 = {val:false};


gdjs.winD2Code.mapOfGDgdjs_46winD2Code_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.winD2Code.GDnextObjects1});gdjs.winD2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.winD2Code.GDnextObjects1);

gdjs.winD2Code.condition0IsTrue_0.val = false;
gdjs.winD2Code.condition1IsTrue_0.val = false;
{
gdjs.winD2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.winD2Code.condition0IsTrue_0.val ) {
{
gdjs.winD2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winD2Code.mapOfGDgdjs_46winD2Code_46GDnextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.winD2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CountDown3", true);
}}

}


};

gdjs.winD2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winD2Code.GDwinObjects1.length = 0;
gdjs.winD2Code.GDwinObjects2.length = 0;
gdjs.winD2Code.GDDEVEREUXObjects1.length = 0;
gdjs.winD2Code.GDDEVEREUXObjects2.length = 0;
gdjs.winD2Code.GDnextObjects1.length = 0;
gdjs.winD2Code.GDnextObjects2.length = 0;
gdjs.winD2Code.GDNewTextObjects1.length = 0;
gdjs.winD2Code.GDNewTextObjects2.length = 0;
gdjs.winD2Code.GDNewSpriteObjects1.length = 0;
gdjs.winD2Code.GDNewSpriteObjects2.length = 0;

gdjs.winD2Code.eventsList0(runtimeScene);
return;

}

gdjs['winD2Code'] = gdjs.winD2Code;
