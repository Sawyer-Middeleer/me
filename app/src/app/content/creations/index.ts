export interface CreationItemData {
    id: number;
    title: string;
    website: string;
    description: string;
    image: string;
}

const creationItems: CreationItemData[] = [
    {
        id: 1,
        title: "ACE Club",
        website: "https://aceclub.network",
        description: "Explore my creative projects, designs, and artistic endeavors.",
        image: "/sawyer.jpg"
    }
]

export default creationItems;