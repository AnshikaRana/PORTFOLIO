/* ---------------- PROJECTS: things Anshika built ---------------- */
const PROJECTS = {
  disha: {
    title:"Disha", kind:"Built · team of three",
    meta:"AI First Hackathon 2026 · I3C IIT Jammu × Techible · Summer School '26 · second runner-up",
    lead:"An early-warning and counselling system for coaching institutions. It reads the signals an institution already collects: attendance, marks, fee payments, wellbeing surveys, engagement. From those it raises a flag before a student disappears.",
    body:[
      "Three XGBoost risk engines run in parallel: dropout, wellbeing and depression. Their outputs are fused on a 0.4 / 0.3 / 0.3 weighting into one 0–100 score, and SHAP explains which factors drove it.",
      "Nothing escalates on a score alone. A safety and orchestration layer sits across the system, with human-in-the-loop approval before any third-party escalation and an append-only audit log. Routing is tiered: self-serve support at 0 to 10, targeted intervention at 11 to 20, teacher escalation at 21 to 39, and institutional authority above 40."
    ],
    figs:[["3","risk engines"],["0–100","fused score"],["4","escalation tiers"],["₹5,000","prize, second runner-up"]],
    team:["Anshika Rana, IGDTUW","Akash Pachauri, Thapar University","Ashish Beniwal, JK Lakshmipat University"],
    mine:[
      "I built the decision layer: everything downstream of the three risk models. The models say how worried to be; my part decides what happens next, and makes sure a person signs it off.",
      "Fusion combines the three scores on a 0.4 / 0.3 / 0.3 weighting and renormalises automatically when one is unavailable, so a missing wellbeing survey cannot quietly distort the result.",
      "Routing turns the fused score into an action rather than a label: self-serve support through an agentic bot below 11, targeted intervention (financial aid or a psychologist referral) up to 20, escalation to a teacher or advisor up to 39, and institutional involvement above that.",
      "The counselling chatbot retrieves from a tier-tagged knowledge base using TF-IDF and grounds both the student-facing reply and the counsellor's briefing in resources that were actually retrieved. It cannot offer help that does not exist.",
      "Guardrails are where the human stays in the loop. Every action is logged, and anything that reaches a third party, whether a teacher, a parent or an institutional authority, needs explicit human sign-off before it is marked approved, recorded in an append-only audit trail.",
      "Orchestration runs the pipeline for a single student and batches it across a cohort, which is what a weekly scheduler would call in production."
    ],
    certs:[["assets/aih-certificate.webp","Certificate of Achievement, AIH'26 Hackathon"],
           ["assets/aih-cheque.webp","Second runner-up award, ₹5,000"]],
    deck:["assets/deck-1.webp","assets/deck-2.webp","assets/deck-3.webp","assets/deck-4.webp","assets/deck-5.webp"],
    deckcap:"Pitch deck submitted to the AI First Hackathon, five slides",
    links:[["Watch the demo video","https://drive.google.com/file/d/1KTFKps_JkJmoRM7Z7s5eOk5XVZZJAS2u/view"],
           ["Repository","https://github.com/Ashish-Beniwal004/student-risk-ai-models"]]
  },
  athena: {
    title:"ATHENA", kind:"Built · solo",
    meta:"AI Research Scientist · IIT Jammu capstone · OpenAI SDK with a hand-built agent runtime",
    lead:"Carries a research question from \"I wonder…\" to a cited, publication-ready dossier, and it cannot cite a paper it never retrieved.",
    body:[
      "Ask a general chatbot for a literature review and you get fluent prose citing papers that do not exist; published fabrication rates run from 30% to 90% depending on the field. An assistant you must fact-check line by line has cost you more time than it saved.",
      "The answer here is architectural rather than persuasive. The Knowledge Synthesist can only cite what the Literature Review Agent actually placed in the shared corpus, and a deterministic guardrail rejects any paper id that is not in it. That check is a set lookup, not a model judgement. Fabrication is not discouraged by instruction; it is impossible by construction.",
      "Eight agents run a fixed sequence, because you cannot synthesise evidence you have not retrieved or design an experiment for a hypothesis you have not chosen. Each has one job and is forbidden the next one's: the Literature Review Agent may not interpret what it finds, the Citation Manager verifies but never writes a citation, and the Experiment Planner's sample size is computed by a power-analysis tool rather than guessed.",
      "The Scientific Writer owns the final save, and that save is gated on a human pressing approve."
    ],
    mine:[
      "Built alone, over the IIT Jammu summer internship.",
      "It runs without an API key: model reasoning falls back to clearly-labelled fixtures while literature search, PDF parsing, RAG indexing, transcription, statistics, citation handling and the approval gate all stay real, so the whole pipeline can be inspected by someone who has no key and no network."
    ],
    figs:[["8","specialised agents"],["18","tools"],["73","tests passing"],["0","citations it can invent"]],
    team:["Anshika Rana, IGDTUW"],
    shots:[["assets/athena-approval.webp","The approval gate firing. The agent has paused and will not continue until a person presses approve."],
           ["assets/athena-dossier.webp","A finished dossier, with the run's own counters above it: 88 chunks indexed, one approval, $0.35 spent."],
           ["assets/athena-power.webp","Sample size computed by the power-analysis tool rather than guessed by the model."],
           ["assets/athena-citation.webp","Citations verified against the retrieved corpus, then formatted."]],
    certs:[["assets/intern-certificate.webp","Internship certificate, AI (LLMs, GenAI, Automation & AI Agents), Summer School 2026"]],
    links:[["Repository","https://github.com/AnshikaRana/ATHENA-AI-Research-Scientist"]]
  },
  n8n: {
    title:"AI Research Assistant", kind:"Built · solo",
    meta:"IIT Jammu capstone · n8n · Assignment 8 · Research & Knowledge Management",
    lead:"Register a topic once. Every morning the system collects new papers from arXiv and Semantic Scholar, discards the ones that merely contain your keyword, summarises what survives, builds the references, and emails you a digest.",
    body:[
      "Eight workflows, 114 nodes, four data tables, five external services. Workflows hand off through status fields rather than direct calls, so any stage can be re-run alone.",
      "An LLM relevance gate at 0.70 does the filtering. A dedicated error handler and an append-only audit log record every run and every failure, which is what makes the output trustworthy rather than merely automatic."
    ],
    figs:[["36/36","papers summarised, no failures"],["114","functional nodes, 8 workflows"],["0.92–0.98","relevance of what it kept"],["1","discarded as noise"]],
    shots:[
      ["assets/n8n-form.webp","The live form, in front of the workflow that routes it. A submission ends in one of three places: duplicate, registered, invalid."],
      ["assets/n8n-run.webp","Workflow 01 after a run. Item counts and a tick on every node, so a failure shows up where it happened."],
      ["assets/n8n-fields.webp","Each summary is written back to the research_papers table as ten validated fields rather than free text."],
      ["assets/n8n-digest.webp","The weekly digest as it arrives. Emerging trends, what to read first, and the open questions."],
      ["assets/n8n-audit.webp","The audit log. Every run writes a row, failures included, so a bad run can be found and re-run alone."]
    ],
    deck:["assets/n8n-deck-1.webp","assets/n8n-deck-2.webp","assets/n8n-deck-3.webp",
          "assets/n8n-deck-4.webp","assets/n8n-deck-5.webp","assets/n8n-deck-6.webp",
          "assets/n8n-deck-7.webp","assets/n8n-deck-8.webp","assets/n8n-deck-9.webp"],
    decktitle:"Capstone deck",
    deckcap:"Capstone presentation, nine slides from the recorded walkthrough",
    links:[["Repository","https://github.com/AnshikaRana/research-assistant-n8n-capstone"]]
  },
  codereview: {
    title:"CodeReview NLP", kind:"Built · team of four",
    meta:"Group project · NLP · 210 pull requests from the Flask repository",
    lead:"A pull request is read by someone who has to decide, quickly, whether this code will still make sense in six months. CodeReview reads it first and reports on four things: the identifier names, the inline comments, the commit message, and the tone of the review comments.",
    body:[
      "Four modules run over the same pull request and each returns a score, the specific things it objected to, and a suggested fix. The four scores combine into one PR health score, so the number always comes with its reasons attached.",
      "The point is not to grade people. It is to catch the things that cost the next reader time: a variable called rv, a commit message that says fixes, a review comment that is correct but unkind."
    ],
    figs:[["210","pull requests scored"],["11,951","identifiers read"],["98","PRs with a flagged name"],["4","modules behind one score"]],
    team:["Anshika Rana, IGDTUW · data pipeline and name quality",
          "Ishu · comment quality",
          "Deepasha · commit quality and sentiment analysis",
          "Divyanshi · Streamlit integration and evaluation"],
    mine:[
      "The data pipeline. I wrote the scraper that pulls closed pull requests from the Flask repository through the GitHub REST API, seven pages of thirty, and walks each one down to its changed files. For every pull request it concatenates the diff patches into one block of code and stores that alongside the commit message and the review comments, so all four modules read the same flattened record. That produced the 210 pull request dataset the rest of the project is evaluated on.",
      "The naming module. It extracts every function definition and every assignment target from the diff using two regular expressions, then scores each name. Names in a known vocabulary of ordinary engineering terms score full marks. Names in a list of known placeholders score zero. Anything else is judged on structure: snake_case or camelCase of five characters or more, or a single word of six or more, counts as descriptive. Two characters or fewer does not.",
      "The module returns three things rather than one. A score normalised to 0 to 100, the list of identifiers it objected to, and a plain sentence for each one saying what to do about it. The scores and the flags are kept separate on purpose, because a score on its own tells the author nothing they can act on.",
      "Run over the whole dataset it reads 11,951 identifiers. 98 of the 210 pull requests carry at least one name it would ask you to change, and the most frequently flagged are the short Flask idioms: rv, bp, ctx, db."
    ],
    links:[["Repository","https://github.com/AnshikaRana/codereview-nlp"],
           ["Live app","https://codereview-nlp-igdtuw.streamlit.app/"]]
  },
};

