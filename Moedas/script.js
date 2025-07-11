async function converter() {
    res = document.getElementById("res");
    cod1 = document.getElementById("pesquisa1").value;
    moeda1 = document.getElementById("moeda1").value;
    cod2 = document.getElementById("pesquisa2").value;
    moeda1 = Number(moeda1);
    const url = `https://api.exchangerate.host/convert?from=${cod1}&to=${cod2}&amount=${moeda1}`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    res.innerHTML = `${dados.result}`
}