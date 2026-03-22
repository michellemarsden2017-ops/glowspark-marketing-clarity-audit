import SelectableCard from './SelectableCard';
import { PLATFORM_OPTIONS } from '../data/options';

function StepPlatforms({ value, onToggle }) {
  return (
    <div className="option-grid">
      {PLATFORM_OPTIONS.map((option) => (
        <SelectableCard
          key={option.value}
          title={option.label}
          description={option.description}
          active={value.includes(option.value)}
          onClick={() => onToggle(option.value)}
        />
      ))}
    </div>
  );
}

export default StepPlatforms;
