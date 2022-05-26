export function adjustSlider(
  value: number,
  min: number,
  max: number,
  disabled?: boolean
) {
  // Calculate visible width
  const val = ((value - min) * 100) / (max - min);

  const fillLeft = 'var(--laodeaksar-form-input-active)';
  const fillLeftDisabled = 'var(--laodeaksar-form-input-border)';
  const fillRight = 'var(--laodeaksar-form-input-disabled)';

  return `linear-gradient(to right, ${
    disabled ? fillLeftDisabled : fillLeft
  } ${val}%, ${fillRight} ${val}%)`;
}
