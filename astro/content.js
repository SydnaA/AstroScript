window.setTimeout(function(){runScript()}, 2000);
function runScript() {
	var flag= false;
	var question = document.getElementsByClassName("text edible")[0].childNodes[0].innerText;
	var answers;
	var item;
	switch(question) {
		case "On a Hertzsprung-Russell diagram, where would we find stars that are cool and luminous?":
			for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("upper right")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "On a Hertzsprung-Russell diagram, where would we find stars that have the largest radii?":
			for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("upper right")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "Which two energy sources can help a star maintain its internal thermal pressure?":
		for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("nuclear fusion and gravitational contraction")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "Which of the following statements about degeneracy pressure is not true?":
		for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("Degeneracy pressure varies with the temperature of the star.")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "What happens when a star exhausts its core hydrogen supply?":
		for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("Its core contracts, but its outer layers expand and the star becomes bigger and brighter.")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "What is happening inside a star while it expands into a subgiant?":
		for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("It is fusing hydrogen into helium in a shell outside the core.")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "Compared to the star it evolved from, a red giant is":
		for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("cooler and brighter.")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "Why does a star grow larger after it exhausts its core hydrogen?":
		for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("Hydrogen fusion in a shell outside the core generates enough thermal pressure to push the upper layers outward.")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "How many helium nuclei fuse together when making carbon?":
		for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("3")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
		case "What happens after a helium flash?":
		for(var i=0;i<document.getElementsByClassName('grouper').length;i++) {
				item =document.getElementsByClassName('grouper')[i].childNodes[1].childNodes[0].innerHTML;
				if(item.indexOf("The core quickly heats up and expands.")>0) {
					document.getElementsByClassName('grouper')[i].childNodes[0].childNodes[0].click();
					flag=true;
				}
			}
		break;
	}
	if(flag) {
		document.getElementsByClassName('answer-button submit enabled')[0].click();
		document.getElementsByClassName('next')[0].childNodes[0].click();
		flag=false;
	}
	
}

