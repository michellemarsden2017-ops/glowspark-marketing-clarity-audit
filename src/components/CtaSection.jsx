import { RESULTS_COPY } from '../data/options';

function CtaSection() {
  return (
    <section className="card cta-card">
      <div className="cta-row">
        <div className="cta-copy">
          <div className="step-meta">Next step</div>
          <h2>{RESULTS_COPY.ctaTitle}</h2>
          {/* Customize this section if you want to sell, book, or download a different offer after the audit. */}
          <p>{RESULTS_COPY.ctaDescription}</p>
        </div>
        <div className="cta-actions">
          <span className="card-kicker">Calm, focused next action</span>
          <button type="button" className="primary-button">
            {RESULTS_COPY.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
