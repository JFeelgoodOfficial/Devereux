gdjs.game_95overCode = {};
gdjs.game_95overCode.GDGameOverObjects1= [];
gdjs.game_95overCode.GDGameOverObjects2= [];
gdjs.game_95overCode.GDstarObjects1= [];
gdjs.game_95overCode.GDstarObjects2= [];
gdjs.game_95overCode.GDresetObjects1= [];
gdjs.game_95overCode.GDresetObjects2= [];
gdjs.game_95overCode.GDbackgroundObjects1= [];
gdjs.game_95overCode.GDbackgroundObjects2= [];

gdjs.game_95overCode.conditionTrue_0 = {val:false};
gdjs.game_95overCode.condition0IsTrue_0 = {val:false};
gdjs.game_95overCode.condition1IsTrue_0 = {val:false};
gdjs.game_95overCode.condition2IsTrue_0 = {val:false};


gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.game_95overCode.GDstarObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.game_95overCode.GDbackgroundObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.game_95overCode.GDstarObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDresetObjects1Objects = Hashtable.newFrom({"reset": gdjs.game_95overCode.GDresetObjects1});gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.game_95overCode.GDstarObjects1});gdjs.game_95overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.game_95overCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.game_95overCode.GDstarObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDstarObjects1Objects, gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDbackgroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("reset"), gdjs.game_95overCode.GDresetObjects1);
/* Reuse gdjs.game_95overCode.GDstarObjects1 */
{for(var i = 0, len = gdjs.game_95overCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDstarObjects1[i].addForceTowardObject((gdjs.game_95overCode.GDresetObjects1.length !== 0 ? gdjs.game_95overCode.GDresetObjects1[0] : null), 600, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("reset"), gdjs.game_95overCode.GDresetObjects1);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.game_95overCode.GDstarObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDstarObjects1Objects, gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDresetObjects1Objects, false, runtimeScene, false);
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Game over.mp3", 1, true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.game_95overCode.GDstarObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
gdjs.game_95overCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDstarObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_95overCode.GDstarObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CountDown");
}{for(var i = 0, len = gdjs.game_95overCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDstarObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CountDown") >= 2;
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INTRO", true);
}}

}


};

gdjs.game_95overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_95overCode.GDGameOverObjects1.length = 0;
gdjs.game_95overCode.GDGameOverObjects2.length = 0;
gdjs.game_95overCode.GDstarObjects1.length = 0;
gdjs.game_95overCode.GDstarObjects2.length = 0;
gdjs.game_95overCode.GDresetObjects1.length = 0;
gdjs.game_95overCode.GDresetObjects2.length = 0;
gdjs.game_95overCode.GDbackgroundObjects1.length = 0;
gdjs.game_95overCode.GDbackgroundObjects2.length = 0;

gdjs.game_95overCode.eventsList0(runtimeScene);
return;

}

gdjs['game_95overCode'] = gdjs.game_95overCode;
