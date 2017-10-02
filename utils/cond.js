export default (prop, value, defval='') =>
  props => props[prop] ? value : defval;
