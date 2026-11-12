import { getGridPerformanceTiming } from './grid-performance';

describe('getGridPerformanceTiming', () => {
  it('formats initial load duration in milliseconds', () => {
    expect(getGridPerformanceTiming('initialLoad', 100, 246.4)).toEqual({
      action: 'InitialLoad',
      duration: '146',
    });
  });

  it('formats grid action names like the React sample', () => {
    expect(getGridPerformanceTiming('paging', 40, 55.6)).toEqual({
      action: 'Paging',
      duration: '16',
    });
  });
});
