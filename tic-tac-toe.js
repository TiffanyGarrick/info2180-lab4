function makeBlocks() {
	document.getElementById("board").classList.add("square");
	document.getElementById("board").onclick=makeBlocks();
}