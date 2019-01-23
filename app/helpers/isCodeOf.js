import { values, contains } from 'ramda';

export default function isCodeOf(code, keySpec) {
  return contains(code, values(keySpec));
}
