import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      //Homepage
      "Home page header": "Ukrainian Universities Database",
      "Choose region:": "Choose region:",
      "Choose university type:": "Choose university type:",
      "Show results": "Search",
      //Menu
      "Home menu": "Home",
      "Universities menu": "Universities",
      //Toolbar
      "Universities list": " Universities list",
      Region: "Region",
      "University type": "University type",
      University: "University",
      //University Types Filters
      "Filters card title": "Filters",
      "Заклади вищої освіти": "Higher education",
      "Заклад вищої освіти": "Higher education",
      "Заклади професійної (професійно-технічної) освіти":
        "Professional education",
      "Заклад професійної (професійно-технічної) освіти":
        "Professional education",
      "Заклади фахової передвищої освіти": "Pre-higher education",
      "Заклад фахової передвищої освіти": "Pre-higher education",
      "Наукові інститути (установи)": "Scientific institutions",
      // Region filters
      "Автономна Республіка Крим": "Autonomous Republic of Crimea",
      "Вінницька область": "Vinnytsia region",
      "Волинська область": "Volyn region",
      "Дніпропетровська область": "Dnipropetrovsk region",
      "Донецька область": "Donetsk region",
      "Житомирська область": "Zhytomyr region",
      "Закарпатська область": "Zakarpattia Oblast",
      "Запорізька область": "Zaporizhzhia region",
      "Івано-Франківська область": "Ivano-Frankivsk region",
      "Київська область": "Kyiv region",
      "Кіровоградська область": "Kirovohrad region",
      "Луганська область": "Luhansk region",
      "Львівська область": "Lviv region",
      "Миколаївська область": "Mykolaiv region",
      "Одеська область": "Odesa region",
      "Полтавська область": "Poltava region",
      "Рівненська область": "Rivne region",
      "Сумська область": "Sumy region",
      "Тернопільська область": "Ternopil region",
      "Харківська область": "Kharkiv region",
      "Херсонська область": "Kherson region",
      "Хмельницька область": "Khmelnytskyi region",
      "Черкаська область": "Cherkasy region",
      "Чернівецька область": "Chernivtsi region",
      "Чернігівська область": "Chernihiv region",
      КИЇВ: "Kyiv",
      "м.Севастополь": "Sevastopol",
      //Details
      City: "City",
      Address: "Address",
      "Established in": "Established in",
      Ownership: "Ownership",
      Державна: "Public",
      Приватна: "Private",
      Київ: "Kyiv",
      // Technical
      Loading: "Loading...",
      "Loading error": "Loading error",
      //University info
      "Faculties list": "Faculties list",
      Faculties: "Faculties",
      Programs: "Programs",
      //Educators
      Specialty: "Specialty",
      "Educational level": "Educational level",
      "Name of the program": "Name of the program",
      "Full-time places": "Full-time places",
      "Part-time places": "Part-time places",
      Бакалавр: "Bachelor",
      Магістр: "Master",
    },
  },
  uk: {
    translation: {
      //Homepage
      "Home page header": "База даних Українських ВНЗ",
      "Choose region:": "Оберіть регіон:",
      "Choose university type:": "Оберіть тип навчального закладу:",
      "Show results": "Пошук",
      //Menu
      "Home menu": "Головна",
      "Universities menu": "Університети",
      //Toolbar
      "Universities list": " Список університетів",
      Region: "Область",
      "University type": "Тип навчального закладу",
      University: "Університет",

      //University Types Filters
      "Filters card title": "Фільтрація",
      "Заклади вищої освіти": "Заклади вищої освіти",
      "Заклад вищої освіти": "Заклад вищої освіти",
      "Заклади професійної (професійно-технічної) освіти":
        "Заклади професійної (професійно-технічної) освіти",
      "Заклад професійної (професійно-технічної) освіти":
        "Заклад професійної (професійно-технічної) освіти",
      "Заклади фахової передвищої освіти": "Заклади фахової передвищої освіти",
      "Заклад фахової передвищої освіти": "Заклад фахової передвищої освіти",
      "Наукові інститути (установи)": "Наукові інститути (установи)",
      // Region filters
      "Автономна Республіка Крим": "Автономна Республіка Крим",
      "Вінницька область": "Вінницька область",
      "Волинська область": "Волинська область",
      "Дніпропетровська область": "Дніпропетровська область",
      "Донецька область": "Донецька область",
      "Житомирська область": "Житомирська область",
      "Закарпатська область": "Закарпатська область",
      "Запорізька область": "Запорізька область",
      "Івано-Франківська область": "Івано-Франківська область",
      "Київська область": "Київська область",
      "Кіровоградська область": "Кіровоградська область",
      "Луганська область": "Луганська область",
      "Львівська область": "Львівська область",
      "Миколаївська область": "Миколаївська область",
      "Одеська область": "Одеська область",
      "Полтавська область": "Полтавська область",
      "Рівненська область": "Рівненська область",
      "Сумська область": "Сумська область",
      "Тернопільська область": "Тернопільська область",
      "Харківська область": "Харківська область",
      "Херсонська область": "Херсонська область",
      "Хмельницька область": "Хмельницька область",
      "Черкаська область": "Черкаська область",
      "Чернівецька область": "Чернівецька область",
      "Чернігівська область": "Чернігівська область",
      КИЇВ: "Київ",
      "м.Севастополь": "м.Севастополь",
      //Details
      City: "Місто",
      Address: "Адреса",
      "Established in": "Рік заснування",
      Ownership: "Власність",
      Державна: "Державна",
      Приватна: "Державна",
      Київ: "Київ",
      // Technical
      Loading: "Завантаження...",
      "Loading error": "Помилка при завантаженні даних",
      "Faculties list": "Список факультетів",
      Faculties: "Факультети",
      Programs: "Освітніх програм",
      //Educators
      Specialty: "Спеціальність",
      "Educational level": "Освітній рівень",
      "Name of the program": "Назва програми",
      "Full-time places": "К-ть місць (денна форма)",
      "Part-time places": "К-ть місць (заочна форма)",
      Бакалавр: "Бакалавр",
      Магістр: "Магістр",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
