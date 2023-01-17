// '/assets/js/main.js'

// ----- Código para fazer o relógio funcionar -----
function relogio() {
    const TELA_HORA = document.querySelector(".js-tela__hora");
    const DATE = new Date();

    let hour = addZero(DATE.getHours());
    let min = addZero(DATE.getMinutes());
    let sec = addZero(DATE.getSeconds());

    let time = hour + ":" + min + ":" + sec;

    TELA_HORA.innerHTML = time;
};

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    } return i;
};

setInterval(relogio, 1000);

// ----------
$(".js-cabecalho__icon").click(function () { 
    $("html").toggleClass("dark");    
});

// $("button").click(function(){
//     $("h1, h2, p").toggleClass("blue");
//   });