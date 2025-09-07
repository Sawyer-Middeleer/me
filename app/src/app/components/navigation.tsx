"use client";

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";

interface NavigationProps {
    selectedItem: string;
    onItemSelect: (itemId: string) => void;
}

export default function Navigation({ selectedItem, onItemSelect }: NavigationProps) {
    const menuItems = [
        { id: "about", label: "About Me" },
        { id: "experience", label: "Experience" },
        { id: "creations", label: "Creations" },
        { id: "features", label: "Features" }
    ];

    const handleItemClick = (itemId: string) => {
        onItemSelect(itemId);
    };

    return (
        <div className="w-full bg-black border-b-2 border-t-2 pt-4 pb-4 border-white/90">
            <div className="flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-8 md:gap-32">
                        {menuItems.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    onClick={() => handleItemClick(item.id)}
                                    className={`cursor-pointer px-6 py-3 rounded-sm transition-all duration-200 relative border-2 border-transparent hover:border-white/90 text-white font-semibold ${
                                        selectedItem === item.id ? "border-white/90 font-semibold" : ""
                                    }`}
                                    style={selectedItem === item.id ? {
                                        background: "linear-gradient(45deg, rgba(108, 0, 162, 0.3), rgba(0, 17, 82, 0.3), rgba(18, 113, 255, 0.3), rgba(221, 74, 255, 0.3))",
                                        backgroundSize: "200% 200%",
                                        animation: "gradientMove 30s ease infinite",
                                        backgroundPosition: "0% 0%"
                                    } : {}}
                                >
                                    {selectedItem === item.id && (
                                        <div 
                                            className="absolute inset-0 opacity-50 rounded-sm"
                                            style={{
                                                background: `
                                                    radial-gradient(circle at 30% 30%, rgba(5, 186, 246, 0.4) 0%, transparent 60%),
                                                    radial-gradient(circle at 70% 70%, rgba(6, 226, 101, 0.4) 0%, transparent 60%),
                                                    radial-gradient(circle at 50% 20%, rgba(255, 247, 18, 0.3) 0%, transparent 60%),
                                                    radial-gradient(circle at 50% 80%, rgba(11, 242, 45, 0.3) 0%, transparent 60%)
                                                `,
                                                animation: 'gradientFloat 60s infinite',
                                                backgroundSize: "150% 150%"
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.label}</span>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}