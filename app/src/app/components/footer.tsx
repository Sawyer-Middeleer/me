import SocialIcon from "./ui/social-icon";

export default function Footer() {
  return (
    <footer
      className="footer-social relative overflow-hidden"
      style={{
        borderTop: "2px solid rgba(255,255,255,0.9)",
        background: "linear-gradient(45deg, rgba(108, 0, 162, 0.3), rgba(0, 17, 82, 0.3), rgba(18, 113, 255, 0.3), rgba(221, 74, 255, 0.3))",
        backgroundSize: "400% 400%",
        animation: "gradientMove 6s ease infinite",
        position: "relative"
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
          animation: 'gradientFloat 60s infinite'
        }}
      />
      
      <div 
        className="relative z-10 flex gap-8 md:gap-32 items-center justify-center"
        style={{
          height: "64px",
          paddingBottom: "52px",
          paddingTop: "52px"
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


