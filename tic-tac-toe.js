window.onload= function() =>{
	var elem=document.getElementById("board");
	var elemArray=elem.querySelectorAll("div");
	var i;
	for (i=0; i < elemArray.length; i++) {
		let box = elemArray[i];
		box.classList.add("square");
		box.onmouseover = function(){
            box.classList.add('hover');
        }
        box.onmouseleave = function(){
            box.classList.remove('hover');
        }
	}
}
