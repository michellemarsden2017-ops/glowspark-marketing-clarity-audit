function SelectableCard({ title, description, active, onClick, type = 'multi' }) {
  return (
    <button
      type="button"
      className={type === 'radio' ? `radio-card${active ? ' active' : ''}` : `option-card${active ? ' active' : ''}`}
      onClick={onClick}
      aria-pressed={type === 'multi' ? active : undefined}
      aria-checked={type === 'radio' ? active : undefined}
      role={type === 'radio' ? 'radio' : undefined}
    >
      <div className="option-title">
        <span>{title}</span>
        <span>{active ? '•' : '+'}</span>
      </div>
      <div className="option-detail">{description}</div>
    </button>
  );
}

export default SelectableCard;
