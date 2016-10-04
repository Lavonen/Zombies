(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1150,
	height: 863,
	fps: 48,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/blink_48fps_atlas_.png?1475317767722", id:"blink_48fps_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"blink_48fps_atlas_", frames: [[0,0,1152,864],[0,866,1152,864]]}
];


// symbols:



(lib.zombigame_blinkanimation1 = function() {
	this.spriteSheet = ss["blink_48fps_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.zombigame_blinkanimation3 = function() {
	this.spriteSheet = ss["blink_48fps_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zombigame_blinkanimation1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1152,864);


// stage content:
(lib.blink_48fps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// closed
	this.instance = new lib.zombigame_blinkanimation3();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({_off:true},1).wait(4));

	// open
	this.instance_1 = new lib.zombigame_blinkanimation1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(576,432,1,1,0,0,0,576,432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(575,431.5,1152,864);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;