"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface ResumeItemData {
    id: number;
    title: string;
    company: string;
    website: string;
    description: string;
    dates: string;
    logo: string;
    bullets: string[];
}

interface ResumeItemProps {
    item: ResumeItemData;
}

export default function ResumeItem({ item }: ResumeItemProps) {
    return (
        <Card className="w-full max-w-none border-t-white dark:border-t-white hover:shadow-lg transition-shadow duration-200 mx-0">
            <CardContent className="py-1">
                <div className="flex items-start gap-6">
                    {/* Company Logo */}
                    {item.logo && (
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 relative rounded-md overflow-hidden flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt={`${item.company} logo`}
                                    width={56}
                                    height={56}
                                    className="object-contain opacity-80 brightness-80"
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
                                <span className="text-gray-400 dark:text-gray-500">@</span>
                                {item.website ? (
                                    <a
                                        href={item.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-normal text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                    >
                                        {item.company}
                                    </a>
                                ) : (
                                    <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                                        {item.company}
                                    </span>
                                )}
                            </div>
                            <div className="text-base text-gray-500 dark:text-gray-400 font-normal">
                                {item.dates}
                            </div>
                        </div>
                        
                        {/* Bullet Points */}
                        <ul className="space-y-2">
                            {item.bullets.map((bullet, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-gray-400 dark:text-white/90 flex-shrink-0">•</span>
                                    <span className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {bullet}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}