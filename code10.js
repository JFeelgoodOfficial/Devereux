gdjs.winD8Code = {};
gdjs.winD8Code.GDwinObjects1= [];
gdjs.winD8Code.GDwinObjects2= [];
gdjs.winD8Code.GDDEVEREUXObjects1= [];
gdjs.winD8Code.GDDEVEREUXObjects2= [];
gdjs.winD8Code.GDnextObjects1= [];
gdjs.winD8Code.GDnextObjects2= [];
gdjs.winD8Code.GDvictoryObjects1= [];
gdjs.winD8Code.GDvictoryObjects2= [];
gdjs.winD8Code.GDWINNERObjects1= [];
gdjs.winD8Code.GDWINNERObjects2= [];
gdjs.winD8Code.GDbackgroundObjects1= [];
gdjs.winD8Code.GDbackgroundObjects2= [];

gdjs.winD8Code.conditionTrue_0 = {val:false};
gdjs.winD8Code.condition0IsTrue_0 = {val:false};
gdjs.winD8Code.condition1IsTrue_0 = {val:false};


gdjs.winD8Code.mapOfGDgdjs_46winD8Code_46GDwinObjects1Objects = Hashtable.newFrom({"win": gdjs.winD8Code.GDwinObjects1});gdjs.winD8Code.mapOfGDgdjs_46winD8Code_46GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.winD8Code.GDbackgroundObjects1});gdjs.winD8Code.mapOfGDgdjs_46winD8Code_46GDwinObjects1Objects = Hashtable.newFrom({"win": gdjs.winD8Code.GDwinObjects1});gdjs.winD8Code.mapOfGDgdjs_46winD8Code_46GDvictoryObjects1Objects = Hashtable.newFrom({"victory": gdjs.winD8Code.GDvictoryObjects1});gdjs.winD8Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.winD8Code.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.winD8Code.GDwinObjects1);

gdjs.winD8Code.condition0IsTrue_0.val = false;
{
gdjs.winD8Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.winD8Code.mapOfGDgdjs_46winD8Code_46GDwinObjects1Objects, gdjs.winD8Code.mapOfGDgdjs_46winD8Code_46GDbackgroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.winD8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("victory"), gdjs.winD8Code.GDvictoryObjects1);
/* Reuse gdjs.winD8Code.GDwinObjects1 */
{for(var i = 0, len = gdjs.winD8Code.GDwinObjects1.length ;i < len;++i) {
    gdjs.winD8Code.GDwinObjects1[i].addForceTowardObject((gdjs.winD8Code.GDvictoryObjects1.length !== 0 ? gdjs.winD8Code.GDvictoryObjects1[0] : null), 500, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("victory"), gdjs.winD8Code.GDvictoryObjects1);
gdjs.copyArray(runtimeScene.getObjects("win"), gdjs.winD8Code.GDwinObjects1);

gdjs.winD8Code.condition0IsTrue_0.val = false;
{
gdjs.winD8Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.winD8Code.mapOfGDgdjs_46winD8Code_46GDwinObjects1Objects, gdjs.winD8Code.mapOfGDgdjs_46winD8Code_46GDvictoryObjects1Objects, false, runtimeScene, false);
}if (gdjs.winD8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Toadlight.mp3", 1, true, 50, 1);
}}

}


};

gdjs.winD8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winD8Code.GDwinObjects1.length = 0;
gdjs.winD8Code.GDwinObjects2.length = 0;
gdjs.winD8Code.GDDEVEREUXObjects1.length = 0;
gdjs.winD8Code.GDDEVEREUXObjects2.length = 0;
gdjs.winD8Code.GDnextObjects1.length = 0;
gdjs.winD8Code.GDnextObjects2.length = 0;
gdjs.winD8Code.GDvictoryObjects1.length = 0;
gdjs.winD8Code.GDvictoryObjects2.length = 0;
gdjs.winD8Code.GDWINNERObjects1.length = 0;
gdjs.winD8Code.GDWINNERObjects2.length = 0;
gdjs.winD8Code.GDbackgroundObjects1.length = 0;
gdjs.winD8Code.GDbackgroundObjects2.length = 0;

gdjs.winD8Code.eventsList0(runtimeScene);
return;

}

gdjs['winD8Code'] = gdjs.winD8Code;
