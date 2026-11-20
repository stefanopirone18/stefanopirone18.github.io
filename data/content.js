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
      "La tesi in Informatica giuridica, i percorsi nelle scuole con Libera Avellino, la scrittura su Aritmie. Cerco un praticantato o un primo incarico in privacy e data protection, compliance, AI governance o legal tech, preferibilmente tra Napoli e Roma.",
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
        "Il D.Lgs. 24/2023 obbliga enti pubblici e privati ad attivare canali sicuri per chi segnala illeciti. Come volontario ho partecipato a un progetto nazionale di monitoraggio civico che verifica dall’esterno se quei canali esistono e se sono accessibili. Il mio è stato un contributo a una parte del lavoro.",
        "Su questo sto scrivendo un articolo per Aritmie, in uscita a breve.",
        // TODO: aggiungi qui cosa hai verificato (tipi di enti, cosa controllavi, periodo).
      ],
      // TODO: quando l’articolo è online, inserisci qui il link:
      // link: [{ url: "https://aritmie.wordpress.com/...", etichetta: "Leggi l’articolo su Aritmie.org" }],
      link: [],
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
      // TODO: quando il file è in files/prototipi/, togli i commenti e metti il nome giusto:
      // link: [{ url: "/files/prototipi/NOME-FILE.html", etichetta: "Apri il prototipo" }],
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
        { url: "/files/comunita-che-educa-comunita.pdf", etichetta: "Leggi il report" },
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
        "Il lavoro più delicato è stata la continuità: tornare, riconoscersi, riprendere il filo tra una scuola e l’altra.",
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

    {
      id: "erasmus-alumni-in-action",
      verbo: "attivare",
      titolo: "Erasmus+ Alumni in Action",
      contesto: "garagErasmus e INDIRE, Napoli",
      anno: "2026",
      sintesi: "Selezionato tra 20 ambasciatori europei per il laboratorio sul 40° anniversario di Erasmus+.",
      racconto: [
        "garagErasmus e INDIRE mi hanno selezionato tra i 20 ambasciatori europei del laboratorio strategico dedicato al 40° anniversario del programma Erasmus+.",
        "Il laboratorio, a Napoli, è partito dall’esperienza di chi il programma lo ha vissuto per ragionare su come può arrivare a chi non è ancora partito.",
      ],
      link: [],
    },

    {
      id: "assetto-giuridico-aritmie",
      verbo: "attivare",
      titolo: "Assetto giuridico di Aritmie",
      contesto: "Aritmie, collettivo culturale",
      anno: "", // TODO: periodo
      sintesi: "Atto costitutivo e statuto per dare forma di associazione a un collettivo culturale.",
      racconto: [
        "Aritmie è nata come blog e oggi gestisce una rivista trimestrale, podcast ed eventi. Per darle forma di associazione ho redatto atto costitutivo e statuto.",
        "Le scelte più delicate: le categorie di soci, un comitato editoriale indipendente, strumenti di assemblea digitale, i requisiti di eleggibilità per il direttivo. Poi la titolarità della testata e la raccolta di donazioni online, con il loro trattamento fiscale.",
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
        "Scrivo articoli, seguo la parte editoriale e organizzativa e mi sono occupato dell’assetto giuridico dell’associazione.",
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
        "L’obiettivo è che chi non c’era capisca cosa è successo in una scuola, in un quartiere, in un paese, senza che il racconto diventi uno slogan.",
      ],
      link: [],
    },
  ],

  scrittura: [
    {
      titolo: "Comunità che educa comunità",
      dove: "Report, Libera Avellino e scuole dell’Irpinia",
      anno: "2026",
      link: "/files/comunita-che-educa-comunita.pdf",
    },
    {
      titolo: "Sicurezza: sintomatologia di una nevrosi.",
      dove: "Aritmie.org",
      anno: "2026",
      link: "https://aritmie.wordpress.com/2026/10/13/sicurezza-sintomatologia-di-una-nevrosi/",
    },
    {
      titolo: "Il Codice del Pregiudizio. Eco, l’Ur-Fascismo e le macchine intelligenti.",
      dove: "Aritmie.org",
      anno: "2026",
      link: "https://aritmie.wordpress.com/2026/05/13/il-codice-del-pregiudizio-eco-lur-fascismo-e-le-macchine-intelligenti/",
    },
     {
      titolo: "Frontiere: rieducazione e detenzione",
      dove: "Aritmie.org",
      anno: "2024",
      link: "https://aritmie.wordpress.com/2024/05/13/frontiere-rieducazione-e-detenzione/",
    },
  ],

  chiSono: {
    bio: [
      "Mi sto laureando in Giurisprudenza (curriculum internazionale) all’Università del Sannio, con una tesi in informatica giuridica su modelli linguistici e grafi di conoscenza applicati all’analisi delle norme. Mi occupo di diritto del digitale e dell’Unione europea, trasparenza amministrativa e accountability.",
      "Lavoro anche fuori dall’aula. Sono di Avellino: con Libera Avellino porto laboratori di giustizia e legalità nelle scuole dell’Irpinia, ho fatto il Servizio Civile con ARCI su un’indagine sui bisogni delle aree interne, ho condotto laboratori in un carcere minorile. Scrivo su Aritmie, che ho co-fondato. È lì che le norme smettono di essere carta.",
    ],
    lavoroGiuridico: [
      { titolo: "Atto costitutivo e statuto", dove: "Aritmie, associazione culturale", anno: "" },
      { titolo: "Monitoraggio civico sul whistleblowing (D.Lgs. 24/2023)", dove: "Progetto nazionale, come volontario", anno: "2026" },
      { titolo: "Diritto delle nuove tecnologie e dell’AI", dove: "ELSA Winter Law School (Bruxelles) e Law Summer School (Sannio)", anno: "" },
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
