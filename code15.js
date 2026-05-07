gdjs.winD3Code = {};
gdjs.winD3Code.GDwinObjects1= [];
gdjs.winD3Code.GDwinObjects2= [];
gdjs.winD3Code.GDDEVEREUXObjects1= [];
gdjs.winD3Code.GDDEVEREUXObjects2= [];
gdjs.winD3Code.GDnextObjects1= [];
gdjs.winD3Code.GDnextObjects2= [];
gdjs.winD3Code.GDNewTextObjects1= [];
gdjs.winD3Code.GDNewTextObjects2= [];
gdjs.winD3Code.GDNewSpriteObjects1= [];
gdjs.winD3Code.GDNewSpriteObjects2= [];

gdjs.winD3Code.conditionTrue_0 = {val:false};
gdjs.winD3Code.condition0IsTrue_0 = {val:false};
gdjs.winD3Code.condition1IsTrue_0 = {val:false};
gdjs.winD3Code.condition2IsTrue_0 = {val:false};


gdjs.winD3Code.mapOfGDgdjs_46winD3Code_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.winD3Code.GDnextObjects1});gdjs.winD3Code.eventsList0 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.winD3Code.GDnextObjects1);

gdjs.winD3Code.condition0IsTrue_0.val = false;
gdjs.winD3Code.condition1IsTrue_0.val = false;
{
gdjs.winD3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.winD3Code.condition0IsTrue_0.val ) {
{
gdjs.winD3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winD3Code.mapOfGDgdjs_46winD3Code_46GDnextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.winD3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CountDown4", true);
}}

}


};

gdjs.winD3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winD3Code.GDwinObjects1.length = 0;
gdjs.winD3Code.GDwinObjects2.length = 0;
gdjs.winD3Code.GDDEVEREUXObjects1.length = 0;
gdjs.winD3Code.GDDEVEREUXObjects2.length = 0;
gdjs.winD3Code.GDnextObjects1.length = 0;
gdjs.winD3Code.GDnextObjects2.length = 0;
gdjs.winD3Code.GDNewTextObjects1.length = 0;
gdjs.winD3Code.GDNewTextObjects2.length = 0;
gdjs.winD3Code.GDNewSpriteObjects1.length = 0;
gdjs.winD3Code.GDNewSpriteObjects2.length = 0;

gdjs.winD3Code.eventsList0(runtimeScene);
return;

}

gdjs['winD3Code'] = gdjs.winD3Code;
