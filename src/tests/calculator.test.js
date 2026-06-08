const calc = require('../calculator');

describe('calculator functions', () => {
  describe('addition', () => {
    test('2 + 3 = 5', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    test('handles floats', () => {
      expect(calc.add(1.5, 2.25)).toBeCloseTo(3.75);
    });

    test('handles negative numbers', () => {
      expect(calc.add(-2, 5)).toBe(3);
    });
  });

  describe('subtraction', () => {
    test('10 - 4 = 6', () => {
      expect(calc.subtract(10, 4)).toBe(6);
    });

    test('result can be negative', () => {
      expect(calc.subtract(3, 7)).toBe(-4);
    });
  });

  describe('multiplication', () => {
    test('45 * 2 = 90', () => {
      expect(calc.multiply(45, 2)).toBe(90);
    });

    test('multiply by zero', () => {
      expect(calc.multiply(123, 0)).toBe(0);
    });
  });

  describe('division', () => {
    test('20 / 5 = 4', () => {
      expect(calc.divide(20, 5)).toBe(4);
    });

    test('division with floats', () => {
      expect(calc.divide(7.5, 2.5)).toBeCloseTo(3);
    });

    test('division by zero throws', () => {
      expect(() => calc.divide(1, 0)).toThrow('Division by zero');
    });
  });

  describe('extended operations', () => {
    describe('modulo', () => {
      test('5 % 2 = 1', () => {
        expect(calc.modulo(5, 2)).toBe(1);
      });

      test('negative modulo', () => {
        expect(calc.modulo(-5, 2)).toBe(-1);
      });

      test('modulo by zero throws', () => {
        expect(() => calc.modulo(1, 0)).toThrow('Modulo by zero');
      });
    });

    describe('power', () => {
      test('2 ^ 3 = 8', () => {
        expect(calc.power(2, 3)).toBe(8);
      });

      test('power with zero exponent', () => {
        expect(calc.power(5, 0)).toBe(1);
      });

      test('power with negative exponent', () => {
        expect(calc.power(2, -2)).toBeCloseTo(0.25);
      });
    });

    describe('squareRoot', () => {
      test('sqrt(16) = 4', () => {
        expect(calc.squareRoot(16)).toBe(4);
      });

      test('sqrt of non-perfect square', () => {
        expect(calc.squareRoot(2)).toBeCloseTo(Math.SQRT2);
      });

      test('sqrt of negative throws', () => {
        expect(() => calc.squareRoot(-1)).toThrow('Square root of negative number');
      });
    });
  });
});
