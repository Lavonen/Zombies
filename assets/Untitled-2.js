(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1150,
	height: 863,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Untitled_2_atlas_.png?1475151923794", id:"Untitled_2_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Untitled_2_atlas_", frames: [[1154,0,480,480],[0,0,1152,864],[1384,482,235,714],[1154,482,228,747]]}
];


// symbols:



(lib.Dickbutt = function() {
	this.spriteSheet = ss["Untitled_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.zombigame_parkkipaikka1 = function() {
	this.spriteSheet = ss["Untitled_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.zombigame_zombikonsepti1 = function() {
	this.spriteSheet = ss["Untitled_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.zombigame_zombikonsepti2 = function() {
	this.spriteSheet = ss["Untitled_2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombigame_parkkipaikka1();
	this.instance.parent = this;
	this.instance.setTransform(-576,-432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-576,-432,1152,864);


(lib.char_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombigame_zombikonsepti2();
	this.instance.parent = this;
	this.instance.setTransform(118,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118,0,228,747);


(lib.Char_m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombigame_zombikonsepti1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235,714);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Char1
	this.instance = new lib.Char_m();
	this.instance.parent = this;
	this.instance.setTransform(506.3,519.9,0.202,0.202,0,0,0,117.5,356.9);

	this.instance_1 = new lib.char_w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(471.8,536.5,0.259,0.259,0,0,0,114.1,373.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:114.1,regY:373.6,scaleX:0.259,scaleY:0.259,x:471.8,y:536.5}},{t:this.instance,p:{regX:117.5,scaleX:0.202,scaleY:0.202,x:506.3,y:519.9,regY:356.9}}]}).to({state:[{t:this.instance_1,p:{regX:114.1,regY:373.6,scaleX:0.259,scaleY:0.259,x:471.8,y:536.5}},{t:this.instance,p:{regX:117.6,scaleX:0.526,scaleY:0.526,x:525.1,y:519.8,regY:356.9}}]},6).to({state:[{t:this.instance,p:{regX:117.6,scaleX:0.526,scaleY:0.526,x:525.1,y:519.8,regY:356.9}},{t:this.instance_1,p:{regX:114.3,regY:373.8,scaleX:0.715,scaleY:0.715,x:393.8,y:536.6}}]},5).to({state:[{t:this.instance_1,p:{regX:114.3,regY:373.8,scaleX:0.715,scaleY:0.715,x:393.8,y:536.6}},{t:this.instance,p:{regX:117.7,scaleX:0.973,scaleY:0.973,x:525.2,y:559.1,regY:357.1}}]},8).to({state:[{t:this.instance_1,p:{regX:114.4,regY:373.9,scaleX:0.856,scaleY:0.856,x:339.1,y:582}},{t:this.instance,p:{regX:117.7,scaleX:1.625,scaleY:1.625,x:551.8,y:813.7,regY:356.9}}]},4).wait(1));

	// DickBUTT
	this.instance_2 = new lib.Dickbutt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(806,255,0.16,0.16);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({_off:true},1).wait(13));

	// Background
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(576,432);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(575,431.5,1152,864);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;