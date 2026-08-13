export type Job = {
  slug: string;
  id: number;
  title: string;
  location: string;
  region: string;
  contract: string;
  workload: string;
  category: string;
  summary: string;
  tasks: string[];
  profile: string[];
  offer: string[];
};

export const jobs: Job[] = [
  {
    slug: "cfo-chief-financial-officer",
    id: 674,
    title: "CFO – Chief Financial Officer",
    location: "Mendrisiotto (Ticino)",
    region: "Svizzera",
    contract: "Tempo indeterminato",
    workload: "100%",
    category: "Direzione & Finanza",
    summary:
      "Per un'affermata realtà industriale del Mendrisiotto ricerchiamo un/a CFO con solida esperienza nella guida finanziaria di aziende strutturate e orientamento strategico.",
    tasks: [
      "Direzione dell'area finanza, controlling e amministrazione",
      "Pianificazione finanziaria, budgeting e reporting alla direzione generale",
      "Ottimizzazione dei processi amministrativi e dei sistemi di controllo interno",
      "Gestione dei rapporti con banche, revisori e autorità fiscali",
    ],
    profile: [
      "Formazione superiore in economia o finanza (esperto/a contabile un plus)",
      "Esperienza pluriennale in ruolo analogo in contesti industriali",
      "Ottima conoscenza di italiano e inglese; il tedesco è un vantaggio",
      "Leadership, visione strategica e capacità di negoziazione",
    ],
    offer: [
      "Ruolo chiave nella direzione aziendale",
      "Pacchetto retributivo ai vertici del mercato",
      "Contesto solido, in crescita e orientato al lungo periodo",
    ],
  },
  {
    slug: "it-security-engineer",
    id: 668,
    title: "IT Security Engineer",
    location: "Lugano (Ticino)",
    region: "Svizzera",
    contract: "Tempo indeterminato",
    workload: "100%",
    category: "Informatica",
    summary:
      "Per un istituto finanziario di Lugano cerchiamo un/a IT Security Engineer che rafforzi la sicurezza dell'infrastruttura e accompagni i progetti di trasformazione digitale.",
    tasks: [
      "Monitoraggio e hardening dell'infrastruttura IT",
      "Gestione di vulnerability assessment e penetration test",
      "Definizione di policy di sicurezza e sensibilizzazione interna",
      "Supporto ai progetti cloud in ottica security-by-design",
    ],
    profile: [
      "Formazione in informatica e certificazioni di sicurezza (CISSP, CEH o simili)",
      "Esperienza con SIEM, firewall e identity management",
      "Italiano e inglese fluenti",
      "Approccio analitico e capacità di comunicare con il business",
    ],
    offer: [
      "Ambiente tecnologicamente all'avanguardia",
      "Formazione continua certificata",
      "Flessibilità e possibilità di home office parziale",
    ],
  },
  {
    slug: "head-of-b2b-division",
    id: 661,
    title: "Head of B2B Division",
    location: "Luganese (Ticino)",
    region: "Svizzera",
    contract: "Tempo indeterminato",
    workload: "100%",
    category: "Direzione & Vendite",
    summary:
      "Azienda di servizi in forte espansione ricerca il/la responsabile della divisione B2B: strategia commerciale, sviluppo del team e crescita del portafoglio clienti aziendali.",
    tasks: [
      "Definizione ed esecuzione della strategia commerciale B2B",
      "Guida e sviluppo di un team di account manager",
      "Negoziazione di partnership e contratti quadro",
      "Analisi del mercato e reporting alla direzione",
    ],
    profile: [
      "Comprovata esperienza nella vendita B2B di servizi",
      "Attitudine alla leadership e orientamento ai risultati",
      "Italiano madrelingua, buon inglese",
      "Rete di contatti nel tessuto economico ticinese",
    ],
    offer: [
      "Autonomia imprenditoriale e bonus legati ai risultati",
      "Team consolidato e motivato",
      "Prospettive di crescita in direzione generale",
    ],
  },
  {
    slug: "business-developer",
    id: 655,
    title: "Business Developer",
    location: "Lugano (Ticino)",
    region: "Svizzera",
    contract: "Tempo indeterminato",
    workload: "80–100%",
    category: "Vendite",
    summary:
      "Per una PMI innovativa ricerchiamo un/a Business Developer intraprendente, capace di aprire nuovi mercati e costruire relazioni commerciali durature.",
    tasks: [
      "Identificazione e sviluppo di nuove opportunità commerciali",
      "Gestione dell'intero ciclo di vendita, dal primo contatto alla firma",
      "Partecipazione a fiere ed eventi di settore",
      "Collaborazione con marketing e product management",
    ],
    profile: [
      "Esperienza nella vendita consulenziale",
      "Spiccate doti relazionali e negoziali",
      "Italiano e inglese fluenti; il tedesco è un plus",
      "Disponibilità a trasferte in Svizzera",
    ],
    offer: [
      "Retribuzione fissa più variabile non limitato",
      "Percorso di carriera strutturato",
      "Cultura aziendale giovane e dinamica",
    ],
  },
  {
    slug: "hr-operations-specialist",
    id: 649,
    title: "HR Operations Specialist",
    location: "Bellinzona (Ticino)",
    region: "Svizzera",
    contract: "Tempo indeterminato",
    workload: "60–80%",
    category: "Risorse Umane",
    summary:
      "Realtà del settore pubblico-privato cerca un/a specialista HR per la gestione operativa del ciclo di vita dei collaboratori, dall'assunzione all'uscita.",
    tasks: [
      "Amministrazione del personale e gestione contrattualistica",
      "Elaborazione salari in collaborazione con il payroll",
      "Supporto ai responsabili di linea nelle tematiche HR",
      "Cura dei dossier assicurativi e dei permessi di lavoro",
    ],
    profile: [
      "Attestato federale HR o formazione equivalente",
      "Conoscenza del diritto del lavoro svizzero",
      "Precisione, riservatezza e orientamento al servizio",
      "Italiano madrelingua, buone conoscenze di tedesco",
    ],
    offer: [
      "Tempo parziale flessibile",
      "Ambiente collaborativo e strutturato",
      "Condizioni d'impiego di primo piano",
    ],
  },
  {
    slug: "sales-account-executive",
    id: 643,
    title: "Sales Account Executive",
    location: "Mendrisiotto (Ticino)",
    region: "Svizzera",
    contract: "Tempo indeterminato",
    workload: "100%",
    category: "Vendite",
    summary:
      "Per un'azienda commerciale consolidata ricerchiamo un/a Account Executive per la gestione e lo sviluppo di un portafoglio clienti esistente.",
    tasks: [
      "Gestione e fidelizzazione del portafoglio clienti assegnato",
      "Elaborazione di offerte e follow-up commerciale",
      "Acquisizione di nuovi clienti nel territorio di competenza",
      "Aggiornamento del CRM e reporting periodico",
    ],
    profile: [
      "Prima esperienza di successo nella vendita",
      "Orientamento al cliente e proattività",
      "Italiano fluente, inglese buono",
      "Patente di guida categoria B",
    ],
    offer: [
      "Auto aziendale",
      "Formazione commerciale continua",
      "Team di vendita affiatato",
    ],
  },
  {
    slug: "tecnico-di-galleria",
    id: 637,
    title: "Tecnico di Galleria",
    location: "Bellinzonese (Ticino)",
    region: "Svizzera",
    contract: "Tempo indeterminato",
    workload: "100%",
    category: "Tecnica & Industria",
    summary:
      "Per un'impresa attiva nelle infrastrutture cerchiamo un tecnico specializzato nella manutenzione di impianti in galleria: ventilazione, illuminazione e sistemi di sicurezza.",
    tasks: [
      "Manutenzione preventiva e correttiva degli impianti elettromeccanici",
      "Interventi di picchetto secondo turnistica",
      "Documentazione tecnica degli interventi",
      "Collaborazione con enti e fornitori esterni",
    ],
    profile: [
      "AFC in ambito elettrico o elettromeccanico",
      "Esperienza nella manutenzione industriale o infrastrutturale",
      "Disponibilità al servizio di picchetto",
      "Italiano fluente",
    ],
    offer: [
      "Impiego stabile in un settore strategico",
      "Indennità di picchetto interessanti",
      "Formazione specialistica continua",
    ],
  },
  {
    slug: "customer-service-representative",
    id: 631,
    title: "Customer Service Representative",
    location: "Lugano (Ticino)",
    region: "Svizzera",
    contract: "Tempo indeterminato",
    workload: "100%",
    category: "Amministrazione",
    summary:
      "Società internazionale con sede a Lugano ricerca un/a addetto/a al servizio clienti per la gestione degli ordini e l'assistenza alla clientela europea.",
    tasks: [
      "Gestione ordini dall'inserimento alla consegna",
      "Assistenza telefonica e via e-mail alla clientela",
      "Coordinamento con logistica e vendite",
      "Gestione di reclami e resi",
    ],
    profile: [
      "Formazione commerciale (AFC o equivalente)",
      "Esperienza nel servizio clienti o back office",
      "Italiano e inglese fluenti; il francese è un plus",
      "Dimestichezza con ERP e strumenti digitali",
    ],
    offer: [
      "Contesto internazionale e multiculturale",
      "Orari regolari e buon equilibrio vita-lavoro",
      "Mensa aziendale e benefit",
    ],
  },
];

