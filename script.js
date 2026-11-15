var B = "https://naascboston.org/wp-content/uploads/";

var eboard = [
  ["Claudia Rosa C’2008", "President", B + "2017/12/naasc-boston-headshot-claudia-rosa-406x500.jpeg"],
  ["Elizabeth Mitchell C’2001", "Vice President", B + "2026/04/Ellizabeth-Mitchell-406x500.jpg"],
  ["Keri-Lynne Kellam C’2009", "Treasurer", B + "2017/12/Keri-Lynne-Kellam.png"],
  ["Ashley Sharpe-Porter C’2013", "Corresponding Secretary", B + "2026/04/Ashley-Porter-406x500.jpeg"]
];

var chairs = [
  ["Charlotte Frazier C’90", "Membership Chair", ""],
  ["Margaret Asante", "Parliamentarian", B + "2026/04/Margaret-Asante-406x500.jpeg"]
];

function card(p) {
  var initials = p[0].split(" ").slice(0, 2).map(function (s) { return s[0]; }).join("");
  var d = document.createElement("article");
  d.className = "person";
  var ph = document.createElement("div");
  ph.className = "photo";
  ph.textContent = initials;
  if (p[2]) {
    var im = new Image();
    im.alt = "Portrait of " + p[0];
    im.onload = function () { ph.textContent = ""; ph.appendChild(im); };
    im.src = p[2];
  }
  var h = document.createElement("h3");
  h.textContent = p[0];
  var r = document.createElement("p");
  r.textContent = p[1];
  d.append(ph, h, r);
  return d;
}

eboard.forEach(function (p) { document.getElementById("eboard").appendChild(card(p)); });
chairs.forEach(function (p) { document.getElementById("chairs").appendChild(card(p)); });
