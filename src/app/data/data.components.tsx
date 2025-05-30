import { rootImages } from "@/app/core/rootImages"

interface FirstSectionInfoCard {
    title: string
    description: string
    paragraph: string
    image: string
}


interface SecondSectionData {
    image: string
    description: string
    options?: string[]
}

interface ThirdSectionData {
    number: string
    title: string
    description: string
}

interface FifthSectionData {
    title: string
    points: string[]
    image: string
}

export const firstSectionInfoCard: FirstSectionInfoCard[]= [
    {
        title:" Ready In A Blink",
        description:"Done in 7 days or get 50% back",
        paragraph: "We move quickly so you can start selling, booking, or growing ASAP.",
        image: rootImages.time
    },
    {
        title:"Done By Experts",
        description: "Built by UX/UI designers & devs",
        paragraph: "Mobile-ready, user-friendly, and clutter-free.",
        image: rootImages.team
    },
    {
        title:"Fairly Priced",
        description: "Pay only for what you need.",
        paragraph: "Transparent pricing with optional add-ons. No hidden fees.",
        image: rootImages.pink
    },
]




export const secondSectionData: SecondSectionData[] = [
    {
        image: '',
        description: "📱 Mobile-optimized website"
    },
    {
        image: '',
        description: "🔁 3 revision rounds included"
    },
    {
        image: '',
        description: "🎨 UX/UI design tailored to your brand"
    },
    {
        image: '',
        description: "🌐 Hosting setup assistance (if needed)"
    },
    {
        image: '',
        description: "📄 Up to 2 pages (e.g., Home + Contact)"
    },
    {
        image: '',
        description: "💻 Responsive website coded from scratch"
    },
    {
        image: '',
        description: "⏱️ Delivered in 7 days or we return 50% of your money**"
    },
    {
        image: '',
        description: "🧾 Add-Ons (Optional Upgrades):",
        options: ['Branding Kit (logo, fonts, colors)', 'Copywriting for your landing page', 'Additional Pages', 'Domain + hosting setup (if you don\'t have one)']
    },
]


export const thirdSectionData: ThirdSectionData[] = [ 
    {
        number: "1",
        title: "Book a Discovery Call",
        description: "We’ll learn your business, goals, and gather all content, free of charge."
    },
    {
        number: "2",
        title: "Pay 50% Deposit",
        description: "Once your content and project scope are locked in, we’ll get started."
    },
    {
        number: "3",
        title: "We Design & Build",
        description: "You’ll review early designs, share feedback, and we’ll code everything after approval."
    },
     {
        number: "4",
        title: "Launch or Deliver",
        description: "On Day 7, your site goes live, or we give you 50% back. Plain and simple."
    },
    
]


export const fifthySectionData: FifthSectionData[] = [
    {
        title: "Restaurants & food trucks",
        points: ["Book a Table Landing page.", "Menu and location landing page.", "All of the above!"],
        image: rootImages.time
    },
    {
        title: "Freelancers & personal brands",
        points: ["Personal portfolio or resume site.", "Book a call or buy service.", "Or... Both!"],
        image: rootImages.time
    },
    {
        title: "Startups ready to shine",
        points: ["Validate your idea with real site.", "Collect leads or investor interest.", "Built to grow with you."],
        image:  rootImages.time
    },
    {
        title: "Service based businesses",
        points: ["Landing page with service & pricing.", "Contact form for direct inquiries.", "All set in one place!."],
        image: rootImages.time
    },
    {
        title: "DIY-site survivors",
        points: ["No more clunky web builders.", "Designed to match your brand, no drag and drop mess.", "How it should've been"],
        image: rootImages.time
    },
]