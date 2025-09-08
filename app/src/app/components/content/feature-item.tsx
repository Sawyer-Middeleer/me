"use client";

import { Card, CardContent } from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faMicrophone, 
    faNewspaper, 
    faVideo
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface FeatureItemData {
    id: number;
    type: string;
    title: string;
    description: string;
    platform: string;
    link: string;
    date: string;
}

interface FeatureItemProps {
    item: FeatureItemData;
}

const getIconForType = (type: string) => {
    switch (type.toLowerCase()) {
        case 'podcast':
            return faMicrophone;
        case 'article':
            return faNewspaper;
        case 'video':
            return faVideo;
        case 'linkedin':
            return faLinkedin;
        default:
            return faNewspaper;
    }
};

export default function FeatureItem({ item }: FeatureItemProps) {
    return (
        <Card className="w-full max-w-none border-t-white dark:border-t-white hover:shadow-lg transition-shadow duration-200 mx-0">
            <CardContent className="py-3">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                        <FontAwesomeIcon 
                            icon={getIconForType(item.type)} 
                            className="text-xl text-blue-600 dark:text-blue-400"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                            {item.title}
                        </h3>
                    </div>
                    <div className="flex-shrink-0">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {item.date}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}