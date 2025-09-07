import SocialIcon from "./ui/social-icon";

export default function Footer() {
  return (
    <footer
      className="footer-social fixed bottom-0 left-0 right-0 z-50 overflow-hidden backdrop-blur-md"
      style={{
        borderTop: "2px solid rgba(255,255,255,0.9)",
        background: "linear-gradient(45deg, rgba(108, 0, 162, 0.3), rgba(0, 17, 82, 0.3), rgba(18, 113, 255, 0.3), rgba(221, 74, 255, 0.3))",
        backgroundSize: "400% 400%",
        animation: "gradientMove 30s ease infinite",
        position: "fixed"
      }}
    >
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(5, 186, 246, 0.3) 0%, transparent 80%),
            radial-gradient(circle at 80% 50%, rgba(6, 226, 101, 0.3) 0%, transparent 80%),
            radial-gradient(circle at 50% 20%, rgba(255, 247, 18, 0.2) 0%, transparent 80%),
            radial-gradient(circle at 50% 80%, rgba(11, 242, 45, 0.2) 0%, transparent 80%)
          `,
          animation: 'gradientFloat 180s infinite'
        }}
      />
      
      <div 
        className="relative z-10 flex md:gap-32 items-center justify-center"
        style={{
          height: "64px",
          paddingBottom: "42px",
          paddingTop: "42px"
        }}
      >
        <SocialIcon href="https://www.linkedin.com/in/sawyer-middeleer/" label="LinkedIn">
          <i className="fa-brands fa-linkedin fa-2xl" />
        </SocialIcon>
        <SocialIcon href="https://github.com/Sawyer-Middeleer" label="GitHub">
          <i className="fa-brands fa-github fa-2xl" />
        </SocialIcon>
        <SocialIcon href="https://x.com/sawyermidddd" label="X">
          <i className="fa-brands fa-x-twitter fa-2xl" />
        </SocialIcon>
      </div>
    </footer>
  );
}


