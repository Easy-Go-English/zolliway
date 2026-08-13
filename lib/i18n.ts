export const langs = ["it", "de", "en"] as const;
export type Lang = (typeof langs)[number];

/* Rich-text segment: plain string, italic-bronze {em}, or bold {b} */
export type Seg = string | { em: string } | { b: string };

const it = {
  meta: {
    title: "Zolliway · Agenzia del lavoro · Chiasso, Ticino",
    description:
      "Ricerca e selezione del personale etica e responsabile a Chiasso, Ticino. Collaboratore e datore di lavoro sono preziosi.",
  },
  nav: {
    home: "Home",
    about: "Chi siamo",
    services: "Servizi per le aziende",
    jobs: "Offerte di lavoro",
    reviews: "Recensioni",
    contact: "Contatto",
    impressum: "Impressum",
    privacy: "Protezione dei dati",
  },
  common: {
    more: "Scopri di più",
    photo: "fotografia",
  },
  home: {
    kicker: "Siamo qui per voi",
    h1: ["State cercando il ", { em: "candidato ideale" }, "?"] as Seg[],
    heroSerif: "Scopri i nostri servizi nella gestione delle Risorse Umane",
    heroText:
      "Metteteci alla prova! I nostri servizi sono innovativi, responsabili e su misura delle vostre esigenze.",
    heroBtn: "Voglio saperne di più",
    heroPhoto: "colloquio / ufficio",
    heroCaption: "Chiasso, Ticino",
    pillars: [
      {
        t: "Dove ci distinguiamo",
        d: "Per noi il candidato e l'opportunità professionale sono preziosi. Vogliamo dimostrare una spiccata etica professionale.",
      },
      {
        t: "Un nuovo approccio",
        d: "Per offrire un servizio su misura offriamo tre tipologie di collaborazione",
      },
      {
        t: "Impegno sociale",
        d: "In collaborazione con l'associazione Swiss Ability vogliamo dare il nostro sostegno concreto a chi è nel bisogno",
      },
    ],
    band: {
      kicker: "Siamo qui per te",
      h2: ["Cerchi una ", { em: "nuova sfida" }, " professionale?"] as Seg[],
      sub: "Valuta le nostre offerte di lavoro",
      text: "Consulta le nostre offerte di lavoro e inviaci il tuo curriculum vitae. Saremo lieti di verificare se il tuo percorso professionale corrisponde con una nostra ricerca attiva.",
      precious: "Sei prezioso per noi!",
      cta: "Alle offerte di lavoro",
    },
    distinguish: {
      title: ["Vogliamo ", { em: "distinguerci" }] as Seg[],
      lede: "Offriamo le migliori offerte di lavoro in Ticino e Svizzera adottando un sistema improntato al reclutamento etico",
      note: "Poniamo l'attenzione sui due protagonisti del mercato del lavoro",
      employerPhoto: "datore di lavoro",
      employerH: ["Il datore di lavoro ", { em: "è prezioso" }] as Seg[],
      employerP:
        "Offre al candidato la possibilità di esercitare la professione e di provvedere al proprio sostentamento come a quello della propria famiglia.",
      employeePhoto: "dipendente",
      employeeH: ["Il dipendente ", { em: "è prezioso" }] as Seg[],
      employeeP:
        "Mette a disposizione del datore di lavoro il proprio tempo, le proprie capacità, la propria conoscenza ed esperienza.",
    },
    approach: {
      title: ["Un approccio ", { em: "vincente" }] as Seg[],
      tagline: "Su misura — Efficiente — Semplice",
      steps: [
        "I nostri servizi o le ricerche di personale si avviano solo sulla base di un mandato.",
        "Al fine di comprendere totalmente le vostre esigenze e presentare unicamente candidati allineati il primo passo di ogni nostra ricerca è un briefing.",
        "La nostra struttura agile ci permette di adottare costantemente gli strumenti più moderni per rispondere efficacemente alle vostre richieste",
      ],
    },
    social: {
      title: ["Impegno ", { em: "sociale" }] as Seg[],
      quote:
        "“Trattate le persone come se fossero ciò che dovrebbero essere e aiutatele a diventare ciò che sono capaci di essere.”",
      quoteBy: "— Goethe",
      whyH: "Un impegno sociale, perché?",
      whyP: "Sin dal principio della costituzione di Zolliway per il management era chiaro che in base alle nostre capacità e disponibilità, avremmo voluto essere d'aiuto a chi è nel bisogno. Attraverso la nostra professione siamo in grado di sostenere datori di lavoro nella ricerca di nuovi talenti, e con quello che l'attività ci permette di generare, siamo felici di aiutare in modo mirato persone che sono nel bisogno. Siamo consapevoli di non poter cambiare il mondo, ma se ognuno nel suo piccolo e secondo le proprie possibilità e capacità fosse disposto ad aiutare, l'impatto sarebbe enorme. Vogliamo fare la nostra parte!",
      chosenH: "Abbiamo scelto",
      chosenLogo: "logo Swiss Ability",
      chosenP:
        "Conosciamo da molti anni Roberto Agosta, direttore esecutivo di Swiss Ability. Ci lega l'apprezzamento e la fiducia reciproca. Swiss Ability è un'associazione non profit con sede a Lugano, Ticino. Si dedica alla promozione e al supporto di iniziative di beneficenza e di interesse pubblico, concentrandosi principalmente sulla riabilitazione fisica e lo sviluppo di infrastrutture comunitarie, sociali ed educative. L'obiettivo dell'associazione è quello di rendere le persone beneficiarie autosufficienti, consentendo loro di vivere una vita dignitosa.",
      helpH: "Come possiamo essere d'aiuto?",
      helpP:
        "Tra i molti progetti che Swiss Ability gestisce ed avvia con molto impegno, ci siamo resi conto di poter fare la differenza sostenendo l'Nkolo Othopaedics Rehabilitation Services (NORS), sistema riabilitativo in Uganda, ridonando mobilità e abilità alle persone con disabilità del distretto di Luweero. Si tratta di un centro riabilitativo che offre una gamma di servizi riabilitativi a prezzi agevolati a più di 600 pazienti all'anno e che produce più di 300 protesi e ortesi ogni anno.",
      infoH: "Maggiori informazioni?",
      infoP:
        "Crediamo sia corretto informare a proposito di questo impegno perché l'aiuto sociale rappresenta uno dei nostri pilastri. Non vogliamo tuttavia utilizzare questa informazione come pubblicità. Per questo motivo non troverai rapporti ed ulteriori informazioni sul nostro sito. Se sei interessato, puoi trovare rapporti dettagliati sul sito di Swiss Ability premendo il pulsante qui di seguito. Vogliamo incoraggiare e sensibilizzare le aziende a non chiudere gli occhi di fronte ai problemi attuali.",
      infoCta: "Swiss Ability & Zolliway",
    },
    contact: {
      title: "Contattaci",
      note: "Riceviamo su appuntamento, non siamo aperti al pubblico",
      formCta: "Al modulo di contatto",
    },
  },
  contactShared: {
    phoneH: "Reperibilità telefonica",
    weekdays: "Lunedì – Venerdì",
    hours: "08:00-12:00 / 13:30-18:00",
    saturday: "Sabato",
    sunday: "Domenica",
    closed: "chiuso",
    contactsH: "Contatti",
    addressLabel: "Indirizzo",
    address: "Zolliway, via Dante Alighieri 7, 6830 Chiasso",
    telLabel: "Tel Ufficio",
    tel: "+41 (0)91 224 68 88",
  },
  services: {
    metaTitle: "Servizi per le Aziende",
    metaDesc:
      "Ricerca e selezione, executive search, assessment e newplacement: servizi HR etici e su misura per le aziende in Ticino e Svizzera.",
    kicker: "Servizi per le aziende",
    h1: "Introduzione",
    lede: [
      { b: "Responsabilità" },
      " ed ",
      { b: "etica" },
      " nel lavoro sono i pilastri su cui si formano i nostri servizi a supporto delle Risorse Umane aziendali quali:",
    ] as Seg[],
    list: "Ricerca e Selezione — Executive Search — Headhunting — Assessment — Test e Analisi Motivazionali e Comportamentali — Newplacement",
    values:
      "Con i valori umani al centro rappresentiamo un supporto alle risorse umane efficiente e qualitativo.",
    photo: "consulenza HR",
    longP:
      "I servizi a diretto contatto con le persone devono vantare un'attenzione, un rispetto ed una responsabilità spiccata. Il nostro lavoro è la nostra passione e ci dedichiamo alle persone coinvolte considerando oltre alla situazione professionale, tutti gli aspetti personali che possono avere un impatto sulla soddisfazione del candidato e del datore di lavoro: situazione famigliare, desideri professionali, impegni extraprofessionali, hobby, impatto psicologico, rischi e vantaggi di un'eventuale nuova sfida.",
    sectionTitle: ["Servizi per le ", { em: "risorse umane" }] as Seg[],
    rows: [
      {
        t: "Ricerca e Selezione",
        a: "Selezioniamo i migliori candidati qualificati e non qualificati per la vostra azienda",
        b: "Due modalità di collaborazione, tra cui la Success Fee che non prevede costi iniziali",
      },
      {
        t: "Test e Analisi",
        a: "In fase di selezione, riorganizzazione, sviluppo, teamwork o sales performance",
        b: "Offriamo i più moderni strumenti di Test e Analisi online a supporto dei vostri progetti",
      },
      {
        t: "Executive Search",
        a: "Una ricerca diretta mirata all'inserimento di nuovi quadri e dirigenti",
        b: "Moderni strumenti di headhunting ci permettono di essere sempre un passo avanti",
      },
      {
        t: "Newplacement",
        sub: "Outplacement",
        a: "Servizio dedicato al candidato in uscita, supporto concreto al ricollocamento",
        b: "Supportiamo il candidato in tutte le attività relative alla ricerca di lavoro",
      },
      {
        t: "Assessment",
        a: "Ideati per ottimizzare processi di selezione e di riorganizzazione",
        b: "Identifichiamo la performance e il comportamento dei candidati",
      },
      {
        t: "Recensioni",
        a: "Uno spazio dedicato alle recensioni di clienti e candidati garantisce la trasparenza",
        b: "Scopri il nostro approccio direttamente da chi ci ha messi alla prova",
      },
    ] as { t: string; sub?: string; a: string; b: string }[],
    banner: [
      "Collaboratore e datore di lavoro sono ",
      { em: "preziosi" },
    ] as Seg[],
  },
  about: {
    metaTitle: "Chi Siamo",
    metaDesc:
      "Zolliway è una società di ricerca e selezione del personale etica e responsabile con sede a Chiasso, Ticino.",
    kicker: "Chi siamo",
    h1: ["La selezione del personale, con ", { em: "coscienza" }, "."] as Seg[],
    lede: "Le organizzazioni valutano con attenzione etica materiali e processi produttivi. Noi applichiamo lo stesso rigore alla risorsa più importante: le persone.",
    p1: "Ogni candidatura è una storia: situazione familiare, aspirazioni di carriera, impatto psicologico di un cambiamento, compatibilità a lungo termine. Consideriamo tutti questi fattori, perché la soddisfazione di candidato e datore di lavoro nasce dallo stesso equilibrio.",
    p2: 'Ci posizioniamo come headhunter alla ricerca dell\'eccellenza: non presentiamo mai un profilo solo perché "corrisponde alla descrizione". Presentiamo persone che possono integrarsi nel team e restare.',
    method: [
      {
        t: "Ascoltare",
        d: "In un mondo che corre, l'ascolto attivo è un bene raro e prezioso. Partiamo sempre da qui: dalle vostre esigenze reali.",
      },
      {
        t: "Riflettere",
        d: "Analizziamo con onestà se possiamo soddisfare le aspettative e offrire un supporto concreto. Se non possiamo, lo diciamo.",
      },
      {
        t: "Agire",
        d: "Reclutamento mirato: qualifiche verificate, motivazione solida e personalità compatibili con il team, per collaborazioni durature.",
      },
    ],
    awardsTitle: [
      "Un impegno ",
      { em: "riconosciuto" },
      " in Svizzera e in Europa",
    ] as Seg[],
    awards: [
      {
        year: "2025",
        by: "Handelszeitung / Statista",
        title: "Migliori Executive Search & HR Service Provider della Svizzera",
      },
      {
        year: "2024",
        by: "Corporate Vision",
        title: "Ethical Recruitment Excellence Award",
      },
      {
        year: "2024",
        by: "Business Management Review",
        title: "Top 10 Preeminent Executive Search Service Providers in Europe",
      },
    ],
    refTitle: ["Le nostre ", { em: "referenze" }] as Seg[],
    refLede:
      "Oltre 22 aziende partner in tutta la Svizzera, con mandati che spaziano dai profili operativi all'executive search.",
    sectors: [
      "Industria manifatturiera",
      "Commercio al dettaglio",
      "Farmaceutica",
      "Sicurezza",
      "Servizi finanziari",
      "Logistica",
    ],
    refCta: "Come collaboriamo",
    socialTitle: [
      "Al fianco di Swiss Ability, ",
      { em: "in Uganda" },
      " e non solo.",
    ] as Seg[],
    socialKicker: "Impegno sociale",
    socialP:
      "Sosteniamo i servizi di riabilitazione ortopedica NKOLO in Uganda: protesi, fisioterapia e percorsi di reinserimento per persone con disabilità. Perché crediamo che il lavoro — e la dignità che porta con sé — debba essere possibile per tutti.",
    socialCta: "Il nostro impegno",
  },
  jobsPage: {
    metaTitle: "Offerte di Lavoro",
    metaDesc:
      "Posizioni fisse in Ticino e Svizzera: consulta le offerte di lavoro di Zolliway o invia una candidatura spontanea al nostro Talent Pool.",
    kicker: "Siamo qui per te",
    h1: ["Cerchi una ", { em: "nuova sfida" }, " professionale?"] as Seg[],
    serifLede: "Posizioni fisse, principalmente in Ticino",
    introText:
      "Chiediamo solo le informazioni strettamente necessarie e trattiamo ogni candidatura con la massima riservatezza.",
    sectionTitle: ["Posizioni ", { em: "aperte" }] as Seg[],
    activeLabel: "ricerche attive",
    details: "Vedi dettagli",
    talentKicker: "Talent Pool",
    talentH2: [
      "Nessuna posizione adatta? Invia una ",
      { em: "candidatura spontanea" },
    ] as Seg[],
    precious: "Sei prezioso per noi!",
    steps: [
      "Invia il tuo CV aggiornato via e-mail o tramite il modulo di contatto.",
      "Un consulente lo esamina personalmente entro pochi giorni lavorativi.",
      "Ti contattiamo solo per opportunità davvero in linea con il tuo percorso.",
    ],
    talentCta: "Invia il CV",
    resTitle: ["Prepara la tua ", { em: "candidatura" }] as Seg[],
    cvH: "Un CV curato",
    cvP: "Un curriculum chiaro e aggiornato è il tuo biglietto da visita: strumenti gratuiti come FlowCV aiutano a ottenere un risultato professionale in pochi minuti.",
    langH: "Le lingue contano",
    langP:
      "In Svizzera il tedesco e l'inglese aprono molte porte: investire in un corso di lingua è spesso il modo più rapido per ampliare le proprie opportunità.",
  },
  jobDetail: {
    back: "← Tutte le offerte",
    tasks: "Le sue mansioni",
    profile: "Il suo profilo",
    offer: "Cosa offriamo",
    ctaH: ["Ti riconosci in questo ", { em: "profilo" }, "?"] as Seg[],
    ctaP: (id: number) =>
      `Inviaci la tua candidatura indicando il Job ID ${id}. Trattiamo ogni dossier con la massima riservatezza e ti rispondiamo in tempi brevi.`,
    apply: "Candidati ora",
    other: "Altre posizioni",
  },
  reviewsPage: {
    metaTitle: "Recensioni",
    metaDesc:
      "184 recensioni verificate con una valutazione media di 4.9 su 5: le esperienze di candidati e aziende con Zolliway.",
    kicker: "Recensioni",
    h1: ["La fiducia si ", { em: "costruisce" }, ", non si dichiara."] as Seg[],
    stats: "4.9 su 5 · 184 recensioni verificate",
    introText:
      "Uno spazio dedicato alle recensioni di clienti e candidati garantisce la trasparenza. Scopri il nostro approccio direttamente da chi ci ha messi alla prova.",
    sectionTitle: ["Le voci di chi ci ha ", { em: "scelto" }] as Seg[],
    note: "Una selezione delle 184 recensioni raccolte da candidati e aziende.",
    ctaKicker: "La tua esperienza",
    ctaH2: [
      "Hai collaborato con noi? Condividi la tua ",
      { em: "recensione" },
    ] as Seg[],
    ctaP: "Ogni riscontro — positivo o critico — ci aiuta a migliorare il nostro servizio per candidati e aziende.",
    cta: "Scrivi una recensione",
  },
  contactPage: {
    metaTitle: "Contatto",
    metaDesc:
      "Contatta Zolliway: via Dante Alighieri 7, 6830 Chiasso. Telefono +41 91 224 68 88, lunedì–venerdì 08:00–12:00 / 13:30–18:00.",
    kicker: "Contatto",
    h1: ["Parliamone. ", { em: "Ascoltare" }, " è il nostro mestiere."] as Seg[],
    note: "Riceviamo su appuntamento, non siamo aperti al pubblico",
    formTitle: "Scriveteci",
    name: "Nome e cognome *",
    email: "E-mail *",
    phone: "Telefono",
    iam: "Sono *",
    select: "Seleziona…",
    company: "Un'azienda",
    candidate: "Un candidato / una candidata",
    message: "Messaggio *",
    msgPlaceholder:
      "Per le candidature: indica il Job ID della posizione, oppure scrivi «candidatura spontanea».",
    privacyPre: "Chiediamo solo le informazioni strettamente necessarie. I dati sono trattati secondo la nostra informativa sulla ",
    privacyLink: "protezione dei dati",
    privacyPost: ".",
    submit: "Invia il messaggio",
    reachH: "Come raggiungerci",
    station: "Stazione FFS",
    stationV: "250 m · 3 min a piedi",
    highway: "Uscita autostradale",
    highwayV: "350 m · 1 min in auto",
  },
  legal: {
    kicker: "Informazioni legali",
    impressumTitle: "Impressum",
    ownerH: "Titolare del sito",
    authH: "Autorizzazioni",
    authP:
      "Agenzia di collocamento privata autorizzata al collocamento in Svizzera ai sensi della Legge federale sul collocamento e il personale a prestito (LC).",
    liabilityH: "Esclusione di responsabilità",
    liabilityP:
      "I contenuti di questo sito sono redatti con la massima cura. Zolliway Sagl non garantisce tuttavia l'attualità, la correttezza o la completezza delle informazioni pubblicate e declina ogni responsabilità per i contenuti di siti esterni raggiungibili tramite link.",
    privacyTitle: "Protezione dei dati",
    privacySections: [
      {
        t: "Principi",
        p: "Trattiamo i dati personali in conformità alla Legge federale sulla protezione dei dati (LPD). Raccogliamo solo le informazioni strettamente necessarie allo svolgimento dei nostri mandati di ricerca e selezione.",
      },
      {
        t: "Dati dei candidati",
        p: "I curriculum e i dossier di candidatura sono trattati con la massima riservatezza. Nessun dossier viene trasmesso a un'azienda senza il consenso esplicito del candidato o della candidata.",
      },
      {
        t: "Dati delle aziende",
        p: "Le informazioni ricevute nell'ambito di un briefing o di un mandato sono utilizzate esclusivamente per l'esecuzione dell'incarico e non vengono condivise con terzi.",
      },
      {
        t: "Conservazione e diritti",
        p: "I dati sono conservati solo per il tempo necessario allo scopo del trattamento. In qualsiasi momento è possibile richiedere l'accesso, la rettifica o la cancellazione dei propri dati contattandoci ai recapiti indicati nell'impressum.",
      },
      {
        t: "Cookie e statistiche",
        p: "Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non vengono impiegati strumenti di tracciamento pubblicitario.",
      },
    ],
  },
};

