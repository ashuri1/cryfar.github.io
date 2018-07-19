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