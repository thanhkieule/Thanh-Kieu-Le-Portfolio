/**
 * PORTFOLIO CONTENT - single source of truth.
 * Do not hardcode text inside index.html or component files.
 * Every section of the site should read from this object and render it with JS.
 * When Kieu's experience/positioning changes, only this file needs to change.
 */
const PORTFOLIO_CONTENT = {
  name: "Thanh Kieu Le",
  headline: "Talent Development Leader",
  tagline: "Building the next model of work: People and AI Agents as one team",
  location: "Ho Chi Minh City, Vietnam",

  contact: {
    phone: "0869060905",
    email: "lethanhkieu1217@gmail.com",
    linkedin: "https://www.linkedin.com/in/kieu-le-thanh/",
    facebook: "", // TODO: paste real Facebook URL
    portfolio: "" // TODO: this site's own public URL, once deployed
  },

  summary:
    "I lead Talent Development for the AI era, not just AI skills training. It's building a new way of working: an organization where employees and AI Agents operate as one team. Over 4 years leading Learning and Talent Development functions at Amanotes and Base Enterprise (FPT Corporation), I redesigned company-wide performance management, led AI-first tool adoption, and shipped an AI Agent that cut manual support needs by 40 percent. I am now applying that same thinking as the founder of an AI-powered personalized learning tool.",

  competencies: [
    {
      title: "Capability Architecture",
      description:
        "Competency frameworks, leadership development, integrating AI Agent and tool proficiency into how people work."
    },
    {
      title: "Performance Management Redesign",
      description:
        "OKR and goal-setting systems, role-based development plans, outcome-based evaluation."
    },
    {
      title: "Change Management",
      description:
        "AI-first and digital-tool adoption (Glean, custom AI Agents, LMS), needs analysis, enablement campaigns."
    },
    {
      title: "Personalized Learning & Development",
      description:
        "Learning science and instructional design (ADDIE, SAM), gamified and adaptive learning journeys."
    },
    {
      title: "Leadership",
      description:
        "Building and scaling L&D teams from the ground up, cross-functional stakeholder management."
    }
  ],

  tools: [
    "Claude Code", "Glean (AI for work)", "Custom AI Agents (Gemini-based)",
    "LMS platforms", "Google Workspace", "Figma", "Illustrator", "Canva", "Premiere"
  ],

  // Flagship projects worth a full case study.
  // Each project is told in 3 versions: the old/baseline way of doing it, the version
  // Kieu actually built (factual, from her real experience), and a forward-looking version
  // of what could be built now with today's more capable AI. This is what makes the
  // portfolio different from a resume, and shows AI-era thinking, not just AI skills.
  //
  // NOTE: "oldVersion" (baseline/before-state details) and every "aiPoweredVersion" are
  // illustrative/hypothetical by design (per Kieu's instruction to assume placeholder
  // detail where the real historical baseline or future plan isn't documented).
  // "improvedVersion" is factual and matches the resume. Replace any illustrative detail
  // with real specifics whenever Kieu has them.
  projects: [
    {
      name: "Performance Management Program (incl. Perform Mate AI Agent)",
      role: "Senior Talent Development & AI Product Owner",
      timeframe: "2024 - 2026, Amanotes",
      tags: ["Performance Management", "AI Agent", "Change Management"],
      oldVersion:
        "Performance reviews ran on a generic, mostly annual cycle: the same goal-setting template for every role level, manual check-ins between managers and employees, and no real-time support when someone had a question about their goals or progress.",
      improvedVersion:
        "Redesigned the company-wide Performance Management Program around structured, role-tailored goal-setting (OKR, BAU, and development goals), then shipped \"Perform Mate,\" an AI Agent that gives real-time guidance and role-based goal templates directly to employees and managers. Reduced manual support needs by 40 percent while improving alignment between individual goals and business priorities.",
      aiPoweredVersion:
        "With today's more capable agentic AI, Perform Mate could go further: drafting a first version of each person's OKRs from their role and current business priorities, continuously reading progress signals instead of waiting for check-ins, and proactively coaching both employee and manager before a review rather than only responding when asked."
    },
    {
      name: "Hyper Leader Program",
      role: "Learning and Development Leader",
      timeframe: "2022 - 2024, Base Enterprise (FPT Corporation)",
      tags: ["Leadership Development", "Competency Framework"],
      oldVersion:
        "Leadership development for mid-level managers was largely ad hoc: generic workshops with no shared competency standard, so managers across different teams could be evaluated and developed in inconsistent ways.",
      improvedVersion:
        "Custom-built a leadership competency framework, adapted from FPT Corporation's model for Base's context, and launched the \"Hyper Leader\" program on top of it. Achieved a 90 percent completion rate among mid-level managers and key talent across two program batches.",
      aiPoweredVersion:
        "A next version could use an AI-driven diagnostic to identify each manager's specific competency gaps up front, sequence Hyper Leader content adaptively based on that diagnostic, and use AI role-play simulations for practicing hard conversations, like giving difficult feedback, before managers have to do it for real."
    },
    {
      name: "Onboarding Program",
      role: "Learning and Development Leader",
      timeframe: "2022 - 2024, Base Enterprise (FPT Corporation)",
      tags: ["Onboarding", "Gamification", "Product Adoption"],
      oldVersion:
        "New hires were largely left to explore a complex portfolio of 50+ internal SaaS products on their own, with documentation scattered across different sources and no structured path, which slowed down time-to-proficiency.",
      improvedVersion:
        "Architected a gamified onboarding journey that guided new hires through the full 50+ SaaS product portfolio in a structured, engaging sequence, significantly shortening time-to-proficiency compared to self-directed exploration.",
      aiPoweredVersion:
        "Today, this could become an AI onboarding assistant that answers product questions in real time, builds a personalized ramp-up path based on the new hire's role and prior experience, and automatically flags knowledge gaps from how they use the products, instead of moving every new hire through the same fixed gamified track."
    },
    {
      name: "Glean Implementation (incl. Enterprise Knowledge Management)",
      role: "L&D Leader / Senior Talent Development & AI Product Owner",
      timeframe: "2022 - 2026, Base Enterprise & Amanotes",
      tags: ["AI Adoption", "Knowledge Management", "Change Management"],
      oldVersion:
        "Knowledge lived in scattered places: three separate digital libraries built and curated manually, and before that, no centralized way for employees to search across the organization's collective knowledge. Finding the right information depended on knowing who to ask or which library to check.",
      improvedVersion:
        "Built the knowledge-management foundation first, curating three digital libraries (about 1,000 articles) and launching the gamified \"Innovation Hub\" knowledge-sharing system (3,500+ interactions), then led enterprise-wide change management for adopting Glean, an AI-first knowledge tool, running organizational needs analysis and translating the findings into an actionable AI product roadmap.",
      aiPoweredVersion:
        "Beyond search, the next step is an agentic knowledge layer that proactively surfaces relevant information inside people's actual workflows (chat, email, project tools) instead of waiting to be asked, keeps itself current by flagging outdated content, and lets employees ask a single company-knowledge agent that synthesizes across every internal source rather than returning a list of documents to read."
    },
    {
      name: "AI-Powered Personalized Learning Platform",
      role: "Founder & Lead",
      timeframe: "04/2026 - Present, Independent EdTech Venture",
      tags: ["AI Product", "EdTech", "Personalized Learning"],
      oldVersion:
        "Most learning platforms hand people a static course catalog and leave them to figure out, on their own, which path actually gets them to a specific goal.",
      improvedVersion:
        "Founded and led a small team building an AI-powered personal development assistant that generates a personalized learning path toward a specific goal, functioning like an on-demand development coach. Applied hands-on AI-agent-building skills from Claude Code and Claude Academy to prototype the assistant's reasoning and recommendation logic directly, then tested it with about 10 users to validate problem-solution fit and surface the technical refinements needed next.",
      aiPoweredVersion:
        "The next iteration is already in progress: using more advanced agent orchestration to make recommendations more accurate, adding real progress tracking so the path adapts as the person actually learns, and expanding the testing group beyond the initial 10 users to stress-test the personalization logic at scale."
    }
  ],

  experience: [
    {
      title: "Founder & Lead, AI-Powered Personalized Learning Platform",
      company: "Independent EdTech Venture",
      location: "Ho Chi Minh City, Vietnam",
      dates: "04/2026 - Present",
      bullets: [
        "Founded and led a small team building an AI-powered personal development assistant that generates a personalized learning path toward a specific goal, functioning like an on-demand development coach rather than a static course catalog.",
        "Designed and ran a prototype test with about 10 users, validating the core problem-solution fit while identifying the technical refinements needed to move from prototype toward product.",
        "Applied hands-on AI-agent-building skills, developed through Claude Academy, to prototype the assistant's reasoning and recommendation logic, translating L&D expertise directly into a working AI product."
      ]
    },
    {
      title: "Senior Talent Development & AI Product Owner",
      company: "Amanotes",
      location: "Ho Chi Minh City, Vietnam",
      dates: "10/2024 - 01/2026",
      bullets: [
        "Redesigned the company-wide Performance Management Program, introducing structured goal-setting (OKR, BAU, and development goals) tailored by role level to improve alignment between individual objectives and business priorities.",
        "Led enterprise-wide change management for AI-first tool adoption, including Glean and custom AI Agents, running organizational needs analysis and translating the findings into an actionable AI product roadmap.",
        "Spearheaded \"Perform Mate,\" an AI Agent delivering real-time guidance and role-based goal templates, reducing manual support needs by 40 percent.",
        "Designed and facilitated technical training on AI, data, and customer-persona topics using learning science principles, achieving a 4.8/5 learner rating and a 95 percent satisfaction score, a 20 percent increase year over year.",
        "Architected leadership development programs on emotional intelligence and psychological safety, equipping people managers with frameworks for high-trust, inclusive teams.",
        "Led the learning pillar of the company's Core Values initiative, designing a multi-phase journey with gamified simulations and reflection workshops that reached a 95 percent knowledge-check pass rate."
      ]
    },
    {
      title: "Learning and Development Leader",
      company: "Base Enterprise (FPT Corporation)",
      location: "Ho Chi Minh City, Vietnam",
      dates: "02/2022 - 10/2024",
      bullets: [
        "Built and led the L&D department from the ground up, recruiting and developing four key roles, scaling training capacity by 180 percent in year one and 250 percent in year two.",
        "Custom-built a leadership competency framework and launched the \"Hyper Leader\" program, achieving a 90 percent completion rate among mid-level managers and key talent.",
        "Partnered with Sales Enablement to design tailored learning paths for the \"UP Standard\" project, helping 85 percent of participants hit their new quarterly revenue targets.",
        "Led the end-to-end research, selection, and deployment of the company's LMS, managing the full change management lifecycle from vendor selection to organization-wide adoption.",
        "Curated three digital knowledge libraries (about 1,000 articles) and launched the \"Innovation Hub\" and \"Will Points\" gamified knowledge-sharing system, generating over 3,500 interactions and 700+ contributed articles.",
        "Established \"Saturday Learning,\" a recurring Saturday morning class series that embedded a continuous-learning habit across the organization."
      ]
    },
    {
      title: "Project Manager cum Training Specialist",
      company: "Phuc Tea Franchise",
      location: "Vietnam",
      dates: "12/2020 - 01/2022",
      bullets: [
        "Digitized task management and designed e-learning modules for 15 key franchise positions, and established a KPI framework and 3P salary system linking performance to development plans.",
        "Designed and facilitated training on project management, time management, and self-directed learning across management and branch-staff levels."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Psychology (in progress, distance learning)",
      school: "Ho Chi Minh City University of Technology (HUTECH)",
      note: "Expected graduation late 2027"
    }
  ],

  certifications: {
    "AI & Emerging Technology": [
      "Claude Academy (2026): 10+ short courses on Claude Code, building hands-on fluency in AI-assisted development and agentic workflows.",
      "School of Education, Tsinghua University (in progress, expected 09/2026): \"Future Learning with AI: Higher Education Learning Program.\""
    ],
    "Learning Design & UX": [
      "Interaction Design Foundation (03/2026): Human-Computer Interaction, The Foundations of UX Design. Earned with Distinction, top 10% of class.",
      "Interaction Design Foundation (09/2025): Gamification, How to Create Engaging User Experiences. Earned with Distinction, top 10% of class.",
      "LinkedIn Learning (03/2023): \"Advancing Your Skills As an L&D Professional\" learning path (8 courses).",
      "Gamedaotao (03/2022): \"Learning Science\" course.",
      "Gamedaotao (11/2021): \"Learning Activities Design\" course."
    ]
  },

  awards: [
    "Speaker, TEDxCanThoUniversity (2020).",
    "Speaker, \"Coding for the Future with Google\" (2021).",
    "Delegate, ASEAN Student Leaders Forum (2017).",
    "Champion, BAY Competition, public speaking (2018).",
    "Excellent Employee, Q3 2021, Phuc Tea Franchise.",
    "Best Talent Development of the Year, Base Enterprise."
  ]
};
