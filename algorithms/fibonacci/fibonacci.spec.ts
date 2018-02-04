import test from 'ava';
import { fibonacci } from './fibonacci';


test(t => t.is(fibonacci(0), 0));
test(t => t.is(fibonacci(1), 1));
test(t => t.is(fibonacci(10), 55));
test(t => t.is(fibonacci(20), 6765));
test(t => t.is(fibonacci(50), 12586269025));