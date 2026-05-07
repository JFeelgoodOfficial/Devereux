gdjs.winDCode = {};
gdjs.winDCode.GDwinObjects1= [];
gdjs.winDCode.GDwinObjects2= [];
gdjs.winDCode.GDDEVEREUXObjects1= [];
gdjs.winDCode.GDDEVEREUXObjects2= [];
gdjs.winDCode.GDnextObjects1= [];
gdjs.winDCode.GDnextObjects2= [];
gdjs.winDCode.GDNewTextObjects1= [];
gdjs.winDCode.GDNewTextObjects2= [];
gdjs.winDCode.GDNewSpriteObjects1= [];
gdjs.winDCode.GDNewSpriteObjects2= [];

gdjs.winDCode.conditionTrue_0 = {val:false};
gdjs.winDCode.condition0IsTrue_0 = {val:false};
gdjs.winDCode.condition1IsTrue_0 = {val:false};
gdjs.winDCode.condition2IsTrue_0 = {val:false};


gdjs.winDCode.mapOfGDgdjs_46winDCode_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.winDCode.GDnextObjects1});gdjs.winDCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.winDCode.GDnextObjects1);

gdjs.winDCode.condition0IsTrue_0.val = false;
gdjs.winDCode.condition1IsTrue_0.val = false;
{
gdjs.winDCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.winDCode.condition0IsTrue_0.val ) {
{
gdjs.winDCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winDCode.mapOfGDgdjs_46winDCode_46GDnextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.winDCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CountDown2", true);
}}

}


};

gdjs.winDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winDCode.GDwinObjects1.length = 0;
gdjs.winDCode.GDwinObjects2.length = 0;
gdjs.winDCode.GDDEVEREUXObjects1.length = 0;
gdjs.winDCode.GDDEVEREUXObjects2.length = 0;
gdjs.winDCode.GDnextObjects1.length = 0;
gdjs.winDCode.GDnextObjects2.length = 0;
gdjs.winDCode.GDNewTextObjects1.length = 0;
gdjs.winDCode.GDNewTextObjects2.length = 0;
gdjs.winDCode.GDNewSpriteObjects1.length = 0;
gdjs.winDCode.GDNewSpriteObjects2.length = 0;

gdjs.winDCode.eventsList0(runtimeScene);
return;

}

gdjs['winDCode'] = gdjs.winDCode;
