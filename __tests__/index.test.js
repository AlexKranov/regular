import Validator from '../src';

test('Validator constructor1', () => {
  const validator = new Validator('Alex');
  expect(validator.validateUsername()).toBe(true);
});

test('Validator constructor2', () => {
  const validator = new Validator('Алексей');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor3', () => {
  const validator = new Validator('alexey111kranov');
  expect(validator.validateUsername()).toBe(true);
});

test('Validator constructor8', () => {
  const validator = new Validator('alex11111111Кранов');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor4', () => {
  const validator = new Validator('1Alexey');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor5', () => {
  const validator = new Validator('Alexeyn1');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor6', () => {
  const validator = new Validator('-vasya');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor9', () => {
  const validator = new Validator('vasya-');
  expect(validator.validateUsername()).toBe(false);
});