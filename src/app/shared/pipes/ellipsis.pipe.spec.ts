import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "abc..."', () => {
    const pipe = new EllipsisPipe();
    expect(pipe.transform('abc')).toBe('abc...');
  });
});
