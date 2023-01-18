// '/assets/js/main.js'

const ITEM = document.querySelector(".js-item"); /* #1 */
let key = 1;

ITEM.addEventListener('click', () => {
    if (key === 0) {
        alert("Você mudou para o formato AM/PM!");
        return key = 1;
    }
    alert("Você mudou para o formato 24h!");
    return key = 0;
}
);

// ----- Código para fazer o relógio funcionar -----
function clock() {
    // #1 - constantes para selecionar os campos html
    // #2 - constante para capturar a data completo
    const HORA = document.querySelector(".js-item__hora"); /* #1 */
    const MINUTO = document.querySelector(".js-item__minuto"); /* #1 */
    const SEGUNDO = document.querySelector(".js-item__segundo"); /* #1 */
    const SIGLA = document.querySelector(".js-item__sigla"); /* #1 */
    const DATE = new Date(); /* #2 */

    // #1 - variáveis para extrair minuto e segundo da constante DATE
    // com a função getMinutes() e getSeconds();
    let minute = _addZero(DATE.getMinutes()); /* #1 */
    let second = _addZero(DATE.getSeconds()); /* #1 */
    let day_night = "";
    let hour = "";

    switch (key) {
        case 1:
            hour = _addZero(_hoursAM_PM(DATE.getHours()));

            if (DATE.getHours > 12) {
                day_night = "PM";
            } else {
                day_night = "AM";
            };

            break;

        case 0:
            hour = _addZero(DATE.getHours());

        default:
            break;
    };

    HORA.innerHTML = hour;
    MINUTO.innerHTML = minute;
    SEGUNDO.innerHTML = second;
    SIGLA.innerHTML = day_night;

};

// funções complementares da função clock()
// função _addZero() adiciona um zero a esquerda das hora de 1 a 9
// função _hoursAM_PM() transformar as horas em um formato AM/PM
function _addZero(i) {
    if (i < 10) {
        i = "0" + i;
    } return i;
};

function _hoursAM_PM(h) {
    if (h == 0) {
        return h + 12;
    } else if (h < 13) {
        return h;
    } else {
        return h - 12;
    };
};

// função setInterval que faz o relógio( clock() ) funcionar
setInterval(clock, 1000);


// ---------- Código para ativar e desativar o mode dark
$(".js-cabecalho__icon").click(function () {
    $("html").toggleClass("dark");
});
