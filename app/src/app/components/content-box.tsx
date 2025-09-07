"use client";

import ResumeItem from "./content/resume-item";
import resumeItems from "../content/work";

interface ContentBoxProps {
    selectedItem: string;
}

export default function ContentBox({ selectedItem }: ContentBoxProps) {
    const getContent = () => {
        switch (selectedItem) {
            case "work":
                return {
                    title: "Work",
                    content: (
                        <div className="space-y-8">
                            {resumeItems.map((item) => (
                                <ResumeItem key={item.id} item={item} />
                            ))}
                        </div>
                    )
                };
            case "creations":
                return {
                    title: "Creations",
                    content: "Explore my creative projects, designs, and artistic endeavors."
                };
            case "writing":
                return {
                    title: "Thoughts",
                    content: "Read my thoughts, articles, and written works on various topics."
                };
            default:
                return {
                    title: "Welcome",
                    content: "Select a category from the navigation above to explore my content."
                };
        }
    };

    const { content } = getContent();

    return (
        <div className="w-full px-64 py-16">
            {typeof content === 'string' ? (
                <div className="text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-300">{content}</p>
                </div>
            ) : (
                content
            )}
        </div>
    );
}