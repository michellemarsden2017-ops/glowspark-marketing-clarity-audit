function AppLayout({ children }) {
  return (
    <main className="page-shell">
      <div className="page-frame">
        <section className="hero">
          <span className="eyebrow">GlowSpark Studio</span>
          <h1>Marketing Clarity Audit</h1>
          {/* Customize this copy if you want a stronger brand promise or audience-specific positioning. */}
          <p>
            A quick guided audit to spot where your message, marketing rhythm, and supporting assets feel aligned and
            where they need attention next.
          </p>
        </section>

        <div className="content-stack">{children}</div>
      </div>
    </main>
  );
}

export default AppLayout;
