import SelectableCard from './SelectableCard';
import { CONSISTENCY_OPTIONS } from '../data/options';

function StepConsistency({ value, onChange }) {
  return (
    <div className="option-grid" role="radiogroup" aria-label="Consistency level">
      {CONSISTENCY_OPTIONS.map((option) => (
        <SelectableCard
          key={option.value}
          title={option.label}
          description={option.description}
          active={value === option.value}
          onClick={() => onChange(option.value)}
          type="radio"
        />
      ))}
    </div>
  );
}

export default StepConsistency;
