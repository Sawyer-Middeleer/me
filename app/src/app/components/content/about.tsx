"use client";

import aboutContent from "../../content/about/index";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function About() {
    return (
        <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* Image Section */}
                        <div className="flex-shrink-0 mx-auto lg:mx-0">
                            <div className="relative">
                                <Image 
                                    src={aboutContent.image} 
                                    alt="Sawyer Middeleer" 
                                    width={200} 
                                    height={200} 
                                    className="rounded-2xl shadow-lg object-cover border-4 border-white dark:border-gray-800" 
                                />
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-sm -z-10"></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 space-y-6">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    Sawyer Middeleer
                                </h1>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            </div>
                            
                            <div className="prose prose-lg max-w-none dark:prose-invert">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                    {aboutContent.summary}
                                </p>
                            </div>

                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}