"use client";

import ExperienceItem from "./content/experience-item";
import experienceItems from "../content/experience";
import About from "./content/about";
import CreationItem from "./content/creation-item";
import creationItems from "../content/creations";
import FeatureItem from "./content/feature-item";
import featureItems from "../content/features";
import { BentoGrid } from "./ui/bento-grid";

interface ContentBoxProps {
    selectedItem: string;
}

export default function ContentBox({ selectedItem }: ContentBoxProps) {
    const getContent = () => {
        switch (selectedItem) {
            case "experience":
                return {
                    title: "Experience",
                    content: (
                        <div className="space-y-8">
                            {experienceItems.map((item) => (
                                <ExperienceItem key={item.id} item={item} />
                            ))}
                        </div>
                    )
                };
            case "creations":
                return {
                    title: "Creations",
                    content:  (
                        <BentoGrid>
                            {creationItems.map((item) => (
                                <CreationItem key={item.id} item={item} />
                            ))}
                        </BentoGrid>
                    )
                };
            case "features":
                return {
                    title: "Features",
                    content: (
                        <div className="space-y-8">
                            {featureItems.map((item) => (
                                <FeatureItem key={item.id} item={item} />
                            ))}
                        </div>
                    )
                };
            case "about":
                return {
                    title: "About",
                    content: <About />
                };
            default:
                return {
                    title: "About",
                    content: <About />
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