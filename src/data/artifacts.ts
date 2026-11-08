// Add new artifacts to this array — cards and detail pages are generated automatically.
export type Artifact = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  /** Optional thumbnail URL. Leave empty to show a placeholder. */
  image?: string;
  overview: string;
  objective: string;
  tools: string[];
  whatIDid: string[];
  reflection: string;
  /** Link to PDF, slides or live site. Use embed: true to show it inline. */
  link?: { label: string; url: string; embed?: boolean };
  featured?: boolean;
};

export const artifacts: Artifact[] = [
  {
    slug: "gymfuel-planner",
    title: "GymFuel Planner – AI Meal & Grocery Chatbot",
    tag: "AIML-500 AI Lab",
    summary:
      "A nutrition-based meal and grocery planning assistant built with generative AI using a design-thinking approach.",
    overview:
      "GymFuel Planner is a conversational assistant that helps fitness-focused users plan meals that match their goals and turns those plans into a ready-to-use grocery list.",
    objective:
      "Apply design thinking and generative AI to solve a real everyday problem: planning nutritious meals without spending hours on research.",
    tools: ["Generative AI / LLMs", "Prompt Engineering", "Design Thinking", "Chatbot Builder"],
    whatIDid: [
      "Interviewed potential users and defined personas and pain points.",
      "Designed the conversation flow and system prompts for the chatbot.",
      "Iterated on prompts to produce consistent meal plans and grocery lists.",
      "Tested the prototype and refined it based on feedback.",
    ],
    reflection:
      "This project showed me how much of a good AI product depends on understanding the user first. Clear prompts and guardrails mattered as much as the model itself.",
    link: { label: "View project", url: "#" },
    featured: true,
  },
  {
    slug: "ml-vs-dl-healthcare",
    title: "Machine Learning vs. Deep Learning in Healthcare – TED-Style Talk",
    tag: "Residency",
    summary:
      "A group presentation comparing ML and DL, where I presented the real-world healthcare use case.",
    overview:
      "A TED-style group talk explaining the differences between machine learning and deep learning for a general audience, grounded in healthcare examples.",
    objective:
      "Communicate complex AI concepts clearly and show where each approach adds value in a high-stakes industry.",
    tools: ["PowerPoint", "Research Literature", "Storytelling"],
    whatIDid: [
      "Researched real-world healthcare applications of ML and DL.",
      "Presented the healthcare use case section of the talk.",
      "Collaborated with teammates on the narrative and slide design.",
    ],
    reflection:
      "Explaining technical ideas to non-technical listeners is a skill I used daily as a consultant — this talk let me apply it to AI.",
    link: { label: "View slides", url: "#" },
    featured: true,
  },
  {
    slug: "data-analytics-life-cycle",
    title: "The Data Analytics Life Cycle",
    tag: "DTAN-500",
    summary:
      "A research paper on the stages of the analytics life cycle, analytics models, and the ethics and unintended consequences of data use.",
    overview:
      "A research paper walking through each stage of the data analytics life cycle, the main types of analytics models, and the ethical considerations of using data.",
    objective:
      "Build a solid foundation in how analytics projects are structured and the responsibilities that come with using data.",
    tools: ["Academic Research", "APA Writing", "Analytics Frameworks"],
    whatIDid: [
      "Researched and summarized each life cycle stage.",
      "Compared descriptive, predictive and prescriptive models.",
      "Analyzed ethical risks and unintended consequences of data use.",
    ],
    reflection:
      "Many life cycle stages mirror the implementation phases I followed in SAP projects, which helped me connect my past experience to analytics.",
    link: { label: "Read paper (PDF)", url: "#" },
    featured: true,
  },
  {
    slug: "data-governance-km-cycle",
    title: "Data Governance & Knowledge Management Cycle",
    tag: "DTAN-500",
    summary:
      "An analysis of data management vs. data governance, with a knowledge management cycle designed for a custom T-shirt company.",
    overview:
      "This paper distinguishes data management from data governance and proposes a knowledge management cycle for a small custom T-shirt business.",
    objective:
      "Show how governance and knowledge management practices can be practical, even for a small company.",
    tools: ["Governance Frameworks", "Process Design", "Research"],
    whatIDid: [
      "Compared the roles and scope of data management and data governance.",
      "Designed a knowledge management cycle tailored to the business.",
      "Recommended roles, policies and tools to support it.",
    ],
    reflection:
      "Governance only works when it fits the business — the same lesson I learned rolling out HR systems globally.",
    link: { label: "Read paper (PDF)", url: "#" },
  },
  {
    slug: "prompt-engineering-cheat-sheet",
    title: "Prompt Engineering Cheat Sheet",
    tag: "AI",
    summary: "A quick-reference guide to effective prompting techniques for generative AI.",
    overview:
      "A one-page reference that summarizes proven prompting techniques with short examples.",
    objective: "Help myself and others get better, more reliable results from generative AI tools.",
    tools: ["ChatGPT", "Generative AI", "Canva"],
    whatIDid: [
      "Collected and tested common prompting techniques.",
      "Wrote short examples for each technique.",
      "Designed an easy-to-scan layout.",
    ],
    reflection:
      "Structuring prompts is a lot like writing good requirements: clear context, constraints and expected output.",
    link: { label: "View cheat sheet", url: "#" },
  },
];

export const getArtifact = (slug: string) => artifacts.find((a) => a.slug === slug);
