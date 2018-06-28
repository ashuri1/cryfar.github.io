function setHTML(elementId, innerHTML) {
  document.getElementById(elementId).innerHTML = innerHTML;
}

function render(h, p1, p2, p3) {
	setHTML("h", h);
	setHTML("p1", p1);
	setHTML("p2", p2);
	setHTML("p3", p3);
}

function home() {
	render(
		"Something",
		"Toto je len test stránka na ktorej skúšam hocijake dizajny",
		"Ako napr.",
		"Vyber si pesničku:"
  );
}

function contact() {
	render(
		"Contact",
		"Contact on something",
		"E-mail: something@something.something",
		"Phone: 1234 123 123"
  );
}

function about() {
	render(
		"About",
		"About something",
		"",
		""
  );
}

function video1(){
    document.getElementById("myframe").src = "https://www.youtube.com/embed/yJg-Y5byMMw?autoplay=1"
    document.getElementById("myframe").height = 500;
    document.getElementById("myframe").width = 800;
}

function video2(){
    document.getElementById("myframe").src = "https://www.youtube.com/embed/uoZimlMnXIE?autoplay=1"
    document.getElementById("myframe").height = 500;
    document.getElementById("myframe").width = 800;
}

function video3(){
    document.getElementById("myframe").src = "https://www.youtube.com/embed/1ahLAzwWE64?autoplay=1"
    document.getElementById("myframe").height = 500;
    document.getElementById("myframe").width = 800;
}

function video4(){
    document.getElementById("myframe").src = "https://www.youtube.com/embed/A5GOUQ9l66g?autoplay=1"
    document.getElementById("myframe").height = 500;
    document.getElementById("myframe").width = 800;
}

function removevid(){
    document.getElementById("myframe").src = "";
    document.getElementById("myframe").height = 0;
    document.getElementById("myframe").width = 0;
}
