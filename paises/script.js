async function pegar_pib(){
    pais = document.getElementById('input').value
    const year = new Date().getFullYear() - 2
    const url = `https://api.worldbank.org/v2/country/${pais}/indicator/NY.GDP.MKTP.CD?date=${year}&format=json`
    const resp = await fetch(url)
    if (resp.status === 200){
        const obj = await resp.json()
        pib.innerHTML = `${obj[1][0].value}` 
        console.log(obj[1][0].value)
    }else{
        pib.innerHTML = 'Deu erro'
    }
}
