"use client";

import { useState } from "react";
import { Hero } from "./components/hero";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import ContentBox from "./components/content-box";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string>("work");

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex flex-col items-center flex-1 p-8">
        <div className="pt-16 pb-16">
          <Hero />
        </div>
        <div className="pb-8">
          <Navigation selectedItem={selectedItem} onItemSelect={setSelectedItem} />
        </div>
        <div className="pb-8">
          <ContentBox selectedItem={selectedItem} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
