const inputLength = (value, { min, max }) => {
  if (value > max || value < min) {
    return `Valor deve estar entre ${min} e ${max}`;
  }

  return undefined;
};

export default inputLength;
