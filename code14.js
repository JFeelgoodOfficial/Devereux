gdjs.winD4Code = {};
gdjs.winD4Code.GDwinObjects1= [];
gdjs.winD4Code.GDwinObjects2= [];
gdjs.winD4Code.GDDEVEREUXObjects1= [];
gdjs.winD4Code.GDDEVEREUXObjects2= [];
gdjs.winD4Code.GDnextObjects1= [];
gdjs.winD4Code.GDnextObjects2= [];
gdjs.winD4Code.GDNewTextObjects1= [];
gdjs.winD4Code.GDNewTextObjects2= [];
gdjs.winD4Code.GDNewSpriteObjects1= [];
gdjs.winD4Code.GDNewSpriteObjects2= [];

gdjs.winD4Code.conditionTrue_0 = {val:false};
gdjs.winD4Code.condition0IsTrue_0 = {val:false};
gdjs.winD4Code.condition1IsTrue_0 = {val:false};
gdjs.winD4Code.condition2IsTrue_0 = {val:false};


gdjs.winD4Code.mapOfGDgdjs_46winD4Code_46GDnextObjects1Objects = Hashtable.newFrom({"next": gdjs.winD4Code.GDnextObjects1});gdjs.winD4Code.eventsList0 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.winD4Code.GDnextObjects1);

gdjs.winD4Code.condition0IsTrue_0.val = false;
gdjs.winD4Code.condition1IsTrue_0.val = false;
{
gdjs.winD4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.winD4Code.condition0IsTrue_0.val ) {
{
gdjs.winD4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winD4Code.mapOfGDgdjs_46winD4Code_46GDnextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.winD4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CountDown5", true);
}}

}


};

gdjs.winD4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winD4Code.GDwinObjects1.length = 0;
gdjs.winD4Code.GDwinObjects2.length = 0;
gdjs.winD4Code.GDDEVEREUXObjects1.length = 0;
gdjs.winD4Code.GDDEVEREUXObjects2.length = 0;
gdjs.winD4Code.GDnextObjects1.length = 0;
gdjs.winD4Code.GDnextObjects2.length = 0;
gdjs.winD4Code.GDNewTextObjects1.length = 0;
gdjs.winD4Code.GDNewTextObjects2.length = 0;
gdjs.winD4Code.GDNewSpriteObjects1.length = 0;
gdjs.winD4Code.GDNewSpriteObjects2.length = 0;

gdjs.winD4Code.eventsList0(runtimeScene);
return;

}

gdjs['winD4Code'] = gdjs.winD4Code;
