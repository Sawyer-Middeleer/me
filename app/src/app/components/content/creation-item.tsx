"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface CreationItemData {
    id: number;
    title: string;
    website: string;
    description: string;
    image: string;
}

interface CreationItemProps {
    item: CreationItemData;
}

export default function CreationItem({ item }: CreationItemProps) {
    return (
        <Card className="w-full max-w-none border-t-white dark:border-t-white hover:shadow-lg transition-shadow duration-200 mx-0">
            <CardContent className="py-1">
                <div className="flex items-start gap-6">
                    {/* Creation Image */}
                    {item.image && (
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 relative rounded-md overflow-hidden flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                                <Image
                                    src={item.image}
                                    alt={`${item.title} project image`}
                                    width={56}
                                    height={56}
                                    className="object-contain opacity-80 brightness-80"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>
                                {item.website && (
                                    <>
                                        <span className="text-gray-400 dark:text-gray-500" aria-hidden="true">→</span>
                                        <a
                                            href={item.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-normal text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                            aria-label={`View ${item.title} project (opens in new tab)`}
                                        >
                                            View Project
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                        
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}