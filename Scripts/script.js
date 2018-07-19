function setHTML(elementId, innerHTML) {
  document.getElementById(elementId).innerHTML = innerHTML;
}

function render(h, p1, p2, p3) {
	setHTML("h", h);
	setHTML("p1", p1);
}

function demacia() {
	render(
		"Demacie",
		"Demacie je silnou společností, která ctí své zákony. Má dlouhou a bohatou vojenskou tradici. Demaciané jsou velice hrdí lidé a vysoce si cení ideálů jako spravedlnost, povinnost a čest. V Demacii se rozvinulo zejména rolnictví díky rozlehlým úrodným polím, hlubokým lesům plným dřeva či horami bohatými na nerostné suroviny – to vše zajistilo zemi soběstačnost. Časté nájezdy barbarů a dobyvatelských civilizací způsobily, že se Demacie stala izolovanou zemí se silnou obranou. Někteří lidé tvrdí, že zlatý věk Demacie už pominul a je na čase změnit svůj postoj ke světu kolem – pokud je toho tato země vůbec schopna – jinak se nevyhne úpadku. Nicméně je Demacie pořád jednou z nejsilnějších civilizací ve Valoranu a pyšní se nejlépe vycvičenou armádou na Runeterře.",
	);
	document.getElementById("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-silvermere.jpg&resize=:1200";
	document.getElementById("img1").width = 400;
	document.getElementById("img1").height = 200;
	document.getElementById("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-hallvalor.jpg&resize=:1200";
	document.getElementById("img2").width = 400;
	document.getElementById("img2").height = 200;
	document.getElementById("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-grandplaza.jpg&resize=:1200";
	document.getElementById("img3").width = 400;
	document.getElementById("img3").height = 200;
}

function noxus() {
	render(
		"Noxus",
		"Noxus je mocná říše s krutou pověstí. Pro cizince je na první pohled znám jako surový národ, jenž se vyžívá ve výhružkách a výpadech mimo své hranice; ale pro ty, kteří dokážou prohlédnout skrz noxijskou válečnou náturu, je Noxus těžko proniknutelnou společností, jež si cení síly a talentů svých lidí. Ti byli kdysi nelítostnými nájezdníky, dokud jednoho dne nedobyli starobylé město, které se stalo srdcem jejich říše. Čelili neustálé hrozbě ze všech stran, a proto se rozhodli udeřit jako první – tím postupně rozšiřovali své hranice s každým uplynulým rokem. Tento boj o přežití z Noxijců vykoval velmi hrdý národ, kteří si ze všeho nejvíc cení síly, ať už se projeví jakkoli. Kdokoliv se může stát vysoce postaveným noxijským občanem, pokud prokáže nezbytné schopnosti bez ohledu na své postavení, minulost, původ či bohatství.",
  );
	document.getElementById("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fnoxus-perpetual-conflict.jpg&resize=:1200";
	document.getElementById("img1").width = 400;
	document.getElementById("img1").height = 200;
	document.getElementById("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fnoxus-presence-in-shurima.jpg&resize=:1200";
	document.getElementById("img2").width = 400;
	document.getElementById("img2").height = 200;
	document.getElementById("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fnoxus-life-is-a-battle.jpg&resize=:1200";
	document.getElementById("img3").width = 400;
	document.getElementById("img3").height = 200;
}

function piltover() {
	render(
		"About",
		"About something",
		"",
		""
  );
}