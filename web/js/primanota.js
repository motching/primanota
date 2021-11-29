window.onload = onLoad;

var DEFAULT_LANGUAGE = 'hun';

function onLoad() {
    createEventListeners();
    changeLanguage(DEFAULT_LANGUAGE);
}

function createEventListeners() {
    document.querySelector('#hun-flag').addEventListener('click', function () {
        changeLanguage('hun');
    });
    document.querySelector('#eng-flag').addEventListener('click', function () {
        changeLanguage('eng');
    });
}


/**
 * Hungarian to English and back
 * @param {String} language - 'hun' or 'eng'
 **/

function changeLanguage (language) {
    var activeFlagId = '#' + language + '-flag';
     document.querySelector('#hun-flag').removeAttribute('active');
     document.querySelector('#eng-flag').removeAttribute('active');
     document.querySelector(activeFlagId).setAttribute('active', '');

    var nodesToTranslate = document.querySelectorAll('[translated]');

    // Let's be compatible with old browsers
    Array.prototype.forEach.call(nodesToTranslate, function (node) {
        var translationKey = node.dataset.translation;
        node.innerHTML = CONTENT_HTML[language][translationKey];
    });
}

var CONTENT_HUN = {
    'subtitle': 'könyvelés - bérszámfejtés - tanácsadás',
    'email-nudge': 'Ha kérdésed van, vagy árajánlatot szeretnél, keress bátran az <a target=\"_blank\" href=\"mailto:ildiko@primanota.hu\">ildiko@primanota.hu</a> email címen!',
    'introduction-header': '<strong>Könyvelőt </strong> keresel?',
    'introduction-list': 'Ha eleged van a bizonytalanságból...<br>Ha fontos az anyagi biztonság...<br>Ha szeretnél elindulni...<br>Ha tanácsra van szükséged...<br>Ha fontos a precizitás...<br> Ha nem szereted a félmunkát...<br>Ha fontos a kommunikáció...',
    'introduction-main': 'Kovácsné Ildikó vagyok, a Prima-Nota-2000 Bt. ügyvezetője. Főiskolai diplomával, 30 év szakmai tapasztalattal, 10 év felsővezetői gyakorlattal, egy 12 éve működő, folyamatosan bővülő ügyfélkörű magánvállalkozás keretében nyújtok számviteli szolgáltatást, adótanácsadást, vállalom egyéni vállalkozók és gazdasági társaságok teljes körű könyvelését.',
    'introduction-bold': 'Minden ügyfelem a legfontosabb ügyfelem, így foglak kezelni Téged is, kommunikációban, prioritásban, és elkötelezettségben.',
    'services-header': '<strong>Elérhető </strong>szolgáltatásaim',
    'services-title-1': 'Vállalkozások egyszeres és kettős könyvvitele',
    'services-list-1': '<li>Folyamatos analitikus nyilvántartás vezetése</li><li>Az adóbevallások határidőre történő elkészítése</li><li>Tájékoztatás a befizetendő adókról, járulékokról</li><li>Vevői követelések és szállítói tartozások kimutatása</li><li>Kötelező évközi és havi adatszolgáltatások, bevallások elkészítése</li><li>Folyamatos tájékoztatás a vállalkozás helyzetéről</li>',
    'services-title-2': 'Be- és kiléptetéssel kapcsolatos adatok felvezetése és bizonylatok kitöltése',
    'services-list-2': '<li>Kilépő dolgozók elszámolása és bizonylataik elkészítése.</li><li>Munkabér utalási összesítő elkészítése</li><li>Fizetési jegyzékek, aláíró listák készítése</li><li>Havi járulékbevallás (\'08) benyújtása ügyfélkapun keresztül</li><li>Táppénzes ellátások kezelése</li><li>Munkáltatói igazolások kiadása</li>',
    'call-to-action-title': '<strong>Kérj </strong> ajánlatot!',
    'call-to-action-body': 'Személyre szabott árajánlatért keress az <a target=\"_blank\" href=\"mailto:ildiko@primanota.hu\">ildiko@primanota.hu</a> emailen, vagy a +36 30 386 0243 - as telefonszámon!'
};

var CONTENT_ENG = {
    'subtitle': 'accounting - payroll processing - consultancy',
    'email-nudge': 'If you have a question, or you would like to get a quote, please write an email to <a target=\"_blank\" href=\"mailto:ildiko@primanota.hu\">ildiko@primanota.hu</a>!',
    'introduction-header': 'Are you looking for an <strong>accountant</strong>?',
    'introduction-list': 'If you are tired of uncertainty...<br>If you value financial security...<br>If you would like to start...<br>If you need advice...<br>If diligence is important you...<br>If you don\'t like sloppy work...<br>If you value great communication...',
    'introduction-main': 'I am Kovácsné Ildikó, founder and CEO of Prima-Nota-2000 Bt. I have a college degree, 30 years of professional experience, and I have worked for 10 years as a high-level financial executive. With my continuously expanding private firm of 12 years, I offer full accounting services and tax consultancy for enterpreneurs and small businesses.',
    'introduction-bold': 'Every one of my clients is the most important client, this is how I will treat you as well, with great communication, priority service and dedication.',
    'services-header': '<strong>Available </strong>services',
    'services-title-1': 'Single-entry and double-entry bookkeeping for businesses',
    'services-list-1': '<li>Maintaining continous analytics records</li><li>Preparing tax reports on time</li><li>Giving information about taxes and contributions due</li><li>Making statements of buyer demands and supplier payables.</li><li>Preparing mandatory midyear and monthly financial disclosures and reports</li><li>Continuous feedback about the state of the business</li>',
    'services-title-2': 'Recording data related to hires and layoffs, and filling related certificates',
    'services-list-2': '<li>Settlement of employees leaving and making their certificates.</li><li>Making wage payment summaries</li><li>Making salary registries, signature lists</li><li>Submitting monthly contribution reports (\'08) via the Ügyfélkapu (Client Gateway) system</li><li>Handling paid sick leave administration</li><li>Releasing employer certifications</li>',
    'call-to-action-title': '<strong>Request </strong> a quote!',
    'call-to-action-body': 'For a personalized offer please contact me via the <a target=\"_blank\" href=\"mailto:ildiko@primanota.hu\">ildiko@primanota.hu</a> email address, or the phone number +36 30 386 0243!'
}

var CONTENT_HTML = {hun: CONTENT_HUN, eng: CONTENT_ENG};
