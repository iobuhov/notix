import { pick, keys, prop, compose } from 'ramda';

export default compose(
  pick,
  keys,
  prop('propTypes')
);
