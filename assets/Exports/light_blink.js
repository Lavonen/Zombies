(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/light_blink_atlas_.png?1476865269747", id:"light_blink_atlas_"},
		{src:"images/light_blink_atlas_2.png?1476865269747", id:"light_blink_atlas_2"}
	]
};



lib.ssMetadata = [
		{name:"light_blink_atlas_", frames: [[0,0,4796,4800]]},
		{name:"light_blink_atlas_2", frames: [[0,0,4796,4800]]}
];


// symbols:



(lib.lights_off = function() {
	this.spriteSheet = ss["light_blink_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lights_on2 = function() {
	this.spriteSheet = ss["light_blink_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAl3AGWQgTgGgTgBQhEgDg4AyQgYAUgRAZQgRAZgJAdQgCAAgBgBQhJgOg+AKQgKABgJADQgsAKggAYQgLAIgKALQgXAWgMAdQgCAEgBAEQgFAOgDARQgCAKgBALQgBAQACASQABAVAFATQAJAnAWAiQAYgDAXgDQgGAiAFAYQACAHADAGQAFAAAGgBQAPAMASAKQAaAOAfAKQAGACAGACQACAAADABQBJAUBUgGQAkgDAkgHQAPgDAOgDQACACADACQAGAEAGAEQAKAHAMAHQALAHAMAGQAEACADACQBeAuBbgYQA/gRAxgyQAwgzAOhBQAOhAgXhCQgNgmgXgeQAGgTAEgUQAVhfgxhBQgfgrg5gVQg0gSg7AGQg1AFguAYQgiAQgeAaQgcAXgVAcQgVgLgdAAQgRgBgXAEQgIABgKACQhVAShQAgQgnAPglATQhWArhOA+QgYATgQATQgIAIgFAIQgIACgIABQixApipBCQCAANBxAEQgIAUAFASQAIAcA0ASQAsAQAtAMQADAEAEAFQgGAVgEAVQgOBLAbA8QApBZB8AzQBOAeBOADQBVACBFghQBxg3ApiGQARg1AAgzQAAgJAAgJQgBgUgDgTQALgEALgEQBOgdBKgnQAwgaAagnQAVgggGgbQAkgxATg1QgRgWgVgRQghgbgmgKQghgIgdAIQgOg+grgxQgogtgwgOgEAhEAJuQgUAJgUALQgoAWglAbQgCABgCACQg2AogrAwQgiAmgcAqQAagBAZgCQAVgCAVgCQAMASAPAQQAJAKAKAIQAIAGAIAGQAqgFAqgJQAAAGAAAFQAJgGAJgFQAGgEAFgDQAvgNAugSQAagKAYgLQASAdAVAaQAaAfAfAaQAGAFAHAFQAJgDAJgCQAAACAAADQAXgHAYgHQgBgDAAgDQgBgCAAgDQAFABAFAAQAGAAAGgBQACgBACAAQAOgEAMgMQACgCACgDQALgMALgYQAphLATg/QAIgcAFgbQAHgwgFgsQgBgMgDgMQgHABgHADQgYAKgVAYIgBABQADgXgJgTQgNgdgjgNQgdgMgnAAQgYAAgYAEQgKgNgNgIQgDgCgCgBQgMAQgKARQgGAKgFALQgIACgKADQgFABgEABQgMgEgLgDQgQgFgRgDQgDAIgCAJQgCAFgBAGQgHAFgIAEQgVANgVAQQgGAFgGAFQAAAAAAABIgBAAQgTAAgUACQgcADgbADQgEACgEABQgEACgEACQgNAAgNAAQgFAAgFABQgiACgfAIQgvAMgpAZQgJAFgIAGQgYARgRAVQgIABgHACQgaAkABAjQAAAEABAEQAAAHACAGQgEAKgBAKQAAAIABAIQAMAAAMAAQAQASAbAOQAMAGAMAFQgNAXgJAXQgFAMgDAMQCgApCrgIQARgBARgBQAegDAegDQA6gIA5gNQAEgEAEgEQAIgIAIgIQAPgSAOgTQAEADAEACQAVAOASADQgHghgPghQANgbAHgcQAIgfAAgcQAAgPgCgOQAGgGAHgGQAFgFAFgEQABgBAAAAQgEgKgEgKQgBgBAAgBQAEgEAEgFQAVgbgCgeQgCgegagWQgXgWghgGQgPgCgRAAQgOAAgQACQgQACgaAHQgDAHgDAIQgBADgBACQgKACgKACQgiAHggALQgCANAAAOQgfgCghACQgOALgMAMQgIgCgHgBQgjgFgjAAQg8AXg0AbQgdAOgaAQQgaAQgXARQg1AngPAoQAGAUAOAQQAxAAAtgDQgKAQgKARQgDAHgEAGQAtARA4gBQAjAAAjgEQACAHAEAGQAHAJAJAHQALgEALgEQAZgLAagOQgBALABAJQACAQAEANQAAADABACQAFAPAJAMQAGAIAIAGQASANAaABQAjACAPgYEAhFAJtQAAAAgBABEAjfAI4QgLgEgKgEQgiAJgfAJQgCAJAAAIQgiALggAPEAiKAI9QgBADAAACQgHACgHACQhZAag8AWQgVADgVAEQgpAIglALQgnALgjAQQgPAGgNAHQgXALgUAOQgPAJgOAKQg4ArgkA4QgIANgFAMQAwABAtAAQABAAABAAQACATAHAUQAMAUAZARQALAIAMAFQAmASAtABQBBABBDgZQAcAVAzAAQABAAAAAAQAIAAAIAAQBhgEBVg9QADgCADgCQASgOAQgQQAWAcAdAVQABAAAAABIAAgBQAGgJAGgJQgDAMgBAMQgEASgCATQAXgHAXgIQAEgCAFgCQAIgDAJgEQASg6ABg9QAAgZgDgXQgBgKgCgJQgJgNgJgLQgJASgHASQgUAxgNA0QAAABAAABQgFASgDASQAHgMAGgNQgCgFgDgFQAAgBAAAAQgMgZgPgXQATgeANgiQAEgJADgKQADgKADgLQADgCAEgD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");
	this.shape.setTransform(279,133.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,561,270.1);


// stage content:
(lib.light_blink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(281,287.4,1,1,0,0,0,278.9,133.4);
	this.instance.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance.cache(-3,-3,565,274);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:279,regY:133.5,scaleY:1,skewY:-0.6,x:281.1,y:286,alpha:0.994},0).wait(1).to({scaleY:1.01,skewY:-1.2,y:284.6,alpha:0.988},0).wait(1).to({scaleY:1.01,skewY:-1.8,y:283.1,alpha:0.982},0).wait(1).to({scaleY:1.02,skewY:-2.4,y:281.6,alpha:0.976},0).wait(1).to({scaleY:1.02,skewY:-3,y:280.1,alpha:0.97},0).wait(1).to({scaleY:1.02,skewY:-3.5,y:278.7,alpha:0.964},0).wait(1).to({scaleY:1.03,skewY:-4.1,y:277.2,alpha:0.958},0).wait(1).to({scaleY:1.03,skewY:-4.7,y:275.8,alpha:0.952},0).wait(1).to({scaleY:1.03,skewY:-5.3,y:274.3,alpha:0.945},0).wait(1).to({scaleY:1.04,skewY:-5.9,y:272.8,alpha:0.939},0).wait(1).to({scaleY:1.04,skewY:-6.5,y:271.3,alpha:0.933},0).wait(1).to({scaleY:1.05,skewY:-7.1,y:269.8,alpha:0.927},0).wait(1).to({scaleY:1.05,skewY:-7.7,y:268.4,alpha:0.921},0).wait(1).to({scaleY:1.06,skewY:-8.3,y:266.9,alpha:0.915},0).wait(1).to({scaleY:1.06,skewY:-8.9,y:265.4,alpha:0.909},0).wait(1).to({scaleY:1.06,skewY:-9.5,y:263.9,alpha:0.903},0).wait(1).to({scaleY:1.07,skewY:-10,y:262.5,alpha:0.897},0).wait(1).to({scaleY:1.07,skewY:-10.6,y:261,alpha:0.891},0).wait(1).to({scaleY:1.07,skewY:-11.2,y:259.6,alpha:0.885},0).wait(1).to({scaleY:1.08,skewY:-11.8,y:258.1,alpha:0.879},0).wait(1).to({scaleY:1.08,skewY:-12.4,y:256.7,alpha:0.873},0).wait(1).to({scaleY:1.09,skewY:-13,y:255.2,alpha:0.867},0).wait(1).to({scaleY:1.09,skewY:-13.6,y:253.7,alpha:0.861},0).wait(1).to({scaleY:1.09,skewY:-14.2,y:252.2,alpha:0.855},0).wait(1).to({scaleY:1.1,skewY:-14.8,y:250.7,alpha:0.848},0).wait(1).to({scaleY:1.1,skewY:-15.4,y:249.3,alpha:0.842},0).wait(1).to({scaleY:1.11,skewY:-16,y:247.8,alpha:0.836},0).wait(1).to({scaleY:1.11,skewY:-16.5,y:246.4,alpha:0.83},0).wait(1).to({scaleY:1.11,skewY:-17.1,y:244.9,alpha:0.824},0).wait(1).to({scaleY:1.12,skewY:-17.7,y:243.4,alpha:0.818},0).wait(1).to({scaleY:1.12,skewY:-18.3,y:241.9,alpha:0.812},0).wait(1).to({scaleY:1.13,skewY:-18.9,y:240.5,alpha:0.806},0).wait(1).to({scaleY:1.13,skewY:-19.5,y:239,alpha:0.8},0).wait(1).to({scaleY:1.13,skewY:-20.1,y:237.5,alpha:0.794},0).wait(1).to({scaleY:1.14,skewY:-20.7,y:236,alpha:0.788},0).wait(1).to({scaleY:1.14,skewY:-21.3,y:234.6,alpha:0.782},0).wait(1).to({scaleY:1.15,skewY:-21.9,y:233.1,alpha:0.776},0).wait(1).to({scaleY:1.15,skewY:-22.5,y:231.6,alpha:0.77},0).wait(1).to({scaleY:1.15,skewY:-23,y:230.2,alpha:0.764},0).wait(1).to({scaleY:1.16,skewY:-23.6,y:228.7,alpha:0.758},0).wait(1).to({scaleY:1.16,skewY:-24.2,y:227.2,alpha:0.752},0).wait(1).to({scaleY:1.16,skewY:-24.8,y:225.8,alpha:0.745},0).wait(1).to({scaleY:1.17,skewY:-25.4,y:224.3,alpha:0.739},0).wait(1).to({scaleY:1.17,skewY:-26,y:222.8,alpha:0.733},0).wait(1).to({scaleY:1.18,skewY:-26.6,y:221.3,alpha:0.727},0).wait(1).to({scaleY:1.18,skewY:-27.2,y:219.9,alpha:0.721},0).wait(1).to({scaleY:1.18,skewY:-27.8,y:218.4,alpha:0.715},0).wait(1).to({scaleY:1.19,skewY:-28.4,y:216.9,alpha:0.709},0).wait(1).to({scaleY:1.19,skewY:-29,y:215.5,alpha:0.703},0).wait(1).to({scaleY:1.2,skewY:-29.5,y:214,alpha:0.697},0).wait(1).to({scaleY:1.2,skewY:-30.1,y:212.5,alpha:0.691},0).wait(1).to({scaleY:1.2,skewY:-30.7,y:211.1,alpha:0.685},0).wait(1).to({scaleY:1.21,skewY:-31.3,y:209.6,alpha:0.679},0).wait(1).to({scaleY:1.21,skewY:-31.9,y:208.2,alpha:0.673},0).wait(1).to({scaleY:1.22,skewY:-32.5,y:206.7,alpha:0.667},0).wait(1).to({scaleY:1.22,skewY:-33.1,y:205.1,alpha:0.661},0).wait(1).to({scaleY:1.22,skewY:-33.7,y:203.7,alpha:0.655},0).wait(1).to({scaleY:1.23,skewY:-34.3,y:202.2,alpha:0.648},0).wait(1).to({scaleY:1.23,skewY:-34.9,y:200.8,alpha:0.642},0).wait(1).to({scaleY:1.24,skewY:-35.5,y:199.3,alpha:0.636},0).wait(1).to({scaleY:1.24,skewY:-36,y:197.9,alpha:0.63},0).wait(1).to({scaleY:1.24,skewY:-36.6,y:196.3,alpha:0.624},0).wait(1).to({scaleY:1.25,skewY:-37.2,y:194.9,alpha:0.618},0).wait(1).to({scaleY:1.25,skewY:-37.8,y:193.4,alpha:0.612},0).wait(1).to({scaleY:1.25,skewY:-38.4,y:192,alpha:0.606},0).wait(1).to({scaleY:1.26,skewY:-39,y:190.5,alpha:0.6},0).wait(1).to({scaleX:0.99,scaleY:1.26,y:189,alpha:0.599},0).wait(1).to({scaleX:0.99,scaleY:1.26,y:187.6,alpha:0.597},0).wait(1).to({scaleX:0.98,scaleY:1.27,y:186.1,alpha:0.596},0).wait(1).to({scaleX:0.98,scaleY:1.27,y:184.6,alpha:0.595},0).wait(1).to({scaleX:0.97,scaleY:1.27,y:183.1,alpha:0.594},0).wait(1).to({scaleX:0.97,scaleY:1.28,y:181.7,alpha:0.592},0).wait(1).to({scaleX:0.96,scaleY:1.28,y:180.2,alpha:0.591},0).wait(1).to({scaleX:0.95,scaleY:1.28,y:178.8,alpha:0.59},0).wait(1).to({scaleX:0.95,scaleY:1.29,y:177.3,alpha:0.588},0).wait(1).to({scaleX:0.94,scaleY:1.29,y:175.8,alpha:0.587},0).wait(1).to({scaleX:0.94,scaleY:1.29,y:174.4,alpha:0.586},0).wait(1).to({scaleX:0.93,scaleY:1.3,y:172.9,alpha:0.584},0).wait(1).to({scaleX:0.93,scaleY:1.3,y:171.4,alpha:0.583},0).wait(1).to({scaleX:0.92,scaleY:1.3,y:169.9,alpha:0.582},0).wait(1).to({scaleX:0.91,scaleY:1.31,y:168.5,alpha:0.581},0).wait(1).to({scaleX:0.91,scaleY:1.31,y:167,alpha:0.579},0).wait(1).to({scaleX:0.9,scaleY:1.31,y:165.5,alpha:0.578},0).wait(1).to({scaleX:0.9,scaleY:1.31,y:164.1,alpha:0.577},0).wait(1).to({scaleX:0.89,scaleY:1.32,y:162.6,alpha:0.575},0).wait(1).to({scaleX:0.89,scaleY:1.32,y:161.1,alpha:0.574},0).wait(1).to({scaleX:0.88,scaleY:1.32,y:159.7,alpha:0.573},0).wait(1).to({scaleX:0.87,scaleY:1.33,y:158.2,alpha:0.571},0).wait(1).to({scaleX:0.87,scaleY:1.33,y:156.8,alpha:0.57},0).wait(1).to({scaleX:0.86,scaleY:1.33,y:155.3,alpha:0.569},0).wait(1).to({scaleX:0.86,scaleY:1.34,y:153.8,alpha:0.568},0).wait(1).to({scaleX:0.85,scaleY:1.34,y:152.3,alpha:0.566},0).wait(1).to({scaleX:0.84,scaleY:1.34,y:150.9,alpha:0.565},0).wait(1).to({scaleX:0.84,scaleY:1.35,y:149.4,alpha:0.564},0).wait(1).to({scaleX:0.83,scaleY:1.35,y:147.9,alpha:0.562},0).wait(1).to({scaleX:0.83,scaleY:1.35,y:146.5,alpha:0.561},0).wait(1).to({scaleX:0.82,scaleY:1.35,y:145,alpha:0.56},0).wait(1).to({scaleX:0.82,scaleY:1.36,y:143.5,alpha:0.558},0).wait(1).to({scaleX:0.81,scaleY:1.36,y:142.1,alpha:0.557},0).wait(1).to({scaleX:0.8,scaleY:1.36,y:140.6,alpha:0.556},0).wait(1).to({scaleX:0.8,scaleY:1.37,y:139.1,alpha:0.555},0).wait(1).to({scaleX:0.79,scaleY:1.37,y:137.7,alpha:0.553},0).wait(1).to({scaleX:0.79,scaleY:1.37,y:136.2,alpha:0.552},0).wait(1).to({scaleX:0.78,scaleY:1.38,y:134.7,alpha:0.551},0).wait(1).to({scaleX:0.78,scaleY:1.38,y:133.3,alpha:0.549},0).wait(1).to({scaleX:0.77,scaleY:1.38,y:131.8,alpha:0.548},0).wait(1).to({scaleX:0.76,scaleY:1.39,y:130.3,alpha:0.547},0).wait(1).to({scaleX:0.76,scaleY:1.39,y:128.8,alpha:0.545},0).wait(1).to({scaleX:0.75,scaleY:1.39,y:127.4,alpha:0.544},0).wait(1).to({scaleX:0.75,scaleY:1.39,y:126,alpha:0.543},0).wait(1).to({scaleX:0.74,scaleY:1.4,y:124.5,alpha:0.542},0).wait(1).to({scaleX:0.74,scaleY:1.4,y:123,alpha:0.54},0).wait(1).to({scaleX:0.73,scaleY:1.4,y:121.5,alpha:0.539},0).wait(1).to({scaleX:0.72,scaleY:1.41,y:120.1,alpha:0.538},0).wait(1).to({scaleX:0.72,scaleY:1.41,y:118.6,alpha:0.536},0).wait(1).to({scaleX:0.71,scaleY:1.41,y:117.1,alpha:0.535},0).wait(1).to({scaleX:0.71,scaleY:1.42,y:115.6,alpha:0.534},0).wait(1).to({scaleX:0.7,scaleY:1.42,skewY:-39.1,y:114.2,alpha:0.532},0).wait(1).to({scaleX:0.69,scaleY:1.42,y:112.7,alpha:0.531},0).wait(1).to({scaleX:0.69,scaleY:1.43,y:111.2,alpha:0.53},0).wait(1).to({scaleX:0.68,scaleY:1.43,y:109.8,alpha:0.529},0).wait(1).to({scaleX:0.68,scaleY:1.43,y:108.3,alpha:0.527},0).wait(1).to({scaleX:0.67,scaleY:1.43,y:106.9,alpha:0.526},0).wait(1).to({scaleX:0.67,scaleY:1.44,y:105.4,alpha:0.525},0).wait(1).to({scaleX:0.66,scaleY:1.44,y:103.9,alpha:0.523},0).wait(1).to({scaleX:0.65,scaleY:1.44,y:102.4,alpha:0.522},0).wait(1).to({scaleX:0.65,scaleY:1.45,y:101,alpha:0.521},0).wait(1).to({scaleX:0.64,scaleY:1.45,y:99.5,alpha:0.519},0).wait(1).to({scaleX:0.64,scaleY:1.45,y:98,alpha:0.518},0).wait(1).to({scaleX:0.63,scaleY:1.46,y:96.6,alpha:0.517},0).wait(1).to({scaleX:0.63,scaleY:1.46,y:95.1,alpha:0.516},0).wait(1).to({scaleX:0.62,scaleY:1.46,y:93.6,alpha:0.514},0).wait(1).to({scaleX:0.61,scaleY:1.47,y:92.2,alpha:0.513},0).wait(1).to({scaleX:0.61,scaleY:1.47,y:90.7,alpha:0.512},0).wait(1).to({scaleX:0.6,scaleY:1.47,y:89.3,alpha:0.51},0).wait(1).to({scaleX:0.6,scaleY:1.47,y:87.8,alpha:0.509},0).wait(1).to({scaleX:0.59,scaleY:1.48,y:86.3,alpha:0.508},0).wait(1).to({scaleX:0.58,scaleY:1.48,y:84.9,alpha:0.506},0).wait(1).to({scaleX:0.58,scaleY:1.48,y:83.5,alpha:0.505},0).wait(1).to({scaleX:0.57,scaleY:1.49,y:82,alpha:0.504},0).wait(1).to({scaleX:0.57,scaleY:1.49,y:80.5,alpha:0.503},0).wait(1).to({scaleX:0.56,scaleY:1.49,y:79,alpha:0.501},0).wait(1).to({scaleX:0.56,scaleY:1.5,y:77.6,alpha:0.5},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.lights_on2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1,0.117,0.084);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(11).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(14).to({_off:false},0).to({_off:true},2).wait(13).to({_off:false},0).wait(2).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},2).wait(18).to({_off:false},0).to({_off:true},4).wait(13).to({_off:false},0).to({_off:true},2).wait(11));

	// Layer 1
	this.instance_2 = new lib.lights_off();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.117,0.084);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(249.6,200,619,456.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;