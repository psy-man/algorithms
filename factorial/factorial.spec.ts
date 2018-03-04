import test from 'ava';
import { factorial } from './factorial';


test(t => t.is(factorial(1), 1));
test(t => t.is(factorial(5), 120));
test(t => t.is(factorial(10), 3628800));
test(t => t.is(factorial(20), 2432902008176640000));