export type Review = {
  name: string;
  date: string;
  text: string;
  reply?: string;
};

export const reviews: Review[] = [
  {
    name: "Elisa",
    date: "Aprile 2026",
    text: "Ho visto una proposta di lavoro interessante, ho inviato il curriculum e il giorno dopo sono stata contattata per un colloquio. Professionalità e rapidità rare.",
    reply: "Grazie Elisa! In bocca al lupo per la tua nuova sfida professionale.",
  },
  {
    name: "Mauro",
    date: "Gennaio 2026",
    text: "Zolliway e i suoi consulenti hanno dimostrato di essere attenti sia ai clienti in ricerca che ai candidati potenziali, nulla è a caso.",
    reply: "Grazie Mauro, il tuo riscontro ci conferma che la strada è quella giusta.",
  },
  {
    name: "Giulia",
    date: "Gennaio 2026",
    text: "Ringrazio il team di Zolliway per la professionalità e la gentilezza con la quale hanno seguito la mia candidatura.",
    reply: "Grazie di cuore Giulia, è stato un piacere accompagnarti.",
  },
  {
    name: "Roberto",
    date: "Novembre 2025",
    text: "Come azienda abbiamo affidato a Zolliway una ricerca complessa per un profilo tecnico. Rosa di candidati eccellente in tempi brevi: collaborazione che proseguirà.",
    reply: "Grazie Roberto, la fiducia delle aziende partner è il nostro miglior biglietto da visita.",
  },
  {
    name: "Francesca",
    date: "Ottobre 2025",
    text: "Mi hanno seguita passo dopo passo, con consigli concreti sul CV e sulla preparazione del colloquio. Oggi ho il lavoro che desideravo.",
  },
  {
    name: "Andrea",
    date: "Settembre 2025",
    text: "Un'agenzia che ascolta davvero. Non mi hanno proposto posizioni a caso ma solo opportunità in linea con il mio percorso.",
    reply: "Grazie Andrea! Ascoltare è il primo dei nostri tre principi.",
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "ricerca-e-selezione",
    title: "Ricerca e Selezione",
    description:
      "Reclutiamo personale qualificato e non qualificato con due modalità di collaborazione, tra cui la formula Success Fee: nessun costo iniziale, si paga solo ad assunzione avvenuta.",
    points: ["Formula Success Fee senza costi iniziali", "Ricerca mirata sul territorio", "Rosa di candidati verificata"],
  },
  {
    slug: "executive-search",
    title: "Executive Search",
    description:
      "Individuiamo quadri e dirigenti con moderne tecniche di headhunting, garantendo riservatezza assoluta e un approccio diretto ai migliori profili sul mercato.",
    points: ["Headhunting diretto e riservato", "Mappatura del mercato", "Valutazione delle competenze di leadership"],
  },
  {
    slug: "test-e-analisi",
    title: "Test e Analisi",
    description:
      "Moderni strumenti di assessment online a supporto delle fasi di selezione, riorganizzazione, sviluppo, lavoro in team e performance di vendita.",
    points: ["Test attitudinali e di personalità", "Analisi del potenziale", "Report chiari e azionabili"],
  },
  {
    slug: "assessment",
    title: "Assessment",
    description:
      "Valutiamo prestazioni e comportamenti dei candidati per ottimizzare i processi di selezione e riorganizzazione, riducendo il rischio di scelte sbagliate.",
    points: ["Assessment individuali e di gruppo", "Criteri oggettivi e misurabili", "Supporto alle decisioni HR"],
  },
  {
    slug: "newplacement",
    title: "Newplacement",
    description:
      "Accompagniamo con un supporto dedicato i collaboratori in uscita verso una nuova collocazione professionale, tutelando le persone e la reputazione dell'azienda.",
    points: ["Bilancio di competenze", "Coaching alla ricerca attiva", "Ricollocamento mirato"],
  },
  {
    slug: "consulenza-hr",
    title: "Consulenza HR",
    description:
      "Affianchiamo l'ufficio risorse umane con consulenza su misura: dalla definizione del fabbisogno alla costruzione di processi di selezione etici ed efficaci.",
    points: ["Analisi del fabbisogno", "Processi di selezione su misura", "Approccio etico e responsabile"],
  },
];

export const stats = [
  { value: "4.9/5", label: "Valutazione media" },
  { value: "184", label: "Recensioni verificate" },
  { value: "22+", label: "Aziende partner" },
  { value: "3", label: "Riconoscimenti internazionali" },
];

export const awards = [
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
];

export const clientSectors = [
  "Industria manifatturiera",
  "Commercio al dettaglio",
  "Farmaceutica",
  "Sicurezza",
  "Servizi finanziari",
  "Logistica",
];
