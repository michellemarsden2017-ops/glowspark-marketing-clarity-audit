import { OPTION_LABELS, RESULTS_COPY } from '../data/options';

function ResultsDashboard({ results, onReset }) {
  return (
    <section className="card results-card">
      <div className="section-header">
        <div>
          <div className="step-meta">Results dashboard</div>
          <h2>{RESULTS_COPY.title}</h2>
          <p>{RESULTS_COPY.description}</p>
        </div>
        <button type="button" className="ghost-button" onClick={onReset}>
          Start Over
        </button>
      </div>

      <div className="results-overview">
        <div className="overview-item">
          <span className="overview-label">Active platforms</span>
          <strong>{results.meta.platformLabels || 'Still taking shape'}</strong>
        </div>
        <div className="overview-item">
          <span className="overview-label">Consistency</span>
          <strong>{results.meta.consistencyLabel}</strong>
        </div>
        <div className="overview-item">
          <span className="overview-label">Existing assets</span>
          <strong>{results.meta.assetLabels || 'None selected yet'}</strong>
        </div>
      </div>

      <div className="results-grid results-grid-primary">
        <div className="list-card list-card-emphasis">
          <span className="card-kicker">Overview</span>
          <strong>Marketing Snapshot</strong>
          <p className="summary-copy summary-copy-spaced">
            {results.marketingSnapshot}
          </p>
        </div>

        <div className="list-card">
          <span className="card-kicker">Diagnosis</span>
          <strong>What&apos;s Broken</strong>
          <p className="summary-copy summary-copy-spaced">
            {results.whatsBroken}
          </p>
        </div>
      </div>

      <div className="list-card list-card-wide">
        <span className="card-kicker">Clarity gaps</span>
        <strong>Gaps</strong>
        <p className="summary-copy summary-copy-spaced">
          {results.gaps}
        </p>
      </div>

      <div className="list-card list-card-wide">
        <div className="summary-row">
          <div>
            <span className="card-kicker">Priority plan</span>
            <strong>What to Fix Next</strong>
          </div>
          <span className="step-meta">Top 3 priorities</span>
        </div>
        <ol className="priority-list">
          {results.fixNext.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p className="summary-copy priority-detail">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="list-card list-card-soft list-card-wide">
        <span className="card-kicker">Perspective</span>
        <strong>Reassurance</strong>
        <p className="summary-copy summary-copy-spaced">
          {results.reassurance}
        </p>
      </div>

      <div className="list-card list-card-wide">
        <span className="card-kicker">Audit inputs</span>
        <strong>Selected audit inputs</strong>
        <div className="insight-list">
          {results.selectedSummary.consistencyLevel ? (
            <span className="tag">Consistency: {results.meta.consistencyLabel}</span>
          ) : null}
          {results.selectedSummary.platforms.map((item) => (
            <span className="tag" key={`platform-${item}`}>
              {OPTION_LABELS[item] ?? item}
            </span>
          ))}
          {results.selectedSummary.problems.map((item) => (
            <span className="tag" key={`problem-${item}`}>
              {OPTION_LABELS[item] ?? item}
            </span>
          ))}
          {results.selectedSummary.assets.map((item) => (
            <span className="tag" key={`asset-${item}`}>
              {OPTION_LABELS[item] ?? item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResultsDashboard;
