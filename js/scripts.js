
$( document ).ready(function() {

    var dictionary = {
        RU: {
            plugP: 'Покупайте, храните, отправляйте, обменивайте свою криптовалюту с простым и удобным кошельком',
            plugButton: 'Скачать для Android',
            plugCaption: 'Предстоящие обновления',
            plugCaptionSpan: 'в следующие 2-3 месяца',
            plugItemOne: 'Сделки станут быстрее и дешевле',
            plugItemTwo: 'Экспертное внедрение с OpenSea, Rarible и еще 245 платформами',
            plugItemThree: 'Токен TBCC будет работать по стандарту BEP20',
            plugItemFour: 'Поступает много сервисов DeFi. Ждите продолжения!',
        },
        CH: {
            plugP: '购买，存储，发送，交换您的加密货币 带有易于使用且方便的钱包',
            plugButton: '下载Android版',
            plugCaption: '即将更新',
            plugCaptionSpan: '在未来2-3个月内',
            plugItemOne: '交易将变得更快，更便宜',
            plugItemTwo: '与OpenSea，Rarible和245个以上平台的专家集成',
            plugItemThree: 'TBCC令牌将根据BEP20标准工作',
            plugItemFour: '大量的DeFi服务传入。敬请关注！',
        }

    }

    $('#lang-ru').click(function () {
        var language = 'RU';
        setLanguage(dictionary, language);
    });

    $('#lang-ch').click(function () {
        var language = 'CH';
        setLanguage(dictionary, language);
    });

});

function setLanguage(dictionary, language)
{
    $('#plugP').text(dictionary[language].plugP);
    $('#plugButton').text(dictionary[language].plugButton);
    $('#plugCaption').text(dictionary[language].plugCaption);
    $('#plugCaptionSpan').text(dictionary[language].plugCaptionSpan);
    $('#plugItemOne').text(dictionary[language].plugItemOne);
    $('#plugItemTwo').text(dictionary[language].plugItemTwo);
    $('#plugItemThree').text(dictionary[language].plugItemThree);
    $('#plugItemFour').text(dictionary[language].plugItemFour);
}
