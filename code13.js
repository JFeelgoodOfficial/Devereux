gdjs.winD5Code = {};
gdjs.winD5Code.GDwinObjects1= [];
gdjs.winD5Code.GDwinObjects2= [];
gdjs.winD5Code.GDDEVEREUXObjects1= [];
gdjs.winD5Code.GDDEVEREUXObjects2= [];
gdjs.winD5Code.GDnextObjects1= [];
gdjs.winD5Code.GDnextObjects2= [];
gdjs.winD5Code.GDNewTextObjects1= [];
gdjs.winD5Code.GDNewTextObjects2= [];
gdjs.winD5Code.GDNewSpriteObjects1= [];
gdjs.winD5Code.GDNewSpriteObjects2= [];

gdjs.winD5Code.conditionTrue_0 = {val:false};
gdjs.winD5Code.condition0IsTrue_0 = {val:false};
gdjs.winD5Code.condition1IsTrue_0 = {val:false};
gdjs.winD5Code.condition2IsTrue_0 = {val:false};


gdjs.winD5Code.mapOfGDgdjs_46winD5Code_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.winD5Code.GDnextObjects1});gdjs.winD5Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.winD5Code.GDnextObjects1);

gdjs.winD5Code.condition0IsTrue_0.val = false;
gdjs.winD5Code.condition1IsTrue_0.val = false;
{
gdjs.winD5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.winD5Code.condition0IsTrue_0.val ) {
{
gdjs.winD5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winD5Code.mapOfGDgdjs_46winD5Code_46GDnextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.winD5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CountDown6", true);
}}

}


};

gdjs.winD5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winD5Code.GDwinObjects1.length = 0;
gdjs.winD5Code.GDwinObjects2.length = 0;
gdjs.winD5Code.GDDEVEREUXObjects1.length = 0;
gdjs.winD5Code.GDDEVEREUXObjects2.length = 0;
gdjs.winD5Code.GDnextObjects1.length = 0;
gdjs.winD5Code.GDnextObjects2.length = 0;
gdjs.winD5Code.GDNewTextObjects1.length = 0;
gdjs.winD5Code.GDNewTextObjects2.length = 0;
gdjs.winD5Code.GDNewSpriteObjects1.length = 0;
gdjs.winD5Code.GDNewSpriteObjects2.length = 0;

gdjs.winD5Code.eventsList0(runtimeScene);
return;

}

gdjs['winD5Code'] = gdjs.winD5Code;
