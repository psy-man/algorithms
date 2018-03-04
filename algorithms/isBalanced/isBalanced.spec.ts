import test from 'ava';
import { isBalanced } from './isBalanced';


test(t => t.is(isBalanced('{'), false));
test(t => t.is(isBalanced('}'), false));
test(t => t.is(isBalanced('}{'), false));
test(t => t.is(isBalanced('()'), true));
test(t => t.is(isBalanced(`const d = () => ({['key']: [9]})`), true));
test(t => t.is(isBalanced(`function test() {`), false));
test(t => t.is(isBalanced(`[(])`), false));
test(t => t.is(isBalanced(`[({})]`), true));
test(t => t.is(isBalanced(`[()]{}{[()()]()}`), true));
