export interface CreationItemData {
    id: number;
    title: string;
    website: string;
    description: string;
    image: string;
    size?: 'small' | 'medium' | 'large';
}

const creationItems: CreationItemData[] = [
    {
        id: 1,
        title: "ACE Club",
        website: "https://aceclub.network",
        description: "A comprehensive platform for creative professionals to showcase their work, connect with peers, and discover new opportunities in the creative industry.",
        image: "/sawyer.jpg",
        size: 'medium'
    },
    {
        id: 2,
        title: "Design System",
        website: "https://designsystem.example.com",
        description: "A comprehensive design system built with React and TypeScript.",
        image: "/logos/aomni.svg",
        size: 'small'
    },
    {
        id: 3,
        title: "Portfolio Site",
        website: "https://portfolio.example.com",
        description: "Modern portfolio website with smooth animations.",
        image: "/logos/mpc.jpeg",
        size: 'small'
    },
    {
        id: 4,
        title: "E-commerce Platform",
        website: "https://shop.example.com",
        description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.",
        image: "/logos/mullins.webp",
        size: 'medium'
    },
    {
        id: 5,
        title: "Mobile App",
        website: "https://app.example.com",
        description: "Cross-platform mobile application for task management.",
        image: "/logos/revel.jpeg",
        size: 'medium'
    },
    {
        id: 6,
        title: "API Service",
        website: "https://api.example.com",
        description: "RESTful API with GraphQL support.",
        image: "/logos/thrasio.png",
        size: 'small'
    },
    {
        id: 7,
        title: "Analytics Dashboard",
        website: "https://analytics.example.com",
        description: "Real-time data visualization and business intelligence platform with custom charts, automated reporting, and team collaboration features.",
        image: "/logos/tusk_strategies.jpeg",
        size: 'large'
    }
]

export default creationItems;