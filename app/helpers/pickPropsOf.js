import { pick } from 'ramda';

export default function pickPropsOf(cls, props, filter) {
  const filterFunc = (() => {
    if (typeof filter === 'undefined') {
      return () => true;
    } else if (Array.isArray(filter)) {
      return x => filter.indexOf(x) === -1;
    } else if (typeof filter === 'function') {
      return filter;
    }
  })();

  const clsPropsNames = Object.keys(cls.propTypes).filter(filterFunc);

  return pick(clsPropsNames, props);
}
