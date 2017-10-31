import { pick } from 'ramda';

export default function pickPropTypes(props, cls) {
  return pick(props, cls.propTypes);
}
