
it('should calculate the monthly rate correctly', function () {
  const values={principal:35000, years:15,rate:6.8};
  expect(calculateMonthlyPayment(values)).toEqual('310.69');
});


it("should return a result with 2 decimal places", function() {
  const values={principal:10000,years:15,rate:6.8};
  expect(calculateMonthlyPayment(values)).toBeCloseTo('88.77',2)
});

it("should handle large loan amounts", function() {
  const values={principal:1250000,years:30,rate:8.8};
  expect(calculateMonthlyPayment(values)).toBeCloseTo('9878.43',2)
});

/// etc
