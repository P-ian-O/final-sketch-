

function preload() {

}

function setup() {
    noCanvas()
    world = new World('VRScene');
}

function draw() {
    var temp = new Flake(0, 0, -5, world);
	flakes.push(temp);
	
	//draw all flakes
	for (var i = 0; i < flakes.length; i++) {
		let result = flakes[i].move();
		if (result == "gone") {
			flakes.splice(i, 1);
			i -= 1;
		}
	}
}