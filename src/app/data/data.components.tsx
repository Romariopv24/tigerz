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
