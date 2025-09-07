"use client";

import { useState } from "react";
import { Hero } from "./components/hero";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import ContentBox from "./components/content-box";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("about");

  return (
    <div className="font-sans min-h-screen flex flex-col relative">
      {/* Sticky Header with Hero and Navigation */}
      <div className="sticky top-0 z-50">
        <Hero />
        <Navigation selectedItem={selectedItem} onItemSelect={setSelectedItem} />
      </div>
      
      <main className="flex flex-col flex-1 px-2 pb-32">
        <div className="pb-8">
          <ContentBox selectedItem={selectedItem} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
