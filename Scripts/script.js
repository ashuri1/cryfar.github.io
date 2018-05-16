function setHTML(elementId, innerHTML) {
  document.getElementById(elementId).innerHTML = innerHTML;
}

function render(heading, p1, p2, p3) {
  setHTML("heading", heading);
  setHTML("p1", p1);
  setHTML("p2", p2);
  setHTML("p3", p3);
}

function home() {
  render(
    "Something (Niečo)",
    "Toto je len test stránka na ktorej skúšam hocijake dizajny",
    "Ako napr.",
    "Ten youtube tam dole"
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
    document.getElementById("myframe").src = "https://www.youtube.com/embed/PtbYI8bC3Rk"
}

function video2(){
    document.getElementById("myframe").src = "https://www.youtube.com/embed/uoZimlMnXIE"
}

function video3(){
    document.getElementById("myframe").src = "https://www.youtube.com/embed/1ahLAzwWE64"
}

function video4(){
    document.getElementById("myframe").src = "https://www.youtube.com/embed/A5GOUQ9l66g"
}
