"use client";

import { Card, CardContent } from "../ui/card";

interface FeatureItemData {
    id: number;
    title: string;
    description: string;
    platform: string;
    link: string;
}

interface FeatureItemProps {
    item: FeatureItemData;
}

export default function FeatureItem({ item }: FeatureItemProps) {
    return (
        <Card className="w-full max-w-none border-t-white dark:border-t-white hover:shadow-lg transition-shadow duration-200 mx-0">
            <CardContent className="py-1">
                <div className="flex items-start gap-6">
                    <div className="flex-1 min-w-0">
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}