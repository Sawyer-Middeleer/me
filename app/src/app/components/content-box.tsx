"use client";

interface ContentBoxProps {
    selectedItem: string;
}

export default function ContentBox({ selectedItem }: ContentBoxProps) {
    const getContent = () => {
        switch (selectedItem) {
            case "work":
                return {
                    title: "Work",
                    content: "Here you'll find my professional work, projects, and career highlights."
                };
            case "creations":
                return {
                    title: "Creations",
                    content: "Explore my creative projects, designs, and artistic endeavors."
                };
            case "writing":
                return {
                    title: "Writing",
                    content: "Read my thoughts, articles, and written works on various topics."
                };
            default:
                return {
                    title: "Welcome",
                    content: "Select a category from the navigation above to explore my content."
                };
        }
    };

    const { title, content } = getContent();

    return (
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{content}</p>
        </div>
    );
}