export type Dict = typeof it;

const de: Dict = {
  meta: {
    title: "Zolliway · Personalvermittlung · Chiasso, Tessin",
    description:
      "Ethische und verantwortungsvolle Personalsuche und -selektion in Chiasso, Tessin. Mitarbeitende und Arbeitgeber sind wertvoll.",
  },
  nav: {
    home: "Home",
    about: "Über uns",
    services: "Für Unternehmen",
    jobs: "Stellenangebote",
    reviews: "Bewertungen",
    contact: "Kontakt",
    impressum: "Impressum",
    privacy: "Datenschutz",
  },
  common: {
    more: "Mehr erfahren",
    photo: "Fotografie",
  },
  home: {
    kicker: "Wir sind für Sie da",
    h1: ["Suchen Sie den ", { em: "idealen Kandidaten" }, "?"],
    heroSerif:
      "Entdecken Sie unsere Dienstleistungen im Bereich Human Resources",
    heroText:
      "Stellen Sie uns auf die Probe! Unsere Dienstleistungen sind innovativ, verantwortungsvoll und massgeschneidert auf Ihre Bedürfnisse.",
    heroBtn: "Mehr erfahren",
    heroPhoto: "Gespräch / Büro",
    heroCaption: "Chiasso, Tessin",
    pillars: [
      {
        t: "Was uns auszeichnet",
        d: "Für uns sind der Kandidat und die berufliche Chance wertvoll. Wir wollen eine ausgeprägte Berufsethik beweisen.",
      },
      {
        t: "Ein neuer Ansatz",
        d: "Für einen massgeschneiderten Service bieten wir drei Formen der Zusammenarbeit",
      },
      {
        t: "Soziales Engagement",
        d: "In Zusammenarbeit mit dem Verein Swiss Ability leisten wir konkrete Unterstützung für Menschen in Not",
      },
    ],
    band: {
      kicker: "Wir sind für dich da",
      h2: ["Suchst du eine ", { em: "neue berufliche" }, " Herausforderung?"],
      sub: "Entdecke unsere Stellenangebote",
      text: "Sieh dir unsere Stellenangebote an und sende uns deinen Lebenslauf. Gerne prüfen wir, ob dein beruflicher Werdegang mit einer unserer aktiven Suchen übereinstimmt.",
      precious: "Du bist wertvoll für uns!",
      cta: "Zu den Stellenangeboten",
    },
    distinguish: {
      title: ["Wir wollen uns ", { em: "abheben" }],
      lede: "Wir bieten die besten Stellen im Tessin und in der Schweiz — mit einem System, das auf ethischem Recruiting beruht",
      note: "Unser Augenmerk gilt den beiden Hauptakteuren des Arbeitsmarkts",
      employerPhoto: "Arbeitgeber",
      employerH: ["Der Arbeitgeber ", { em: "ist wertvoll" }],
      employerP:
        "Er bietet dem Kandidaten die Möglichkeit, seinen Beruf auszuüben und für den eigenen Lebensunterhalt sowie den seiner Familie zu sorgen.",
      employeePhoto: "Mitarbeitende",
      employeeH: ["Der Mitarbeitende ", { em: "ist wertvoll" }],
      employeeP:
        "Er stellt dem Arbeitgeber seine Zeit, seine Fähigkeiten, sein Wissen und seine Erfahrung zur Verfügung.",
    },
    approach: {
      title: ["Ein ", { em: "erfolgreicher" }, " Ansatz"],
      tagline: "Massgeschneidert — Effizient — Unkompliziert",
      steps: [
        "Unsere Dienstleistungen und Personalsuchen starten ausschliesslich auf der Grundlage eines Mandats.",
        "Um Ihre Bedürfnisse vollständig zu verstehen und nur passende Kandidaten zu präsentieren, ist der erste Schritt jeder Suche ein Briefing.",
        "Unsere agile Struktur erlaubt es uns, stets die modernsten Instrumente einzusetzen, um Ihre Anfragen wirksam zu beantworten.",
      ],
    },
    social: {
      title: ["Soziales ", { em: "Engagement" }],
      quote:
        "“Behandle die Menschen so, als wären sie, was sie sein sollten, und du hilfst ihnen zu werden, was sie sein können.”",
      quoteBy: "— Goethe",
      whyH: "Warum ein soziales Engagement?",
      whyP: "Seit der Gründung von Zolliway war für das Management klar, dass wir im Rahmen unserer Fähigkeiten und Möglichkeiten Menschen in Not helfen wollen. Durch unseren Beruf können wir Arbeitgeber bei der Suche nach neuen Talenten unterstützen — und mit dem, was unsere Tätigkeit uns ermöglicht, helfen wir gezielt Menschen, die in Not sind. Wir sind uns bewusst, dass wir die Welt nicht verändern können. Aber wenn jeder im Kleinen und nach seinen Möglichkeiten zu helfen bereit wäre, wäre die Wirkung enorm. Wir wollen unseren Teil dazu beitragen!",
      chosenH: "Unsere Wahl",
      chosenLogo: "Logo Swiss Ability",
      chosenP:
        "Wir kennen Roberto Agosta, den Geschäftsführer von Swiss Ability, seit vielen Jahren. Uns verbinden gegenseitige Wertschätzung und Vertrauen. Swiss Ability ist ein gemeinnütziger Verein mit Sitz in Lugano, Tessin. Er widmet sich der Förderung und Unterstützung wohltätiger und gemeinnütziger Initiativen, mit Schwerpunkt auf physischer Rehabilitation und dem Aufbau kommunaler, sozialer und schulischer Infrastrukturen. Ziel des Vereins ist es, die begünstigten Menschen selbständig zu machen und ihnen ein würdevolles Leben zu ermöglichen.",
      helpH: "Wie können wir helfen?",
      helpP:
        "Unter den vielen Projekten, die Swiss Ability mit grossem Einsatz betreut und lanciert, haben wir erkannt, dass wir mit der Unterstützung der Nkolo Orthopaedics Rehabilitation Services (NORS) einen Unterschied machen können — ein Rehabilitationssystem in Uganda, das Menschen mit Behinderungen im Distrikt Luweero Mobilität und Fähigkeiten zurückgibt. Das Rehabilitationszentrum bietet jährlich über 600 Patientinnen und Patienten eine Reihe von Leistungen zu vergünstigten Preisen an und stellt jedes Jahr mehr als 300 Prothesen und Orthesen her.",
      infoH: "Mehr Informationen?",
      infoP:
        "Wir halten es für richtig, über dieses Engagement zu informieren, denn soziale Hilfe ist einer unserer Pfeiler. Wir wollen diese Information jedoch nicht als Werbung nutzen. Deshalb findest du auf unserer Website keine Berichte und weiteren Informationen. Bei Interesse findest du detaillierte Berichte auf der Website von Swiss Ability über den folgenden Button. Wir möchten Unternehmen ermutigen und sensibilisieren, die Augen vor den aktuellen Problemen nicht zu verschliessen.",
      infoCta: "Swiss Ability & Zolliway",
    },
    contact: {
      title: "Kontakt",
      note: "Termine nur nach Vereinbarung — kein offener Publikumsverkehr",
      formCta: "Zum Kontaktformular",
    },
  },
  contactShared: {
    phoneH: "Telefonische Erreichbarkeit",
    weekdays: "Montag – Freitag",
    hours: "08:00-12:00 / 13:30-18:00",
    saturday: "Samstag",
    sunday: "Sonntag",
    closed: "geschlossen",
    contactsH: "Kontakt",
    addressLabel: "Adresse",
    address: "Zolliway, Via Dante Alighieri 7, 6830 Chiasso",
    telLabel: "Tel. Büro",
    tel: "+41 (0)91 224 68 88",
  },
  services: {
    metaTitle: "Dienstleistungen für Unternehmen",
    metaDesc:
      "Personalsuche und -selektion, Executive Search, Assessment und Newplacement: ethische, massgeschneiderte HR-Dienstleistungen für Unternehmen im Tessin und in der Schweiz.",
    kicker: "Dienstleistungen für Unternehmen",
    h1: "Einführung",
    lede: [
      { b: "Verantwortung" },
      " und ",
      { b: "Ethik" },
      " in der Arbeit sind die Pfeiler, auf denen unsere Dienstleistungen zur Unterstützung der Human Resources aufbauen:",
    ],
    list: "Personalsuche und -selektion — Executive Search — Headhunting — Assessment — Motivations- und Verhaltensanalysen — Newplacement",
    values:
      "Mit den menschlichen Werten im Zentrum sind wir eine effiziente und qualitativ hochwertige Unterstützung für Ihre Human Resources.",
    photo: "HR-Beratung",
    longP:
      "Dienstleistungen im direkten Kontakt mit Menschen erfordern besondere Aufmerksamkeit, Respekt und Verantwortung. Unsere Arbeit ist unsere Leidenschaft. Wir widmen uns den beteiligten Menschen und berücksichtigen neben der beruflichen Situation alle persönlichen Aspekte, die die Zufriedenheit von Kandidat und Arbeitgeber beeinflussen können: familiäre Situation, berufliche Wünsche, ausserberufliche Verpflichtungen, Hobbys, psychologische Auswirkungen, Risiken und Chancen einer allfälligen neuen Herausforderung.",
    sectionTitle: ["Dienstleistungen für die ", { em: "Human Resources" }],
    rows: [
      {
        t: "Personalsuche und -selektion",
        a: "Wir selektionieren die besten qualifizierten und nicht qualifizierten Kandidaten für Ihr Unternehmen",
        b: "Zwei Formen der Zusammenarbeit, darunter die Success Fee ohne Anfangskosten",
      },
      {
        t: "Tests und Analysen",
        a: "In Phasen der Selektion, Reorganisation, Entwicklung, Teamarbeit oder Sales Performance",
        b: "Wir bieten die modernsten Online-Instrumente für Tests und Analysen zur Unterstützung Ihrer Projekte",
      },
      {
        t: "Executive Search",
        a: "Eine gezielte Direktsuche für die Besetzung von Kader- und Führungspositionen",
        b: "Moderne Headhunting-Instrumente erlauben uns, immer einen Schritt voraus zu sein",
      },
      {
        t: "Newplacement",
        sub: "Outplacement",
        a: "Ein Service für Mitarbeitende im Austritt — konkrete Unterstützung bei der Neuplatzierung",
        b: "Wir begleiten den Kandidaten bei allen Aktivitäten rund um die Stellensuche",
      },
      {
        t: "Assessment",
        a: "Konzipiert zur Optimierung von Selektions- und Reorganisationsprozessen",
        b: "Wir identifizieren Leistung und Verhalten der Kandidaten",
      },
      {
        t: "Bewertungen",
        a: "Ein Bereich für die Bewertungen von Kunden und Kandidaten garantiert Transparenz",
        b: "Entdecken Sie unseren Ansatz direkt von jenen, die uns auf die Probe gestellt haben",
      },
    ],
    banner: ["Mitarbeitende und Arbeitgeber sind ", { em: "wertvoll" }],
  },
  about: {
    metaTitle: "Über uns",
    metaDesc:
      "Zolliway ist ein ethisches und verantwortungsvolles Unternehmen für Personalsuche und -selektion mit Sitz in Chiasso, Tessin.",
    kicker: "Über uns",
    h1: ["Personalselektion mit ", { em: "Gewissen" }, "."],
    lede: "Organisationen prüfen Materialien und Produktionsprozesse mit ethischer Sorgfalt. Wir wenden dieselbe Sorgfalt auf die wichtigste Ressource an: die Menschen.",
    p1: "Jede Bewerbung ist eine Geschichte: familiäre Situation, Karrierewünsche, die psychologische Wirkung einer Veränderung, langfristige Kompatibilität. Wir berücksichtigen all diese Faktoren, denn die Zufriedenheit von Kandidat und Arbeitgeber entsteht aus demselben Gleichgewicht.",
    p2: "Wir verstehen uns als Headhunter auf der Suche nach Exzellenz: Wir präsentieren nie ein Profil, nur weil es «der Beschreibung entspricht». Wir präsentieren Menschen, die sich ins Team integrieren und bleiben können.",
    method: [
      {
        t: "Zuhören",
        d: "In einer Welt, die rennt, ist aktives Zuhören ein seltenes und kostbares Gut. Wir beginnen immer hier: bei Ihren wirklichen Bedürfnissen.",
      },
      {
        t: "Nachdenken",
        d: "Wir prüfen ehrlich, ob wir die Erwartungen erfüllen und konkrete Unterstützung bieten können. Wenn nicht, sagen wir es.",
      },
      {
        t: "Handeln",
        d: "Gezieltes Recruiting: geprüfte Qualifikationen, solide Motivation und Persönlichkeiten, die zum Team passen — für dauerhafte Zusammenarbeit.",
      },
    ],
    awardsTitle: [
      "Ein in der Schweiz und in Europa ",
      { em: "anerkanntes" },
      " Engagement",
    ],
    awards: [
      {
        year: "2025",
        by: "Handelszeitung / Statista",
        title: "Beste Executive-Search- und HR-Dienstleister der Schweiz",
      },
      {
        year: "2024",
        by: "Corporate Vision",
        title: "Ethical Recruitment Excellence Award",
      },
      {
        year: "2024",
        by: "Business Management Review",
        title: "Top 10 Preeminent Executive Search Service Providers in Europe",
      },
    ],
    refTitle: ["Unsere ", { em: "Referenzen" }],
    refLede:
      "Über 22 Partnerunternehmen in der ganzen Schweiz, mit Mandaten von operativen Profilen bis zum Executive Search.",
    sectors: [
      "Verarbeitende Industrie",
      "Detailhandel",
      "Pharma",
      "Sicherheit",
      "Finanzdienstleistungen",
      "Logistik",
    ],
    refCta: "So arbeiten wir zusammen",
    socialTitle: [
      "An der Seite von Swiss Ability, ",
      { em: "in Uganda" },
      " und darüber hinaus.",
    ],
    socialKicker: "Soziales Engagement",
    socialP:
      "Wir unterstützen die orthopädischen Rehabilitationsdienste NKOLO in Uganda: Prothesen, Physiotherapie und Wiedereingliederungswege für Menschen mit Behinderungen. Denn wir glauben, dass Arbeit — und die Würde, die sie mit sich bringt — für alle möglich sein muss.",
    socialCta: "Unser Engagement",
  },
  jobsPage: {
    metaTitle: "Stellenangebote",
    metaDesc:
      "Feste Stellen im Tessin und in der Schweiz: Entdecke die Stellenangebote von Zolliway oder sende eine Spontanbewerbung an unseren Talent Pool.",
    kicker: "Wir sind für dich da",
    h1: ["Suchst du eine ", { em: "neue berufliche" }, " Herausforderung?"],
    serifLede: "Feste Stellen, hauptsächlich im Tessin",
    introText:
      "Wir fragen nur nach den unbedingt notwendigen Informationen und behandeln jede Bewerbung mit grösster Vertraulichkeit.",
    sectionTitle: ["Offene ", { em: "Stellen" }],
    activeLabel: "aktive Suchen",
    details: "Details ansehen",
    talentKicker: "Talent Pool",
    talentH2: [
      "Keine passende Stelle? Sende eine ",
      { em: "Spontanbewerbung" },
    ],
    precious: "Du bist wertvoll für uns!",
    steps: [
      "Sende uns deinen aktuellen Lebenslauf per E-Mail oder über das Kontaktformular.",
      "Ein Berater prüft ihn persönlich innerhalb weniger Arbeitstage.",
      "Wir kontaktieren dich nur für Gelegenheiten, die wirklich zu deinem Werdegang passen.",
    ],
    talentCta: "CV senden",
    resTitle: ["Bereite deine ", { em: "Bewerbung" }, " vor"],
    cvH: "Ein gepflegter Lebenslauf",
    cvP: "Ein klarer, aktueller Lebenslauf ist deine Visitenkarte: Kostenlose Tools wie FlowCV helfen, in wenigen Minuten ein professionelles Ergebnis zu erzielen.",
    langH: "Sprachen zählen",
    langP:
      "In der Schweiz öffnen Deutsch und Englisch viele Türen: Ein Sprachkurs ist oft der schnellste Weg, die eigenen Chancen zu erweitern.",
  },
  jobDetail: {
    back: "← Alle Stellenangebote",
    tasks: "Ihre Aufgaben",
    profile: "Ihr Profil",
    offer: "Was wir bieten",
    ctaH: ["Erkennst du dich in diesem ", { em: "Profil" }, "?"],
    ctaP: (id: number) =>
      `Sende uns deine Bewerbung unter Angabe der Job-ID ${id}. Wir behandeln jedes Dossier mit grösster Vertraulichkeit und antworten dir rasch.`,
    apply: "Jetzt bewerben",
    other: "Weitere Stellen",
  },
  reviewsPage: {
    metaTitle: "Bewertungen",
    metaDesc:
      "184 verifizierte Bewertungen mit einer Durchschnittsnote von 4.9 von 5: die Erfahrungen von Kandidaten und Unternehmen mit Zolliway.",
    kicker: "Bewertungen",
    h1: ["Vertrauen wird ", { em: "aufgebaut" }, ", nicht behauptet."],
    stats: "4.9 von 5 · 184 verifizierte Bewertungen",
    introText:
      "Ein Bereich für die Bewertungen von Kunden und Kandidaten garantiert Transparenz. Entdecke unseren Ansatz direkt von jenen, die uns auf die Probe gestellt haben.",
    sectionTitle: ["Die Stimmen derer, die uns ", { em: "gewählt haben" }],
    note: "Eine Auswahl der 184 Bewertungen von Kandidaten und Unternehmen. Originaltexte auf Italienisch.",
    ctaKicker: "Deine Erfahrung",
    ctaH2: [
      "Hast du mit uns zusammengearbeitet? Teile deine ",
      { em: "Bewertung" },
    ],
    ctaP: "Jede Rückmeldung — positiv oder kritisch — hilft uns, unseren Service für Kandidaten und Unternehmen zu verbessern.",
    cta: "Bewertung schreiben",
  },
  contactPage: {
    metaTitle: "Kontakt",
    metaDesc:
      "Kontaktieren Sie Zolliway: Via Dante Alighieri 7, 6830 Chiasso. Telefon +41 91 224 68 88, Montag–Freitag 08:00–12:00 / 13:30–18:00.",
    kicker: "Kontakt",
    h1: ["Sprechen wir darüber. ", { em: "Zuhören" }, " ist unser Beruf."],
    note: "Termine nur nach Vereinbarung — kein offener Publikumsverkehr",
    formTitle: "Schreiben Sie uns",
    name: "Vor- und Nachname *",
    email: "E-Mail *",
    phone: "Telefon",
    iam: "Ich bin *",
    select: "Auswählen…",
    company: "Ein Unternehmen",
    candidate: "Ein Kandidat / eine Kandidatin",
    message: "Nachricht *",
    msgPlaceholder:
      "Für Bewerbungen: Gib die Job-ID der Position an oder schreibe «Spontanbewerbung».",
    privacyPre:
      "Wir fragen nur nach den unbedingt notwendigen Informationen. Die Daten werden gemäss unserer Erklärung zum ",
    privacyLink: "Datenschutz",
    privacyPost: " bearbeitet.",
    submit: "Nachricht senden",
    reachH: "So finden Sie uns",
    station: "Bahnhof SBB",
    stationV: "250 m · 3 Min. zu Fuss",
    highway: "Autobahnausfahrt",
    highwayV: "350 m · 1 Min. mit dem Auto",
  },
  legal: {
    kicker: "Rechtliche Hinweise",
    impressumTitle: "Impressum",
    ownerH: "Verantwortlich für die Website",
    authH: "Bewilligungen",
    authP:
      "Private Arbeitsvermittlungsagentur mit Bewilligung zur Personalvermittlung in der Schweiz gemäss dem Bundesgesetz über die Arbeitsvermittlung und den Personalverleih (AVG).",
    liabilityH: "Haftungsausschluss",
    liabilityP:
      "Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt. Zolliway Sagl übernimmt jedoch keine Gewähr für die Aktualität, Richtigkeit oder Vollständigkeit der publizierten Informationen und lehnt jede Haftung für die Inhalte externer, über Links erreichbarer Websites ab.",
    privacyTitle: "Datenschutz",
    privacySections: [
      {
        t: "Grundsätze",
        p: "Wir bearbeiten Personendaten in Übereinstimmung mit dem Bundesgesetz über den Datenschutz (DSG). Wir erheben nur die Informationen, die für die Durchführung unserer Such- und Selektionsmandate unbedingt notwendig sind.",
      },
      {
        t: "Daten der Kandidaten",
        p: "Lebensläufe und Bewerbungsdossiers werden mit grösster Vertraulichkeit behandelt. Kein Dossier wird ohne die ausdrückliche Zustimmung des Kandidaten oder der Kandidatin an ein Unternehmen weitergegeben.",
      },
      {
        t: "Daten der Unternehmen",
        p: "Informationen aus einem Briefing oder Mandat werden ausschliesslich für die Ausführung des Auftrags verwendet und nicht an Dritte weitergegeben.",
      },
      {
        t: "Aufbewahrung und Rechte",
        p: "Die Daten werden nur so lange aufbewahrt, wie es der Zweck der Bearbeitung erfordert. Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen — über die im Impressum angegebenen Kontaktdaten.",
      },
      {
        t: "Cookies und Statistiken",
        p: "Diese Website verwendet ausschliesslich technisch notwendige Cookies. Es kommen keine Werbe-Tracking-Instrumente zum Einsatz.",
      },
    ],
  },
};

