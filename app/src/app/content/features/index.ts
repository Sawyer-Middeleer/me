export interface FeatureItemData {
    id: number;
    title: string;
    description: string;
    platform: string;
    link: string;
}

const featureItems: FeatureItemData[] = [
    {
        id: 1,
        title: "Article",
        link: "https://www.example.com",
        description: "Explore my writing, articles, and written works on various topics.",
        platform: "LinkedIn"
    }
]

export default featureItems;