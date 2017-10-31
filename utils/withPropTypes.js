/**
 * @typedef {Array} PropRec
 * @property {function} 0 prop type validator (one of PropTypes)
 * @property {*} 1 prop default value
 */

/**
 * Attach propTypes & defaultProps to provided class of function
 * @function withPropTypes
 * @param {(Object|function)} cls
 * @param {Object<string, Prop>} props - Object with {@link Prop}s
 */

const hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function withPropTypes(cls, props) {
  const propNames = Object.keys(props);
  const propTypes = {};
  const defaultProps = {};

  propNames.forEach((prop) => {
    const type = props[prop][0];
    const defaultValue = props[prop][1];

    if (typeof cls === 'undefined') {
      throw new Error(`Expected 'cls' to be function or object, got - ${cls}`)
    }

    if (hasOwnProperty.call(cls, 'propTypes')) {
      throw new Error(`cls already has propTypes`);
    }

    if (hasOwnProperty.call(cls, 'defaultProps')) {
      throw new Error(`cls already has defaultProps`);
    }

    if (!Array.isArray(props[prop])) {
      throw new Error(`Prop ${prop} expectetd to be an array, got - ${props[prop]}`);
    }

    if (typeof type !== 'function') {
      throw new Error(`Type of prop '${prop}' expectetd to be a function, got - ${type}`);
    }

    if (props[prop].length === 1) {                 // no default value
      if (typeof type.isRequired !== 'undefined') { // type is optionsl
        throw new Error(`Prop ${prop} is optionsl, but no default value provided`);
      }
    } else {
      defaultProps[prop] = defaultValue;
    }

    propTypes[prop] = type;
  });

  if (Object.keys(propTypes).length > 0) {
    cls.propTypes = propTypes;
  }

  if (Object.keys(defaultProps).length > 0) {
    cls.defaultProps = defaultProps;
  }
}
