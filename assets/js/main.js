const prices = {
    spa: {
        maya: {
            mattina: { '1h': 180, '1.5h': 250 },
            sera: { '1h': 250, '1.5h': 340 },
            notte: { '1h': 300, '1.5h': 400 }
        },
        moon: {
            mattina: { '1h': 150, '1.5h': 200 },
            sera: { '1h': 210, '1.5h': 280 },
            notte: { '1h': 240, '1.5h': 330 }
        },
        domus: {
            mattina: { '1h': 130, '1.5h': 170 },
            sera: { '1h': 170, '1.5h': 230 },
            notte: { '1h': 200, '1.5h': 280 }
        }
    },
    'spa-cena': {
        maya: {
            mattina: { '1h': 320, '1.5h': 390 },
            sera: { '1h': 390, '1.5h': 480 },
            notte: { '1h': 440, '1.5h': 540 }
        },
        moon: {
            mattina: { '1h': 290, '1.5h': 340 },
            sera: { '1h': 350, '1.5h': 420 },
            notte: { '1h': 380, '1.5h': 470 }
        },
        domus: {
            mattina: { '1h': 270, '1.5h': 310 },
            sera: { '1h': 310, '1.5h': 370 },
            notte: { '1h': 340, '1.5h': 420 }
        }
    },
    'camera-cena': {
        matrimoniale: 380,
        wellness: 830
    },
    'camera-spa-cena': {
        maya: {
            mattina: { '1h': 530, '1.5h': 590 },
            sera: { '1h': 600, '1.5h': 680 },
            notte: { '1h': 650, '1.5h': 740 }
        },
        moon: {
            mattina: { '1h': 500, '1.5h': 540 },
            sera: { '1h': 560, '1.5h': 620 },
            notte: { '1h': 590, '1.5h': 670 }
        },
        domus: {
            mattina: { '1h': 480, '1.5h': 510 },
            sera: { '1h': 520, '1.5h': 570 },
            notte: { '1h': 550, '1.5h': 620 }
        }
    }
};

const spaData = {
    maya: { name: 'SPA Maya', size: '110 mq · Premium', img: 'assets/images/spa-maya.jpg' },
    moon: { name: 'SPA Moon', size: '100 mq · Exclusive', img: 'assets/images/spa-moon.jpg' },
    domus: { name: 'SPA Domus', size: '70 mq · Charme', img: 'assets/images/spa-domus.jpg' }
};

let selection = {
    spa: null,
    type: null,
    room: null,
    time: null,
    duration: null
};

