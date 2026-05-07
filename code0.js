gdjs.INTROCode = {};
gdjs.INTROCode.GDbackgroundObjects1= [];
gdjs.INTROCode.GDbackgroundObjects2= [];
gdjs.INTROCode.GDNewTextObjects1= [];
gdjs.INTROCode.GDNewTextObjects2= [];
gdjs.INTROCode.GDNewText2Objects1= [];
gdjs.INTROCode.GDNewText2Objects2= [];
gdjs.INTROCode.GDNewSpriteObjects1= [];
gdjs.INTROCode.GDNewSpriteObjects2= [];
gdjs.INTROCode.GDNewText3Objects1= [];
gdjs.INTROCode.GDNewText3Objects2= [];
gdjs.INTROCode.GDTimerTextObjects1= [];
gdjs.INTROCode.GDTimerTextObjects2= [];
gdjs.INTROCode.GDNewSprite2Objects1= [];
gdjs.INTROCode.GDNewSprite2Objects2= [];
gdjs.INTROCode.GDNewText4Objects1= [];
gdjs.INTROCode.GDNewText4Objects2= [];

gdjs.INTROCode.conditionTrue_0 = {val:false};
gdjs.INTROCode.condition0IsTrue_0 = {val:false};
gdjs.INTROCode.condition1IsTrue_0 = {val:false};


gdjs.INTROCode.eventsList0 = function(runtimeScene) {

{


gdjs.INTROCode.condition0IsTrue_0.val = false;
{
gdjs.INTROCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.INTROCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.INTROCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.INTROCode.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.INTROCode.GDTimerTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTimerTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.INTROCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.INTROCode.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.INTROCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.INTROCode.GDNewText3Objects1[i].hide();
}
}}

}


{


{
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Toadalation.mp3", 1, true, 50, 1);
}}

}


{


gdjs.INTROCode.condition0IsTrue_0.val = false;
{
gdjs.INTROCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.INTROCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.INTROCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.INTROCode.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.INTROCode.GDTimerTextObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CountDown");
}{for(var i = 0, len = gdjs.INTROCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTimerTextObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Toadalation.mp3", 1, true, 50, 1);
}{for(var i = 0, len = gdjs.INTROCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.INTROCode.GDNewText3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.INTROCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.INTROCode.GDNewText4Objects1[i].hide(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.INTROCode.GDTimerTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTimerTextObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CountDown") - 5))));
}
}}

}


{


gdjs.INTROCode.condition0IsTrue_0.val = false;
{
gdjs.INTROCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CountDown") >= 5;
}if (gdjs.INTROCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CountDown", true);
}}

}


};

gdjs.INTROCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INTROCode.GDbackgroundObjects1.length = 0;
gdjs.INTROCode.GDbackgroundObjects2.length = 0;
gdjs.INTROCode.GDNewTextObjects1.length = 0;
gdjs.INTROCode.GDNewTextObjects2.length = 0;
gdjs.INTROCode.GDNewText2Objects1.length = 0;
gdjs.INTROCode.GDNewText2Objects2.length = 0;
gdjs.INTROCode.GDNewSpriteObjects1.length = 0;
gdjs.INTROCode.GDNewSpriteObjects2.length = 0;
gdjs.INTROCode.GDNewText3Objects1.length = 0;
gdjs.INTROCode.GDNewText3Objects2.length = 0;
gdjs.INTROCode.GDTimerTextObjects1.length = 0;
gdjs.INTROCode.GDTimerTextObjects2.length = 0;
gdjs.INTROCode.GDNewSprite2Objects1.length = 0;
gdjs.INTROCode.GDNewSprite2Objects2.length = 0;
gdjs.INTROCode.GDNewText4Objects1.length = 0;
gdjs.INTROCode.GDNewText4Objects2.length = 0;

gdjs.INTROCode.eventsList0(runtimeScene);
return;

}

gdjs['INTROCode'] = gdjs.INTROCode;
