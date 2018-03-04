import test from 'ava';
import { reverse } from './reverse';


test(t => t.is(reverse(''), ''));
test(t => t.is(reverse('abcdef'), 'fedcba'));
