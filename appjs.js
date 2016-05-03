var myApp = new Framework7();  
var $$ = Dom7;

 
$$('.form-to-json').on('click', function(){
  var formData = myApp.formToJSON('#my-form');
  var besiktning = JSON.stringify(formData);
   myApp.popup('.popup-about');
 
obj = JSON.parse(besiktning);
	var rum =  "<b>" + obj.rum + "</b>";
	var bredd =  "Bredd: " + obj.bredd;
	var langd =  "Längd: " + obj.langd;
	var hojd =  "Höjd: " + obj.hojd;
	var golvkvadrat =  "M2: " + obj.bredd/1000*obj.langd/1000;
	var aldervagg =  "Åldervägg: " + obj.aldervagg;
	var aldergolv =  "Åldergolv: " + obj.aldergolv;
	var aldertak =  "Åldertak: " + obj.aldertak;
	var antaldorrar =  "Antal dörrar: " + obj.antaldorrar;
	var antalfonster =  "Antal fönster: " + obj.antalfonster;
	if (obj.golvvarme == "") {
	var golvvarme =  "Golvvärme: Nej";
	} else {
	var golvvarme =  "Golvvärme: Ja";
	};
	
	if (obj.snickare == "") {
	var snickare =  "Snickare: Nej";
	} else {
	var snickare =  "Snickare: Ja";
	};
	
	if (obj.rivare == "") {
	var rivare =  "Rivare: Nej";
	} else {
	var rivare =  "Rivare: Ja";
	};

	if (obj.rormokare == "") {
	var rormokare =  "Rörmokare: Nej";
	} else {
	var rormokare =  "Snickare: Ja";
	};
	
	if (obj.elektriker == "") {
	var elektriker =  "Elektriker: Nej";
	} else {
	var elektriker =  "Elektriker: Ja";
	};
	
	if (obj.plattsattare == "") {
	var plattsattare =  "Plattsättare: Nej";
	} else {
	var plattsattare =  "Plattsättare: Ja";
	};
	
	if (obj.malare == "") {
	var malare =  "Målare: Nej";
	} else {
	var malare =  "Målare: Ja";
	};

	if (obj.ovrigahantverkare == "") {
	var ovrigahantverkare =  "Övriga hantverkare: Nej";
	} else {
	var ovrigahantverkare =  "Övriga hantverkare: Ja";
	};
	
	var anteckningar =  "Anteckningar: " + obj.anteckningar;

document.getElementById("rum").innerHTML = rum;
document.getElementById("bredd").innerHTML = bredd;
document.getElementById("langd").innerHTML = langd;
document.getElementById("hojd").innerHTML = hojd;
document.getElementById("golvkvadrat").innerHTML = golvkvadrat;
document.getElementById("aldervagg").innerHTML = aldervagg;
document.getElementById("aldergolv").innerHTML = aldergolv;
document.getElementById("aldertak").innerHTML = aldertak;
document.getElementById("antaldorrar").innerHTML = antaldorrar;
document.getElementById("antalfonster").innerHTML = antalfonster;
document.getElementById("golvvarme").innerHTML = golvvarme;
document.getElementById("snickare").innerHTML = snickare;
document.getElementById("rivare").innerHTML = rivare;
document.getElementById("rormokare").innerHTML = rormokare;
document.getElementById("elektriker").innerHTML = elektriker;
document.getElementById("plattsattare").innerHTML = plattsattare;
document.getElementById("malare").innerHTML = malare;
document.getElementById("ovrigahantverkare").innerHTML = ovrigahantverkare;
document.getElementById("anteckningar").innerHTML = anteckningar;

});