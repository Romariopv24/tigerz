export const sectionData: SectionData[] = [
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

interface SectionData {
    image: string
    description: string
    options?: string[]
}