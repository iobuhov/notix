const transitionHandler = map => ({ status }) => {
  if (status in map) {
    return map[status];
  }

  return map.default;
};

export default transitionHandler;
