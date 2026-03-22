import { useMemo, useState } from 'react';
import AppLayout from './components/AppLayout';
import ProgressBar from './components/ProgressBar';
import StepFormContainer from './components/StepFormContainer';
import StepPlatforms from './components/StepPlatforms';
import StepConsistency from './components/StepConsistency';
import StepChallenges from './components/StepChallenges';
import ResultsDashboard from './components/ResultsDashboard';
import EmailCapture from './components/EmailCapture';
import CtaSection from './components/CtaSection';
import { AUDIT_STEPS, DEFAULT_FORM_STATE } from './data/options';
import { generateAuditReport } from './lib/auditRules';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [results, setResults] = useState(null);

  const canContinue = useMemo(() => {
    if (currentStep === 1) {
      return formData.platforms.length > 0;
    }

    if (currentStep === 2) {
      return Boolean(formData.consistencyLevel);
    }

    if (currentStep === 3) {
      return formData.problems.length > 0 || formData.assets.length > 0;
    }

    return true;
  }, [currentStep, formData]);

  const handleToggleValue = (key, value) => {
    setFormData((prev) => {
      const currentValues = prev[key];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [key]: nextValues,
      };
    });
  };

  const handleSetValue = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < AUDIT_STEPS.length) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    setResults(generateAuditReport(formData));
  };

  const handleBack = () => {
    if (results) {
      setResults(null);
      setCurrentStep(AUDIT_STEPS.length);
      return;
    }

    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleReset = () => {
    setFormData(DEFAULT_FORM_STATE);
    setCurrentStep(1);
    setResults(null);
  };

  const stepContent = {
    1: (
      <StepPlatforms
        value={formData.platforms}
        onToggle={(value) => handleToggleValue('platforms', value)}
      />
    ),
    2: (
      <StepConsistency
        value={formData.consistencyLevel}
        onChange={(value) => handleSetValue('consistencyLevel', value)}
      />
    ),
    3: (
      <StepChallenges
        problems={formData.problems}
        assets={formData.assets}
        onToggleProblems={(value) => handleToggleValue('problems', value)}
        onToggleAssets={(value) => handleToggleValue('assets', value)}
      />
    ),
  };

  return (
    <AppLayout>
      <ProgressBar currentStep={results ? AUDIT_STEPS.length : currentStep} totalSteps={AUDIT_STEPS.length} />

      {!results ? (
        <StepFormContainer
          currentStep={currentStep}
          steps={AUDIT_STEPS}
          canContinue={canContinue}
          onBack={handleBack}
          onNext={handleNext}
        >
          {stepContent[currentStep]}
        </StepFormContainer>
      ) : (
        <>
          <ResultsDashboard results={results} onReset={handleReset} />
          <EmailCapture />
          <CtaSection />
        </>
      )}
    </AppLayout>
  );
}

export default App;
