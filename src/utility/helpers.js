export function classNames(...values) {
  return values.filter(Boolean).join(' ')
}

// Home page content, kept together so section components only handle presentation.
export const homePageData = {
  hero: {
    titleStart: "Navigating",
    titleAccent: "German Bureaucracy",
    titleEnd: "with ease",
    description: "Herbert Visa: Your AI-powered assistant for German visa and immigration processes",
    action: "Start your conversation with Herbert",
    services: [
      ["Interactive Forms", "Simplify visa application forms", "forms"],
      ["Document Checklist", "Personalized document preparation", "documents"],
      ["Language Assistance", "German language skills assessment", "language"],
    ],
  },
  features: {
    heading: ["Herbert Main", "Features"],
    note: "Explore practical topics that can help you prepare for a move to Germany.",
    items: [
      "Find out which visa you might want",
      "Receive a checklist with all necessary documents",
      "Write your CV / Motivation Letter with Herbert",
      "Help prepare for your visa interview",
      "Practice your German interactively with Herbert",
      "Let Herbert guide you through your fresh start in Germany once you get there.",
    ],
  },
  plans: {
    heading: ["Friendly Pricing", "Plans"],
    note: "Explore the service options and confirm current pricing and availability before purchase.",
    includedLabel: "What’s included?",
    items: [
      { price: "$5/mo", name: "Basic", text: "Ideal for newcomers! Get quick and clear answers to your basic questions about German immigration policies.", messages: "10 Messages" },
      { price: "$10/mo", name: "Standard", text: "The go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers.", messages: "25 Messages" },
      { price: "$20/mo", name: "Premium", text: "Have Herbert accompany you throughout your entire visa application journey, with extensive message credits.", messages: "50 Messages" },
    ],
  },
  team: {
    heading: ["Team", "& Resources"],
    description: "Herbert brings together practical visa guidance, helpful resources, and clear next steps for people planning a new life and career in Germany.",
    details: ["Single entrepreneur (yourself)", "Outsourced development to freelancers", "Budget: $15,000"],
  },
  faq: {
    heading: ["Frequently Asked", "Questions"],
    note: "Quick answers about Herbert and the guidance available on this site.",
    items: [
      ["What is Herbert?", "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved."],
      ["How accurate is the information provided by Herbert?", "Requirements can change and may depend on your situation. Use the sources page and confirm current details with the responsible authority."],
      ["How can I access Herbert?", "Browse the guidance and source information available on this website."],
      ["How can Herbert help me with my visa application?", "Herbert can help you understand visa options, prepare a document checklist, and practice for an interview."],
      ["Is Herbert available in multiple languages?", "Herbert offers language assistance to help you prepare for life in Germany."],
      ["Can Herbert help me fill out my application forms?", "Herbert can guide you through the information requested on common application forms."],
    ],
    viewAll: "View All",
  },
  cta: {
    title: ["Need Help in Your Visa?", "Ask Herbert Now!"],
    description: "Explore visa topics, review useful resources, and get guidance as you prepare to move to Germany.",
    primaryAction: "Start your conversation",
    secondaryAction: "Learn More",
  },
}
