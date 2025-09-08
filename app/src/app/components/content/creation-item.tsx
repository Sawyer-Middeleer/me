"use client";

import Image from "next/image";
import { BentoGridItem } from "../ui/bento-grid";

interface CreationItemData {
    id: number;
    title: string;
    website: string;
    description: string;
    image: string;
    size?: 'small' | 'medium' | 'large';
}

interface CreationItemProps {
    item: CreationItemData;
}

export default function CreationItem({ item }: CreationItemProps) {
    const header = item.image ? (
        <div className="relative w-full h-full flex items-center justify-center">
            <Image
                src={item.image}
                alt={`${item.title} project image`}
                fill
                className="object-contain opacity-80 brightness-80"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                }}
            />
        </div>
    ) : null;

    const title = (
        <div className="flex items-center gap-2">
            <span>{item.title}</span>
            {item.website && (
                <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    aria-label={`View ${item.title} project (opens in new tab)`}
                >
                    →
                </a>
            )}
        </div>
    );

    return (
        <BentoGridItem
            title={title}
            description={item.description}
            header={header}
            size={item.size}
        />
    );
}