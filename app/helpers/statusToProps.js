import React from 'react';

const statusToProps = element => (status) => {
  if (!React.isValidElement(element)) {
    throw new Error(`Expected React element - got (${element})`);
  }

  return React.cloneElement(React.Children.only(element), { status });
};

export default statusToProps;
