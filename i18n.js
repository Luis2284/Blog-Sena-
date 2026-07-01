/**
 * Bilingual support (EN / ES) for My English Learning Blog.
 * Add or edit translation keys here; match them with data-i18n attributes in index.html.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "blog-lang";

  /* ---------- Translation dictionary ---------- */
  var translations = {
    en: {
      "site.title": "My English Learning Blog",
      "site.pageTitle": "My English Learning Blog",
      "site.metaDescription":
        "My English Learning Blog – A personal portfolio of English learning activities developed during my SENA training process.",

      "nav.home": "Home",
      "nav.e1": "Entry 1",
      "nav.e2": "Entry 2",
      "nav.e3": "Entry 3",
      "nav.e4": "Entry 4",
      "nav.e5": "Entry 5",
      "nav.e6": "Entry 6",
      "nav.e7": "Entry 7",
      "nav.ariaOpen": "Open navigation menu",
      "nav.ariaClose": "Close navigation menu",
      "lang.aria": "Switch language",

      "hero.alt": "My English Learning Blog",

      "home.inst.title": "Institutional Information",
      "home.evidence.dt": "Evidence",
      "home.evidence.dd": "Blog – GA4-240202501-AA1-EV03",
      "home.program.dt": "Training Program",
      "home.program.dd": "Software Analysis and Development",
      "home.file.dt": "File Number",
      "home.instructor.dt": "Instructor",
      "home.center.dt": "Training Center",
      "home.center.dd": "Center of Commerce and Services",
      "home.date.dt": "Date",
      "home.date.dd": "June 2026",
      "home.apprentice.label": "Apprentice",
      "home.apprentice.role": "Software Analysis and Development Apprentice",
      "home.apprentice.alt": "Luis Navarro Masson",

      "pres.title": "Blog presentation audio",
      "pres.desc":
        "In this short audio, I introduce my English Learning Blog and explain its purpose as part of my SENA training process.",
      "audio.unsupported": "Your browser does not support the audio element.",

      "e1.category": "Travel and Culture",
      "e1.activity": "Previous SENA Activity: IE-GA2-240202501-AA2-EV02 – Presentation",
      "e1.title": "A tourist place in my region",
      "e1.intro":
        "This entry presents a previous English activity developed during my SENA training process. This work corresponds to the activity IE-GA2-240202501-AA2-EV02. In this activity, I described a tourist place from my region: the Maraca River, located in the municipality of Becerril, in the department of Cesar, Colombia.",
      "e1.p1":
        "The Maraca River is an important natural place for the people of Becerril. It is recognized for its beautiful landscape, fresh water, peaceful environment, and connection with the local culture and traditions. This place is visited by local people and tourists who want to enjoy nature, spend time with family and friends, and learn more about the natural beauty of the region.",
      "e1.p2":
        "Tourism is an important way to share the culture, traditions, and beauty of a region. In this activity, I practiced English by presenting the Maraca River as a tourist place from my region. Through this presentation, I described its location, some of its most representative characteristics, and why it is important for visitors and local people.",
      "e1.p3":
        "This activity helped me improve my English communication skills because I had to organize information, use clear vocabulary, and speak in a simple and understandable way. It also helped me practice pronunciation, rhythm, and intonation while talking about a real place connected with my environment.",
      "e1.collage.aria": "Tourist place images from my region",
      "e1.collage.alt": "Tourist place images from my region",
      "e1.video.title": "My tourist place presentation",
      "e1.video.intro":
        "In the following video, I present a tourist place from my region as part of a previous English activity.",
      "e1.video.iframeTitle": "My tourist place presentation video",
      "e1.video.link": "Open video in Google Drive",
      "e1.reflection":
        "Reflection: This activity allowed me to practice English while describing a real place from my region. It also helped me connect language learning with culture, tourism, and personal experiences.",

      "e2.category": "Work and English Communication",
      "e2.activity": "Previous SENA Activity: GA3-240202501-AA1-EV02 – Audio",
      "e2.title": "Workplace responsibilities and modal verbs",
      "e2.intro":
        "This entry presents a previous English audio activity developed during my SENA training process. In this activity, I practiced how to express attitudes, beliefs, responsibilities and obligations in a workplace context, using modal verbs such as have to, must and should.",
      "e2.p1":
        "In the workplace, communication is essential because it allows people to express rules, duties, recommendations and opinions clearly and appropriately. Modal verbs are important in English because they help communicate these kinds of ideas. For example, “must” is used to talk about strong obligations, “have to” is used to describe responsibilities or necessary actions, and “should” is used to give advice or recommendations.",
      "e2.p2":
        "This activity helped me strengthen my English communication skills in a context related to the world of work. It also allowed me to improve my pronunciation, fluency, vocabulary and grammatical structure. As a Software Analysis and Development apprentice, I understand that English is an important tool to communicate better in professional environments, follow technical instructions and express ideas clearly and in an organized way.",
      "e2.audio.title": "My workplace english audio",
      "e2.audio.intro1":
        "In this entry, I present an English audio activity about workplace responsibilities and the use of modal verbs. Through this audio, I practice how to express obligations, responsibilities, advice, and rules in a professional context.",
      "e2.audio.intro2": "The audio activity is attached below.",
      "e2.audio.calloutStrong": "Audio activity",
      "e2.audio.calloutSpan": "Listen to the audio below.",
      "e2.audio.link": "Open audio in Google Drive",
      "e2.reflection":
        "Reflection: This activity helped me understand how modal verbs are useful to express obligations, advice, and responsibilities in English. It also helped me connect language learning with real work situations.",

      "e3.category": "Family and Personal Life",
      "e3.title": "My family, hobbies and personal interests",
      "e3.intro":
        "In this entry, I describe my family, my hobbies, and the personal interests that shape my daily life and learning process.",
      "e3.p1":
        "My family is very important to me because they give me love, support, and motivation every day. I believe that family is one of the most valuable parts of life, because it teaches us respect, responsibility, and kindness.",
      "e3.p2":
        "In my free time, I enjoy listening to music, learning new things, creating digital content, and spending time with people I love. These activities help me relax, improve my creativity, and develop personal skills.",
      "e3.p3":
        "One of my main interests is technology. I like learning about software development because it helps me understand how digital tools work and how they can solve real problems in society.",
      "e3.reflection":
        "Reflection: This activity helps me practice English vocabulary related to family, hobbies, interests, and personal experiences. It also allows me to express important aspects of my life in a clear and simple way.",
      "e3.illustration.aria": "Cartoon illustration of my family and personal interests",
      "e3.illustration.alt": "Cartoon illustration of my family and personal interests",

      "e4.category": "Work and Professional Communication",
      "e4.title": "Entry 4: Professional job application email",
      "e4.intro":
        "In this entry, I present a written English activity in the form of a professional job application email. This activity helps me practice formal communication, professional vocabulary, grammar, punctuation, and the correct structure of a job application message.",
      "e4.doctitle":
        "Application for junior software development position - Activity: GA2-240202501-AA2-EV03",
      "e4.imgAlt": "Preview of professional job application email document",
      "e4.reflection":
        "Reflection: This written activity allowed me to practice formal English communication in a professional context. It also helped me improve my ability to describe my skills, academic background, personal qualities, and career goals in a clear and organized way.",

      "e5.category": "Learning Environment",
      "e5.title": "Entry 5: My personal learning environment for learning english",
      "e5.intro":
        "This mind map presents my Personal Learning Environment for learning English. It shows the digital tools, learning strategies, English skills, work environment and improvement actions that help me strengthen my communication and professional performance in software development.",
      "e5.doctitle":
        "My personal learning environment for learning english - Activity: GA4-220501095-AA1-EV02",
      "e5.imgAlt": "Mind map of my Personal Learning Environment for learning English",
      "e5.reflection":
        "Reflection: This mind map helped me organize the tools, strategies, and actions that support my English learning process in both academic and professional contexts.",

      "e6.category": "Current Topics",
      "e6.title": "Entry 6: Critical thinking and media literacy",
      "e6.doctitle": "Critical thinking and media literacy",
      "e6.p1":
        "Critical thinking and media literacy are essential skills in today’s digital world. Mass media, such as television, radio, newspapers, websites and social networks, influence the way people receive and understand information every day.",
      "e6.p2":
        "Critical thinking helps people analyze information, ask questions, compare ideas and make responsible decisions. Media literacy helps us understand the messages we receive from news, videos, advertisements and digital platforms. These skills are important because not all information on the internet is true. It is necessary to identify reliable sources, fake news, bias and manipulation.",
      "e6.p3":
        "This topic also includes the use of tag questions, which are useful to confirm information or invite another person to respond. For example: “Media literacy is important, isn’t it?” In my academic and professional life, especially in software development, these skills help me solve problems, use information responsibly and communicate ideas clearly.",

      "e7.category": "Society",
      "e7.title": "Entry 7: Crime and punishment",
      "e7.doctitle": "Crime and punishment",
      "e7.p1":
        "Crime and punishment is a topic that invites us to reflect on human actions, justice and consequences. A crime is not only a violation of the law; it can also affect families, communities and society. For this reason, punishment is used to correct behavior, protect people and promote responsibility.",
      "e7.p2":
        "This topic also shows the importance of conscience, guilt and moral values. Sometimes the strongest punishment is not only legal, but internal, because people must face the consequences of their decisions. In my opinion, justice should not only punish, but also help people understand their mistakes and look for redemption.",

      "learn.title": "Learning Reflection",
      "learn.p":
        "This blog represents my English learning process through different topics related to my personal life, academic development, work environment, tourism, critical thinking, and society. It helps me improve my vocabulary, pronunciation, writing, and communication skills.",

      "about.title": "About this blog",
      "about.p1":
        "SENA GA4-240202501-AA1-EV03 – Blog for the Software Analysis and Development program.",
      "about.p2":
        "Apprentice: Luis Navarro Masson &nbsp;&nbsp;|&nbsp;&nbsp; Instructor: Juan Manuel Bustamante Velandia",

      "footer.copy": "© 2026 Luis Navarro Masson – SENA – Software Analysis and Development"
    },

    es: {
      "site.title": "Mi blog de aprendizaje de inglés",
      "site.pageTitle": "Mi blog de aprendizaje de inglés",
      "site.metaDescription":
        "Mi blog de aprendizaje de inglés – Portafolio personal de actividades de inglés desarrolladas durante mi proceso de formación en el SENA.",

      "nav.home": "Inicio",
      "nav.e1": "Entrada 1",
      "nav.e2": "Entrada 2",
      "nav.e3": "Entrada 3",
      "nav.e4": "Entrada 4",
      "nav.e5": "Entrada 5",
      "nav.e6": "Entrada 6",
      "nav.e7": "Entrada 7",
      "nav.ariaOpen": "Abrir menú de navegación",
      "nav.ariaClose": "Cerrar menú de navegación",
      "lang.aria": "Cambiar idioma",

      "hero.alt": "Mi blog de aprendizaje de inglés",

      "home.inst.title": "Información institucional",
      "home.evidence.dt": "Evidencia",
      "home.evidence.dd": "Blog – GA4-240202501-AA1-EV03",
      "home.program.dt": "Programa de formación",
      "home.program.dd": "Análisis y Desarrollo de Software",
      "home.file.dt": "Ficha",
      "home.instructor.dt": "Instructor",
      "home.center.dt": "Centro de formación",
      "home.center.dd": "Centro de Comercio y Servicios",
      "home.date.dt": "Fecha",
      "home.date.dd": "Junio 2026",
      "home.apprentice.label": "Aprendiz",
      "home.apprentice.role": "Aprendiz de Análisis y Desarrollo de Software",
      "home.apprentice.alt": "Luis Navarro Masson",

      "pres.title": "Audio de presentación del blog",
      "pres.desc":
        "En este breve audio, presento mi blog de aprendizaje de inglés y explico su propósito como parte de mi proceso de formación en el SENA.",
      "audio.unsupported": "Tu navegador no admite el elemento de audio.",

      "e1.category": "Viajes y cultura",
      "e1.activity": "Actividad SENA previa: IE-GA2-240202501-AA2-EV02 – Presentación",
      "e1.title": "Un lugar turístico de mi región",
      "e1.intro":
        "Esta entrada presenta una actividad previa de inglés desarrollada durante mi proceso de formación en el SENA. Este trabajo corresponde a la actividad IE-GA2-240202501-AA2-EV02. En esta actividad, describí un lugar turístico de mi región: el río Maraca, ubicado en el municipio de Becerril, en el departamento del Cesar, Colombia.",
      "e1.p1":
        "El río Maraca es un lugar natural importante para la gente de Becerril. Es reconocido por su hermoso paisaje, agua fresca, ambiente tranquilo y conexión con la cultura y las tradiciones locales. Este lugar es visitado por habitantes de la zona y turistas que desean disfrutar de la naturaleza, compartir con familia y amigos, y conocer más sobre la belleza natural de la región.",
      "e1.p2":
        "El turismo es una forma importante de compartir la cultura, las tradiciones y la belleza de una región. En esta actividad, practiqué inglés presentando el río Maraca como un lugar turístico de mi región. A través de esta presentación, describí su ubicación, algunas de sus características más representativas y por qué es importante para visitantes y habitantes locales.",
      "e1.p3":
        "Esta actividad me ayudó a mejorar mis habilidades de comunicación en inglés porque tuve que organizar información, usar vocabulario claro y hablar de manera simple y comprensible. También me permitió practicar pronunciación, ritmo y entonación al hablar de un lugar real conectado con mi entorno.",
      "e1.collage.aria": "Imágenes del lugar turístico de mi región",
      "e1.collage.alt": "Imágenes del lugar turístico de mi región",
      "e1.video.title": "Mi presentación del lugar turístico",
      "e1.video.intro":
        "En el siguiente video, presento un lugar turístico de mi región como parte de una actividad previa de inglés.",
      "e1.video.iframeTitle": "Video de mi presentación del lugar turístico",
      "e1.video.link": "Abrir video en Google Drive",
      "e1.reflection":
        "Reflexión: Esta actividad me permitió practicar inglés mientras describía un lugar real de mi región. También me ayudó a conectar el aprendizaje del idioma con la cultura, el turismo y las experiencias personales.",

      "e2.category": "Trabajo y comunicación en inglés",
      "e2.activity": "Actividad SENA previa: GA3-240202501-AA1-EV02 – Audio",
      "e2.title": "Responsabilidades en el lugar de trabajo y verbos modales",
      "e2.intro":
        "Esta entrada presenta una actividad previa de audio en inglés desarrollada durante mi proceso de formación en el SENA. En esta actividad, practiqué la forma de expresar actitudes, creencias, responsabilidades y obligaciones dentro de un contexto laboral, utilizando verbos modales como have to, must y should.",
      "e2.p1":
        "En el entorno de trabajo, la comunicación es fundamental porque permite expresar normas, deberes, recomendaciones y opiniones de manera clara y adecuada. Los verbos modales son importantes en inglés porque ayudan a comunicar este tipo de ideas. Por ejemplo, “must” se utiliza para hablar de obligaciones fuertes, “have to” se usa para describir responsabilidades o acciones necesarias, y “should” se emplea para dar consejos o recomendaciones.",
      "e2.p2":
        "Esta actividad me ayudó a fortalecer mis habilidades comunicativas en inglés dentro de un contexto relacionado con el mundo laboral. También me permitió mejorar la pronunciación, la fluidez, el vocabulario y la estructura gramatical. Como aprendiz de Análisis y Desarrollo de Software, comprendo que el inglés es una herramienta importante para comunicarme mejor en entornos profesionales, seguir instrucciones técnicas y expresar ideas de forma clara y organizada.",
      "e2.audio.title": "Mi audio de inglés en el lugar de trabajo",
      "e2.audio.intro1":
        "En esta entrada, presento una actividad de audio en inglés sobre responsabilidades en el lugar de trabajo y el uso de verbos modales. A través de este audio, practico cómo expresar obligaciones, responsabilidades, consejos y reglas en un contexto profesional.",
      "e2.audio.intro2": "La actividad de audio se encuentra adjunta a continuación.",
      "e2.audio.calloutStrong": "Actividad de audio",
      "e2.audio.calloutSpan": "Escucha el audio a continuación.",
      "e2.audio.link": "Abrir audio en Google Drive",
      "e2.reflection":
        "Reflexión: Esta actividad me ayudó a comprender cómo los verbos modales son útiles para expresar obligaciones, consejos y responsabilidades en inglés. También me permitió conectar el aprendizaje del idioma con situaciones reales de trabajo.",

      "e3.category": "Familia y vida personal",
      "e3.title": "Mi familia, pasatiempos e intereses personales",
      "e3.intro":
        "En esta entrada, describo mi familia, mis pasatiempos y los intereses personales que forman parte de mi vida diaria y de mi proceso de aprendizaje.",
      "e3.p1":
        "Mi familia es muy importante para mí porque me brinda amor, apoyo y motivación cada día. Creo que la familia es una de las partes más valiosas de la vida, porque nos enseña respeto, responsabilidad y amabilidad.",
      "e3.p2":
        "En mi tiempo libre, disfruto escuchar música, aprender cosas nuevas, crear contenido digital y compartir con las personas que quiero. Estas actividades me ayudan a relajarme, mejorar mi creatividad y desarrollar habilidades personales.",
      "e3.p3":
        "Uno de mis principales intereses es la tecnología. Me gusta aprender sobre desarrollo de software porque me ayuda a comprender cómo funcionan las herramientas digitales y cómo pueden resolver problemas reales en la sociedad.",
      "e3.reflection":
        "Reflexión: Esta actividad me ayuda a practicar vocabulario en inglés relacionado con la familia, los pasatiempos, los intereses y las experiencias personales. También me permite expresar aspectos importantes de mi vida de manera clara y sencilla.",
      "e3.illustration.aria": "Ilustración de mi familia e intereses personales",
      "e3.illustration.alt": "Ilustración de mi familia e intereses personales",

      "e4.category": "Trabajo y comunicación profesional",
      "e4.title": "Entrada 4: Correo profesional de solicitud de empleo",
      "e4.intro":
        "En esta entrada, presento una actividad escrita en inglés en forma de correo profesional de solicitud de empleo. Esta actividad me ayuda a practicar la comunicación formal, el vocabulario profesional, la gramática, la puntuación y la estructura correcta de un mensaje de solicitud de empleo.",
      "e4.doctitle":
        "Application for junior software development position - Actividad: GA2-240202501-AA2-EV03",
      "e4.imgAlt": "Vista previa del documento de correo profesional de solicitud de empleo",
      "e4.reflection":
        "Reflexión: Esta actividad escrita me permitió practicar la comunicación formal en inglés en un contexto profesional. También me ayudó a mejorar mi capacidad para describir mis habilidades, formación académica, cualidades personales y metas profesionales de manera clara y organizada.",

      "e5.category": "Entorno de aprendizaje",
      "e5.title": "Entrada 5: Mi entorno personal de aprendizaje para aprender inglés",
      "e5.intro":
        "Este mapa mental presenta mi Entorno Personal de Aprendizaje para aprender inglés. Muestra las herramientas digitales, estrategias de aprendizaje, habilidades en inglés, entorno laboral y acciones de mejora que me ayudan a fortalecer mi comunicación y desempeño profesional en el desarrollo de software.",
      "e5.doctitle":
        "My personal learning environment for learning english - Actividad: GA4-220501095-AA1-EV02",
      "e5.imgAlt": "Mapa mental de mi Entorno Personal de Aprendizaje para aprender inglés",
      "e5.reflection":
        "Reflexión: Este mapa mental me ayudó a organizar las herramientas, estrategias y acciones que apoyan mi proceso de aprendizaje del inglés en contextos académicos y profesionales.",

      "e6.category": "Temas actuales",
      "e6.title": "Entrada 6: Pensamiento crítico y alfabetización mediática",
      "e6.doctitle": "Pensamiento crítico y alfabetización mediática",
      "e6.p1":
        "El pensamiento crítico y la alfabetización mediática son habilidades esenciales en el mundo digital actual. Los medios de comunicación masiva, como la televisión, la radio, los periódicos, los sitios web y las redes sociales, influyen en la forma en que las personas reciben y comprenden la información cada día.",
      "e6.p2":
        "El pensamiento crítico ayuda a las personas a analizar información, hacer preguntas, comparar ideas y tomar decisiones responsables. La alfabetización mediática nos ayuda a comprender los mensajes que recibimos de noticias, videos, anuncios y plataformas digitales. Estas habilidades son importantes porque no toda la información en internet es verdadera. Es necesario identificar fuentes confiables, noticias falsas, sesgos y manipulación.",
      "e6.p3":
        "Este tema también incluye el uso de tag questions, que son útiles para confirmar información o invitar a otra persona a responder. Por ejemplo: “Media literacy is important, isn’t it?” En mi vida académica y profesional, especialmente en el desarrollo de software, estas habilidades me ayudan a resolver problemas, usar la información de manera responsable y comunicar ideas con claridad.",

      "e7.category": "Sociedad",
      "e7.title": "Entrada 7: Crimen y castigo",
      "e7.doctitle": "Crimen y castigo",
      "e7.p1":
        "El crimen y el castigo es un tema que nos invita a reflexionar sobre las acciones humanas, la justicia y las consecuencias. Un crimen no es solo una violación de la ley; también puede afectar a familias, comunidades y a la sociedad. Por esta razón, el castigo se utiliza para corregir conductas, proteger a las personas y promover la responsabilidad.",
      "e7.p2":
        "Este tema también muestra la importancia de la conciencia, la culpa y los valores morales. A veces el castigo más fuerte no es solo legal, sino interno, porque las personas deben enfrentar las consecuencias de sus decisiones. En mi opinión, la justicia no solo debe castigar, sino también ayudar a las personas a comprender sus errores y buscar la redención.",

      "learn.title": "Reflexión de aprendizaje",
      "learn.p":
        "Este blog representa mi proceso de aprendizaje del inglés a través de diferentes temas relacionados con mi vida personal, desarrollo académico, entorno laboral, turismo, pensamiento crítico y sociedad. Me ayuda a mejorar mi vocabulario, pronunciación, escritura y habilidades de comunicación.",

      "about.title": "Acerca de este blog",
      "about.p1":
        "SENA GA4-240202501-AA1-EV03 – Blog para el programa de Análisis y Desarrollo de Software.",
      "about.p2":
        "Aprendiz: Luis Navarro Masson &nbsp;&nbsp;|&nbsp;&nbsp; Instructor: Juan Manuel Bustamante Velandia",

      "footer.copy": "© 2026 Luis Navarro Masson – SENA – Análisis y Desarrollo de Software"
    }
  };

  var langToggle = document.getElementById("langToggle");
  var currentLang = "en";

  function getStoredLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === "es" ? "es" : "en";
  }

  function getTranslation(lang, key) {
    var pack = translations[lang];
    return pack && pack[key] ? pack[key] : null;
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = "en";
    currentLang = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = getTranslation(lang, key);
      if (value !== null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var value = getTranslation(lang, key);
      if (value !== null) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      var value = getTranslation(lang, key);
      if (value !== null) el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      var value = getTranslation(lang, key);
      if (value !== null) el.setAttribute("title", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var value = getTranslation(lang, key);
      if (value !== null) el.setAttribute("aria-label", value);
    });

    var pageTitle = getTranslation(lang, "site.pageTitle");
    if (pageTitle) document.title = pageTitle;

    var metaDesc = document.querySelector('meta[name="description"]');
    var descValue = getTranslation(lang, "site.metaDescription");
    if (metaDesc && descValue) metaDesc.setAttribute("content", descValue);

    if (langToggle) {
      langToggle.textContent = lang === "en" ? "EN" : "ES";
      langToggle.setAttribute(
        "aria-label",
        getTranslation(lang, "lang.aria") || "Switch language"
      );
    }

    var navToggle = document.getElementById("navToggle");
    if (navToggle) {
      var menuOpen = navToggle.getAttribute("aria-expanded") === "true";
      var navKey = menuOpen ? "nav.ariaClose" : "nav.ariaOpen";
      var navLabel = getTranslation(lang, navKey);
      if (navLabel) navToggle.setAttribute("aria-label", navLabel);
    }

    localStorage.setItem(STORAGE_KEY, lang);
    document.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: lang } }));
  }

  function toggleLanguage() {
    applyLanguage(currentLang === "en" ? "es" : "en");
  }

  if (langToggle) {
    langToggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      toggleLanguage();
    });
  }

  applyLanguage(getStoredLang());

  window.BlogI18n = {
    applyLanguage: applyLanguage,
    getCurrentLang: function () {
      return currentLang;
    },
    getTranslation: function (key) {
      return getTranslation(currentLang, key);
    }
  };
})();