const translations = {
    it: {
        heroHotelName: 'Trilussa Palace Hotel',
        heroSubtitle: 'Wellness & SPA',
        heroTitle: 'San Valentino 2026',
        heroDesc: "Un'esperienza romantica ed esclusiva nel cuore di Trastevere",
        heroDate: '14 Febbraio 2026',
        countdownLabel: "Manca poco al giorno più romantico dell'anno",
        countdownDays: 'Giorni',
        countdownHours: 'Ore',
        countdownMinutes: 'Minuti',
        countdownSeconds: 'Secondi',
        spaTitle: 'Le nostre SPA private',
        spaSubtitle: 'Tre ambienti esclusivi per celebrare il vostro amore',
        spaMayaDesc: "Grande vasca di 32 mq in mosaico verde, oro e nero con giochi d'acqua, cascate rigeneranti e idromassaggio. Piramide Maya al centro con colori personalizzabili, sauna finlandese con parete di sale e bagno turco.",
        spaMoonDesc: "Esperienza sensoriale con tecnologie multimediali avanzate. Proiezioni immersive, gestione scenari e luci personalizzabili per un'atmosfera unica e romantica.",
        spaDomusDesc: "Ambiente intimo e raffinato con piscina idromassaggio di 8 mq rivestita in mosaico, bagno turco in marmo e docce emozionali per un'esperienza esclusiva.",
        featurePool32: 'Piscina 32 mq',
        featurePool30: 'Piscina 30 mq',
        featurePool8: 'Piscina 8 mq',
        featureCervical: '2 cascate cervicale',
        featureWater34: 'Acqua 34°',
        featureAirBed: 'Lettino ad aria',
        featureChampagne: 'Effetto champagne',
        featureIceFall: 'Cascata ghiaccio',
        featureScenarios: 'Gestione scenari',
        featureHydro: 'Idromassaggio',
        featureSauna: 'Sauna',
        featureSteam: 'Bagno turco',
        featureShowers: 'Docce emozionali',
        featureStreamFall: 'Cascata a fiotto',
        timeSlots: 'Fasce orarie',
        timeMorning: 'Mattina',
        timeAfternoon: 'Pomeriggio',
        timeNight: 'Notte',
        alwaysIncluded: 'Sempre incluso',
        kitBathrobe: 'Accappatoio',
        kitTowel: 'Telo',
        kitSlippers: 'Ciabattine',
        kitChocolates: 'Cioccolatini',
        roomsTitle: 'Puoi aggiungere anche',
        roomsSubtitle: 'CAMERE',
        roomWellnessDesc: 'Esclusiva Suite insonorizzata con zona benessere privata: vasca idromassaggio per due (2m x 1,60m) a 35°, Sauna Biolevel, docce emozionali con cromoterapia, maxi schermo con proiettore, letto sospeso, balconcino vista Monteverde.',
        roomDouble: 'Camera Matrimoniale',
        roomDoubleDesc: 'Comoda camera insonorizzata di 16mq con TV LCD 32" Chromecast, cassaforte, minifrigo, climatizzazione autonoma, doccia effetto pioggia, bollitore.',
        discover: 'Scopri →',
        dinnerTitle: 'Cena di San Valentino',
        menuDesc: 'Una cena romantica presso il nostro Ramo Bistrot.',
        menuWhyTitle: 'Perché Ramo?',
        menuWhyDesc: "Ramo è l'anagramma di ROMA e AMOR, due parole che racchiudono l'essenza di questo luogo: la bellezza eterna di Roma e il calore dell'amore.",
        menuName: "Promessa d'Amore",
        courseWelcome: 'Benvenuto dello Chef',
        courseWelcomeDesc: 'Calice di bollicina rosé con entrée di benvenuto',
        courseAppetizer: 'Antipasto',
        courseAppetizerDesc: 'Capesante scottate, vellutata di topinambur, gocce di riduzione al passion fruit e polvere di cacao amaro',
        courseFirst: 'Primo Piatto',
        courseFirstDesc: 'Risotto al prosecco rosé, fragole marinate al pepe rosa e mantecatura al Parmigiano 36 mesi',
        courseSecond: 'Secondo Piatto',
        courseSecondDesc: 'Bon bon di manzo in crosta di pane, salsa al vino rosso, frutti di bosco e millefoglie di patate al burro',
        coursePreDessertDesc: 'Sorbetto al lampone e rosa',
        courseDessertDesc: 'Cuore al cioccolato fondente con anima calda al lampone, crumble alle mandorle e crema inglese alla vaniglia',
        configTitle: 'Configura il tuo pacchetto',
        configSubtitle: 'Scegli il pacchetto perfetto per il tuo San Valentino',
        changeSpa: 'Cambia SPA',
        stepPackage: 'Scegli il tuo pacchetto',
        stepSpa: 'Scegli la SPA',
        stepRoom: 'Scegli la camera',
        stepTime: 'Scegli la fascia oraria',
        stepDuration: 'Scegli la durata',
        optSpaOnly: 'Solo SPA',
        optSpaOnlyDesc: 'Accesso privato alla SPA con kit completo',
        optSpaDinner: 'SPA + Cena',
        optSpaDinnerDesc: 'Aggiungi la cena "Promessa d\'Amore" al Ramo Bistrot',
        optSpaRoomDinner: 'SPA + Camera + Cena',
        optSpaRoomDinnerDesc: "L'esperienza completa: pernottamento con colazione, SPA privata e cena romantica",
        optRoomDinner: 'Camera + Cena',
        optRoomDinnerDesc: 'Pernottamento con colazione e cena romantica al Ramo Bistrot',
        optMayaDesc: 'Piscina 32mq, sauna himalayiana, bagno turco, prosecco incluso',
        optMoonDesc: 'Piscina 34°C, idromassaggio, sauna, proiezioni scenari',
        optDomusDesc: 'Stile Villa Adriana, docce emozionali, bagno turco marmo',
        optRoomDoubleDesc: 'Camera 16mq insonorizzata, TV Chromecast, clima autonomo',
        optWellnessDesc: 'Suite con SPA privata, vasca 35°, sauna, docce cromoterapia',
        duration1h: '1 ora',
        duration1h30: '1 ora e mezza',
        resultLabel: 'Il tuo preventivo',
        resultNote: 'per 2 persone',
        btnReset: 'Ricomincia',
        modalTitle: 'Perfetto!',
        modalSubtitle: 'Ecco il tuo pacchetto San Valentino',
        modalIncludes: 'Include',
        modalEdit: 'Modifica selezione',
        footerCopy: '© 2026 Trilussa Palace Hotel. Tutti i diritti riservati.'
    },
    en: {
        heroHotelName: 'Trilussa Palace Hotel',
        heroSubtitle: 'Wellness & SPA',
        heroTitle: "Valentine's Day 2026",
        heroDesc: 'An exclusive romantic experience in the heart of Trastevere',
        heroDate: 'February 14, 2026',
        countdownLabel: "The most romantic day of the year is almost here",
        countdownDays: 'Days',
        countdownHours: 'Hours',
        countdownMinutes: 'Minutes',
        countdownSeconds: 'Seconds',
        spaTitle: 'Our Private SPAs',
        spaSubtitle: 'Three exclusive environments to celebrate your love',
        spaMayaDesc: 'Large 32 sqm pool in green, gold and black mosaic with water features, rejuvenating waterfalls and hydromassage. Maya pyramid in the center with customizable colors, Finnish sauna with salt wall and Turkish bath.',
        spaMoonDesc: 'Sensory experience with advanced multimedia technologies. Immersive projections, scenario management and customizable lighting for a unique romantic atmosphere.',
        spaDomusDesc: 'Intimate and refined environment with 8 sqm hydromassage pool covered in mosaic, marble Turkish bath and emotional showers for an exclusive experience.',
        featurePool32: '32 sqm Pool',
        featurePool30: '30 sqm Pool',
        featurePool8: '8 sqm Pool',
        featureCervical: '2 cervical waterfalls',
        featureWater34: 'Water 34°',
        featureAirBed: 'Air bed',
        featureChampagne: 'Champagne effect',
        featureIceFall: 'Ice waterfall',
        featureScenarios: 'Scenario management',
        featureHydro: 'Hydromassage',
        featureSauna: 'Sauna',
        featureSteam: 'Turkish bath',
        featureShowers: 'Emotional showers',
        featureStreamFall: 'Stream waterfall',
        timeSlots: 'Time Slots',
        timeMorning: 'Morning',
        timeAfternoon: 'Afternoon',
        timeNight: 'Night',
        alwaysIncluded: 'Always Included',
        kitBathrobe: 'Bathrobe',
        kitTowel: 'Towel',
        kitSlippers: 'Slippers',
        kitChocolates: 'Chocolates',
        roomsTitle: 'You can also add',
        roomsSubtitle: 'ROOMS',
        roomWellnessDesc: 'Exclusive soundproofed Suite with private wellness area: hydromassage tub for two (2m x 1.60m) at 35°, Biolevel Sauna, emotional showers with chromotherapy, maxi projector screen, suspended bed, balcony with Monteverde view.',
        roomDouble: 'Double Room',
        roomDoubleDesc: 'Comfortable soundproofed 16sqm room with 32" LCD TV Chromecast, safe, minibar, autonomous climate control, rain shower, kettle.',
        discover: 'Discover →',
        dinnerTitle: "Valentine's Day Dinner",
        menuDesc: 'A romantic dinner at our Ramo Bistrot.',
        menuWhyTitle: 'Why Ramo?',
        menuWhyDesc: 'Ramo is the anagram of ROMA and AMOR, two words that encapsulate the essence of this place: the eternal beauty of Rome and the warmth of love.',
        menuName: 'Promise of Love',
        courseWelcome: "Chef's Welcome",
        courseWelcomeDesc: 'Glass of rosé sparkling wine with welcome entrée',
        courseAppetizer: 'Appetizer',
        courseAppetizerDesc: 'Seared scallops, Jerusalem artichoke cream, passion fruit reduction drops and bitter cocoa powder',
        courseFirst: 'First Course',
        courseFirstDesc: 'Rosé prosecco risotto, strawberries marinated in pink pepper and 36-month Parmesan mantecatura',
        courseSecond: 'Main Course',
        courseSecondDesc: 'Beef bon bon in bread crust, red wine sauce, berries and butter potato millefeuille',
        coursePreDessertDesc: 'Raspberry and rose sorbet',
        courseDessertDesc: 'Dark chocolate heart with warm raspberry core, almond crumble and vanilla custard',
        configTitle: 'Configure Your Package',
        configSubtitle: "Choose the perfect package for your Valentine's Day",
        changeSpa: 'Change SPA',
        stepPackage: 'Choose your package',
        stepSpa: 'Choose the SPA',
        stepRoom: 'Choose the room',
        stepTime: 'Choose the time slot',
        stepDuration: 'Choose the duration',
        optSpaOnly: 'SPA Only',
        optSpaOnlyDesc: 'Private SPA access with complete kit',
        optSpaDinner: 'SPA + Dinner',
        optSpaDinnerDesc: 'Add the "Promise of Love" dinner at Ramo Bistrot',
        optSpaRoomDinner: 'SPA + Room + Dinner',
        optSpaRoomDinnerDesc: 'The complete experience: overnight with breakfast, private SPA and romantic dinner',
        optRoomDinner: 'Room + Dinner',
        optRoomDinnerDesc: 'Overnight stay with breakfast and romantic dinner at Ramo Bistrot',
        optMayaDesc: '32sqm pool, Himalayan sauna, Turkish bath, prosecco included',
        optMoonDesc: '34°C pool, hydromassage, sauna, scenario projections',
        optDomusDesc: 'Villa Adriana style, emotional showers, marble Turkish bath',
        optRoomDoubleDesc: 'Soundproofed 16sqm room, TV Chromecast, autonomous climate',
        optWellnessDesc: 'Suite with private SPA, 35° tub, sauna, chromotherapy showers',
        duration1h: '1 hour',
        duration1h30: '1 hour and a half',
        resultLabel: 'Your Quote',
        resultNote: 'for 2 people',
        btnReset: 'Start Over',
        modalTitle: 'Perfect!',
        modalSubtitle: "Here's your Valentine's package",
        modalIncludes: 'Includes',
        modalEdit: 'Edit selection',
        footerCopy: '© 2026 Trilussa Palace Hotel. All rights reserved.'
    }
};

