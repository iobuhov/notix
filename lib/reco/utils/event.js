export const getCode = (e) => {
  if (e.code && typeof e.code === 'string') {
    return e.code;
  } else if (e.which && typeof e.which === 'number') {
    return e.which;
  }
}
