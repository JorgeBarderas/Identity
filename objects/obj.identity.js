var colors = [
	"#1B325F","#9CC4E4","#3A89C9","#F26C4F","#FC284F","#FF824A","#FEA887","#D1313D","#E5625C","#F9BF76",
	"#8EB2C5","#615375","#99B898","#FECEA8","#FF847C","#E84A5F","#2A363B","#BED6C7","#ADC0B4","#8A7E66",
	"#A79B83","#BBB2A1","#E6A06F","#9E9C71","#5E8271","#33454E","#242739","#73185E","#36BBA6","#0C0D02",
	"#8B911A","#556270","#4ECDC4","#C7F464","#FF6B6B","#C44D58","#8D7966","#A8A39D","#D8C8B8","#DBD9B7",
	"#C1C9C8","#A5B5AB","#949A8E","#615566","#AADEAD","#BBDEAD","#CCDEAD","#DDDEAD","#EEDEAD","#641F5E",
	"#676077","#65AC92","#C2C092","#EDD48E","#8C2318","#5E8C6A","#88A65E","#BFB35A","#F2C45A","#4F364C",
	"#5E405F","#6B6B6B","#8F9E6F","#B1CF72","#67917A","#170409","#B8AF03","#CCBF82","#E33258","#F87E7B"];
var range = colors.length;
function avatar(name, size) {
	var list = name.split(" "),
		text = "",
		number = 0,
		code = 0,
		avatar = document.createElement("div");
	for (i=0; i<list.length; i++) {
		text += list[i][0];
	}
	for (j=0; j<name.length; j++) {
		number += name.charCodeAt(j);
	}
	code = number % range;
	if (text.length > 4) {
		text = text.substring(0,4);
	}
	avatar.appendChild(document.createTextNode(text));
	avatar.style.borderRadius = "100px";
	avatar.style.backgroundColor = colors[code];
	avatar.style.color = "white";
	avatar.style.textAlign = "center";
	avatar.style.margin = "2px";
	switch (size) {
		case 'xx-small':
			break;
		case 'x-small':
			break;
		case 'small':
			break;
		case 'medium':
			avatar.style.width = avatar.style.height = avatar.style.lineHeight = "50px";
			break;
		case 'large':
			break;
		case 'x-large':
			break;
		case 'xx-large':
			break;
	}
	console.log(text, number, code);
	return avatar;
}