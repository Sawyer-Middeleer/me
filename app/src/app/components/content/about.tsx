"use client";

import aboutContent from "../../content/about/index";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <Image src={aboutContent.image} alt="Sawyer Middeleer" width={100} height={100} className="rounded-full"     />
            <p>{aboutContent.summary}</p>
        </div>
    );
}