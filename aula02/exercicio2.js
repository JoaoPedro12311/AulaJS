function calcular() 
{
    let fahrenheit, celsius;

    fahrenheit = document.getElementById("fahrenheit").value;

    celsius = (Number(fahrenheit) - 32) * 5 / 9;

    document.getElementById("resultado").innerHTML = "<p>" + fahrenheit + " graus Fahrenheit é igual a " + celsius.toFixed(2) + " graus Celsius.</p>";
}