import SocialIcon from "./ui/social-icon";

export default function Footer() {
  return (
    <footer
      className="footer-social"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: "24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "var(--background)",
        backdropFilter: "saturate(180%) blur(8px)",
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
    </footer>
  );
}


