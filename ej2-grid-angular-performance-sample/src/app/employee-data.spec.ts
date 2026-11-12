import { getTradeData } from './employee-data';

describe('getTradeData', () => {
  it('creates employee rows with deterministic grid values', () => {
    const [employee] = getTradeData(1);

    expect(employee).toMatchObject({
      check: false,
      EmployeeID: 10001,
      Employees: 'Kathryn Fuller',
      Designation: 'CFO',
      Location: 'USA',
      Status: 'Inactive',
      Rating: 1,
      HireDate: new Date(2011, 2, 2).toISOString().split('T')[0],
    });
  });

  it('returns no rows for a zero row count', () => {
    expect(getTradeData(0)).toEqual([]);
  });
});