/* ---------------- RESEARCH: papers ---------------- */
const RESEARCH = {
  pfca: {
    title:"A Protocol-Faithful Cross-Audit of Scientific Literature Search",
    kind:"First author", meta:"Anshika Rana and Rishabh Kaushal · IGDTUW · paper in drafting stage, targeting a journal · results complete",
    lead:"Four literature-search benchmarks each report their own winner on their own data. This audit asks a simple question nobody had tested: does the winner survive when you move it?",
    body:[
      "The evaluation protocols of LitSearch, DORIS-MAE, IRPAPERS and MAPLE were each run on all four datasets, giving sixteen cells. In every cell the dataset is rebuilt in the exact query, document and answer format that protocol expects, every open model the paper lists is run, and Recall@10 is reported alongside the paper's own native metrics.",
      "Findings, all tested with paired permutation tests under Holm correction. The native advantage holds for only two of four datasets. The protocol, not the query, drives recall: on identical queries BM25 moves 10 to 19 points when only the protocol changes. Longer queries do not raise recall. And rankings transfer poorly, with a mean Kendall τ of 0.41, with the native winner keeping first place in only three of nine comparisons."
    ],
    figs:[["16","evaluation cells"],["114","open-model runs"],["τ = 0.41","ranking transfer"],["2 of 4","native advantage holds"]],
    links:[["Live results dashboard","https://anshikarana.github.io/PFCA/"],["Repository","https://github.com/AnshikaRana/PFCA"]]
  },
  caer: {
    title:"CAER: A Culture-Conditioned Multimodal Framework for Affective Knowledge Retrieval",
    kind:"Second author",
    meta:"Kanan Mittal, Anshika Rana, Rashmi Chawla and Giancarlo Fortino · IEEE Transactions on Affective Computing · in progress",
    lead:"Whether affective models read the same expression differently depending on the culture their training data came from, and what that costs the people on the wrong side of the gap.",
    body:[],
    figs:[],
    links:[]
  },
  crop: {
    title:"Early Crop Type Classification",
    kind:"First author",
    meta:"Minor Project · B.Tech CSE (AI), IGDTUW · supervised by Dr. Himanshu Mittal · team of five · submitted to EmergIN 2027",
    lead:"Naming the crop growing in a field from Sentinel-2 time series as early in the season as possible, and knowing which of those early answers can be trusted.",
    body:[
      "Paper: Early Crop Type Classification via Dual-Branch Cross-Attention and Rotation-Aware Adaptive Gating. Submitted to EmergIN 2027, the 3rd International Conference on Emerging Technologies and Innovation for Sustainability, NIET Greater Noida, 5 to 6 February 2027.",
      "Early in the season few cloud-free Sentinel-2 observations exist, so models lean on last year's crop, which differs from this year's for about a quarter of fields. The baseline is Gené-Mola et al., Computers and Electronics in Agriculture, 2026, on the CatCrops dataset over Lleida in Catalonia: 18 crop classes, each field a series of 12 channels per satellite pass.",
      "The proposal splits the static facts about a field out of the time series: a transformer over the satellite series in one branch, elevation, slope, irrigation system and municipality in another, joined by cross-attention and FiLM. A rotation-aware gate scales last year's crop by how far this season's spectra have already diverged from it, and a class-balanced focal loss addresses the rare crops.",
      "Four runs, each adding one component to the one before (A baseline, B fusion, C gate, D focal loss), three seeds each, with model selection on 2022 only and testing on all 137,055 fields of 2023 at 1 March, 1 June, 1 September and 1 December."
    ],
    findings:[
      "A leakage-free baseline. Reproduced with model selection on 2022 only, the baseline matches the published late-season accuracy but sits 2 to 3 points below the published early-season figures (0.786 and 0.831 against 0.81 and 0.86 on 1 March and 1 June). The original study used the 2023 test fields for early stopping, the likely cause, so the paper reports these as leakage-free reference values.",
      "Equal accuracy early, with confidence that can be trusted. On 1 March and 1 June the full model is as accurate as the baseline (+0.005 and \u22120.002), but its expected calibration error is 61% and 63% lower (0.074 to 0.029, and 0.052 to 0.019), and every seed of the full model is below every seed of the baseline. The baseline is overconfident: fields it predicts with 0.8 to 0.9 confidence on 1 March are right only 69% of the time.",
      "Rare crops. Rare-crop F1 is 5.5 times higher on 1 March and 2.4 times higher on 1 June (0.008 to 0.044, and 0.034 to 0.083), with all five rare classes improving on both dates, although the absolute values remain low for every model.",
      "What each part does. The ablation attributes the calibration and rare-crop gains mainly to the class-balanced focal loss. The rotation gate responds to crop change in the intended direction, separating rotated from unchanged fields with an AUROC of 0.81 on 1 March, but the classifier's own probability for last year's crop already separates them better (0.91), so the gate adds no accuracy.",
      "Where the baseline wins. From 1 September the baseline is more accurate by 0.023 to 0.030, and about 70% of its additional correct fields are fields whose crop changed since the previous year, which points to the fusion step as the source of the gap.",
      "Conclusion. The paper recommends the proposed model for in-season maps, where calibrated confidence decides which fields can be accepted early and which should wait for more observations, and the baseline for final end-of-season maps. The full model also trains in about 40% less time per run, 50 instead of 82 minutes on a 4 GB laptop GPU. The findings come from one region, one pair of years and three seeds; future work will test a scaled encoding of static attributes, multi-year rotation histories and date-dependent calibration."
    ],
    figs:[["61\u201363%","lower calibration error, 1 March and 1 June"],["5.5\u00d7","rare-crop F1 on 1 March"],["0.81","AUROC of the rotation gate"],["40%","less training time per run"]],
    team:["Anshika Rana · model: baseline reproduction, both branches, fusion",
          "Ishu · data: CatCrops acquisition, preparation, day-of-year cropping",
          "Deepasha · rotation gate, class-balanced focal loss, trainer foundation",
          "Divyanshi · evaluation, ablations, experiment tracking",
          "Humaira · paper lead: IEEE manuscript, notation, documentation"],
    mine:[
      "The baseline, reproduced rather than cited. I re-implemented the CatCrops transformer against the official code: linear projection from 12 channels to 64, five post-norm encoder layers with two heads, max over time, a linear head to 18 classes, and the official dropout constant kept to its full precision. One deliberate difference is documented in the module: the official code feeds a zero-filled 365 day grid, and I feed the observed dates with a padding mask so empty days are skipped instead of entered as zeros.",
      "The two branches. The temporal branch is that same encoder fed only the time series. The static branch embeds irrigation system and municipality, projects elevation and slope, and returns both a 64 dimensional summary and one token per static fact.",
      "The fusion, which is where the design decision sits. Cross-attention lets each time step of the satellite series query the static facts, so the series can pick up the field context that matters at that point in the season. It needs four separate static tokens to work: with a single static vector as the key, the attention weights are always one and the layer quietly degenerates into adding a constant. FiLM then uses the static summary to scale and shift the pooled temporal features, with gamma starting at one and beta at zero so training begins from the plain temporal features and has to earn the rest."
    ],
    links:[["Repository","https://github.com/HumairaNaaz/Early-crop_classification"]]
  },
  yel: {
    title:"Policy Design, Unemployment Recovery and the Social Burden of the Eurozone Crisis",
    kind:"Co-author", meta:"Youth Economy Lab · Summer Cohort 2026 · with Moksh Patel · August 2026",
    lead:"How did differences in fiscal policy and crisis management affect unemployment recovery across the Eurozone?",
    body:["Compares France, Greece, Ireland, Italy, Portugal and Spain on unemployment, youth unemployment, government spending and GDP, drawn from the European Commission's Eurostat Data Browser, against the literature on austerity."],
    figs:[["6","countries compared"],["4","Eurostat series"]],
    links:[["Read the paper (PDF)","https://github.com/AnshikaRana/YEL-Project/blob/main/YEL%20Capstone%20Research%20Paper_Anshika%20Rana.pdf"],
           ["Repository","https://github.com/AnshikaRana/YEL-Project"]]
  }
};

/* ---------------- DEGREE: per-course detail ---------------- */
const C = (code,name,cr,grade,units,labs,note)=>({code,name,cr,grade,units:units||[],labs:labs||[],note:note||""});

const INTERNSHIPS = {
  iitj: {
    title:"IIT Jammu",
    kind:"Summer School 2026",
    meta:"AI: LLMs, GenAI, Automation and AI Agents \u00b7 10 June to 10 August 2026 \u00b7 hosted at IIT Jammu with Techible and I3C",
    lead:"Nine weeks on agent systems. Three of the four projects in this portfolio came out of it, and so did the habit of making a system show its working.",
    body:[
      "The programme ran on LLMs, generative AI, workflow automation and agent architectures, with a capstone at the end and a hackathon in the middle. I came out of it with two capstones and a prize.",
      "ATHENA was the first capstone: eight specialised agents behind one research assistant, with a citation layer that cannot invent a reference. The AI Research Assistant was the second: eight n8n workflows that register a topic, collect papers from two sources, filter them through a relevance gate, summarise what survives, archive the references and post a weekly digest.",
      "Disha came from the AI First Hackathon run inside the summer school, with a team of three from three universities. Second runner-up.",
      "What carried across all three is the same instinct: a system that acts on someone's behalf has to be able to show what it did and why, and a person has to be able to overrule it."
    ],
    figs:[["2","capstones built"],["3","of the projects here"],["2nd","runner-up, AI First Hackathon"],["9 wks","June to August"]],
    certs:[["assets/intern-certificate.webp","Internship certificate, AI (LLMs, GenAI, Automation and AI Agents), Summer School 2026, certificate TEC/IITJMU/SS26/C/M1/0360"]],
    links:[["ATHENA repository","https://github.com/AnshikaRana/ATHENA-AI-Research-Scientist"],
           ["Research Assistant repository","https://github.com/AnshikaRana/research-assistant-n8n-capstone"]]
  },
  cvdl: {
    title:"IGDTUW Anveshan Foundation",
    kind:"Summer 2025",
    meta:"Computer Vision and Deep Learning \u00b7 six week summer internship \u00b7 2 June to 11 July 2025",
    lead:"A summer spent on images: getting a model to find a thing in a frame, and to stop being able to recognise a face.",
    body:[
      "The work was built on OpenCV: real-time object detection, face anonymisation, and image segmentation.",
      "Face anonymisation is the piece worth keeping. Detecting a face and then deliberately destroying the information that identifies it is the same decision as the rest of my work, taken in the other direction: a system that can recognise someone is a system that can be told not to."
    ],
    figs:[["6 wks","2 June to 11 July 2025"],["3","areas of work"],["OpenCV","and Keras for the project"]],
    project:{title:"Wardrobe Assistant", body:[
      "A notebook that looks at photographs of your clothes, works out what each item is, and suggests what the wardrobe is missing.",
      "The classifier is a three-block convolutional network trained from scratch on the Re-PolyVore dataset: 4,950 images across 11 categories, from pants and tops to eyewear and bags, resized to 128 pixels and augmented with rotation, shifts, zoom and flips. After 30 epochs it reaches 74.6 percent accuracy on a held-out test set of 743 images.",
      "Around it sit three simpler steps: a dominant-colour reading for each photograph, a rule table for style and pairing, and a list of suggested additions for the categories the wardrobe lacks.",
      "What I learned: the classifier was the dependable part. The colour step averages every pixel, background included, so my own photographs all came out grey, and the pairing rules were written for labels the dataset does not use. Both taught me to test a pipeline on real inputs and not to stop at its accuracy figure."
    ]},
    certs:[["assets/intern-2025.webp","Certificate of completion, Computer Vision and Deep Learning, six week summer internship, Anveshan Foundation, IGDTUW"]],
    links:[]
  },
  pyml: {
    title:"IGDTUW Centre of Excellence, Artificial Intelligence",
    kind:"Summer 2024",
    meta:"Python and Machine Learning \u00b7 eight week summer internship \u00b7 3 June to 29 July 2024",
    lead:"The first one. Eight weeks on Python and the classical machine-learning stack, run by my own university's AI centre at the end of first year.",
    body:[
      "This is where the toolkit came from: Python, scikit-learn, the shape of a training loop, and the difference between a model that fits and a model that holds.",
      "Everything in the Projects chapter rests on this one, which is the honest reason it is here."
    ],
    figs:[["8 wks","3 June to 29 July 2024"],["1st","of three summers"],["Python","and the classical stack"]],
    project:{title:"Privacy-Enhanced Movie Recommendation System", body:[
      "A content-based recommender over 4,803 films. You type a title, and it returns the films most like it.",
      "Each film is described by its genres, keywords, tagline, cast and director. Those are turned into TF-IDF vectors and every film is compared with every other by cosine similarity. A misspelled title is matched to the closest real one before the search runs.",
      "The privacy part is a first step. I set up a differentially private optimiser from TensorFlow Privacy, with gradient clipping and Gaussian noise, as the route to a recommender that learns from people's histories without memorising any one of them. This version does not yet train with it.",
      "What I learned: how text features become vectors, how similarity search behaves across a few thousand items, and what differential privacy asks of a training loop before accuracy is even discussed."
    ]},
    certs:[["assets/intern-2024.webp","Certificate of completion, Python and Machine Learning, eight week summer internship, Centre of Excellence in Artificial Intelligence, IGDTUW"]],
    links:[]
  }
};

