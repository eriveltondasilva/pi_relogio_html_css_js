// '/assets/js/main.js'

// ----- Código para fazer o relógio funcionar -----
setInterval(function clock() {
    // #1 - constantes para selecionar os campos html
    // #2 - constante para capturar a data completo
    const HORA = document.querySelector(".js-item__hora"); /* #1 */
    const MINUTO = document.querySelector(".js-item__minuto"); /* #1 */
    const SEGUNDO = document.querySelector(".js-item__segundo"); /* #1 */
    const SIGLA = document.querySelector(".js-item__sigla"); /* #1 */
    const ITEM = document.querySelector(".js-item"); /* #1 */
    const DATE = new Date(); /* #2 */

    // #1 - variáveis para extrair minuto e segundo da constante DATE
    // com a função getMinutes() e getSeconds();
    let minute = _addZero(DATE.getMinutes()); /* #1 */
    let second = _addZero(DATE.getSeconds()); /* #1 */
    let day_night = "";
    let hour = "";
    let key = 1;

    ITEM.onclick = function () {_change()};

    function _change() {
        if (key == 1) {
            key - 1;
        } else {
            key + 1;
        }
    };



    switch (key) {
        case 1:
            hour = _addZero(_hoursAM_PM(DATE.getHours()));

            if (DATE.getHours < 12) {
                day_night = "AM";
            } else {
                day_night = "PM";
            };

            break;

        case 0:
            hour = _addZero(DATE.getHours());

        default:
            break;
    };


    function _hoursAM_PM(h) {
        if (h < 13) {
            return h;
        } else {
            return h - 12;
        };
    };

    function _addZero(i) {
        if (i < 10) {
            i = "0" + i;
        } return i;
    };

    HORA.innerHTML = hour;
    MINUTO.innerHTML = minute;
    SEGUNDO.innerHTML = second;
    SIGLA.innerHTML = day_night;

}, 1000);


// ---------- Código para ativar e desativar o mode dark
$(".js-cabecalho__icon").click(function () {
    $("html").toggleClass("dark");
});
