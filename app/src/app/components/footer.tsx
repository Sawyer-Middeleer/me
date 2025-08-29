export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8rem",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        background: "var(--background)",
        backdropFilter: "saturate(180%) blur(8px)",
      }}
    >
      <a
        href="https://www.linkedin.com/in/sawyer-middeleer/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{ padding: "4px", opacity: 0.9 }}
      >
        <i className="fa-brands fa-linkedin fa-lg" />
      </a>
      <a
        href="https://github.com/Sawyer-Middeleer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{ padding: "4px", opacity: 0.9 }}
      >
        <i className="fa-brands fa-github fa-lg" />
      </a>
      <a
        href="https://x.com/sawyermidddd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        style={{ padding: "4px", opacity: 0.9 }}
      >
        <i className="fa-brands fa-x-twitter fa-lg" />
      </a>
    </footer>
  );
}


