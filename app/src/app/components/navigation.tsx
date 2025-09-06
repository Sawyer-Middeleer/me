"use client";

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";

interface NavigationProps {
    selectedItem: string;
    onItemSelect: (itemId: string) => void;
}

export default function Navigation({ selectedItem, onItemSelect }: NavigationProps) {
    const menuItems = [
        { id: "work", label: "Work" },
        { id: "creations", label: "Creations" },
        { id: "writing", label: "Writing" }
    ];

    const handleItemClick = (itemId: string) => {
        onItemSelect(itemId);
    };

    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList className="space-x-8">
                    {menuItems.map((item) => (
                        <NavigationMenuItem key={item.id}>
                            <NavigationMenuLink
                                onClick={() => handleItemClick(item.id)}
                                className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-200 relative border-2 border-transparent hover:border-white/90 ${
                                    selectedItem === item.id ? "border-white/90" : ""
                                }`}
                            >
                                <span className="relative z-10">{item.label}</span>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}