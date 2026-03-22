import { useState } from 'react';
import { RESULTS_COPY } from '../data/options';

const EMAIL_STORAGE_KEY = 'glowspark-clarity-plan-email';

function EmailCapture() {
  const [email, setEmail] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return;
    }

    localStorage.setItem(EMAIL_STORAGE_KEY, trimmedEmail);
    setIsSaved(true);
  };

  return (
    <section className="card email-card">
      <div className="section-header">
        <div>
          <div className="step-meta">Lead capture</div>
          <h2>{RESULTS_COPY.emailTitle}</h2>
          {/* Customize this copy if you want to describe the exact email deliverable or CRM integration. */}
          <p>{RESULTS_COPY.emailDescription}</p>
        </div>
      </div>

      <div className="email-panel">
        <div className="email-panel-copy">
          <span className="card-kicker">Private delivery</span>
          <strong>Receive the summary and next-step prompts in one place.</strong>
        </div>

        <form className="email-form" onSubmit={handleSubmit}>
          <input
            className="email-input"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (isSaved) {
                setIsSaved(false);
              }
            }}
          />
          <button className="primary-button" type="submit" disabled={!email.trim()}>
            Send my plan
          </button>
        </form>

        {isSaved ? <div className="success-note">Your plan has been saved.</div> : null}
      </div>

      <div className="small-note">Replace this mock form with your email platform or CRM handler.</div>
    </section>
  );
}

export default EmailCapture;
