import Validator from '../src';

test('Validator constructor1', () => {
  const validator = new Validator('igor');
  expect(validator.validateUsername()).toBe(true);
});

test('Validator constructor2', () => {
  const validator = new Validator('Коля');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor3', () => {
  const validator = new Validator('ddvdv999scsc');
  expect(validator.validateUsername()).toBe(true);
});


test('Validator constructor4', () => {
  const validator = new Validator('5petya');
  expect(validator.validateUsername()).toBe(false);
});

test('Validator constructor5', () => {
  const validator = new Validator('vasya5');
  expect(validator.validateUsername()).toBe(false);
});
