function ProgressBar({ currentStep, totalSteps }) {
  const progress = `${(currentStep / totalSteps) * 100}%`;

  return (
    <section className="card progress-card">
      <div className="progress-row">
        <strong>Audit progress</strong>
        <span className="progress-meta">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: progress }} />
      </div>
    </section>
  );
}

export default ProgressBar;
