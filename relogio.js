function relogio (){
    const espacoRelogio = document.querySelector (".relogio");
    const horaAgora = new Date ();

    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();

    const formatoHora = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    
}

setInterval(relogio, 1000)

//a cosnt horaAgora tem a função de new date que definiu que a const horaAgora abastece com informaçoes referete ao tempo
//

//toString uma funçao que transforma as const de tempo em string//

//padstart preenche uma string com outra string até um certo comprimento desde que o início da string e retorna uma string resultante que atinge um determinado comprimento.//


//setInterval ativa uma contagem em relação ao tempo//

