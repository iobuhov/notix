import { isFunction } from 'typechecker';

export default function safeInvoke(fn, args) {
  if (isFunction(fn)) {
    fn(...args);
  }
}