const en: Dict = {
  meta: {
    title: "Zolliway · Recruitment Agency · Chiasso, Ticino",
    description:
      "Ethical, responsible recruitment and selection in Chiasso, Ticino. Employee and employer are precious.",
  },
  nav: {
    home: "Home",
    about: "About us",
    services: "For companies",
    jobs: "Job openings",
    reviews: "Reviews",
    contact: "Contact",
    impressum: "Impressum",
    privacy: "Data protection",
  },
  common: {
    more: "Learn more",
    photo: "photograph",
  },
  home: {
    kicker: "We are here for you",
    h1: ["Looking for the ", { em: "ideal candidate" }, "?"],
    heroSerif: "Discover our Human Resources services",
    heroText:
      "Put us to the test! Our services are innovative, responsible and tailored to your needs.",
    heroBtn: "Tell me more",
    heroPhoto: "interview / office",
    heroCaption: "Chiasso, Ticino",
    pillars: [
      {
        t: "What sets us apart",
        d: "To us, the candidate and the professional opportunity are precious. We want to demonstrate an outstanding work ethic.",
      },
      {
        t: "A new approach",
        d: "To offer a tailored service we provide three types of collaboration",
      },
      {
        t: "Social commitment",
        d: "In partnership with the Swiss Ability association we give concrete support to those in need",
      },
    ],
    band: {
      kicker: "We are here for you",
      h2: ["Looking for a ", { em: "new professional" }, " challenge?"],
      sub: "Browse our job openings",
      text: "Browse our job openings and send us your CV. We will gladly check whether your professional path matches one of our active searches.",
      precious: "You are precious to us!",
      cta: "To the job openings",
    },
    distinguish: {
      title: ["We want to ", { em: "stand apart" }],
      lede: "We offer the best jobs in Ticino and Switzerland through a system built on ethical recruitment",
      note: "Our focus is on the two protagonists of the labour market",
      employerPhoto: "employer",
      employerH: ["The employer ", { em: "is precious" }],
      employerP:
        "They offer the candidate the chance to practise their profession and to provide for themselves and their family.",
      employeePhoto: "employee",
      employeeH: ["The employee ", { em: "is precious" }],
      employeeP:
        "They place their time, skills, knowledge and experience at the employer's disposal.",
    },
    approach: {
      title: ["A ", { em: "winning" }, " approach"],
      tagline: "Tailored — Efficient — Simple",
      steps: [
        "Our services and personnel searches begin only on the basis of a mandate.",
        "To fully understand your needs and present only aligned candidates, the first step of every search is a briefing.",
        "Our agile structure lets us constantly adopt the most modern tools to respond effectively to your requests.",
      ],
    },
    social: {
      title: ["Social ", { em: "commitment" }] as Seg[],
      quote:
        "“Treat people as if they were what they ought to be, and you help them to become what they are capable of being.”",
      quoteBy: "— Goethe",
      whyH: "Why a social commitment?",
      whyP: "From the very founding of Zolliway it was clear to management that, within our abilities and means, we wanted to help those in need. Through our profession we can support employers in the search for new talent — and with what our business allows us to generate, we are glad to help people in need in a targeted way. We know we cannot change the world, but if everyone were willing to help in their own small way, according to their means and abilities, the impact would be enormous. We want to do our part!",
      chosenH: "Our choice",
      chosenLogo: "Swiss Ability logo",
      chosenP:
        "We have known Roberto Agosta, executive director of Swiss Ability, for many years. We are bound by mutual esteem and trust. Swiss Ability is a non-profit association based in Lugano, Ticino. It is dedicated to promoting and supporting charitable initiatives in the public interest, focusing mainly on physical rehabilitation and the development of community, social and educational infrastructure. The association's goal is to make its beneficiaries self-sufficient, enabling them to live a dignified life.",
      helpH: "How can we help?",
      helpP:
        "Among the many projects Swiss Ability runs and launches with great dedication, we realised we could make a difference by supporting the Nkolo Orthopaedics Rehabilitation Services (NORS), a rehabilitation system in Uganda restoring mobility and ability to people with disabilities in the Luweero district. The centre offers a range of rehabilitation services at subsidised prices to more than 600 patients a year and produces over 300 prostheses and orthoses annually.",
      infoH: "More information?",
      infoP:
        "We believe it is right to speak about this commitment, because social aid is one of our pillars. However, we do not want to use this information as advertising. That is why you will not find reports or further details on our website. If you are interested, you can find detailed reports on the Swiss Ability website via the button below. We want to encourage companies not to close their eyes to today's problems.",
      infoCta: "Swiss Ability & Zolliway",
    },
    contact: {
      title: "Contact us",
      note: "By appointment only — we are not open to the public",
      formCta: "To the contact form",
    },
  },
  contactShared: {
    phoneH: "Phone availability",
    weekdays: "Monday – Friday",
    hours: "08:00-12:00 / 13:30-18:00",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "closed",
    contactsH: "Contact details",
    addressLabel: "Address",
    address: "Zolliway, Via Dante Alighieri 7, 6830 Chiasso",
    telLabel: "Office phone",
    tel: "+41 (0)91 224 68 88",
  },
  services: {
    metaTitle: "Services for Companies",
    metaDesc:
      "Search & selection, executive search, assessment and newplacement: ethical, tailored HR services for companies in Ticino and Switzerland.",
    kicker: "Services for companies",
    h1: "Introduction",
    lede: [
      { b: "Responsibility" },
      " and ",
      { b: "ethics" },
      " at work are the pillars on which our services in support of corporate Human Resources are built:",
    ],
    list: "Search & Selection — Executive Search — Headhunting — Assessment — Motivational and Behavioural Testing — Newplacement",
    values:
      "With human values at the centre, we provide efficient, high-quality support to your HR department.",
    photo: "HR consulting",
    longP:
      "Services in direct contact with people demand exceptional care, respect and responsibility. Our work is our passion. We dedicate ourselves to the people involved, considering — beyond the professional situation — every personal aspect that can affect the satisfaction of candidate and employer: family situation, career aspirations, commitments outside work, hobbies, psychological impact, and the risks and benefits of a potential new challenge.",
    sectionTitle: ["Services for ", { em: "Human Resources" }],
    rows: [
      {
        t: "Search & Selection",
        a: "We select the best qualified and unqualified candidates for your company",
        b: "Two forms of collaboration, including the Success Fee with no upfront costs",
      },
      {
        t: "Testing & Analysis",
        a: "During selection, reorganisation, development, teamwork or sales performance phases",
        b: "We offer the most modern online testing and analysis tools in support of your projects",
      },
      {
        t: "Executive Search",
        a: "A targeted direct search for the placement of new managers and executives",
        b: "Modern headhunting tools allow us to stay one step ahead",
      },
      {
        t: "Newplacement",
        sub: "Outplacement",
        a: "A service dedicated to departing employees — concrete support for relocation",
        b: "We support the candidate in every activity related to the job search",
      },
      {
        t: "Assessment",
        a: "Designed to optimise selection and reorganisation processes",
        b: "We identify candidates' performance and behaviour",
      },
      {
        t: "Reviews",
        a: "A space dedicated to client and candidate reviews guarantees transparency",
        b: "Discover our approach directly from those who put us to the test",
      },
    ],
    banner: ["Employee and employer are ", { em: "precious" }],
  },
  about: {
    metaTitle: "About Us",
    metaDesc:
      "Zolliway is an ethical, responsible recruitment and selection firm based in Chiasso, Ticino.",
    kicker: "About us",
    h1: ["Recruitment with a ", { em: "conscience" }, "."],
    lede: "Organisations scrutinise materials and production processes with ethical care. We apply the same rigour to the most important resource: people.",
    p1: "Every application is a story: family situation, career aspirations, the psychological impact of a change, long-term fit. We weigh all of these factors, because the satisfaction of candidate and employer springs from the same balance.",
    p2: "We position ourselves as headhunters in search of excellence: we never present a profile merely because it 'matches the description'. We present people who can integrate into the team and stay.",
    method: [
      {
        t: "Listen",
        d: "In a world that rushes, active listening is a rare and precious good. We always start here: with your real needs.",
      },
      {
        t: "Reflect",
        d: "We honestly assess whether we can meet expectations and offer concrete support. If we cannot, we say so.",
      },
      {
        t: "Act",
        d: "Targeted recruitment: verified qualifications, solid motivation and personalities compatible with the team, for lasting collaboration.",
      },
    ],
    awardsTitle: [
      "A commitment ",
      { em: "recognised" },
      " across Switzerland and Europe",
    ],
    awards: [
      {
        year: "2025",
        by: "Handelszeitung / Statista",
        title: "Best Executive Search & HR Service Providers in Switzerland",
      },
      {
        year: "2024",
        by: "Corporate Vision",
        title: "Ethical Recruitment Excellence Award",
      },
      {
        year: "2024",
        by: "Business Management Review",
        title: "Top 10 Preeminent Executive Search Service Providers in Europe",
      },
    ],
    refTitle: ["Our ", { em: "references" }],
    refLede:
      "More than 22 partner companies across Switzerland, with mandates ranging from operational roles to executive search.",
    sectors: [
      "Manufacturing",
      "Retail",
      "Pharmaceuticals",
      "Security",
      "Financial services",
      "Logistics",
    ],
    refCta: "How we work together",
    socialTitle: [
      "Alongside Swiss Ability, ",
      { em: "in Uganda" },
      " and beyond.",
    ],
    socialKicker: "Social commitment",
    socialP:
      "We support the NKOLO orthopaedic rehabilitation services in Uganda: prosthetics, physiotherapy and reintegration pathways for people with disabilities. Because we believe work — and the dignity it carries — should be possible for everyone.",
    socialCta: "Our commitment",
  },
  jobsPage: {
    metaTitle: "Job Openings",
    metaDesc:
      "Permanent positions in Ticino and Switzerland: browse Zolliway's job openings or send a spontaneous application to our Talent Pool.",
    kicker: "We are here for you",
    h1: ["Looking for a ", { em: "new professional" }, " challenge?"],
    serifLede: "Permanent positions, mainly in Ticino",
    introText:
      "We ask only for the information strictly necessary and treat every application with the utmost confidentiality.",
    sectionTitle: ["Open ", { em: "positions" }],
    activeLabel: "active searches",
    details: "View job",
    talentKicker: "Talent Pool",
    talentH2: [
      "No suitable position? Send a ",
      { em: "spontaneous application" },
    ],
    precious: "You are precious to us!",
    steps: [
      "Send us your up-to-date CV by e-mail or through the contact form.",
      "A consultant reviews it personally within a few working days.",
      "We contact you only for opportunities truly in line with your path.",
    ],
    talentCta: "Send your CV",
    resTitle: ["Prepare your ", { em: "application" }],
    cvH: "A polished CV",
    cvP: "A clear, up-to-date CV is your calling card: free tools such as FlowCV help you achieve a professional result in minutes.",
    langH: "Languages matter",
    langP:
      "In Switzerland, German and English open many doors: investing in a language course is often the fastest way to broaden your opportunities.",
  },
  jobDetail: {
    back: "← All positions",
    tasks: "Your responsibilities",
    profile: "Your profile",
    offer: "What we offer",
    ctaH: ["Do you recognise yourself in this ", { em: "profile" }, "?"],
    ctaP: (id: number) =>
      `Send us your application quoting Job ID ${id}. We treat every dossier with the utmost confidentiality and reply promptly.`,
    apply: "Apply now",
    other: "Other positions",
  },
  reviewsPage: {
    metaTitle: "Reviews",
    metaDesc:
      "184 verified reviews with an average rating of 4.9 out of 5: the experiences of candidates and companies with Zolliway.",
    kicker: "Reviews",
    h1: ["Trust is ", { em: "built" }, ", not declared."],
    stats: "4.9 out of 5 · 184 verified reviews",
    introText:
      "A space dedicated to client and candidate reviews guarantees transparency. Discover our approach directly from those who put us to the test.",
    sectionTitle: ["The voices of those who ", { em: "chose us" }],
    note: "A selection of the 184 reviews from candidates and companies. Original texts in Italian.",
    ctaKicker: "Your experience",
    ctaH2: ["Have you worked with us? Share your ", { em: "review" }],
    ctaP: "Every piece of feedback — positive or critical — helps us improve our service for candidates and companies.",
    cta: "Write a review",
  },
  contactPage: {
    metaTitle: "Contact",
    metaDesc:
      "Contact Zolliway: Via Dante Alighieri 7, 6830 Chiasso. Phone +41 91 224 68 88, Monday–Friday 08:00–12:00 / 13:30–18:00.",
    kicker: "Contact",
    h1: ["Let's talk. ", { em: "Listening" }, " is our craft."],
    note: "By appointment only — we are not open to the public",
    formTitle: "Write to us",
    name: "Full name *",
    email: "E-mail *",
    phone: "Phone",
    iam: "I am *",
    select: "Select…",
    company: "A company",
    candidate: "A candidate",
    message: "Message *",
    msgPlaceholder:
      "For applications: mention the Job ID of the position, or write “spontaneous application”.",
    privacyPre:
      "We ask only for the information strictly necessary. Data is processed according to our ",
    privacyLink: "data protection",
    privacyPost: " notice.",
    submit: "Send message",
    reachH: "How to reach us",
    station: "Railway station",
    stationV: "250 m · 3-min walk",
    highway: "Motorway exit",
    highwayV: "350 m · 1-min drive",
  },
  legal: {
    kicker: "Legal information",
    impressumTitle: "Impressum",
    ownerH: "Site owner",
    authH: "Authorisations",
    authP:
      "Private recruitment agency authorised for placement in Switzerland under the Federal Act on Employment Services and the Hiring of Services (RecA).",
    liabilityH: "Disclaimer",
    liabilityP:
      "The contents of this website are prepared with the greatest care. However, Zolliway Sagl does not guarantee the timeliness, accuracy or completeness of the information published and declines any liability for the contents of external websites reachable via links.",
    privacyTitle: "Data protection",
    privacySections: [
      {
        t: "Principles",
        p: "We process personal data in accordance with the Swiss Federal Act on Data Protection (FADP). We collect only the information strictly necessary to carry out our search and selection mandates.",
      },
      {
        t: "Candidate data",
        p: "CVs and application dossiers are treated with the utmost confidentiality. No dossier is forwarded to a company without the candidate's explicit consent.",
      },
      {
        t: "Company data",
        p: "Information received in the context of a briefing or mandate is used exclusively to carry out the assignment and is not shared with third parties.",
      },
      {
        t: "Retention and rights",
        p: "Data is kept only as long as the purpose of processing requires. You may request access to, rectification or deletion of your data at any time via the contact details in the impressum.",
      },
      {
        t: "Cookies and statistics",
        p: "This website uses only technical cookies necessary for its operation. No advertising tracking tools are used.",
      },
    ],
  },
};

export const dictionaries: Record<Lang, Dict> = { it, de, en };

export function getDict(lang: string): Dict {
  return dictionaries[(langs as readonly string[]).includes(lang) ? (lang as Lang) : "it"];
}
