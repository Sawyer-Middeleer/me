import Image from "next/image";

const links = [
  {
    href: "https://www.linkedin.com/in/sawyer-middeleer/",
    label: "LinkedIn",
    svgIcon: "/linkedin.svg",
  },
  {
    href: "https://x.com/sawyermidddd",
    label: "X",
    svgIcon: "/x.svg",
  },
  {
    href: "https://github.com/Sawyer-Middeleer",
    label: "GitHub",
    svgIcon: "/github.svg",
  },
  {
    href: "https://www.revi.systems",
    label: "Revi Systems",
    svgIcon: "/orbit.svg",
  },
  {
    href: "https://www.duet.so",
    label: "Duet",
    svgIcon: "/eclipse.svg",
  },
  {
    href: "https://cal.com/sawyer-revi-systems/30min",
    label: "Meet",
    svgIcon: "/video.svg",
  },
  {
    href: "mailto:sawyer@revi.systems",
    label: "Email",
    svgIcon: "/mail.svg",
  },
];

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen p-8 pb-16 md:pb-8">
      <main className="flex flex-col items-center gap-6">
        <Image
          src="/sawyer-dither.png"
          alt="Sawyer Middeleer"
          width={180}
          height={180}
          className="rounded-full"
          priority
        />
        <h1 className="text-4xl font-bold">Hi, I&apos;m Sawyer</h1>
        <div className="flex flex-wrap justify-center gap-3 mt-2 max-w-xs">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-2 px-4 py-2 border border-current rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              <Image
                src={link.svgIcon}
                alt=""
                width={16}
                height={16}
                className="dark:invert"
              />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
