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
    link: { label: "Try the GymFuel chatbot", url: "https://mizou.com/preview-bot?ID=167371" },
    featured: true,
  },
];

export const getArtifact = (slug: string) => artifacts.find((a) => a.slug === slug);