let currentLang = localStorage.getItem('sanValentinoLang') || 'it';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('sanValentinoLang', lang);
    applyTranslations();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function applyTranslations() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    document.documentElement.lang = currentLang;
}

function selectSpaFromCard(spa) {
    if (!selection.type) {
        smoothScrollTo('configurator-section');
        return;
    }
    selection.spa = spa;
    document.querySelectorAll('.spa-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.spa-card[data-spa="${spa}"]`).classList.add('selected');
    document.querySelectorAll('#step-spa .option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`#step-spa [data-spa="${spa}"]`).classList.add('selected');
    showSpaPreview(spa);
    collapseStep('step-spa');
    document.getElementById('step-time').classList.remove('hidden');
    document.getElementById('step-duration').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.querySelectorAll('#step-time .option, #step-duration .option').forEach(o => o.classList.remove('selected'));
    smoothScrollTo('step-time');
}

function selectSpa(spa) {
    selection.spa = spa;
    selection.time = null;
    selection.duration = null;
    document.querySelectorAll('.spa-card').forEach(c => c.classList.remove('selected'));
    const spaCard = document.querySelector(`.spa-card[data-spa="${spa}"]`);
    if (spaCard) spaCard.classList.add('selected');
    document.querySelectorAll('#step-spa .option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`#step-spa [data-spa="${spa}"]`).classList.add('selected');
    showSpaPreview(spa);
    collapseStep('step-spa');
    document.getElementById('step-time').classList.remove('hidden');
    document.getElementById('step-duration').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.querySelectorAll('#step-time .option, #step-duration .option').forEach(o => o.classList.remove('selected'));
    smoothScrollTo('step-time');
}

function showSpaPreview(spa) {
    const data = spaData[spa];
    document.getElementById('spa-preview-img').src = data.img;
    document.getElementById('spa-preview-name').textContent = data.name;
    document.getElementById('spa-preview-size').textContent = data.size;
    document.getElementById('spa-preview').classList.remove('hidden');
}

function reopenPackageStep() {
    document.getElementById('step-package').classList.remove('collapsed');
    document.getElementById('spa-preview').classList.add('hidden');
    document.getElementById('step-spa').classList.add('hidden');
    document.getElementById('step-room').classList.add('hidden');
    document.getElementById('step-time').classList.add('hidden');
    document.getElementById('step-duration').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.querySelectorAll('.spa-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('#step-spa .option, #step-room .option, #step-time .option, #step-duration .option').forEach(o => o.classList.remove('selected'));
    selection.spa = null;
    selection.room = null;
    selection.time = null;
    selection.duration = null;
    smoothScrollTo('step-package');
}

function changeSpa() {
    document.getElementById('spa-preview').classList.add('hidden');
    document.getElementById('step-spa').classList.remove('hidden', 'collapsed');
    document.getElementById('step-room').classList.add('hidden');
    document.getElementById('step-time').classList.add('hidden');
    document.getElementById('step-duration').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.querySelectorAll('.spa-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('#step-spa .option').forEach(o => o.classList.remove('selected'));
    selection.spa = null;
    selection.time = null;
    selection.duration = null;
    smoothScrollTo('step-spa');
}

function selectType(type) {
    selection.type = type;
    selection.spa = null;
    selection.room = null;
    selection.time = null;
    selection.duration = null;
    document.querySelectorAll('#step-package .option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`[data-type="${type}"]`).classList.add('selected');
    collapseStep('step-package');
    document.getElementById('spa-preview').classList.add('hidden');
    document.querySelectorAll('.spa-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('#step-spa .option, #step-room .option, #step-time .option, #step-duration .option').forEach(o => o.classList.remove('selected'));
    document.getElementById('step-spa').classList.add('hidden');
    document.getElementById('step-room').classList.add('hidden');
    document.getElementById('step-time').classList.add('hidden');
    document.getElementById('step-duration').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    const seraLabel = document.getElementById('sera-label');
    seraLabel.textContent = currentLang === 'en' ? 'Afternoon' : 'Pomeriggio';
    if (type === 'camera-cena') {
        document.getElementById('room-step-number').textContent = '2';
        document.getElementById('price-matrimoniale').textContent = '€380';
        document.getElementById('price-wellness').textContent = '€830';
        document.getElementById('step-room').classList.remove('hidden');
        smoothScrollTo('step-room');
    } else {
        if (type === 'camera-spa-cena') {
            selection.room = 'matrimoniale';
        }
        document.getElementById('step-spa').classList.remove('hidden');
        document.getElementById('time-step-number').textContent = '3';
        document.getElementById('duration-step-number').textContent = '4';
        smoothScrollTo('step-spa');
    }
}

function selectRoom(room) {
    selection.room = room;
    document.querySelectorAll('#step-room .option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`[data-room="${room}"]`).classList.add('selected');
    collapseStep('step-room');
    if (selection.type === 'camera-cena') {
        showResult();
        smoothScrollTo('result');
    } else {
        document.getElementById('step-time').classList.remove('hidden');
        document.getElementById('step-duration').classList.add('hidden');
        document.getElementById('result').classList.add('hidden');
        document.querySelectorAll('#step-time .option, #step-duration .option').forEach(o => o.classList.remove('selected'));
        smoothScrollTo('step-time');
    }
}

function selectTime(time) {
    const hadDuration = selection.duration;
    selection.time = time;
    document.querySelectorAll('#step-time .option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`[data-time="${time}"]`).classList.add('selected');
    collapseStep('step-time');
    if (hadDuration) {
        document.getElementById('step-duration').classList.remove('hidden');
        document.getElementById('step-duration').classList.add('collapsed');
        document.querySelector(`[data-duration="${hadDuration}"]`).classList.add('selected');
        showResult();
    } else {
        selection.duration = null;
        document.getElementById('step-duration').classList.remove('hidden');
        document.getElementById('result').classList.add('hidden');
        document.querySelectorAll('#step-duration .option').forEach(o => o.classList.remove('selected'));
        smoothScrollTo('step-duration');
    }
}

function selectDuration(duration) {
    selection.duration = duration;
    document.querySelectorAll('#step-duration .option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`[data-duration="${duration}"]`).classList.add('selected');
    collapseStep('step-duration');
    showResult();
}

function collapseStep(stepId) {
    const step = document.getElementById(stepId);
    if (step) {
        step.classList.add('collapsed');
        step.classList.remove('active');
    }
}

function expandStep(stepId) {
    const step = document.getElementById(stepId);
    if (step) {
        step.classList.remove('collapsed');
        step.classList.add('active');
    }
}

function goBackToStep(stepId) {
    if (stepId === 'step-package') {
        reopenPackageStep();
    } else if (stepId === 'step-spa') {
        changeSpa();
    } else if (stepId === 'step-room') {
        selection.room = null;
        selection.time = null;
        selection.duration = null;
        document.querySelectorAll('#step-room .option, #step-time .option, #step-duration .option').forEach(o => o.classList.remove('selected'));
        expandStep('step-room');
        document.getElementById('step-time').classList.add('hidden');
        document.getElementById('step-duration').classList.add('hidden');
        document.getElementById('result').classList.add('hidden');
    } else if (stepId === 'step-time') {
        selection.time = null;
        selection.duration = null;
        document.querySelectorAll('#step-time .option, #step-duration .option').forEach(o => o.classList.remove('selected'));
        expandStep('step-time');
        document.getElementById('step-duration').classList.add('hidden');
        document.getElementById('result').classList.add('hidden');
    } else if (stepId === 'step-duration') {
        selection.duration = null;
        document.querySelectorAll('#step-duration .option').forEach(o => o.classList.remove('selected'));
        expandStep('step-duration');
        document.getElementById('result').classList.add('hidden');
    }
}

function smoothScrollTo(elementId) {
    setTimeout(() => {
        document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function createHearts() {
    const container = document.getElementById('modal-hearts');
    container.innerHTML = '';
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💘', '💝'];
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (3 + Math.random() * 2) + 's';
        container.appendChild(heart);
    }
}

function showResult() {
    let price;
    if (selection.type === 'camera-cena') {
        price = prices['camera-cena'][selection.room];
    } else {
        price = prices[selection.type][selection.spa][selection.time][selection.duration];
    }

    const typeNames = {
        'spa': currentLang === 'en' ? 'SPA Only' : 'Solo SPA',
        'spa-cena': currentLang === 'en' ? 'SPA + Dinner' : 'SPA + Cena',
        'camera-cena': currentLang === 'en' ? 'Room + Dinner' : 'Camera + Cena',
        'camera-spa-cena': currentLang === 'en' ? 'SPA + Room + Dinner' : 'SPA + Camera + Cena'
    };

    const spaNames = {
        'maya': 'SPA Maya (110 mq)',
        'moon': 'SPA Moon (100 mq)',
        'domus': 'SPA Domus (70 mq)'
    };

    const timeNames = {
        'mattina': currentLang === 'en' ? 'Morning (07:00–16:00)' : 'Mattina (07:00–16:00)',
        'sera': currentLang === 'en' ? 'Afternoon (16:00–23:00)' : 'Pomeriggio (16:00–23:00)',
        'notte': currentLang === 'en' ? 'Night (23:00–07:00)' : 'Notte (23:00–07:00)'
    };

    const durationNames = {
        '1h': currentLang === 'en' ? '1 hour' : '1 ora',
        '1.5h': currentLang === 'en' ? '1 hour and a half' : '1 ora e mezza'
    };

    const roomNames = {
        'matrimoniale': currentLang === 'en' ? 'Double Room' : 'Camera Matrimoniale',
        'wellness': 'Wellness Suite'
    };

    const labelPackage = currentLang === 'en' ? 'Package' : 'Pacchetto';
    const labelTime = currentLang === 'en' ? 'Time' : 'Orario';
    const labelDuration = currentLang === 'en' ? 'Duration' : 'Durata';
    const labelRoom = currentLang === 'en' ? 'Room' : 'Camera';

    let modalSummaryHTML = `<div class="modal-detail-item"><span>${labelPackage}</span><span>${typeNames[selection.type]}</span></div>`;
    if (selection.spa) {
        modalSummaryHTML += `<div class="modal-detail-item"><span>SPA</span><span>${spaNames[selection.spa]}</span></div>`;
    }
    if (selection.room) {
        modalSummaryHTML += `<div class="modal-detail-item"><span>${labelRoom}</span><span>${roomNames[selection.room]}</span></div>`;
    }
    if (selection.time) {
        modalSummaryHTML += `<div class="modal-detail-item"><span>${labelTime}</span><span>${timeNames[selection.time]}</span></div>`;
    }
    if (selection.duration) {
        modalSummaryHTML += `<div class="modal-detail-item"><span>${labelDuration}</span><span>${durationNames[selection.duration]}</span></div>`;
    }

    let includesItems = [];

        if (selection.type !== 'camera-cena' && selection.spa) {
        const spaText = currentLang === 'en'
            ? `<b>SPA Access</b> — ${spaNames[selection.spa]}<br><span class="includes-detail">${timeNames[selection.time]}, ${durationNames[selection.duration]}</span>`
            : `<b>Accesso SPA</b> — ${spaNames[selection.spa]}<br><span class="includes-detail">${timeNames[selection.time]}, ${durationNames[selection.duration]}</span>`;
        includesItems.push(spaText);
    }

        if (selection.type === 'spa-cena' || selection.type === 'camera-cena' || selection.type === 'camera-spa-cena') {
        const dinnerText = currentLang === 'en'
            ? '<b>Dinner</b> — "Promise of Love" at Ramo Bistrot<br><span class="includes-detail">6-course tasting menu</span>'
            : '<b>Cena</b> — "Promessa d\'Amore" al Ramo Bistrot<br><span class="includes-detail">Menu degustazione 6 portate</span>';
        includesItems.push(dinnerText);
    }

        if (selection.type === 'camera-cena' || selection.type === 'camera-spa-cena') {
        const roomLabel = selection.room === 'wellness'
            ? 'Wellness Suite'
            : (currentLang === 'en' ? 'Double Room' : 'Camera Matrimoniale');
        const roomText = currentLang === 'en'
            ? `<b>Room</b> — ${roomLabel}<br><span class="includes-detail">Breakfast included</span>`
            : `<b>Camera</b> — ${roomLabel}<br><span class="includes-detail">Colazione inclusa</span>`;
        includesItems.push(roomText);
    }

        const garageText = currentLang === 'en'
        ? '<b>Garage</b><br><span class="includes-detail">Complimentary parking</span>'
        : '<b>Garage</b><br><span class="includes-detail">Parcheggio incluso</span>';
    includesItems.push(garageText);

        const alwaysIncluded = currentLang === 'en'
        ? '<b>Always Included</b><br><span class="includes-detail">Bathrobe, towel, slippers, soft drink, chocolates, prosecco</span>'
        : '<b>Sempre Incluso</b><br><span class="includes-detail">Accappatoio, telo, ciabattine, soft drink, cioccolatini, prosecco</span>';
    includesItems.push(alwaysIncluded);

    const includesTitle = currentLang === 'en' ? 'Package includes' : 'Il pacchetto include';
    const includesHTML = `<div class="includes-title">${includesTitle}</div><div class="includes-list">${includesItems.map(item => `<div class="includes-item">${item}</div>`).join('')}</div>`;

    document.getElementById('total-price').textContent = `€ ${price}`;
    document.getElementById('includes').innerHTML = includesHTML;
    document.getElementById('result').classList.remove('hidden');
    createResultConfetti();

    setTimeout(() => {
        openModal();
    }, 600);

    const whatsappText = generateWhatsAppMessage(price);
    const whatsappUrl = `https://wa.me/3387979951?text=${encodeURIComponent(whatsappText)}`;
    document.getElementById('whatsapp-link').href = whatsappUrl;
    document.getElementById('modal-whatsapp').href = whatsappUrl;

    const emailData = generateEmailMessage(price);
    const emailUrl = `mailto:info@trilussapalacehotel.it?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    document.getElementById('email-link').href = emailUrl;
    document.getElementById('modal-email').href = emailUrl;

    document.getElementById('modal-price').textContent = `€ ${price}`;

    const modalIncludesHTML = `<div class="modal-includes-list">${includesItems.map(item => `<div class="modal-includes-item">${item}</div>`).join('')}</div>`;
    document.getElementById('modal-summary').innerHTML = modalIncludesHTML;

}

function openModal() {
    createHearts();
    createConfetti();
    document.getElementById('modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
    document.body.style.overflow = '';
    smoothScrollTo('result');
}

function generateWhatsAppMessage(price) {
    const typeNames = {
        'spa': currentLang === 'en' ? 'SPA Only' : 'Solo SPA',
        'spa-cena': currentLang === 'en' ? 'SPA + Dinner' : 'SPA + Cena',
        'camera-cena': currentLang === 'en' ? 'Room + Dinner' : 'Camera + Cena',
        'camera-spa-cena': currentLang === 'en' ? 'SPA + Room + Dinner' : 'SPA + Camera + Cena'
    };
    const spaNames = { 'maya': 'SPA Maya (110 mq)', 'moon': 'SPA Moon (100 mq)', 'domus': 'SPA Domus (70 mq)' };
    const timeNames = {
        'mattina': currentLang === 'en' ? 'Morning (10:00-16:00)' : 'Mattina (10:00-16:00)',
        'sera': currentLang === 'en' ? 'Afternoon (16:00-23:00)' : 'Pomeriggio (16:00-23:00)',
        'notte': currentLang === 'en' ? 'Night (23:00-02:00)' : 'Notte (23:00-02:00)'
    };
    const durationNames = { '1h': currentLang === 'en' ? '1 hour' : '1 ora', '1.5h': currentLang === 'en' ? '1h 30min' : '1h 30min' };
    const roomNames = { 'matrimoniale': currentLang === 'en' ? 'Double Room' : 'Camera Matrimoniale', 'wellness': 'Wellness Suite' };

    let message = currentLang === 'en'
        ? `Hi! I'd like to book for Valentine's Day 2026:\n\n`
        : `Ciao! Vorrei prenotare per San Valentino 2026:\n\n`;

    message += `📦 ${currentLang === 'en' ? 'PACKAGE' : 'PACCHETTO'}: ${typeNames[selection.type]}\n\n`;

        if (selection.spa) {
        message += currentLang === 'en' ? '🧖 SPA ACCESS\n' : '🧖 ACCESSO SPA\n';
        message += `• ${spaNames[selection.spa]}\n`;
        message += `• ${currentLang === 'en' ? 'Time' : 'Orario'}: ${timeNames[selection.time]}\n`;
        message += `• ${currentLang === 'en' ? 'Duration' : 'Durata'}: ${durationNames[selection.duration]}\n\n`;
    }

        if (selection.type === 'spa-cena' || selection.type === 'camera-cena' || selection.type === 'camera-spa-cena') {
        message += currentLang === 'en' ? '🍽️ DINNER\n' : '🍽️ CENA\n';
        message += currentLang === 'en'
            ? '• "Promise of Love" at Ramo Bistrot\n• 6-course tasting menu\n\n'
            : '• "Promessa d\'Amore" al Ramo Bistrot\n• Menu degustazione 6 portate\n\n';
    }

        if (selection.room) {
        message += currentLang === 'en' ? '🛏️ ROOM\n' : '🛏️ CAMERA\n';
        message += `• ${roomNames[selection.room]}\n`;
        message += currentLang === 'en' ? '• Breakfast included\n\n' : '• Colazione inclusa\n\n';
    }

        message += currentLang === 'en' ? '🅿️ GARAGE\n' : '🅿️ GARAGE\n';
    message += currentLang === 'en' ? '• Complimentary parking\n\n' : '• Parcheggio incluso\n\n';

        message += currentLang === 'en' ? '🎁 ALWAYS INCLUDED\n' : '🎁 SEMPRE INCLUSO\n';
    message += currentLang === 'en'
        ? '• Bathrobe, towel, slippers, soft drink, chocolates, prosecco\n\n'
        : '• Accappatoio, telo, ciabattine, soft drink, cioccolatini, prosecco\n\n';

    message += `💰 ${currentLang === 'en' ? 'TOTAL' : 'TOTALE'}: € ${price}\n\n`;
    message += currentLang === 'en' ? 'Thank you!' : 'Grazie!';
    return message;
}

function generateEmailMessage(price) {
    const typeNames = {
        'spa': currentLang === 'en' ? 'SPA Only' : 'Solo SPA',
        'spa-cena': currentLang === 'en' ? 'SPA + Dinner' : 'SPA + Cena',
        'camera-cena': currentLang === 'en' ? 'Room + Dinner' : 'Camera + Cena',
        'camera-spa-cena': currentLang === 'en' ? 'SPA + Room + Dinner' : 'SPA + Camera + Cena'
    };
    const spaNames = { 'maya': 'SPA Maya', 'moon': 'SPA Moon', 'domus': 'SPA Domus' };
    const timeNames = {
        'mattina': currentLang === 'en' ? 'Morning' : 'Mattina',
        'sera': currentLang === 'en' ? 'Afternoon' : 'Pomeriggio',
        'notte': currentLang === 'en' ? 'Night' : 'Notte'
    };
    const durationNames = { '1h': currentLang === 'en' ? '1 hour' : '1 ora', '1.5h': currentLang === 'en' ? '1 hour and a half' : '1 ora e mezza' };
    const roomNames = { 'matrimoniale': currentLang === 'en' ? 'Double Room' : 'Camera Matrimoniale', 'wellness': 'Wellness Suite' };

    const subject = currentLang === 'en'
        ? `Valentine's Day 2026 Booking - ${typeNames[selection.type]}`
        : `Prenotazione San Valentino 2026 - ${typeNames[selection.type]}`;

    let body = currentLang === 'en' ? `Hello,\n\nI'd like to book for Valentine's Day 2026:\n\n` : `Buongiorno,\n\nVorrei prenotare per San Valentino 2026:\n\n`;
    body += `${currentLang === 'en' ? 'Package' : 'Pacchetto'}: ${typeNames[selection.type]}\n`;
    if (selection.spa) body += `SPA: ${spaNames[selection.spa]}\n`;
    if (selection.room) body += `${currentLang === 'en' ? 'Room' : 'Camera'}: ${roomNames[selection.room]}\n`;
    if (selection.time) body += `${currentLang === 'en' ? 'Time' : 'Orario'}: ${timeNames[selection.time]}\n`;
    if (selection.duration) body += `${currentLang === 'en' ? 'Duration' : 'Durata'}: ${durationNames[selection.duration]}\n`;
    body += `\n${currentLang === 'en' ? 'Total' : 'Totale'}: €${price}\n\n`;
    body += currentLang === 'en' ? 'Looking forward to your confirmation.\n\nBest regards.' : 'In attesa di conferma, porgo cordiali saluti.';
    return { subject, body };
}

function reset() {
    selection = { spa: null, type: null, room: null, time: null, duration: null };
    document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll('.spa-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.step').forEach(s => s.classList.remove('collapsed'));
    document.getElementById('spa-preview').classList.add('hidden');
    document.getElementById('step-package').classList.remove('hidden');
    document.getElementById('step-spa').classList.add('hidden');
    document.getElementById('step-room').classList.add('hidden');
    document.getElementById('step-time').classList.add('hidden');
    document.getElementById('step-duration').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('modal').classList.remove('show');
    document.body.style.overflow = '';
    smoothScrollTo('configurator-section');
}

function updateCountdown() {
    const valentinesDay = new Date('2026-02-14T00:00:00');
    const now = new Date();
    const diff = valentinesDay - now;
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
        document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
    }
}

function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;
    const hearts = ['♥', '❤', '💕', '💗', '💖'];

    for (let i = 0; i < 25; i++) {
        createHeart(container, hearts, true);
    }

    setInterval(() => {
        if (container.children.length < 35) {
            createHeart(container, hearts, false);
        }
    }, 800);
}

function createHeart(container, hearts, initial) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = initial ? (Math.random() * 100 + '%') : '110%';
    heart.style.animationDelay = initial ? (Math.random() * 8 + 's') : '0s';
    heart.style.fontSize = (12 + Math.random() * 20) + 'px';
    heart.style.opacity = 0.3 + Math.random() * 0.5;
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);
}

function createResultConfetti() {
    const result = document.getElementById('result');
    if (!result) return;
    const existing = result.querySelector('.result-confetti-container');
    if (existing) existing.remove();

    const container = document.createElement('div');
    container.className = 'result-confetti-container';
    container.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none;overflow:hidden;z-index:1;';

    const emojis = ['🎉', '✨', '💖', '🌟', '💕', '❤️', '🎊'];
    for (let i = 0; i < 25; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.cssText = `
            position: absolute;
            font-size: ${12 + Math.random() * 16}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0;
            animation: resultConfettiBurst ${1 + Math.random()}s ${Math.random() * 0.5}s ease-out forwards;
        `;
        container.appendChild(confetti);
    }
    result.appendChild(container);
    setTimeout(() => container.remove(), 3000);
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    container.innerHTML = '';
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💘', '💝', '🌹', '✨'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti confetti-heart';
        confetti.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(confetti);
    }
    setTimeout(() => { container.innerHTML = ''; }, 5000);
}

function initScrollAnimations() {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('scroll-fade-in-stagger')) {
                    const siblings = entry.target.parentElement.querySelectorAll('.scroll-fade-in-stagger');
                    const idx = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.transitionDelay = (idx * 0.15) + 's';
                }
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-stagger').forEach(el => {
        scrollObserver.observe(el);
    });
}

function initCardTiltEffect() {
    document.querySelectorAll('.spa-card').forEach(card => {
        const glow = card.querySelector('.spa-card-glow');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            if (glow) {
                glow.style.setProperty('--glow-x', (x / rect.width) * 100 + '%');
                glow.style.setProperty('--glow-y', (y / rect.height) * 100 + '%');
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

function initRippleEffect() {
    document.querySelectorAll('.ripple-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

function initParallax() {
    window.addEventListener('scroll', () => {
        const hero = document.getElementById('hero-content');
        if (hero) {
            hero.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
        }
    });
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    setLanguage(currentLang);
    createFloatingHearts();
    initScrollAnimations();
    initCardTiltEffect();
    initRippleEffect();
    initParallax();
    setInterval(updateCountdown, 1000);
    updateCountdown();

    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });

    document.addEventListener('click', function(e) {
        const stepHeader = e.target.closest('.step.collapsed .step-header');
        if (stepHeader) {
            const step = stepHeader.closest('.step');
            goBackToStep(step.id);
        }
    });

});
