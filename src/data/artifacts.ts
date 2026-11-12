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
    tag: "AIML-500-01N1Z-AI Lab",
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
  {
    slug: "ai-ml-timeline",
    title: "A Timeline of AI and Machine Learning (1939 to 2024)",
    tag: "AIML-500-01N1Z - AI Timeline",
    summary:
      "A visual timeline of AI history, from Turing's codebreaking to ChatGPT, covering the key milestones, the two AI winters and the rise of deep learning, cloud and generative AI.",
    image: `${import.meta.env.BASE_URL}images/ai-ml-timeline-cover.webp`,
    introduction:
      "This artifact is a visual timeline I made to understand how artificial intelligence got to where it is today. It starts with Alan Turing's codebreaking work in 1939 and ends with ChatGPT and the current AI race in 2024.",
    description:
      "The timeline is split into clear eras: the foundations (1939 to 1971), the two AI winters, the return of neural networks once data and hardware caught up (1980 to 2012), and the cloud and generative AI era (2014 to 2024). Each stop names the people and companies behind it, like Turing, Hinton, Fei-Fei Li, IBM, Google, DeepMind, OpenAI, Microsoft and NVIDIA. It ends with three things I learned while building it.",
    objective:
      "See the history of AI as one connected story, understand why progress stalled during the AI winters and what brought it back, and present all of it in a format anyone can follow in a few minutes.",
    process: [
      "Went through the course sources: the IEEE Computer Society article, Our World in Data, a DataCamp piece on AI winters and a YouTube history of AI.",
      "Picked the milestones that mattered most and noted the people and companies behind each one.",
      "Looked into the causes and impact of the two AI winters, such as the 1973 Lighthill Report and the collapse of the Lisp machine market.",
      "Grouped the events into eras and built simple, readable slides in PowerPoint.",
      "Added my own takeaways and APA references, then shared it in the class discussion.",
    ],
    tools: [
      "Microsoft PowerPoint",
      "Research & Source Analysis",
      "Data Storytelling",
      "APA Citation",
    ],
    valueProposition:
      "It turns about 85 years of AI history into a short, visual story, so someone new to AI can quickly see how we got from rule-based systems to tools like ChatGPT.",
    uniqueValue:
      "It goes beyond listing dates. It explains why things happened: why the AI winters hit, why backpropagation from 1986 only took off after big data and GPUs arrived, and how AI shifted from predicting things to generating new content.",
    relevance:
      "Knowing this history helps me look at new AI trends with context instead of hype, including the difference between today's narrow AI and AGI. It also shows I can research a complex topic, organize it and explain it visually, which is a core skill in data and AI work.",
    link: {
      label: "View the AI timeline",
      url: `${import.meta.env.BASE_URL}files/ai-ml-timeline.pdf`,
      embed: true,
    },
  },
  {
    slug: "ml-vs-dl-healthcare",
    title: "Machine Learning vs Deep Learning in Healthcare",
    tag: "AIML-500-01N1Z - ML vs DL",
    summary:
      "A short animated video that explains the difference between machine learning and deep learning through real healthcare examples, including the MASAI breast cancer screening trial.",
    image: `${import.meta.env.BASE_URL}images/ml-vs-dl-cover.webp`,
    introduction:
      "This artifact is a short animated video on one question: what is the difference between machine learning and deep learning, and why does it matter in healthcare? It started as a residency presentation in my Machine Learning Fundamentals course. For my portfolio I turned it into a video that anyone can follow in under three minutes.",
    description:
      "The video starts with something most of us have done, Googling our symptoms, and follows a patient named Maya and her questions about AI. It shows where machine learning and deep learning sit inside AI, then compares them on the same problem: finding diabetic retinopathy in eye photos, once with hand-picked features (traditional ML) and once with a neural network that learns the features itself (deep learning). A side-by-side scene compares the two on features, data, strengths and explainability. The main example is the MASAI trial in Sweden, where a deep learning model called Transpara helped radiologists read mammograms for 105,934 women. The results were 29% more cancers found and 44% less reading work, with no extra false alarms. It ends with ethics, real clinical challenges and one message: ML finds patterns, DL recognizes complex signals, and doctors make the decisions.",
    objective:
      "Explain the difference between machine learning and deep learning in a way a non-technical audience can understand, and show with real evidence how both are already being used in healthcare.",
    process: [
      "Researched the MASAI trial using The Lancet, The Lancet Digital Health and Lund University.",
      "Studied how ML and DL each approach the same medical problem, using diabetic retinopathy as the example.",
      "Made the ML vs DL comparison the main thread and planned the video scene by scene.",
      "Built the animated video with Claude (AI): animated statistics, a sensitivity chart and a side-by-side ML vs DL comparison.",
      "Checked every number against the published studies and added the sources at the end of the video.",
    ],
    tools: [
      "Microsoft PowerPoint",
      "Claude (AI) for animation",
      "Data Storytelling",
      "Research & Source Analysis",
      "APA Citation",
    ],
    valueProposition:
      "In under three minutes it explains a concept that confuses a lot of people, the difference between ML and DL, and backs it up with real clinical results instead of hype.",
    uniqueValue:
      "It does not just define the terms. It puts ML and DL side by side on the same medical problem and then shows a deep learning model working in a real randomized trial, so the viewer sees why the difference matters.",
    relevance:
      "Healthcare is one of the areas where AI has the most at stake, so being able to explain what a model does, what evidence supports it and where a human still has to decide is an important skill for any AI or data role. This artifact also shows I can take technical content and adapt it for a different audience and format.",
    link: {
      label: "Watch the video",
      url: `${import.meta.env.BASE_URL}videos/ml-vs-dl-healthcare.mp4`,
      embed: true,
    },
  },
];

export const getArtifact = (slug: string) => artifacts.find((a) => a.slug === slug);
