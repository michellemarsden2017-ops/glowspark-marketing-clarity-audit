import SelectableCard from './SelectableCard';
import { ASSET_OPTIONS, PROBLEM_OPTIONS } from '../data/options';

function StepChallenges({ problems, assets, onToggleProblems, onToggleAssets }) {
  return (
    <div>
      <div className="section-header">
        <div>
          <h2>Current problems</h2>
          <p>Choose the friction points that feel most true right now.</p>
        </div>
      </div>
      <div className="option-grid">
        {PROBLEM_OPTIONS.map((option) => (
          <SelectableCard
            key={option.value}
            title={option.label}
            description={option.description}
            active={problems.includes(option.value)}
            onClick={() => onToggleProblems(option.value)}
          />
        ))}
      </div>

      <hr className="section-divider" />

      <div className="section-header">
        <div>
          <h2>Existing assets</h2>
          <p>Select the tools, resources, or materials you already have available.</p>
        </div>
      </div>
      <div className="option-grid">
        {ASSET_OPTIONS.map((option) => (
          <SelectableCard
            key={option.value}
            title={option.label}
            description={option.description}
            active={assets.includes(option.value)}
            onClick={() => onToggleAssets(option.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default StepChallenges;
