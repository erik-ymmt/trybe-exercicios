function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('function FizzBuzz:', () => {
  it('returns fizzbuzz for 15', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  }) 
});

describe('função FizzBuzz', () => {
  it('returns fizz for 9', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  }) 
});

describe('função FizzBuzz', () => {
  it('returns buzz for 55', () => {
    expect(myFizzBuzz(55)).toBe('buzz');
  }) 
});

describe('função FizzBuzz', () => {
  it('returns 53 for 53', () => {
    expect(myFizzBuzz(53)).toBe(53);
  }) 
});

describe('função FizzBuzz', () => {
  it('returns false for hi', () => {
    expect(myFizzBuzz('hi')).toBe(false);
  }) 
});
