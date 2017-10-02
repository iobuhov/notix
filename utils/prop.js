export default (prop, defval) =>
  props => (props[prop] ? props[prop] : defval);
