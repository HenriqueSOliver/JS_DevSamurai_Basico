// calcular a média de 2 ou mais números

var a, b, c = 0;

a = parseInt(prompt("Escolha um valor "))
b = parseInt(prompt("Escolha outro valor "))
c = parseInt(prompt("Escolha ultimo valor "))

m = (a + b + c) / 3
//alert(a)
alert("A média dos 3 valores (" + a + " + " + b + " + " + c + ")digitados foram " + m.toFixed(2))