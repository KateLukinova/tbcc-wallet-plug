
$( document ).ready(function() {

    var userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);

    if (userLang === 'ru-RU') {
        if (!sessionStorage.getItem('test')) {
            window.location.href = "https://tbccwallet.com/ru";
            // window.location.href = "https://obobrazovanii.ru/ru";
            sessionStorage.setItem('test', 1);
        }
    }

    if (userLang === 'zh-CN') {
        if (!sessionStorage.getItem('test')) {
            window.location.href = "https://tbccwallet.com/zh";
            sessionStorage.setItem('test', 1);
        }
    }

    $('#lang-en').click(function () {
        window.location.href = "https://tbccwallet.com/";
    });

    $('#lang-ru').click(function () {
        window.location.href = "https://tbccwallet.com/ru";
    });

    $('#lang-zh').click(function () {
        window.location.href = "https://tbccwallet.com/zh";
    });

});