const COURSES = {
  // Semester 1
  "BAI 101": C("BAI-101","Intelligent Systems",3,"A",[
    ["Unit I","Intelligence, Intelligent Systems, Characteristics of Intelligent Systems, Knowledge vs Intelligence, Knowledge Representation, Reasoning, Deductive vs. Inductive vs. Abductive Reasoning, Propositional Logic, Inference Foundations of AI, Intelligent Agents, Structure of Intelligent Agent. Environment of Intelligent Agent. Case Studies."],
    ["Unit II","Importance of Data, Dataset, Introduction to Data driven approaches, Introduction to Machine Learning, Training and Testing, Various approaches to intelligent system, Pattern recognition and classification,"],
    ["Unit III","Domains of Intelligent Systems – Computer Vision, Natural Language Processing, Speech Processing, Mobile Robotics, Internet of Things (IoT), Intelligent IoT Applications, Drones, Intelligent Web Applications"],
    ["Unit IV","Intelligent Applications – Agriculture, Healthcare, Education, Smart Cities, Autonomous Vehicle."]],
    [], ""),
  "BAI 110": C("BAI-110","Programming with Python",4,"B",[
    ["Unit I","The Structuring Programming Principle, Program Structuring, Stepwise refinement, Introduction to Python programming language, The concept of data types, variables, assignments, immutable variables, numerical types, arithmetic operators, Data and Expressions, Literals, Variables and Identifiers, Understanding error messages, Conditions, Boolean Logic, Logical Operators, ranges, Control statements: if-else, loops (for, while);"],
    ["Unit II","Strings and text files; manipulating files and directories, os and sys modules; text files: reading/writing text and numbers from/to a file; creating and reading a formatted file (csv or tab separated); String manipulations: subscript operator, indexing, slicing a string, Lists, Tuples, and Dictionaries; basic list operators, replacing, inserting, removing an element; searching and sorting lists; dictionary literals, adding and removing keys, accessing and replacing values; traversing dictionaries; Function, Execution of A Function, Keyword and Default Arguments, Scope Rules."],
    ["Unit III","Exception, Testing and Debugging: Handling if exceptions to handle the code cracks, handling and helping file operations, coding with the exceptional handling and testing Anonymous method, Properties, Indexers, Exception Handling"],
    ["Unit IV","Python packages: Simple programs using the built-in functions of packages like matplotlib, numpy, pandas etc., Graphical user interfaces; Tkinter introduction, Tkinter and Python Programming, event-driven programming paradigm; creating simple GUI; buttons, labels, entry fields, dialogs; widget attributes - sizes, fonts, colors layouts, nested frames."]],
    [], ""),
  "HMC 110": C("HMC-110","Communication Skills",4,"B",[
    ["Unit I","Introducing Communication: Importance and function of Communication, Communication Cycle, Characteristics and Types of Communication, Channels and Medium of Communication, 7 C’s of Communication, Barriers to Communication. Ethics of Communication (plagiarism, language sensitivity towards gender, caste, race, disability etc."],
    ["Unit II","Everyday Communication: Non-Verbal Language (Symbols, Appearance, Paralanguage and Body Language, Proxemics, Chronemics), Listening Skills (Importance, Barriers, Essentials of Good Listening), Communication Skills (greetings, introducing, making requests, asking and giving permission, offering help and giving instructions and directions etc.), Understanding Telephone Skills (handling calls, leaving a message, asking and giving information and instructions etc.), Net Etiquettes."],
    ["Unit III","Presentations & Employment Communication: Classroom Presentations (purpose, types, preparing and presenting – use of visual aids/ power point presentations), Group Discussion (purpose, strategies, guidelines etc.), Job Application (Resume and Cover Letter), Interview Skills (purpose, types of interviews, guidelines and preparing for facing the interviews). Presentation, Group discussion and Mock interview practice should be undertaken in class."],
    ["Unit IV","Writing on the Job: Formal and Informal Writing, Basics of Paragraph Writing, Email Writing, Letters at the workplace, Meeting documentations (Agenda and Minutes of meeting etc.), Report Writing (characteristics, types, structure of formal report)."]],
    [], ""),
  "BAI 103": C("BAI-103","Computer Organization",4,"",[
    ["Unit I","Digital Logic Circuit: Basic Logic functions, Synthesis of logic functions using basic and universal gates, Boolean Algebra Properties, Flip-Flops, Registers, Shift- Registers, Counters, Decoders, Multiplexers, Functional Unit of computer system. Data Representation: Data types, R & (R-1)’s Complements, Fixed-Point representation, Floating point representation. Register Transfer and Micro operations: Register transfer language, register transfer, Bus and Memory transfer, Arithmetic Micro operations, Logic Micro operations, Shift Microoperations"],
    ["Unit II","Basic Computer Organisation and Design: Instruction Codes, Computer Instructions, Timing and Control, Instruction Cycle, Memory Reference Instructions, Input-Output and Interrupt. Micro programmed Control: Control Memory. Central Processing Unit: Stack Organization, Instruction Formats, Addressing Modes, Program Control, Reduced Instruction Set Computer: RISC characteristics, CISC characteristics. Performance and Metrics"],
    ["Unit III","Pipelining and Vector Processing: Parallel Processing, Pipelining, Arithmetic Pipelining, Instruction Pipelining, RISC Pipelining, Vector Processing, Array Processors. Computer Arithmetic: Addition and Subtraction, Multiplication Algorithms, Division Algorithms, Floating- Point Arithmetic Operations."],
    ["Unit IV","Input-Output Organization: Peripheral Devices, Input-Output interface, Asynchronous data transfer, Modes of transfer, Priority Interrupt, Direct Memory Access. Memory organization: Memory Hierarchy, Main Memory, Auxiliary Memory, Associative Memory, Cache Memory, Virtual Memory, Memory Management Hardware."]],
    [], ""),
  "BAS 107": C("BAS-107","Applied Physics",4,"",[
    ["Unit I","OPTICS Coherent Sources, Temporal and Spatial Coherence, Interference due to Division of wave- front and Division of Amplitude, Interference in Parallel Thin Films, Fresnel Diffraction at Straight Edge, Fraunhofer Diffraction due to Single Slit, N Slits, Diffraction Grating (absent spectra, maxima, resolving and dispersive power of grating (Formula only without derivation) Polarization, Malus Law, Brewster Law, Double Refraction, Nicol Prism, Production of Plane, Elliptically and Circularly Polarized Light."],
    ["Unit II","ELECTRO MAGNETIC THEORY Introduction to gradient divergence, curl, Gauss divergence theorem and Stoke’s theorem (without proof). Electromagnetic Waves, Electromagnetic spectrum, Equation of Continuity, Maxwell’s Equations, Poynting Theorem (No Derivation), Propagation of Electromagnetic Waves in Free Space, Dielectric and Conducting Medium (Qualitative), Skin Depth."],
    ["Unit III","QUANTUM MECHANICS Origin of Quantum Mechanics, De Broglie Hypothesis, Heisenberg Uncertainty Principle, Postulates of Quantum Mechanics, Wave Function and Properties, Group and Phase velocity, Time Independent Schrodinger Wave Equation, Particle in 1-D Box."],
    ["Unit IV","LASER AND OPTICAL FIBER COMMUNICATION Stimulated and Spontaneous Emission, Principle of LASER, Einstein’s A and B Coefficients, Components of LASER, He-Ne LASER. Optical Fibers, Step Index and Graded Index Fibers, Numerical Aperture, Acceptance angle, Pulse Dispersion in Optical Fibers, Schematic of optical fiber communication."]],
    [], ""),
  "BAS 109": C("BAS-109","Applied Mathematics",4,"",[
    ["Unit I","Inverse of a matrix by elementary transformations, Rank of a matrix (Echelon & Normal form), Linear dependence, Consistency of linear system of equations and their solution, Characteristic equation, Eigen values and eigen vectors, Cayley-Hamilton Theorem (without proof).."],
    ["Unit II","A brief Introduction to Vector Spaces, Subspaces, Rank and Nullity, Linear Transformations Laplace Transforms: Defn, Laplace transforms of some standard functions, inverse Laplace transforms, Convolution theorem. Fourier Series: Fourier Series, Fourier Series of even and odd functions, Fourier Series of functions having arbitrary periods, half range expansion. Fourier Transforms: Fourier transform, Sine and Cosine transforms"],
    ["Unit III","Differential Calculus: Functions of several variables: Limits, continuity and differentiability, Successive differentiation, Leibnitz theorem, Partial differentiation, Euler’s Theorem for homogenous equations. Composite functions, Change of variables, Taylor’s and Maclaurin’s Series, maxima and minima, Lagrange’s method of undetermined multiplier."],
    ["Unit IV","Vector Calculus : Vector point functions, Gradient, Divergence and Curl and their physical interpretation, Line integrals, Multiple Integrals, Change of order of integration, Surface and Volume integrals, Green’s, Gauss Divergence and Stoke’s theorems (without proof)."]],
    [], ""),

  // Semester 2
  "BAI 108": C("BAI-108","IT Workshop",2,"A",[
    ["Unit I","An overview of R language: Basic fundamentals, installation and use of software, data editing, use of R as a calculator, functions and assignments. Getting R and Running R, R Packages Expressions, Objects, Symbols, Functions Special Values"],
    ["Unit II","Constants, Numeric vectors, Character Vectors, Operators. R Syntax, Data Structure in R (Matrices, Arrays, Factors, Data frames), Attributes, Symbols and Environment, Functions, Loading, Saving, and Editing Data in R, Combining Datasets, Transformations, Binning Data"],
    ["Unit III","Subsets, Summarizing Functions, Data Cleaning. Analyzing Data, Probability Distribution, Continuous Data , Discrete Data, T-test Design, Anova Test Design, Introduction to Regression, Linear model, Smoothening"],
    ["Unit IV","Graphics and Plots: Scatter Plots, Bar Charts, Pie Charts, Three-dimensional Data, Plotting Distribution, Customizing Charts, Basic Graphic Functions, Common Arguments for Chart Functions."]],
    [], ""),
  "BAI 106": C("BAI-106","Database Management",4,"B",[
    ["Unit I","Overview of Concepts and Conceptual Database Design, Characteristics of the Database, DBMS Architecture, File System vs Database System, Database Administrator and Database Users, Data Models, Schemes and Instances, Data Independence, Database Languages and Interfaces, Data Models"],
    ["Unit II","Entity-Relationship Model, Strong and Weak Entity Sets, Generalization, Specialization, and Aggregation, Relational Model, Languages and Systems: Relational Model Concepts, Relational Model Constraints, Translating your ER Model into Relational Model, Relational Algebra. SQL: A Relational Database Language, Data Definition/Manipulation/Control in SQL, Specifying Constraints and Indexes in SQL, View and Queries in SQL, Practicing SQL commands"],
    ["Unit III","Relational Database Design: Functional Dependencies & Normalization for Relational Databases, Functional Dependencies, Normal Forms (1NF, 2NF, 3NF, BCNF, 4NF, 5NF), Lossless Join and Dependency Preserving Decomposition, Multivalued Dependency, Join Dependency. Transaction Management: Transaction Concept and State, ACID Properties, Concurrency Control: Lock-Based Protocols, Timestamp-based Protocols, Recovery from Transaction Failures, Log based Recovery, Checkpoints, Deadlock Handling"],
    ["Unit IV","Query Processing: Query Processing Overview, Measures of Query Cost. Introduction to Object Oriented and Object Relational Data Models Database Programming: Exceptions, Cursors, Procedures, Functions, Triggers"]],
    [], ""),
  "BAS 106": C("BAS-106","Environmental Science",4,"B",[
    ["Unit I","Natural Resources, Conservation and Management: Forest resources: Use and over- exploitation, deforestation, Timber extraction, mining, dams and their effects on forest and tribal people. Water resources: Use and overutilization of surface and ground water, floods, drought, conflicts over water. Mineral resources: Environmental effects of extracting and using mineral resources. Food resources: World food problems, changes caused by agriculture and over-grazing, effects of modern agriculture, fertilizer-pesticide problems, water logging, salinity. Energy resources: Growing energy needs renewable and non-renewable energy sources. Resource Management-Concept of Sustainable development, Environmental Management Systems, Environmental Impact Assessment, Biodiversity- conservation and threats."],
    ["Unit II","Environmental Pollution and Control: Air Pollution: Types of air pollutants; Source, effects, sink & control of common air pollutants (CO, oxides of nitrogen & sulphur, hydrocarbons and particulates), Photochemical smog, acid rain, greenhouse effect, global warming, Carbon dioxide sequestration and the concept of Carbon Credits Water Pollution: Classification of pollutants and their sources, Waste water treatment (Primary, secondary and tertiary treatment), Impact of water pollution on hydrological ecosystems. Solid and Hazardous Waste Pollution: Classification, waste treatment and disposal methods: Sanitary landfill, thermal processes, chemical and biological processes, disposal methods for nuclear waste, nuclear disaster (case study), disposal methods for e-waste. Green Technology And Green Chemistry: Introduction to concept of Green Technology and Zero Waste Technology, Green Chemistry & its basic principles, Atom Economy, evaluation of feedstock, reaction types, methods, reagents and solvents."],
    ["Unit III","Fuels and Alternate Energy Sources: Classification, Calorific value of fuels (gross and net), Dulong’s formula, Determination of calorific value of fuels using bomb’s calorimeter, Determination of calorific value of fuels using Boy’s Gas Calorimeter (Numericals). Liquid fuels- petroleum chemical composition, fractional distillation, Cracking – Thermal & catalytic cracking, Octane &Cetane numbers with their significance. Analysis of flue gases (Orsat’s Apparatus)- (Numericals), Combustion of fuels. Use of alternate energy sources including solar energy harnessing (photovoltaics), wind energy, hydroenergy, geothermal energy, ocean energy, biodiesel, power alcohol, biomass energy."],
    ["Unit IV","Chemical Toxicology and Eco-Friendly Polymers : Toxicology: terminology & toxic effects, chemical interactions, impact of toxic chemicals on enzymes, Biochemical effects of arsenic, mercury, lead, chromium, & cadmium. Polymers. Introduction: Functionality of monomer, polymerization, degree of polymerization, Number average and weight average molecular weight of polymers. Environmental degradation of polymers: Biodegradable, Photo-biodegradable polymers, Hydrolysis & Hydro-biodegradable polymers Biopolymers & Bioplastics."]],
    [], ""),
  "BAI 104": C("BAI-104","Intro to Data Science",4,"",[
    ["Unit I","Data Science Overview, Evolution of Data Science, Data Science Roles, Tools for Data Science, Applications of Data Science Data Science Process Overview, Defining Goals, Retrieving Data, Data Preparation, Data Exploration, Data Modeling, Presentation Data Science Ethics, Doing good Data Science, Owners of the Data, Valuing different aspects of Privacy, Getting Informed Consent, The Five Cs of Data Science, Diversity, Inclusion, Future Trends in Data Science."],
    ["Unit II","Mathematical Computing with Python (NumPy):Working with NumPy Arrays, Data Types, Array Creation, Indexing and Slicing, Numerical Operations on Arrays, Array Functions, Data Processing using Arrays, Loading and Saving Data, Saving an Array, Loading an Array, Numpy Random Numbers Data Manipulation with Pandas: Data Wrangling, Data Exploration, Cleaning Data, Filtering, Merging Data, Reshaping Data, Data Aggregation, Reading and Writing Files, Loading and Saving Data with Pandas"],
    ["Unit III","Data Visualization in Python, Understanding Data Visualization, Creating different Visualization like Bar Charts, Line Plot, Area Plots, Histograms, Pie Charts, Box Plots, Scatter Plots, Time Series plots, Figures and Subplots, Plotting Functions with Pandas ."],
    ["Unit IV","Data Visualization using non programming tools like Tableau. Work with Filter, Parameters, Sets. Arithmetic and logical table. Data visualization techniques such as heat map, tree map, Pareto. Interactive dashboards, story interfaces, and how to share your work. Texts Books:"]],
    [], ""),
  "BAI 102": C("BAI-102","OOP using Java",4,"",[
    ["Unit I","An Overview of Java, Data types, Variables and Arrays, operators, expressions, control statements. Object-oriented thinking- A way of viewing world – Agents and Communities, messages and methods, Responsibilities, Classes and Instances, Class Hierarchies- Inheritance, Method binding, Overriding and Exceptions, Summary of Object-Oriented concepts. Java buzzwords, Introducing classes, Methods and Classes, String handling."],
    ["Unit II","Inheritance– Inheritance concept, Inheritance basics, Member access, Constructors, Creating Multilevel hierarchy, super uses, using final with inheritance, Polymorphism-ad hoc polymorphism, pure polymorphism, method overriding, abstract classes, Object class, forms of inheritance- specialization, specification, construction, extension, limitation, combination, benefits of inheritance, costs of inheritance. Packages- Defining a Package, CLASSPATH, Access protection, importing packages."],
    ["Unit III","Interfaces- defining an interface, implementing interfaces, Nested interfaces, applying interfaces, variables in interfaces and extending interfaces. Stream based I/O(java.io) – The Stream classes-Byte streams and Character streams, Reading console Input and Writing Console Output, File class, Reading and writing Files, Random access file operations, The Console class, Serialization, Enumerations, auto boxing, generics. Exception handling – Fundamentals of exception handling, Exception types, Termination or resumptive models, Uncaught exceptions, using try and catch, multiple catch clauses, nested try statements, throw, throws and finally, built- in exceptions, creating own exception sub classes."],
    ["Unit IV","Multithreading- Differences between thread-based multitasking and process- based multitasking, Java thread model, creating threads, thread priorities, synchronizing threads, inter thread communication. Event and GUI programming : Event handling in java, Event types, Mouse and key events, GUI Basics, Panels, Frames, Layout Managers: Flow Layout, Border Layout, Grid Layout, GUI components like Buttons, Check Boxes, Radio Buttons, Labels, Text Fields, Text Areas, Combo Boxes, Lists, Scroll Bars, Sliders, Windows, Menus, Dialog Box, Applet and its life cycle, Introduction to swing."]],
    [], ""),
  "BAS 108": C("BAS-108","Probability & Statistics",4,"",[
    ["Unit I","Concept of probability, additive and multiplicative law of probability, total and conditional probabilities, Baye’s theorem. Measures of central tendency, dispersion, kurtosis, moments. Random Variables, density and distribution functions, mathematical expectation, variance, standard deviation and moment generating function."],
    ["Unit II","Jointly distributed random variables, Marginal and conditional distributions, Expected values, Covariance and Correlation. Central limit theorem (for independent and identically distributed random variables)."],
    ["Unit III","REGRESSION Binomial, Poisson, Geometric, Uniform, Exponential and Normal distributions. Linear Correlation, Correlation Coefficient, Rank Correlation Coefficient, Regression."],
    ["Unit IV","Formation of Hypothesis, Test of significance: Large sample test for single proportion, Difference of proportions, Single mean, Difference of means, and standard deviations. Test of significance for small samples: t- Test for single mean and difference of means, t-test for correlation coefficients, F- test for ratio of variances, Chi-square test for goodness of fit and independence of attributes. Case Study / Implementation of above concepts using Excel."]],
    [], ""),

  // Semester 3
  "BAI 201": C("BAI-201","Artificial Intelligence",4,"B+",[
    ["Unit I","Introduction to AI: Brief introduction about Intelligent agents and Problem Solving. Turing Test. Uninformed Search Strategies, Informed Search Strategies, Heuristics. Solving problems by searching, BFS, DFS, Issues in design of Intelligent Search Algorithms."],
    ["Unit II","Knowledge Representation: Knowledge Representation using predicate logic, Rule Based Systems, Ontology, WordNet and Concept Net as Knowledge representation tool Programming with Prolog/Lisp. Text Feature Extraction - BoW Model, TF-IDF. Word Embeddings - Word2Vec, GloVe."],
    ["Unit III","Decision Making in Uncertainty: Handling Uncertainty, Probabilistic Reasoning, Fuzzy Logic, Learning by induction, Introduction to Neural Network Genetic Algorithms basics. Rough Sets. Case Studies of Applications of Uncertainty"],
    ["Unit IV","Real World Applications of AI: Real World Applications of AI: Expert System Architecture Case Studies: MYCIN, Applications in NLP, Medical Sciences, Social Network Analysis Information Retrieval from Search Engines and Metasearch Engines, IoT Applications & BigData Analytics Applications. Ethics in AI."]],
    [], ""),
  "BAI 253": C("BAI-253","Internship",1,"B+",[],
    [], "~Industrial training, semester 3. Assessed as training, so the curriculum carries no unit syllabus for it."),
  "BCS 203": C("BCS-203","Discrete Structures",4,"B",[
    ["Unit I","Propositional logic: Syntax, semantics, valid, satisfiable and unsatisfiable formulas, Mathematical reasoning, propositions, negation disjunction and conjunction, implication and equivalence, truth tables, predicates quantifiers, natural deduction, rules of Inference Methods of proofs: Forward proof, proof by contradiction, contra positive proofs, proof ofnecessity and sufficiency."],
    ["Unit II","Sets, relations and functions: Operations on sets, relations, binary relations, partial ordering relations, equivalence relations and partitions, Partial orderings, Posets, Linear and well ordered sets, principles of mathematical induction. Functions, mappings, injection and surjections, composition of functions, inverse functions, special functions; Peono postulates pigeonhole principle; recursive function theory. Size of a set:Finite and infinite sets, countable and uncountable sets, Cantor's diagonal argument and the power set theorem, Schröder-Bernstein theorem."],
    ["Unit III","Algebraic structures and Morphisms: Algebraic structures with one binary operation - semigroups, monoids and groups, subgroup and their properties, congruence relation and quotient structures. Free and cyclic monoids and groups, permutation groups, substructures, normal subgroups. Algebraic structures with two binary operations - rings, integral domains and fields.Boolean algebra and Boolean ring."],
    ["Unit IV","Graphs and trees: Terminology, Graphs and their basic properties - degree, path, cycle, subgraphs, isomorphism, Eulerian and Hamiltonian walks, Graph coloring, planar graphs, directed graphs, Trees terminology, tree traversals, spanning trees."]],
    [], ""),
  "BCS 201": C("BCS-201","Data Structures",4,"",[
    ["Unit I","Introduction: Introduction to Algorithmic, Complexity- Time-Space Trade off. Introduction to abstract data types, design, implementation and applications. Introduction to List data structure. Arrays and Strings: Representation of Arrays in Memory: one dimensional, Two dimensional and Multidimensional, Accessing of elements of array, performing operations like Insertion, Deletion and Searching. Sorting elements of arrays. Strings and String Operations."],
    ["Unit II","Stacks and Queues: Introduction to data structures like Stacks and Queues. Operations on Stacks and Queues, Array representation of Stacks, Applications of Stacks: recursion, Polish expression and their compilation conversion of infix expression to prefix and postfix expression, Operations of Queues, Representations of Queues Applications of Queues Priority queues. Linked Lists: Singly linked lists, Representation of linked list, Operations of Linked listsuch as Traversing, Insertion and Deletion, Searching, Applications of Linked List. Concepts of Circular linked list and Doubly linked list and their Applications. Stacks and Queues as linked list."],
    ["Unit III","Trees: Basic Terminology, Binary Trees and their representation, binary search trees, variou operations on Binary search trees like traversing, searching, Insertion and Deletion Applications of Binary search Trees, Complete Binary trees, Extended binary trees. Generatrees, AVL trees, Threaded trees, B- trees. Searching and Sorting: Linear Search, Binary search, Interpolation Search, Insertion Sort Quick sort, Merge sort, Heap sort, sorting on different keys, External sorting."],
    ["Unit IV","Graphs: Terminology and Representations, Graphs & Multi-graphs, Directed Graph Representation of graphs and their Transversal, Spanning trees, shortest path and Transitive Closure, Activity Networks, Topological Sort and Critical Paths. File Structure: File Organization, Indexing & Hashing, Hash Functions, Collision Resolution Techniques."]],
    [], ""),
  "BIT 203": C("BIT-203","Software Engineering",4,"",[
    ["Unit I","Introduction: Introduction of Software (SW), Type of Software, SW Components: Process People, Project, Product, Software crisis, Software Process Models: Details of People involve in each Process, SDLC methods/models: Build & Fix, Waterfall, Prototype (Evolutionary & Throw-away), Iterative, Incremental iterative, Spiral, RAD, Agile methodology."],
    ["Unit II","Requirement Analysis & Specifications: Requirement Analysis, Requirement Specification,Approaches to Requirement analysis, Specifying Behavioural & Non-Behavioural Requirements, SRS Components & various User’s of SRS. Introduction of Requirement Specification: Dataflow(DF) Diagram, Data dictionaries, Entity-Relationship (ER) diagram, Object Diagram etc., Requirement Validation."],
    ["Unit III","Software Design and Testing: Design Architecture and Patterns, Modularity, Function oriented design, Object Oriented Design, Software Testing: Software Testing Strategy and Techniques, Functional testing, Structural testing, Debugging and testing tools, SW/HW reliability, Reliability concepts and models, Reliability allocation, Software Maintenance: Introduction to SW Maintenance and types, SW Maintenance models: Re- engineering &Forward Engineering."],
    ["Unit IV","Software Project Planning: Role of Software Project Planning, Estimation method, Estimationof Effort & Schedule, Software Metrics: Introduction to Size metrics, Data structure metrics information flow metrics, entropy-based measures, metric analysis. Basic COCOMO, Intermediate COCOMO, Detailed COCOMO, Quality Planning, Planning Parameter, Quality Defect Removal Cycle, Role of Risk Analysis."]],
    [], ""),
  "BAS 203": C("BAS-203","Numerical Methods",4,"",[
    ["Unit I","Floating-Point Numbers: Floating-point representation, rounding, chopping, error analysis, -conditioning and stability. Non-Linear Equations: Bisection, secant, fixed-point iteration, Newton method for simpleand multiple roots, their convergence analysis and order of convergence."],
    ["Unit II","Linear Systems and Eigen-Values: Gauss elimination method using pivoting strategies, LU decomposition, Gauss- Seidel and successive-over-relaxation (SOR) iteration methods and thei convergence, ill and well-conditioned systems, Rayleigh's power method for eigen- values and eigen-vectors."],
    ["Unit III","Interpolation and Approximations: Finite differences, Newton's forward and backward interpolation, Lagrange and Newton's divided difference interpolation formulas with error analysis, least square approximations. Numerical Integration: Newton-Cotes quadrature formulae (Trapezoidal and Simpson's rules) and their error analysis, Gauss--Legendre quadrature formulae."],
    ["Unit IV","Differential Equations: Solution of initial value problems using Picard, Taylor series, Euler'sand Runge- Kutta methods (up to fourth-order), system of first-order differential equations."]],
    [], ""),
  "GEC 201": C("GEC-201","Introduction to Airplane Performance (NPTEL)",2,"",[],
    [], "~Generic Open Elective, taken as an online course through NPTEL."),

  // Semester 4
  "BAI 204": C("BAI-204","Optimization Techniques",4,"A",[
    ["Unit I","Introduction to optimization: Engineering application of Optimization, Formulation o design problems as mathematical programming problems. General Structure of Optimization Algorithms, Constraints, The Feasible Region."],
    ["Unit II","Branches of Mathematical Programming: Optimization using calculus, Graphical Optimization, Linear Programming, Quadratic Programming, Integer Programming, Semi Definite Programming."],
    ["Unit III","Optimization Algorithms: Genetic Optimization, Particle Swarm Optimization, Ant Colony Optimization etc. Real life Problems and their mathematical formulation as standard programming problems. Recent trends: Applications of ant colony optimization, geneticsand linear and quadratic programming in real world applications."],
    ["Unit IV","Decision Making: Basic Steps in Decision Analysis, Decision-Making Environment Decision Making Under Uncertainty, Decision Making Under Risk, Utility Theory, Decision Tree, Group Decision Making: GDM Methods, Content-Oriented Methods, Multicriteri Decision Making."]],
    [], ""),
  "BIT 202": C("BIT-202","Operating Systems",4,"B+",[
    ["Unit I","Introduction: Introduction to Operating System, Types of O.S: Simple Batch, Multi programmed Batched, Time- Sharing, Personal-computer, Parallel, Distributed, Real-Time Mobile Operating-System Structures: Layered Architecture, System Calls, System Programs, System Structure, Virtual Machine Processes: Process Concept, Process Scheduling, Operations on Processes, Cooperating Processes, Inter- process Communication, Threads, Multithreaded Programming. CPU Scheduling: Basic Concepts, Scheduling Criteria, Scheduling Algorithms, Multiple-Processor Scheduling, Real-Time Scheduling"],
    ["Unit II","Process Synchronization: Background, Critical-Section Problem, Synchronization Hardware Semaphores, Classical Problems of Synchronization, Critical Regions, Monitors. Memory Management: Background, Logical versus Physical Address space, Swapping Contiguous allocation, Fragmentation, Paging, Segmentation, Segmentation with Paging Virtual Memory: Demand Paging, Page Replacement, Page-replacement Algorithms Performance of Demand Paging, Allocation of Frames, thrashing. Deadlocks: System Model, Deadlock Characterization, Methods for Handling Deadlocks, Deadlock Prevention, Deadlock Avoidance, Deadlock Detection, Recovery from Deadlock"],
    ["Unit III","Device Management: Techniques for Device Management, Dedicated Devices, Shared Devices, Virtual Devices Secondary-Storage Structure: Disk Structure, Disk Scheduling, Disk Management, Swap-Space Management, Disk Reliability, Stable-Storage Implementation"],
    ["Unit IV","Information Management: Introduction, Simple File System, General Model of a File System Symbolic File System, Basic File System, Access Control Verification, Logical File System Physical File System File-System Interface: File Concept, Access Methods, Directory Structure, Protection, and Consistency Semantics. File-System Implementation: File-System Structure, Allocation Methods, Free-Space Management, Directory Implementation, Efficiency and Performance Recovery."]],
    [], ""),
  "HMC 202": C("HMC-202","Disaster Management",2,"B+",[
    ["Unit I","Concepts and definitions of disaster - hazard, vulnerability, resilience, risks, rehabilitation reconstruction, search and rescue before, during and after disasters. Disaster Profile of India – Mega Disasters of India and Lessons Learnt."],
    ["Unit II","Categories of disasters -Natural disasters – earthquake, cyclone, landslide, flood, tsunami, he waves, cold waves, avalanches, Man-made disasters – fire, urban fire, forest fire, Chemica biological, radiological and nuclear disasters, armed conflict and civil strife, oil and Gasleakag Transport disasters Factors affecting Vulnerabilities, impact of Development projects such a dams, high rise constructions etc."],
    ["Unit III","Geo-informatics in Disaster Management (RS, GIS, GPS and RS), Disaster Communication System (Early Warning and Its Dissemination), Use of ICT, mobile technology, alarms etc, Application of Drone."],
    ["Unit IV","Disaster Management Act 2005, Disaster Management National Policy, Disaster Management cycle, Role of Government (local, state and national), Non-Government, Inter-Governmental and UNAgencies. Practical Component Demonstration of Cardiopulmonary Resuscitation (CPR) Demonstration of Search and Rescue Operations, Earthquake Evacuation Drill Demonstration of Fire Drill"]],
    [], ""),
  "BAI 202": C("BAI-202","Computer Networks",4,"B",[
    ["Unit I","Evolution of Computer Networking-Types of Network- networks topologies-Protocols & standards-Network Devices-The OSI reference model- TCP/IP Reference Model. Physical Layer: transmission media, twisted pairs, coaxial cable, fiber optics, Wireless transmission."],
    ["Unit II","Data Link Layer Design Issues-Services provided to the Network Layer-Framing-Error Control-Flow Control- Error Detection and Correction- Elementary Data Link Protocols-Sliding Window Protocols, A one-bit sliding window protocol, A protocol using Go-Back-N,A protocol using Selective Repeat, Example data link protocols. Medium Access sub layer:The channel allocation problem, Multiple access protocols: ALOHA, Carrier sense multiple access protocols, collision free protocols. Wireless LANs, Data link layer switching, Multiple Access Protocols-An overview of IEEE Standard for LANs, MAC Address."],
    ["Unit III","Introduction to Network Layer – Services – Circuit Switching Vs Packet Switching-Packet Switched Networks-Types of Routing-routing algorithms- congestion control algorithms, Hierarchical routing, Broadcast, Multicast, distance vector routing -Network Protocols-IP-IPV4, IPV6, Subnets, Gateways- Congestion Avoidance in Network Layer, Quality of Service, Internetworking, The Network layer in the internet"],
    ["Unit IV","The Transport Services – Services provided to the upper layers –Elements of transport Protocols – Internet Transport Protocols- Congestion Controls in Transport Layer Principles of Network Applications-Web and HTTP-Electronic mail-DNS Application Layer –Domain name system, SNMP, Electronic Mail; the World WEB, HTTP,Streaming audio and video Overview of Network Security"]],
    [], ""),
  "BCS 204": C("BCS-204","Algorithms",4,"",[
    ["Unit I","Introduction: Algorithm definition and specification, analysis of algorithmic efficiency of algorithms Review of growth of function, space complexity, time complexity, Recurrences Substitution method, Iteration method, Master method, Divide and Conquer Approach:merge Sort, quick sort, shell sort, heap sort, Simultaneous Max and Min Problem, Strassen’s algorithm for matrix multiplications."],
    ["Unit II","Greedy Algorithms: Elements of Greedy strategy, knapsack problem, job sequencing with deadlines, minimum spanning trees, Activity selection problem, Huffman Codes. Dynamic Programming: Elements of Dynamic Programming, Matrix Chain Multiplication, Longest common subsequence and optimal binary search trees problems."],
    ["Unit III","Graph Algorithms: DFS, BFS, Topological Sort, Strongly Connected Components Kruskal’ and Prim’s algorithm for MST, Dijkstra’s and Bellman Ford Algorithm, All pair shortest path Algorithm. Back Tracking: General method, n-queen’s problem, Branch and Bound: General Method, 0/1 knapsack."],
    ["Unit IV","String matching: Naïve String Matching algorithm, Rabin-Karp Algorithm, String Matching with finite automata, The Knuth-Morris Pratt algorithm. NP-Complete Problem: Polynomial time verification, NP- Completeness and Reducibility, NP-Completeness Proof, NP-Complete problems."]],
    [], ""),
  "BMA 210": C("BMA-210","Operations Management",4,"",[
    ["Unit I","Introduction –Introduction to productivity, Multi Factor productivity, Principles omanagement, Organization structure. Capacity Planning, Plant Location and Plant Layout – Introduction, need for selecting asuitable location, Location Factors, Quantitative Method, Principles of Plant layout, Type of Layout – Product, Process, Fixes Position, Cellular Layout."],
    ["Unit II","Demand Forecasting-Need for demand forecasting, Techniques of forecasting, Time series analysis, Least Square Method, Moving Average, Exponential Method and Qualitative Techniques. Method Study- Introduction, Objectives Steps, Micromotion Study, Cycle graph and chronocycle graph, Therbligs and SIMO charts. Work Study – Objectives, Different Techniques, Standard Time, Allowances, Time study Numerical, Performance Rating, Work sampling. Process and Product Life Cycle, Material Requirement Planning – Introduction, MRP objectives, Functions served by MRPProduction Planning and Control, Supply chain and Logistics Management, Production Scheduling."],
    ["Unit III","Inventory Management - Introduction, Reasons for Holding Inventories, Relevant Costs o Inventories, EOQ models, Quantity Discount Models, Safety Stock, Inventory control system Selective Control of Inventory ABC analysis, VED analysis. Production Cost Concepts – Introduction, Cost of Production, Classification and analysis of Cost, break even analysis, Make and Buy."],
    ["Unit IV","Industrial Maintenance – Concepts of Maintenance, Organisation for Maintenance department, Types of Maintenance-Preventive, Breakdown and Corrective Maintenance Failure Analysis, Maintenance Performance, Replacement policies of machines."]],
    [], ""),

  // Semester 5
  "BAI 301": C("BAI-301","Machine Learning",4,"A",[
    ["Unit I","Introduction: Goals and applications of machine learning, Types of Machine Learning:Supervised Learning, Unsupervised Learning, Machine Learning Cycle: Train-Test Split, Validation Data, K- Fold Cross Validation, Evaluation Metrics. Data Exploration and Pre- processing: Data Objects and Attributes; Statistical Measures, Visualization, Data Cleaning and Integration. Feature Extraction and Reduction."],
    ["Unit II","Supervised Learning Regression: Least Mean Square Regression; Ridge Regression and LASSO regression; Logistic Regression, Support Vector Machines, Kernels for learning non-linear functions, K-nearest-neighbor, Bayesian and Naïve Bayes Classifier, Decision Tree Learning."],
    ["Unit III","Unsupervised Learning Learning from unclassified data. Clustering. Hierarchical Agglomerative Clustering, k-means partitional clustering, Hierarchical, and Density-based Clustering, Expectation maximization (EM) for soft clustering. Dimensionality Reduction: Linear Discriminant Analysis; Principal Component Analysis;"],
    ["Unit IV","Advanced Topics Measuring the accuracy of learned hypotheses. Comparing learning algorithms: cross-validation, learning curves, and statistical hypothesis testing, Ensemble Learning: Bagging, boosting, and stacking, Random Forests, Ensemble Classification including Adaboost, Active learning with ensembles."]],
    [], ""),
  "BCS 303": C("BCS-303","Theory of Computation",4,"A",[
    ["Unit I","Introduction to Theory of Computation: Definitions: Languages, Grammar, Automata, Applications of Theory of Computation, Finite Automata: DFA, NDFA , Equivalence of DFA and NDFA, DFA Minimization Regular Languages, Regular Grammars, Properties of Regular Languages, Pumping Lemma"],
    ["Unit II","Context Free Language: Introduction, Parsing and Ambiguity , Pushdown Automata (PDA), Non Deterministic PDA ,Context Free Grammar , Chomsky Normal Form , Greibach Normal Form , Parse Tree representation of Derivation Tree , Equivalence of PDA and CFGs , Properties of Context Free Grammars"],
    ["Unit III","Pumping Lemmas: Pumping Lemma for context free languages, Pumping lemma for linear languages. Turing Machine: Definition, TM as language acceptors, TM as transducers, Hierarchy of Formal Languages and Automata, Chomsky Hierarchy, Context Sensitive Languages and LBA, Unrestricted Grammars"],
    ["Unit IV","Turing machine Models and complexity: Some NP Problems, Complexity classes P and NP, Unsolvable Problem, Halting problem, Finite State Transducers: Introduction, Mealy Machines, Moore Machines, Mealy and Moore Equivalence, Limitations of Finite State transducer"]],
    [], ""),
  "GEC 301": C("GEC-301","Startup Development",2,"A",[],
    [], "~Taken as a 40 hour online course, Startup Development in Emerging Technologies, run by the IGDTUW Anveshan Foundation business incubator from October to December 2025. Scored 90 out of 100: 38 on the online assignments and 52 in the proctored exam. A Generic Open Elective has no fixed unit syllabus in the curriculum, because the content comes from whoever runs it."),
  "BAI 303": C("BAI-303","Cyber Security",4,"B+",[
    ["Unit I","Introduction: Cyber Security Concepts, Security Goals, Security Services and Mechanism, Vulnerabilities, Sources of Security Threats, Target assets, Vulnerabilities, Insider threats, Intruders and Hackers, Network threats: Active/Passive, Malicious Software, Virus, Trojan, Worms, Spywares, Rootkit, Ransomware, Adware, Backdoor, Bots, Social Engineering, Phishing, Key logging, Mail Bombs, Pornography, Intellectual Property Theft, Session Hijacking, ARP Spoofing, DoS, DDoS, Advanced Persistent Threat, Mobile Codes: Anonymity Networks, Proxy Servers, Surface, Deep and Dark Web."],
    ["Unit II","Cyber Crime: Types of Cybercrime, Cyber attack methodology, Credit card fraud, Software Piracy and legal issues, Security issues in M-commerce e.g. mobile wallet, mobile payment m- banking, Identity Theft, Password Cracking, Spamming, Security and Privacy Issues in Social Networking Websites, Security issues in Cloud based Services, Security issues in Smart Phones, digital tablets andsmart Devices, Cyber Warfare, Cyber Terrorism and Hacktivism."],
    ["Unit III","Device Security: Securing PC, Securing Smart Phone, Securing Laptops/Tabs, Securing Pen drives, Wi-Fi security, Browser security, Cloud Security, OS Security, Data Security, Database Security; Cryptography: basics, Symmetric vs asymmetric Cryptography, Key management, Message Authentication Code, Message Digest, Properties of message authentication code, Hash Function, Properties of Hash Function, Secured Hash Algorithm, Digital Signatures, Application of cryptography in network security: SSL/TLS, IPSec, SSH, Email Security, S/MIME, PGP."],
    ["Unit IV","Defences, Security Countermeasures: Access Control, Secure Design Principles, Defense Models: The Lollipop Model, The Onion Model, Firewalls, IDS, IPS, Honey Pots, VPN, Network Admission Control (NAC), Trusted Computing and multilevel security, Physical and infrastructure security, Electronic Voting, Human factors : Security awareness, training, Emailand Internet use policies, Risk Management, Information Security Standards, Copyright, Software Licences, IPR, ISO/IEC 2700, HIPAA, COBIT, NIST, Indian IT ACT and Standards."]],
    [], ""),
  "BAI 305": C("BAI-305","Deep Learning I",4,"B",[
    ["Unit I","Basic Computational Unit: Biological Neuron, Idea of computational units, McCulloch–Pitts unitand Thresholding logic, Linear Perceptron, Perceptron Learning Algorithm, Linear separability. Convergence theorem for Perceptron Learning Algorithm."],
    ["Unit II","Foundations of Deep Learning: Artificial Neural Networks: Single Layer Neural Network, Multilayer Perceptron, Gradient Descent, Back Propagation Learning, Architectural Design Issues. Learning Curves. Overfitting vs Under fitting, Regularization: L1, L2, Dropout, Data Augmentation."],
    ["Unit III","Deep Neural Network: Deep Learning, Deep Neural Networks: Difficulty of training deep neural networks, Activation Function, Hyper parameters vs Parameters, Greedy layer wise training, Recurrent Neural Networks: Backpropagation through time, Long Short Term Memory, Gated Recurrent Units, Bidirectional LSTMs, Bidirectional RNNs, Applications in Natural Language Processing."],
    ["Unit IV","Applications: Convolutional Neural Networks. Filters, Pooling. Image Classification. Well known case studies: LeNet, AlexNet, VGG-16, ResNet, InceptionNet. Transfer Learning. Weight Initialization, Batch Normalization, Regularization. Applications in Vision, Speech, and Audio-Video."]],
    [], ""),
  "HMC 301": C("HMC-301","Professional Ethics and Human Values",3,"B+",[
    ["Unit I","Human Values Morals, Values and Ethics, Integrity, Work Ethic, Respect for Others, Living Peacefully, Caring, Sharing, Honesty, Valuing Time, Co-operation, Commitment, Empathy, Self-Confidence, Character, Spirituality. Indian values (on the conceptual framework of Vedas): Purusharth, Niskama karma, Religion and Human Values, Towards a World Religion, Ethical Living and Harmony in Life."],
    ["Unit II","Profession and Professionalism, Ethical Theories: Kohlberg’s Theory, Gilligan’s Theory, Feminist Consequentialism, Moral Dilemmas, Types of Enquiries, Uses of Ethical Theories, Engineering Profession, Engineering Professionals- Training, Skill Set, Life Skills, Engineering Ethics: Making Senses and Issues, Ethical Obligations of Engineers, Ethical Codes for Engineers."],
    ["Unit III","Engineering as a Social Experimentation, Safety Responsibility and Rights: Engineering as experimentation, Engineers as responsible Experimenters, Concept of Safety and Risk, Engineer’s Responsibility for Safety, Risk – Benefit Analysis, Case Studies: The challenger case study, The Three Mile Island, Fukushima Nuclear Disaster, Bhopal Gas Tragedy. Disaster Management, Professional Rights, Employee Rights, Intellectual Property Rights (IPRs), Human Rights and Human Responsibilities. Major Ethical Issues."],
    ["Unit IV","Ethics and Global Issues Ethics in Global Scenario, Multinational corporations, Environmental ethics, computer ethics, Business Ethics. Corporate Social responsibility, Weapons Development, Research Ethics."]],
    [], ""),
  "BAI 353": C("BAI-353","Internship",1,"B+",[],
    [], "~Industrial training, semester 5. Assessed as training, so the curriculum carries no unit syllabus for it."),

  // Semester 6
  "BAI 308": C("BAI-308","Cloud Computing",4,"A",[
    ["Unit I","Introduction: Trends in Computing, Concept and Evolution of Cloud Computing Paradigm. Introduction to Cloud Computing, Benefits and challenges of cloud computing. Cloud Deployment Models: Public clouds, Private clouds, Community clouds, Hybrid clouds, Advantages of Cloud computing."],
    ["Unit II","Cloud Architecture- Layers and Models Layers in cloud architecture, Software as a Service (SaaS), features of SaaS and benefits, Platform as a Service ( PaaS ), features of PaaS and benefits, Infrastructure as a Service ( IaaS), features of IaaS and benefits, Service providers, challenges and risks in cloud adoption. Advantages of Cloud computing Case studies on cloud service providers – Amazon EC2, Google App Engine, Microsoft Azure"],
    ["Unit III","Virtualization: Virtualization Concept, Need of virtualization, Types of Virtualization. Storage virtualization, Compute/Processor virtualization, Network virtualization. Software Defined Networks, Network Function Virtualization."],
    ["Unit IV","Best Practices and Similar Upcoming Technologies: Analysis of Case Studies when deciding to adopt cloud computing architecture, Cloud Security, Block chain, Containerization and Docker. Recent research in computing."]],
    [], ""),
  "HMC 304": C("HMC-304","Marketing Management",2,"A",[
    ["Unit I","Introduction to Marketing: Nature, Scope and Importance of Marketing, Basic concepts, Marketing Environment."],
    ["Unit II","Product: Product Levels, Product Mix, Product Strategy, Product Development, Product Lifecycle and Product Mix Pricing Decisions."],
    ["Unit III","Place: Meaning & importance, Types of Channels, Channels Strategies, Designing and Managing Marketing Channel."],
    ["Unit IV","Promotion: Promotion Mix, Push vs. Pull Strategy; Promotional Objectives, Advertising- Meaning and Importance, Types, Media Decisions, Promotion Mix, Personal Selling-Nature,Importance and Process."]],
    [], ""),
  "BAI 302": C("BAI-302","Natural Language Processing",4,"B+",[
    ["Unit I","Introduction to NLP: Characteristics of Natural Language, Language structure, Sentence Structure, Language analyzer, Lexicon, word formation, Morphology, syntax analysis (parsing), semantics, ambiguity, pragmatics and discourse."],
    ["Unit II","NLP Algorithms: Understanding Corpus and data attributes, Corpus Formats CSV, JSON, XML, LibSVM, Operations on Text Corpus, Tokenisation, stop words, Term Frequency Inverse Document Frequency (TF-IDF), Text Analysis and word embedding using word2vec, doc2vec, GLoVe, Bag-of-words (BoW)."],
    ["Unit III","Machine Translation and Applications of NLP: Introduction to Machine Translation (MT), Approaches, Structure of Anusaraka: an Interlingua based MT system, Example/Analogy based MT, Word/phrase based MT, Neural MT. Applications of NLP: Sentiment analysis, chatbots, conversational models (Question Answering system) for Digital Assistants"],
    ["Unit IV","Deep learning models for NLP: Neural Net based NLP models: Study of Convolutional Neural Network(CNN), Recurrent Neural Network(RNN), Long Short-Term Memory (LSTM) and Gated Recurrent Unit(GRU) using Natural Language Toolkit (NLTK)"]],
    [], ""),
  "BAI 304": C("BAI-304","Deep Learning II",4,"B+",[
    ["Unit I","Advanced Concepts in Deep Learning: Review of Neural Networks, Regularization, Bias Variance, Batch Normalization, Weight Initialization Strategies, Learning vs Optimization,Early Stopping, Mini-Batch algorithm, Methods - Batch Gradient Descent (GD), GD with momentum."],
    ["Unit II","Improved Optimization: Newer optimization methods for neural networks (Adagrad, adadelta, rmsprop, adam, NAG), second order methods for training, Saddle point problem inneural networks, Regularization methods (dropout, drop connect, batch normalization)."],
    ["Unit III","Deep Learning in Practice: Practical Tips for Training Deep Neural Networks, Performance Metrics, Baseline Methods, Data Requirements, Hyperparameter Tuning: Manual vs Automatic, Grid vs Random, Model based hyperparameter tuning."],
    ["Unit IV","Research in Deep Learning: Autoencoders: Undercomplete vs Regularized. Representation Learning: Greedy Pretraining, Transfer Learning. Deep Generative Models: Generative Adversarial Networks (GANs). Explainability and Ethics."]],
    [], ""),
  "BAI 306": C("BAI-306","Digital Image Processing",4,"B",[
    ["Unit I","Introduction and Digital Image Fundamentals: The origins of Digital Image Processing, Examples of Fields that Use Digital Image Processing, Fundamentals Steps in Image Processing,Elements of Digital Image Processing Systems, Image Sampling and Quantization, Some basic relationships like Neighbors, Connectivity, Distance Measures between pixels, Linear and Non Linear Operations. Image Enhancement in the Spatial Domain: Some basic Gray Level Transformations, Histogram Processing, Enhancement Using Arithmetic and Logic operations, Basics of Spatial Filters, Smoothing and Sharpening Spatial Filters, Combining Spatial Enhancement Methods."],
    ["Unit II","Filtering in the Frequency Domain: Introduction to Fourier Transform and the frequency Domain, Smoothing and Sharpening Frequency Domain Filters. Image Restoration: A model of The Image Degradation / Restoration Process, Noise Models, Restoration in the presence of Noise Only Spatial Filtering, Periodic Noise Reduction by Frequency Domain Filtering, Estimation of Degradation Function, Inverse filtering, Wiener filtering, Constrained Least Square Filtering, Geometric Mean Filter, Geometric Transformations."],
    ["Unit III","Color Image Processing, Color fundamentals, Color Models, Pseudo color Image processing, Color Transforms, Smoothing and Sharpening, Color Segmentation Image Compression: fundamentals of compression, coding redundancy, Lossy and lossless compression, Spatial and temporal redundancy, Image compression models. Some basic compression methods. Image Segmentation: Detection of Discontinuities, Edge linking and boundary detection, Region Oriented Segmentation, Motion based segmentation."],
    ["Unit IV","Representation and Description: Representation, Boundary Descriptors, Regional Descriptors, Use of Principal Components for Description, Introduction to Morphology, Some basic Morphological Algorithms. Object Recognition: Patterns and Pattern Classes, Decision-Theoretic Methods, Structural Methods."]],
    [], ""),
  "BAI 322": C("BAI-322","Data Warehousing and Business Intelligence",4,"B",[
    ["Unit I","Introduction to Data Warehousing: Overview, Difference between Database System and Data Warehouse, The Compelling Need for data warehousing, Data warehouse – The building Blocks: Defining Features, data warehouses and data marts, overview of the components, Three tier architecture, Metadata in the data warehouse. Data pre-processing:Data cleaning, Data transformation ETL Process. ETL tools. Defining the business requirements: Dimensional analysis, information packages – a new concept, requirements gathering methods, requirements definition: scope and content."],
    ["Unit II","Principles of Dimensional Modelling: Objectives, From Requirements to data design, Multi- Dimensional Data Model, Schemas: the STAR schema, the Snowflake schema, fact constellation schema. OLAP in the Data Warehouse: Demand for Online Analytical Processing, limitations of other analysis methods, OLAP definitions and rules, OLAP characteristics, major features and functions, hyper cubes. OLAP Operations: Drill-down and roll-up, slice-and-dice, pivot or rotation, OLAP models, overview of variations, the MOLAP model, the ROLAP model, ROLAP versus MOLAP, OLAP implementation considerations. Query and Reporting, Executive Information Systems (EIS), Data Warehouse and Business Strategy."],
    ["Unit III","Data Mining Basics: What is Data Mining, Data Mining Defined, The knowledge discovery process (KDD Process), Data Mining Applications- The Business Context of Data Mining, Data Mining for Process Improvement, Data Mining as a Research Tool, Data Mining for Marketing, Benefits of data mining, Major Data Mining Techniques: Classification and Prediction: Issues Regarding Classification and Prediction, Classification by Decision Tree Induction, KNN Algorithm."],
    ["Unit IV","Cluster detection, K- means Algorithm, Outlier Analysis, memory-based reasoning, link analysis, Mining Association Rules in Large Databases: Association Rule Mining, genetic algorithms, neural networks. Data mining tools."]],
    [], ""),

  // Semester 7
  "BAI 403": C("BAI-403","Computer Vision",4,"",[
    ["Unit I","Computer Vision: Overview, History, Key Problems, Challenges. Data Driven Approach: KNN. Linear Classification. Loss Function and Optimization, Stochastic Gradient Descent, Numerical Computations.Neural Networks and Backpropagation."],
    ["Unit II","Convolutional Neural Networks: Architecture Overview. Types of Layers - Convolution, Pooling, Fully Connected. Parameter Sharing. Well known case studies: LeNet, AlexNet, VGG-16, ResNet, InceptionNet. Transfer Learning. Weight Initialization, Batch Normalization, Regularization."],
    ["Unit III","Text in Image: Language Model, RNNs, Image Captioning, Vision & Language. Attention Models: Self-Attention, Soft vs Hard Attention. Transformer: Key, Value, Query, Encoder-Decoder. Transformers for Image Recognition"],
    ["Unit IV","Advanced Vision: Data Augmentation, Semantic Segmentation, Object Detection, Face Recognition using Siamese Networks, Generative Models, Adversarial Networks, Biases in Image Datasets."]],
    [
    ["one","KNN on CIFAR-10. Nearest neighbour first, so every later accuracy number had a floor to beat."],
    ["two","Feed-forward network, same data. Where a model with no sense of locality stops improving."],
    ["three","Convolutional network, same data. The same task once the architecture knows neighbouring pixels belong together."],
    ["four","Transfer learning on Intel scene images. Six scene categories on a pretrained backbone rather than from scratch."],
    ["five","Image captioning. Vision and language in one model, the point where Unit III stopped being theory."]], ""),
  "BAI 409": C("BAI-409","Conversational AI",4,"",[
    ["Unit I","Foundations: Introduction to Conversational AI, AI assistants and their platforms, types of AI assistants, AI assistant platforms, Primary use cases for AI assistant technology, self-service assistant, agent assist, classification and routing. Building Conversational AI: User’s Intent, Utterance, response, entity, combining intents andentities, contextualizing a response by using entities, responding with process flow, detecting low confidence, implementing confidence detection and the two-strikes rule."],
    ["Unit II","Designing Effective processes and Dialogue: Designing, Assembling, managing the design processand cross cutting design aspects. Dialogue, Reprompting, Disambiguation and Escalation Building a AI Assistant: AI assistant use cases, Conversational AI success metrics, Command interpreter success metrics, Event classifier success metrics."],
    ["Unit III","Training and Testing: Training an AI Assistant, finding training data, Assessing the assistant, testing an AI Assistant for accuracy, testing single utterance, multiple utterances, comparing testing methodologies."],
    ["Unit IV","Maintenance: Deployment and Management, Wild west approach, types of environments to run tocode: Development, Test, Production and after first production deployment. Improving Assistant: Metrics, analysis of classifiers, finding gaps in the training data."]],
    [
    ["one","A rule-based chatbot. The baseline that makes every later component's value measurable."],
    ["two","Intent recognition. Mapping an utterance to what the person actually wants."],
    ["three","Named entity recognition. Pulling the specifics out of the sentence."],
    ["four","Sentiment analysis. Reading tone alongside content."],
    ["five","A sequence-to-sequence chatbot. Generation rather than retrieval."],
    ["six","Earshot, a voice chatbot. Speech recognition in, intent, spoken reply out: the whole stack assembled into one thing that answers back."]], ""),
  "BAI 417": C("BAI-417","Multimodal Data Analytics",4,"",[
    ["Unit I","Introduction: Introduction to Multimodal data and applications, Multimodal Representation: two broad approaches, Joint and Coordinated. Challenges of multimodal data, Data collection & cleaning. Text Processing: Text normalization, Lemmatization, Morphology, Sub word tokenization; Text processing and statistics: TFIDF, BM-25, Zipf’s law, Hipf’s law; Language models and smoothing techniques; Vector space models."],
    ["Unit II","Speech Processing: Speech production and perception, Acoustic and articulatory phonetics; Short- term analysis: Need and windowing, Energy, Zero-crossing rate, Autocorrelation function, Fourier transform, Spectrogram; Short-term synthesis: Overlap-add method; Cepstrum analysis: Basis and development, mel- cepstrum."],
    ["Unit III","Digital Image and Video Processing: Point processing, Neighborhood processing, Enhancement, Edge detection, Segmentation, Feature descriptors, Restoration, Morphological operations, Image transforms, Spatial and temporal data handling."],
    ["Unit IV","Multi-modal learning and associated challenges: Applications and challenges from fusing two or more modalities such as vision, language, audio, graphs, biomedical signals, Development of shallow and deep networks for multimodal learning. Multi-modal processing and learning with applications: Image captioning, visual questioning answering system, automatic commentary generation, cognitive state estimation, recommendation system. Other Modalities: Biomedical signals, and Conventional multi-modal learning, co-learning etc."]],
    [], ""),
  "BAI 415": C("BAI-415","Recent Trends in AI",4,"",[
    ["Unit I","Artificial Intelligence (AI): Futuristic Issues and Applications, Artificial Intelligence Architecture,Tools, Techniques and Technologies in AI, AI Enabling Technologies, AI for Data Mining and Knowledge Discovery, Role of AI in Information Technology. Recent Language models i.e., BERT, Encoder-Decoder Models, GPT Models, etc."],
    ["Unit II","AI in Computer Vision, Generative Adversarial Network (GAN) and it's Applications, Smart Transportation & Smart Vehicles using AI. Smart Grid Computing & Technologies with AI"],
    ["Unit III","AI in Blockchain, Secure trading, Ethereum, Virtual Currencies, Supply chain operations, AI based Security and Intrusion Detection, Future Prospects and major challenges."],
    ["Unit IV","Application of AI in Supply Chain Management, Geographical Information System through Artificial Intelligence, Smart City with AI, Applications of AI in Healthcare Industry, AI in Future Communications and Computing."]],
    [], ""),
  "BIT 407": C("BIT-407","Big Data Analytics",4,"",[
    ["Unit I","Introduction: Need for Big Data, Structured and unstructured Big Data, Limitations of conventional data management and processing techniques for handling Big Data. Data Streams: Real time stream Data; Issues with streams of data, Data Stream Management Systems, Concept of Windows: Time based windows, Tuple count based windows, Movement of windows- fixed, sliding, Tumbling, Hoping; Event streaming: architecture, events, producers, consumers. Use in website activity tracking, stream processing, stream query processing."],
    ["Unit II","Data Warehouse for Big Data: Review of dimensional modeling, bus, hub and spoke architecture, ETL for real time DW, Big Data clusters; Cloud Warehousing: Cloud versus on-perm storage, settingup ‘Infrastructure as code’."],
    ["Unit III","Data Lakes: Data Lakes versus Data Warehouse, Lambda and Kappa Architectures, Meta data management, Curating, designing and deriving value from data lakes, Data pipelines: ETL versus ELT, streaming data pipelines, scheduling batch data pipelines, automated data pipelines. Data governance; Data Virtualization: Need for data virtualization, architecture, abstraction, views and services, design principles, defining specifications for transformations."],
    ["Unit IV","Map Reduce Framework: Distributed Processing with Hadoop Framework; Architecture; Basic Programs on Read and Write, architecture of a MR job, Mapper, Reducer, Combiner, Partitioner Interfaces; Use of distributed relational Store: HIVE architecture and features; different types of tables and implications; data types; basic queries Societal Issues with Big Data: Data rights, policy and regulation; data and ethics, data and communication. Data as a strategic resource"]],
    [], ""),
  "BAI 451": C("BAI-451","Minor Project",4,"",[],
    [], "~Minor Project, semester 7, 4 credits. Project work, so the curriculum carries no unit syllabus. This is the Early Crop Type Classification project in the Research chapter. Semester 7, in progress."),
  "BAI 453": C("BAI-453","Internship",1,"",[],
    [], "~Internship, semester 7. Assessed as training, so the curriculum carries no unit syllabus for it. Semester 7."),

  // Semester 8
  "BAI 414": C("BAI-414","Cognitive Computing",4,"",[
    ["Unit I","Introduction to Cognitive Computing: Definition and Evolution of Cognitive Computing Key Components: AI, Machine Learning, Natural Language Processing Historical Perspectives and Milestones in Cognitive Computing Cognitive Models and Architectures: Overview of Cognitive Architectures Connectionist Models: Neural Networks and Deep Learning Symbolic Models: Rule-Based Systems and Expert Systems"],
    ["Unit II","Cognitive Computing Algorithms: Machine Learning for Cognitive Systems Reinforcement Learning in Cognitive Computing Evolutionary Algorithms and Swarm Intelligence Natural Language Processing (NLP) in Cognitive Computing: Basics of Natural Language Processing NLP for Understanding and Generating Human-Like Text Sentiment Analysis and Language Models"],
    ["Unit III","Perception and Sensing: Computer Vision in Cognitive Computing Speech Recognition and Audio Processing Integrating Sensor Data for Cognitive Systems Human-Computer Interaction (HCI) in Cognitive Computing: Principles of HCI Designing User Interfaces for Cognitive Systems Multimodal Interaction: Combining Voice, Gesture, and Touch"],
    ["Unit IV","Cognitive Applications in Industry: Healthcare and Cognitive Computing Finance and Cognitive Analytics Smart Cities and Cognitive Technologies Ethical and Social Implications of Cognitive Computing: Privacy Concerns in Cognitive Systems Bias and Fairness in Cognitive Algorithms Ethical Design and Responsible AI"]],
    [], "~Semester 8, upcoming."),
  "GEC 402": C("GEC-402","Introduction to Cognitive Psychology by IIT Guwahati (NPTEL)",2,"",[],
    [], "~Generic Open Elective, taken as an online course through NPTEL, offered by IIT Guwahati. Semester 8, upcoming."),
  "BAI 404": C("BAI-404","Social Media Analytics",4,"",[
    ["Unit I","Introduction to Social Media Analytics (SMA): Social media landscape, Need for SMA; SMA in Small organizations; SMA in large organizations; Application of SMA in different areas Network fundamentals and models: The social networks perspective - nodes, ties and influencers, Social network and web data and methods. Graphs and Matrices- Basic measures for individuals and networks. Information visualization"],
    ["Unit II","Making connections: Link analysis. Random graphs and network evolution. Social contexts:Affiliation and identity. Web analytics tools: Clickstream analysis, A/B testing, online surveys, Web crawling and Indexing. Natural Language Processing Techniques for Micro-text Analysis"],
    ["Unit III","Facebook Analytics: Introduction, parameters, demographics. Analyzing page audience. Reach and Engagement analysis. Post- performance on FB. Social campaigns. Measuring and Analyzing social campaigns, defining goals and evaluating outcomes, Network Analysis. 9 (LinkedIn, Instagram, YouTube Twitter etc. Google analytics. Introduction. (Websites)."],
    ["Unit IV","Processing and Visualizing Data, Influence Maximization, Link Prediction, Collective Classification, Applications in Advertising and Game Analytics, Introduction to Python Programming, Collecting and analyzing social media data; visualization and exploration."]],
    [], "~Semester 8, upcoming."),
  "BAI 452": C("BAI-452","R&D Project",8,"",[],
    [], "~Industrial, R&D or Start-up Project, semester 8, 8 credits. Project work, so the curriculum carries no unit syllabus."),
  "HMC 402": C("HMC-402","Creativity, Innovation and Entrepreneurship",3,"",[
    ["Unit I","Creative Thinking and Problem-Solving in AI: Techniques for fostering creativity in AI projects,Creative problem-solving frameworks and Brainstorming AI-driven business ideas. Innovation in AI: The innovation process in AI, Disruptive AI technologies and their impact."],
    ["Unit II","Ethical Considerations in AI: Ethical AI development principles, Discussion on AI bias, fairness,and transparency and Case studies on ethical AI dilemmas. AI Entrepreneurship: Introduction to entrepreneurship in the AI domain, Identifying AI-based business opportunities and Developing a business model canvas."],
    ["Unit III","Intellectual Property and AI: Protecting AI innovations through patents and copyright, Licensing AI technologies and Case studies on AI IP disputes. AI and Social Impact: AI for social good initiatives, Responsible AI development and deployment and Measuring the societal impact of AI ventures."],
    ["Unit IV","Scaling AI Ventures: Strategies for scaling AI startups, International expansion and global markets. Challenges and opportunities in AI growth."]],
    [], ""),
};
