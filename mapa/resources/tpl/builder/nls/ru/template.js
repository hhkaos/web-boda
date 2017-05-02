define({
  "builder": {
    "initPopup": {
      "title": "Добро пожаловать",
      "startBtn": "Старт"
    },
    "addEditPopup": {
      "test": "тест",
      "add": "добавить",
      "edit": "редактировать"
    },
    "landing": {
      "lblAdd": "Зачем вы хотите вызвать Shortlist?",
      "phAdd": "Введите заголовок...",
      "lblOR": "Или",
      "lblHelp": "Пройти ознакомительный тур"
    },
    "organizePopup": {
      "title": "Организовать",
      "tab": "вкладка"
    },
    "settingsLayoutOptions": {
      "title": "Опции компоновки",
      "lblDescription": "Описание"
    },
    "addFeatureBar": {
      "add": "Добавить",
      "import": "Импорт",
      "done": "Готово",
      "deleteFeature": "Удалить",
      "move": "Переместить",
      "locateFeaturesTooltip": "Некоторые места необходимо указать. Щелкните здесь, чтобы увидеть их"
    },
    "detailPanelBuilder": {
      "changeLocation": "Изменить местоположение",
      "setLocation": "Задать местоположение",
      "cancel": "Отмена",
      "addImage": "щелкните или перетащите, чтобы добавить изображение",
      "enterPlaceName": "Введите название местоположения",
      "enterPlaceDescription": "Введите описание местоположения",
      "unnamedPlace": "Местоположение без названия"
    },
    "settings": {
      "numberedPlaces": "Показать места с номерами",
      "extentSensitive": "Показывать на вкладках только те места, которые отображаются на карте (только во вьюере)",
      "extentSensitiveTooltip": "Эта опция применяется только при просмотре Shortlist. В конструкторе Shortlist на вкладках всегда отображаются все места, даже те, которые не видны на карте. Отключите опцию, если вы хотите, чтобы на вкладках всегда отображались все места при просмотре Shortlist.",
      "locateButton": "Кнопка Найти местоположение",
      "locateButtonTooltip": "Позволяет читателям видеть свое текущее положение на карте. Эта карта поддерживается на множестве устройств и в браузерах, но кнопка появится только в том случае, если вы предоставите доступ к истории по ссылке HTTPS, и история не встроена в сайт.",
      "geocoder": "Адрес, место или поиск объектов",
      "bookmarks": "Закладки",
      "bookmarksMenuName": "Название меню",
      "defaultMapLocation": "Местоположение карты по умолчанию",
      "auto": "Авто",
      "autoTooltip": "Местоположение выбирается автоматически, так, чтобы отображались все места",
      "custom": "Пользовательский",
      "customTooltip": "Задайте местоположение, используя кнопку, появляющуюся в элементах управления масштабом карты",
      "mapLocationTooltip": "Местоположение, которое видят пользователи, открывающие ваш Shortlist",
      "bookmarksHelp": "Чтобы разрешить использование закладок в Shortlist, добавьте и настройте закладки веб-карты во вьюере веб-карт"
    },
    "help": {
      "title": "СПРАВКА",
      "shortlistHelp1": "Добро пожаловать в Story Map Shortlist. Это приложение дает возможность отображать местоположения, упорядоченные по вкладкам, позволяет предложить увлекательный способ изучения определенной области. Вы можете создавать свои места в этом Конструкторе в интерактивном режиме.",
      "shortlistHelp2": "Также можно создать Shortlist по имеющейся веб-карте ArcGIS, включая опцию использования точечных данных для обозначения мест на карте.",
      "shortlistHelp3": "Чтобы создать Shortlist на основе веб-карты, перейдите в",
      "shortlistHelp4": "откройте веб-карту, создайте по ней веб-приложение и выберите Story Map Shortlist из галереи приложений. Если на веб-карте имеются точечные слои, конструктор Shortlist предложит выбрать те из них, которые вы хотите использовать к качестве мест. Если вы создаете Shortlist с помощью оригинальной, неразмещенной версии приложения, можно перенести Shortlist в размещенную версию, используя те же самые шаги.",
      "shortlistHelp5": "Для получения дополнительных сведений",
      "shortlistHelp6": "Посетите раздел Shortlist на веб-сайте Esri Story Maps",
      "shortlistFAQ": "FAQ по Shortlist",
      "shortlistBetaFeedback": "Отзыв (бета-версия)",
      "shortlistBetaFeedback2": "Мы будем рады получить ваш отзыв! Сообщите нам о имеющихся проблемах и новых функциях, которые могут вам потребоваться, посетив",
      "geonetForum": "форум Story Maps в GeoNet"
    },
    "migration": {
      "migrationPattern": {
        "welcome": "Добро пожаловать в Shortlist Builder",
        "importQuestion": "Веб-карта содержит точечные данные. Хотите использовать эти точки в качестве мест в Shortlist?",
        "importExplainYes": "Вы можете редактировать, обрабатывать и добавлять места в Shorlist Builder. Копия вашей веб-карты будет создана автоматически, поэтому исходные данные останутся нетронутыми.",
        "importExplainNo": "Точки будут отображаться на карте Shortlist, но не будут использоваться как места. Вам потребуется добавить места в Shortlist с помощью Builder.",
        "no": "Нет",
        "importOption": "Да, импортировать",
        "asIsOption": "Да, использовать как есть",
        "asIsText": "Вы продолжите редактировать и настраивать места на своей веб-карте, не в Shortlist Builder. Обновления данные будут автоматически отражаться в Shortlist. Для этого необходимо, чтобы данные использовались с этим шаблоном.",
        "badData": "Точечный слой, содержащий ваши места, не использует необходимый шаблон данных. Просмотрите требования шаблона.",
        "downloadTemplate": "Загрузить шаблон"
      },
      "fieldPicker": {
        "nameField": "Поле, содержащее название каждого места: ",
        "descriptionField": "Поле (поля), которые будут отображаться в описании каждого места и порядок их следования: ",
        "urlField": "Поле, содержащее URL-адрес ссылки 'Подробнее' для каждого места (дополнительно): ",
        "none": "нет",
        "imageFields": "Поля, содержащие URL-адреса изображений для каждого места (дополнительно): ",
        "mainImageField": "Основное изображение ",
        "thumbImageField": "Образец: ",
        "noImageFields": "Оставьте значение none, если вы хотите добавить изображения к местам с помощью Builder",
        "tabField": "Если имеется имя поля, которое относит места слоя к различным темам, выберите соответствующее имя поля ниже."
      },
      "layerPicker": {
        "pointLayers": "Выберите точечный слой (слои) веб-карты, которые вы хотите использовать как места: ",
        "layerInfo": "Если выбрано несколько слоев, их поля должны быть одинаковыми. Каждый выбранный слой станет закладкой в Shortlist."
      }
    }
  }
});