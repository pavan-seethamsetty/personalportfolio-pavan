// Add new artifacts to this array — cards and detail pages are generated automatically.
import logoAsset from "@/assets/gymfuel-planner-logo.png.asset.json";

export type Artifact = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  /** Optional thumbnail URL. Leave empty to show a placeholder. */
  image?: string;
  introduction: string;
  description: string;
  objective: string;
  process: string[];
  tools: string[];
  valueProposition: string;
  uniqueValue: string;
  relevance: string;
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
    image: logoAsset.url,
    introduction:
      "GymFuel Planner is a conversational AI chatbot that helps fitness-focused users plan meals that match their goals and turns those plans into a ready-to-use grocery list. It was built as a hands-on exploration of how generative AI can solve a real, everyday problem.",
    description:
      "The chatbot asks users about their fitness goals, dietary preferences and available time, then generates personalized meal plans with macro breakdowns. From each plan it automatically produces an organized grocery list, so users can go from 'what should I eat?' to a shopping cart in a single conversation.",
    objective:
      "Apply design thinking and generative AI to solve a real everyday problem: planning nutritious meals without spending hours on research, and demonstrate how a well-designed chatbot can deliver practical value to end users.",
    process: [
      "Interviewed potential users and defined personas and pain points.",
      "Designed the conversation flow and system prompts for the chatbot.",
      "Built the chatbot prototype using the Mizou platform.",
      "Iterated on prompts to produce consistent meal plans and grocery lists.",
      "Tested the prototype with users and refined it based on feedback.",
    ],
    tools: [
      "Mizou (free chatbot-building app)",
      "Generative AI / LLMs",
      "Prompt Engineering",
      "Design Thinking",
    ],
    valueProposition:
      "GymFuel Planner saves users time and effort by replacing hours of meal research with a short conversation, delivering a complete meal plan and grocery list tailored to their fitness goals.",
    uniqueValue:
      "Unlike generic recipe apps, GymFuel Planner connects the full journey — from goal setting to meal plan to grocery list — in one conversational experience, with no sign-up or cost for the user.",
    relevance:
      "This artifact demonstrates practical skills in prompt engineering, conversational design and applied generative AI — capabilities directly relevant to data and AI roles where building useful, user-centered AI solutions matters.",
    link: { label: "Try the GymFuel chatbot", url: "https://mizou.com/preview-bot?ID=167371" },
    featured: true,
  },
];

export const getArtifact = (slug: string) => artifacts.find((a) => a.slug === slug);
