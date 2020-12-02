import { render, screen } from '@testing-library/react';
import App, {calculate} from './App';

test('sum', () => {
  let func=0
  func=calculate("+","2","3");
 expect(func).toBe(5);
});
test('summ', () => {
  let func=0
  func= calculate("+","2","3");
 expect(func).toBe(5);
});
test('minus', () => {
  let func=0
  func=calculate("-","2","3");
 expect(func).toBe(-1);
});
test('mul', () => {
  let func=0
  func=calculate("*","2","3");
 expect(func).toBe(6);
});
test('/', () => {
  let func=0
  func=calculate("/","6","3");
 expect(func).toBe(2);
});
