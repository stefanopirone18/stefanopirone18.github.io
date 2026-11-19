/* =====================================================================
   CONTENUTI DEL SITO — Stefano Pirone
   ===================================================================== */

window.SITE_CONTENT = {
  home: {
    inEvidenza: [
      {
        progetto: "computational-legal-empiricism",
        frase: "La mia tesi: usare strumenti computazionali per capire meglio le norme.",
      },
      {
        progetto: "giustizia-e-legalita",
        frase: "Tre anni di laboratori nelle scuole dell’Irpinia con Libera Avellino.",
      },
      {
        progetto: "aritmie",
        frase: "Il blog culturale indipendente che ho co-fondato nel 2022 per scrivere di società e cultura.",
      },
    ],
    adesso:
      "In questi mesi chiudo la tesi in Informatica Giuridica, seguo i rapporti con le scuole per Libera Avellino e scrivo per Aritmie.org di trasparenza e società.",
  },

  progetti: [
    /* ---------- ANALIZZARE ---------- */
    {
      id: "computational-legal-empiricism",
      verbo: "analizzare",
      titolo: "Computational Legal Empiricism",
      contesto: "Tesi di laurea in Informatica Giuridica, Università degli Studi del Sannio",
      anno: "In corso",
      sintesi: "Come gli strumenti computazionali aiutano la ricerca giuridica e l’analisi dell’effettività delle norme.",
      racconto: [
        "Una norma esiste sulla carta, ma funziona davvero? La domanda è vecchia quanto la sociologia del diritto. Nella tesi la riprendo con strumenti nuovi.",
        "Studio come modelli linguistici, grafi di conoscenza (GraphRAG) e simulazioni ad agenti possono affiancare il lavoro del giurista: leggere grandi quantità di testi, collegare fonti, osservare gli effetti di una regola. Mi interessa anche il limite: cosa questi strumenti non possono dire, e dove serve ancora una lettura umana.",
      ],
      link: [],
    },
    {
      id: "trasparenza-e-whistleblowing",
      verbo: "analizzare",
      titolo: "Trasparenza e Whistleblowing",
      contesto: "Scuola Common 2026 e Aritmie.org",
      anno: "2026",
      sintesi: "Analisi civica sulla trasparenza amministrativa e sul D.Lgs. 24/2023.",
      racconto: [
        "Il D.Lgs. 24/2023 chiede agli enti pubblici di offrire canali sicuri a chi segnala illeciti. Durante la Scuola Common 2026 ho lavorato, in una breve esperienza progettuale, su come verificare dall’esterno se e come questi canali sono resi accessibili.",
        "Ho poi messo in ordine gli appunti in un articolo per Aritmie.org: cosa si capisce, e cosa no, leggendo la sezione “Amministrazione trasparente” di un ente.",
      ],
      link: [
        { url: "https://www.aritmie.org", etichetta: "Leggi l’articolo su Aritmie.org" },
      ],
    },
    {
      id: "prototipi-analisi-normativa",
      verbo: "analizzare",
      titolo: "Prototipi di analisi normativa",
      contesto: "Sperimentazione",
      anno: "",
      sintesi: "Esperimenti interattivi tra teoria del diritto e lettura del testo normativo.",
      racconto: [
        "Piccoli strumenti interattivi per leggere le norme da un’altra angolazione. Sono prove, non prodotti finiti: servono a capire se un’idea teorica regge quando la si applica a un testo vero.",
        "Uno di questi prototipi rilegge le disposizioni attraverso le 10 Capacità di Martha Nussbaum, per chiedersi quali possibilità concrete una norma apre o chiude alle persone.",
      ],
      link: [],
    },
    {
      id: "erasmus-alumni-in-action",
      verbo: "analizzare",
      titolo: "Erasmus+ Alumni in Action",
      contesto: "garagErasmus e INDIRE, Napoli",
      anno: "2026",
      sintesi: "Tra i 20 ambasciatori europei del laboratorio per i 40 anni di Erasmus+.",
      racconto: [
        "garagErasmus e INDIRE mi hanno selezionato tra i 20 ambasciatori europei del laboratorio strategico dedicato al 40° anniversario del programma Erasmus+.",
        "Il laboratorio, a Napoli, è partito dall’esperienza di chi il programma lo ha vissuto per ragionare su come può arrivare a chi non è ancora partito.",
      ],
      link: [],
    },

    /* ---------- ATTIVARE ---------- */
    {
      id: "giustizia-e-legalita",
      verbo: "attivare",
      titolo: "Percorso di Giustizia e Legalità",
      contesto: "Libera Avellino, scuole dell’Irpinia",
      anno: "2024–2026",
      sintesi: "Laboratori nelle scuole irpine e il report “Comunità che educa comunità”.",
      racconto: [
        "Da attivista di Libera Avellino curo i rapporti con le scuole dell’Irpinia e con l’Ufficio Scolastico Provinciale: calendari, docenti, classi, tutto ciò che serve perché un percorso entri davvero in una scuola e non resti un evento isolato.",
        "In classe facilito laboratori partecipativi: si parte da quello che studenti e studentesse vivono e si arriva a parlare di giustizia, legalità e territorio.",
        "Il lavoro di questi anni è raccolto nel report “Comunità che educa comunità”, che ho redatto.",
      ],
      link: [
        { url: "/files/report-comunita-che-educa-comunita.pdf", etichetta: "Leggi il report" },
      ],
    },
    {
      id: "ipm-airola",
      verbo: "attivare",
      titolo: "Istituto Penale per Minorenni di Airola",
      contesto: "Summer e Winter School",
      anno: "2023",
      sintesi: "Laboratori di scrittura, musica e teatro con i ragazzi detenuti.",
      racconto: [
        "Durante la Summer e la Winter School ho co-progettato e condotto laboratori creativi di scrittura, musica e teatro con i ragazzi dell’istituto.",
        "La parte più difficile, e più importante, è stata la continuità: tornare, riconoscersi, riprendere il filo tra una scuola e l’altra.",
      ],
      link: [],
    },
    {
      id: "servizio-civile-abitare-plurale",
      verbo: "attivare",
      titolo: "Servizio Civile e Abitare Plurale",
      contesto: "ARCI Avellino e Dimbaya APS",
      anno: "2025–2026",
      sintesi: "Un’indagine sui bisogni delle aree interne irpine, eventi e lavoro nel Terzo Settore.",
      racconto: [
        "Nel Servizio Civile con ARCI Avellino e Dimbaya APS ho condotto un’indagine qualitativa sui bisogni delle aree interne irpine: ascoltare chi vive e lavora in quei territori per capire cosa manca a chi resta.",
        "Accanto alla ricerca ho organizzato eventi culturali e seguito il lavoro quotidiano di un ente del Terzo Settore, dalla gestione alle relazioni con il territorio.",
      ],
      link: [],
    },

    /* ---------- RACCONTARE ---------- */
    {
      id: "aritmie",
      verbo: "raccontare",
      titolo: "Aritmie.org",
      contesto: "Blog culturale indipendente, co-fondatore e autore",
      anno: "Dal 2022",
      sintesi: "Un blog culturale indipendente su attualità, società, cinema e musica.",
      racconto: [
        "Aritmie è un blog culturale indipendente nato nel 2022. Lo abbiamo fondato in pochi, per scrivere di attualità, società, cinema e musica con uno sguardo nostro.",
        "Scrivo articoli e seguo la parte editoriale e organizzativa del progetto, compresi gli aspetti legali.",
      ],
      link: [
        { url: "https://www.aritmie.org", etichetta: "Vai su Aritmie.org" },
      ],
    },
    {
      id: "comunicazione-civica",
      verbo: "raccontare",
      titolo: "Comunicazione civica e sociale",
      contesto: "Libera Avellino e ARCI Avellino",
      anno: "",
      sintesi: "Comunicazione digitale e racconto dei progetti sul territorio.",
      racconto: [
        "Per Libera Avellino e ARCI Avellino curo la comunicazione digitale: piano editoriale, testi, racconto dei progetti mentre accadono.",
        "L’obiettivo è semplice da dire e difficile da fare: far capire a chi non c’era cosa è successo in una scuola, in un quartiere, in un paese, senza ridurlo a uno slogan.",
      ],
      link: [],
    },
  ],

  scrittura: [
    {
      titolo: "Comunità che educa comunità",
      dove: "Report, Libera Avellino e scuole dell’Irpinia",
      anno: "2026",
      link: "/files/report-comunita-che-educa-comunita.pdf",
    },
    {
      titolo: "Trasparenza amministrativa e whistleblowing: appunti dalla Scuola Common",
      dove: "Aritmie.org",
      anno: "2026",
      link: "https://www.aritmie.org",
    },
    {
      titolo: "Umberto Eco e il Regio Decreto 1728/1938",
      dove: "Aritmie.org",
      anno: "2026",
      link: "https://www.aritmie.org",
    },
  ],

  chiSono: {
    bio: [
      "Sono di Avellino e sto finendo la magistrale in Giurisprudenza, curriculum internazionale, all’Università del Sannio. Mi interessa capire come funziona la società, e il diritto è il primo strumento che ho imparato a usare per farlo. Il digitale è il secondo: lo studio per capire cosa cambia nel modo in cui le regole vengono scritte, applicate e verificate.",
      "Poi c’è il lavoro sul campo: laboratori nelle scuole, in un carcere minorile, nelle aree interne. Lì ho imparato che una norma conta quanto le persone che la incontrano. E c’è la scrittura, su Aritmie e altrove, che mi serve a tenere insieme le due cose.",
    ],
    formazione: [
      {
        titolo: "Laurea Magistrale in Giurisprudenza, curriculum internazionale",
        dove: "Università degli Studi del Sannio",
        anno: "In corso",
      },
      {
        titolo: "Erasmus+",
        dove: "Paris Lodron Universität Salzburg",
        anno: "2022",
      },
      {
        titolo: "ELSA Winter Law School on New Technology and AI Law",
        dove: "Bruxelles",
        anno: "",
      },
      {
        titolo: "Law Summer School, AI e Diritto",
        dove: "Università degli Studi del Sannio",
        anno: "",
      },
      {
        titolo: "Scuola Common",
        dove: "Libera, monitoraggio civico",
        anno: "2026",
      },
    ],
    cv: "/files/cv-stefano-pirone.pdf",
  },
};
