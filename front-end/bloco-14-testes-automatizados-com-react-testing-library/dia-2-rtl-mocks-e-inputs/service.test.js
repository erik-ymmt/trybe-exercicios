let { randomNumber } = require('./service');
const service = require('./service');

describe('Random Numbers Tests', () => {
  test('testa se a função é chamada', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    randomNumber();
    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(2);
    expect(randomNumber()).toBe(10);
  })

  test('testa a divisão de números aleatórios', () => {
    const random1 = randomNumber = jest.fn().mockReturnValue(10);
    const random2 = randomNumber = jest.fn().mockReturnValue(5);
    expect(random1() / random2()).toBe(2);
  })

  test('testa a divisão de números aleatórios através de uma nova implmentação', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(randomNumber(10, 5)).toBe(2);
    expect(randomNumber).toHaveBeenCalledWith(10, 5);
  })

  test('testa a divisão de números aleatórios através de uma nova implmentação', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    expect(randomNumber(2, 3, 4)).toBe(24);
    expect(randomNumber).toHaveBeenCalledWith(2, 3, 4);
    randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
    expect(randomNumber(2)).toBe(4);
  })
})

describe('Test Function Mocks', () => {
  it('tests if mock lowers cases of all string letters', () => {
    captalizeAll = jest.spyOn(service, 'captalizeAll').mockImplementationOnce(((string) => string.toLowerCase()));
    expect(captalizeAll('WATER')).toBe('water');
  })
  it('tests wheter it returns the last letter of WATER', () => {
    getFirstLetter = jest.fn().mockImplementationOnce(((string) => string[string.length - 1]));
    expect(getFirstLetter('WATER')).toBe('R');
  })
  it('tests', () => {
    concatStrings = jest.fn().mockImplementationOnce((s1, s2, s3) => s1 + s2 + s3);
    expect(concatStrings('V','Q','V')).toBe('VQV');
  })
})

describe('Test Original Functions', () => {
  it('tests if upper cases of all string letters', () => {
    expect(captalizeAll('water')).toBe('WATER');
  })
})

describe('Test Dogs API', () => {
  it('tests if dog API succeds', async () => {
    const response = await service.getRandomDogImage();
    expect(response).toBe('success');
  })
})
