function setHTML(elementId, innerHTML) {
	document.getElementById(elementId).innerHTML = innerHTML;
}

function render(h, p1) {
	setHTML("h", h);
	setHTML("p1", p1);
}

function img(id) {
	return document.getElementById(id);
}

function imgSIZE() {
	img("img1").width = 400;
	img("img1").height = 200;
	img("img2").width = 400;
	img("img2").height = 200;
	img("img3").width = 400;
	img("img3").height = 200;
}

function demacia() {
	render("Demacie", "Demacie je silnou společností, která ctí své zákony. Má dlouhou a bohatou vojenskou tradici. Demaciané jsou velice hrdí lidé a vysoce si cení ideálů jako spravedlnost, povinnost a čest. V Demacii se rozvinulo zejména rolnictví díky rozlehlým úrodným polím, hlubokým lesům plným dřeva či horami bohatými na nerostné suroviny – to vše zajistilo zemi soběstačnost. Časté nájezdy barbarů a dobyvatelských civilizací způsobily, že se Demacie stala izolovanou zemí se silnou obranou. Někteří lidé tvrdí, že zlatý věk Demacie už pominul a je na čase změnit svůj postoj ke světu kolem – pokud je toho tato země vůbec schopna – jinak se nevyhne úpadku. Nicméně je Demacie pořád jednou z nejsilnějších civilizací ve Valoranu a pyšní se nejlépe vycvičenou armádou na Runeterře.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-silvermere.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-hallvalor.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fdemacia-grandplaza.jpg&resize=:1200";
}

function noxus() {
	render("Noxus","Noxus je mocná říše s krutou pověstí. Pro cizince je na první pohled znám jako surový národ, jenž se vyžívá ve výhružkách a výpadech mimo své hranice; ale pro ty, kteří dokážou prohlédnout skrz noxijskou válečnou náturu, je Noxus těžko proniknutelnou společností, jež si cení síly a talentů svých lidí. Ti byli kdysi nelítostnými nájezdníky, dokud jednoho dne nedobyli starobylé město, které se stalo srdcem jejich říše. Čelili neustálé hrozbě ze všech stran, a proto se rozhodli udeřit jako první – tím postupně rozšiřovali své hranice s každým uplynulým rokem. Tento boj o přežití z Noxijců vykoval velmi hrdý národ, kteří si ze všeho nejvíc cení síly, ať už se projeví jakkoli. Kdokoliv se může stát vysoce postaveným noxijským občanem, pokud prokáže nezbytné schopnosti bez ohledu na své postavení, minulost, původ či bohatství.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fnoxus-perpetual-conflict.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fnoxus-presence-in-shurima.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fnoxus-life-is-a-battle.jpg&resize=:1200";
}

function shurima() {
	render("Shurima", "Shurimská říše byla kdysi vzkvétající civilizací uprostřed rozsáhlé pouště. Když pominula doba blahobytu a bohatství, pád hlavního města zanechal říši v troskách. Jak míjela celá tisíciletí, příběhy slavného města Shurimy se staly pouhými mýty a také náboženstvím, které si mezi sebou předávali potomci přeživších. Většina potulných nomádů, kteří nyní poušť obývají, se jen snaží přežít v této drsné zemi. Někteří z nich brání malé tábory postavené kolem vzácných oáz. Jiní se v honbě za ztraceným bohatstvím vydávají do ruin padlé říše a nebo hledají práci jako nájemní žoldáci, kteří s vydělaným měšcem zlaťáků zmizí zpět do rozpáleného moře písku. Nyní potulné kmeny rozrušil tichý šepot ze srdce samotné pouště: Shurima znovu povstala.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshurima-vekaurastreets.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshurima-reborn.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshurima-homecoming.jpg&resize=:1200";
}

function freljord() {
	render("Freljord", "Freljord je drsnou a nelítostnou zemí. Jeho lidé jsou hrdí a nezávislí, zkrátka rození válečníci s dlouhou nájezdnickou tradicí. Na ledových pláních Freljordu žije mnoho samostatných kmenů. Tři z nich rozpoutaly občanskou válku, která rozhodne o osudu celé země. První kmen si nadevše cení tradic, díky kterým dokázal přežít; druhý touží po sjednocení ledové země a jejích kmenů a ten poslední uctívá moc záhadné čarodějky.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Ffreljord-rakelstake.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Ffreljord-glaserport.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Ffreljord-gatewayhowling.jpg&resize=:1200";
}
	
function ionia() {
	render("Ionia","Ionie je zemí panenské krásy a přírodní magie. Její obyvatelé žijí v osadách napříč tímto obrovským ostrovním kontinentem. Ioňané jsou duchovně založení lidé, kteří touží po harmonii a chtějí žít v rovnováze se světem kolem sebe. V Ionii se zrodilo mnoho sekt a řádů a každý z nich se vydal svou vlastní cestou – ideály, které vyznávají, jsou však často ve vzájemném rozporu. Ionie vždy byla sobestačná a po celá staletí se držela stranou od válečných tažení napříč celým Valoranem. Tak tomu bylo až do chvíle, kdy do Ionie vpadla noxijská vojska. Tento bezohledný vpád a okupace donutily ionské obyvatele, aby přehodnotili svůj postoj ke světu. Zatím není známo, jakou cestou se Ionie vydá, ale jedno je už nyní jisté – toto rozhodnutí bude mít obrovský vliv pro celou Runetteru.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fionia-an-ancient-and-respected-history.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fionia-the-great-monasteries.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fionia-built-into-nature.jpg&resize=:1200";
}

function voidlol() {
	render("Void","Prázdnota, která se s křikem zrodila při vzniku vesmíru, je projevem nepoznatelné nicoty, jež leží za hranicemi světa. Je to síla sužovaná nenasytným hladem, která čeká celou věčnost, až její páni, záhadní Strážci, dají najevo, že nastal konečný čas zkázy. Být smrtelníkem, kterého se tato síla dotkla, znamená utrpět bolestivý pohled na věčnou neskutečnost, který dokáže rozdrtit i tu nejsilnější mysl. Obyvatelé samotné Prázdnoty jsou obludné konstrukty, často jen s omezenou inteligencí, které však mají jeden jediný účel – nastolit naprosté zapomnění po celé Runeterře.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fvoid-the-fall-of-icathia.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fvoid-an-unknowable-power.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fvoid-the-voidborn.jpg&resize=:1200";
}

function bilgewater() {
	render("Bilgewater","ilgewater, uhnízděný v ostrovech Modrého plamene, je přístavní město jako žádné jiné – je domovem lovců hadů, přístavních gangů a pašeráků z celého známého světa. V jednom okamžiku zde může člověk přijít k bohatství anebo ztratit všechny naděje. Pro každého, kdo prchá před spravedlností, dluhy nebo pomstou, je Bilgewater městem nových začátků, protože v těchto křivolakých ulicích vaše minulost nikoho nezajímá. Přesto s každým novým úsvitem je možné v přístavu najít neopatrné cestovatele plovoucí na hladině, s prázdným měšcem a podříznutým hrdlem... Přestože je Bilgewater nesmírně nebezpečný, skýtá bezpočet příležitostí – daleko od tenat běžné vlády či obchodních nařízení. Pokud máte peníze, můžete zde koupit takřka cokoliv, od zakázané magitechniky po přízeň místních pánů podsvětí.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fbilgewater-bilgewater-bay.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fbilgewater-butchers-bridge.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fbilgewater-a-new-beginning.jpg&resize=:1200";
}

function piltover() {
	render("Piltover","Piltover je město plné života a jeho moc i vliv prudce rostou. Je kulturním centrem Valoranu, kde kráčí umění ruku v ruce s řemesly, obchodem a novátorstvím. Jeho síla nečerpá z vojenské moci, ale z bohatého obchodu a pokrokového myšlení. Piltover se tyčí nad útesy, které ve svých útrobách skrývají město Zaun, a shlíží na oceán, odkud připlouvají celé flotily lodí z celého světa, aby mohly za gigantickými přístavními branami složit svůj náklad. Bohatství plynoucí z obchodu umožnilo městu nevídaný bezstarostný vzestup. Piltover byl – a stále je – městem, ve kterém se plní sny a kde lze snadno přijít k bohatství. Rozrůstající se obchodní cechy dotují vývoj všech představitelných odvětví, která ukazují jejich moc: honosné umělecké bláhovosti, ezoterický magitechnický vývoj či architektonická veledíla. Piltover se stal díky stále rostoucímu počtu vynálezců zabývajících se mladým odvětvím magitechnologie magnetem pro ty nejlepší řemeslníky z celého světa.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fpiltover-zindeloruneterra.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fpiltover-entrancetreasury.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fpiltover-eclipticvaults.jpg&resize=:1200";
}

function zaun() {
	render("Zaun","Zaun je rozlehlé podzemní město, které leží hluboko v srdci kaňonů a údolí, jež se táhnou až k Piltoveru. Paprsky světla, kterým se podaří proniknout do hlubin, protínají husté výpary unikající z propletených zrezivělých trubek a následně se blýskají na tabulkách ušmudlaného skla zaunské průmyslové architektury. Ačkoliv byly Zaun a Piltover kdysi jedním městem, nyní stojí samostatně – avšak v mírumilovném soužití. Zaun navzdory životu v trvalém soumraku ve stínu smogu vzkvétá: jeho obyvatelé jsou plní života a zaunská kultura je velice bohatá. Bohatství Piltoveru umožnilo Zaunu vyvíjet se vlastním tempem – temný obraz města na povrchu. Nesčetné množství zboží putujícího do Piltoveru si našlo svou cestu na zaunský černý trh, odkud se dostalo do rukou magitechnickým vynálezcům, jež piltoverské zákony svazovaly, avšak ty zaunské vítaly jejich nebezpečné pokusy s otevřenou náručí. Ničím neomezený vývoj těkavých technologií a nedbalý přístup k průmyslu znečistil ovzduší města a stal se hrozbou. Ani unikající pramínky jedovatých tekutin stékajících do spodních částí města však lidem nezabránily, aby zde přežili, ba co víc, aby se jim dobře dařilo.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fzaun-bountymarkets.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fzaun-depths.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fzaun-breatherstation.jpg&resize=:1200";
}

function bandlecity() {
	render("Bandle City","Názory na přesnou polohu země yordlů se liší. Někteří tvrdí, že tihle potrhlí tvorečkové žijí daleko na jihovýchodě v bezpečí neprostupných hor. Jiní říkají, že yordlové obývají srdce hlubokých lesů či podzemí zelenající se vrchoviny. Některá z těch tvrzení mohou být pravdivá (a nebo taky ne), ale to se asi nikdy nedozvíme, neboť ještě žádné výpravě se nepodařilo domovinu yordlů nalézt. To však neznamená, že zemi yordlů nikdo nenavštívil – mnozí tvrdí, že prošli neviditelným portálem do země rozverné magie obydlené maličkými raubíři. Smysly každého neyordla jsou v Bandle City zostřené; barvy jsou ještě živější a jídlo či pití dokážou omámit smysly i na celá léta – jakmile je smrtelníci jednou okusí, už nikdy na ně nezapomenou. Sluneční paprsky nekonečně zlatě září, voda je křišťálově čistá a každá sklizeň je bohatá. Je to místo nespoutané magie, kde se každý nepozorný smrtelník lehce zatoulá váben nesčetnými divy, načež se ztratí ve vlastních snech, dokud nepadne mrtev hladem či žízní. Ti, kdož tvrdí, že se do Bandle City dostali, hovoří o tom, že tam plyne čas jinak, což by vysvětlovalo, proč tito cestovatelé vypadají mnohem starší, popřípadě proč se vlastně někteří z nich nikdy nevrátili.");
	img("img1").src = "";
	img("img2").src = "";
	img("img3").src = "";
}

function shadowisles() {
	render("Shadow Isles","Země – nyní zvaná Stínové ostrovy – byla kdysi překrásnou krajinou, která však byla zničena kouzelnou pohromou. Černá mlha zahalila ostrovy a samotná půda je poskvrněná, zkažená zlovolnou magií. Životní síla bytostí na Stínových ostrovech je z nich pomalu vysávána, což přitahuje nenasytné dravé přízraky smrti. Ti, kteří v Černé mlze padnou, jsou odsouzeni věčně bloudit tímto posmutnělým světem až do skonání věků. A co je nejhorší – moc Stínových ostrovů roste každým rokem, což dává sílu nemrtvým stínům, které tak mohou trýznit duše napříč celou Runeterrou.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshadow-isles-crator.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshadow-isles-vaults.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffactions%2Fimage-gallery%2Fshadow-isles-athenaeumlight.jpg&resize=:1200";
}

function targon() {
	render("Mount Targon","Hora Targon je nejvyšším vrcholem Runeterry, tyčící se sluncem ožehnutá skála uprostřed pohoří plného vrcholků, kterým se svými rozměry nic jiného na světě nevyrovná. Stojící daleko od civilizace, hora Targon je naprosto vzdálená a téměř nezdolatelná i pro ty nejodhodlanější snaživce. Stejně jako každé místo opředené mýty je hora Targon cílem snílků, šílenců a těch, kteří pátrají po dobrodružství. Pár udatných duší se pokusilo tuto nepřístupnou horu zdolat, možná v rámci pátrání po moudrosti či osvícení, možná kvůli honbě za slávou či srdceryvné touze spatřit její vrchol. Výstup na Horu je téměř nemožný a ti, kterým se zázračným způsobem podařilo přežít a dosáhnout vrcholu, nikdy nemluví o tom, co zažili. Někteří se vrací pomatení s prázdným výrazem v očích, jiní se změní zcela k nepoznání posilněni Aspektem nadpozemské, nelidské moci a čeká na ně osud, který pochopí jen hrstka vyvolených.");
	img("img1").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmttargon-caverns-of-stone.jpg&resize=:1200";
	img("img2").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmttargon-carved-into-the-mountain.jpg&resize=:1200";
	img("img3").src = "https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmttargon-life-on-the-edge.jpg&resize=:1200";
}