function StepFormContainer({ currentStep, steps, canContinue, onBack, onNext, children }) {
  const step = steps.find((item) => item.number === currentStep);
  const isLastStep = currentStep === steps.length;

  return (
    <section className="card step-card">
      <header className="step-header">
        <div>
          <div className="step-meta">{step.label}</div>
          <h2>{step.title}</h2>
          <p>{step.description}</p>
        </div>
        <div className="step-meta">Approx. 1 minute</div>
      </header>

      {children}

      <div className="step-actions">
        <button className="ghost-button" type="button" onClick={onBack} disabled={currentStep === 1}>
          Back
        </button>
        <button className="primary-button" type="button" onClick={onNext} disabled={!canContinue}>
          {isLastStep ? 'See Results' : 'Continue'}
        </button>
      </div>
    </section>
  );
}

export default StepFormContainer;
