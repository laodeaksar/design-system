import { adjustSlider } from './utils';

describe('Range - utils', () => {
  it('returns the expected linear gradient for a given value', () => {
    expect(adjustSlider(27, 0, 100)).toEqual(
      'linear-gradient(to right, var(--laodeaksar-form-input-active) 27%, var(--laodeaksar-form-input-disabled) 27%)'
    );
  });

  it('returns the expected linear gradient for a given value when the range is disabled', () => {
    expect(adjustSlider(27, 0, 100, true)).toEqual(
      'linear-gradient(to right, var(--laodeaksar-form-input-border) 27%, var(--laodeaksar-form-input-disabled) 27%)'
    );
  });
});
