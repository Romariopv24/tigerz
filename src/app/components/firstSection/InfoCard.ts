import { rootImages } from "@/app/core/rootImages";

export const  infoCardData: InfoCard[]= [
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


interface InfoCard {
    title: string
    description: string
    paragraph: string
    image: string
}