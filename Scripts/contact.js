function setHTML(elementId, innerHTML) {
  document.getElementById(elementId).innerHTML = innerHTML;
}

function render(heading, subheading, heading2, p1 = "", p2 = "", p3 = "") {
  setHTML("heading", heading);
  setHTML("underheading", subheading);
  setHTML("headingtwo", heading2);
  setHTML("paragraf1", p1);
  setHTML("paragraf2", p2);
  setHTML("paragraf3", p3);
}

function contact() {
  render(
    "Contact",
    "Something under heading",
    "Contact on something",
    "E-mail: something@something.something",
    "Phone: 1234 123 123"
  );
}

function home() {
  render(
    "Something",
    "Something under heading",
    "We do something",
    "We really do something",
    "Like this",
    "And that"
  );
}

function about() {
  render("About", "Something under heading", "About something");
}

home();
