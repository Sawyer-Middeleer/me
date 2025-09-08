export interface FeatureItemData {
    id: number;
    type: string;
    title: string;
    description: string;
    platform: string;
    link: string;
    date: string;
}

const featureItems: FeatureItemData[] = [
    {
        id: 1,
        type: "Podcast",
        title: "Tech Talk Podcast",
        link: "https://www.example.com",
        description: "Weekly discussions about the latest in technology and innovation.",
        platform: "Spotify",
        date: "Dec 15, 2024"
    },
    {
        id: 2,
        type: "Article",
        title: "Building Scalable Systems",
        link: "https://www.example.com",
        description: "A comprehensive guide to designing and implementing scalable software architectures.",
        platform: "Medium",
        date: "Dec 10, 2024"
    },
    {
        id: 3,
        type: "Video",
        title: "React Best Practices",
        link: "https://www.example.com",
        description: "Learn advanced React patterns and optimization techniques.",
        platform: "YouTube",
        date: "Dec 5, 2024"
    },
    {
        id: 4,
        type: "LinkedIn",
        title: "Professional Insights",
        link: "https://www.example.com",
        description: "Thought leadership content on software engineering and team management.",
        platform: "LinkedIn",
        date: "Dec 1, 2024"
    }
]

export default featureItems;