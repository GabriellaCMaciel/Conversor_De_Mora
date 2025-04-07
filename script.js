function conversor() {

    let valorMora = prompt("Digite um valor em Mora");

    let umaMora = 10.753;
    let umDolar = 5.85;

    let valorEmReais = valorMora * umaMora;
    let valorEmDolar = valorMora * umDolar;

    alert(
        "O valor convertido em:\n" +
        "💰 Reais: R$ " + valorEmReais.toFixed(2) +
        "\n💵 Dólar: $ " + valorEmDolar.toFixed(2)
    );
}