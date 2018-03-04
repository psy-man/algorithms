import test from 'ava';
import { permute } from './permute';


test(t => t.deepEqual(permute(''), []));
test(t => t.deepEqual(permute('ab'), ['ab', 'ba']));
test(t => t.deepEqual(permute('xyz'), ['xyz', 'yxz', 'zxy', 'xzy', 'yzx', 'zyx']));
