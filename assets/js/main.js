// *'/assets/js/main.js'

// ---------- Código para fazer o relógio mudar de 24h para AM/PM e vice-versa ----------
// 1 - constante para selecionar a string da hora
const ITEM = document.querySelector(".js-item"); /* #1 */
let key = 1;

ITEM.addEventListener('click', () => {
    if (key > 0) {
        alert("Você mudou para o formato 24h!");
        return key = 0;
    } else {
        alert("Você mudou para o formato AM/PM!");
        return key = 1;
    }
}
);

// ---------- Código para fazer o relógio funcionar ----------
function clock() {
    // 1 - constantes para selecionar os campos html das horas, dos minutos e dos segundos
    // 2 - constante para capturar a hora do sistema
    const HORA = document.querySelector(".js-item__hora"); /* #1 */
    const MINUTO = document.querySelector(".js-item__minuto"); /* #1 */
    const SEGUNDO = document.querySelector(".js-item__segundo"); /* #1 */
    const SIGLA = document.querySelector(".js-item__sigla"); /* #1 */
    const DATA = new Date(); /* #2 */

    // 1 - variáveis para extrair minuto e segundo da constante DATA com a função getMinutes() e getSeconds();
    let minute = _addZero(DATA.getMinutes()); /* #1 */
    let second = _addZero(DATA.getSeconds()); /* #1 */
    let day_night = "";
    let hour = "";

    switch (key) {
        case 1:
            hour = _addZero(_hoursAM_PM(DATA.getHours()));

            if (DATA.getHours() >= 12) {
                day_night = "PM";
            } else {
                day_night = "AM"
            }

            break;

        case 0:
            hour = _addZero(DATA.getHours());

        default:
            break;
    };

    HORA.innerHTML = hour;
    MINUTO.innerHTML = minute;
    SEGUNDO.innerHTML = second;
    SIGLA.innerHTML = day_night;

};

// ---------- funções complementares da função "clock()" ----------
// função _addZero() adiciona um zero a esquerda das horas de 1 a 9
// função _hoursAM_PM() transforma as horas em um formato AM/PM
function _addZero(i) {
    if (i < 10) {
        return i = "0" + i;
    } else {
        return i;
    }
};

function _hoursAM_PM(h) {
    if (h == 0) {
        return h + 12;
    } else {
        return h % 12;
    };
};


// ---------- função setInterval() que faz a função "clock()" recarregar a cada 1 segundo ----------
setInterval(clock, 1000);


// ---------- Código para ativar e desativar o mode dark ----------
$(".js-cabecalho__icon").click(() => {
    $("html").toggleClass("dark");
});
