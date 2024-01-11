
var banana = "Banane";


var apple = "Apple";


var bananaPricePerKilo = 2.14;


var applePricePerKilo = 3.43;


var averageAppleWeight = 0.34;


var averageBananaWeight = 0.22;


console.log("Anzahl Bananen pro Kilo: " + (1 / averageBananaWeight).toFixed(2));
console.log("Anzahl Äpfel pro Kilo: " + (1 / averageAppleWeight).toFixed(2));
console.log("Preis pro Banane: €" + bananaPricePerKilo.toFixed(2));
console.log("Preis pro Apfel: €" + applePricePerKilo.toFixed(2));


var applesQuantity = 8;
var totalPriceApples = applesQuantity * averageAppleWeight * applePricePerKilo;
console.log("Preis von " + applesQuantity + " Äpfeln: €" + totalPriceApples.toFixed(2));


var bananasQuantity = 17;
var totalPriceBananas = bananasQuantity * averageBananaWeight * bananaPricePerKilo;
console.log("Preis von " + bananasQuantity + " Bananen: €" + totalPriceBananas.toFixed(2));


var tonOfApplesPrice = 1000 * applePricePerKilo;
console.log("Preis von 1 Tonne Äpfel: €" + tonOfApplesPrice.toFixed(2));


var tonOfBananasPrice = 1000 * bananaPricePerKilo;
console.log("Preis von 1 Tonne Bananen: €" + tonOfBananasPrice.toFixed(2));
