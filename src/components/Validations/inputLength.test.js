import inputLength from './inputLength';

describe('inputLength', () => {
  it('should return undefined when value is between min and max', () => {
    expect(inputLength(25, { min: 10, max: 50 })).toBeUndefined();
    expect(inputLength(10, { min: 10, max: 50 })).toBeUndefined();
    expect(inputLength(50, { min: 10, max: 50 })).toBeUndefined();
  });

  it('should return error when value is smaller than min and greater than max', () => {
    const min = 10;
    const max = 50;
    expect(inputLength(1, { min, max })).toEqual(`Valor deve estar entre ${min} e ${max}`);
    expect(inputLength(51, { min, max })).toEqual(`Valor deve estar entre ${min} e ${max}`);
  });
});
