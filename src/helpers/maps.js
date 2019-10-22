export const typeMap = {
  STRING: 'text',
  INTEGER: 'number'
  // EMAIL...,
  // TEL...
};

export const charFormatMap = {
  DATE_TIME: {
    'y': '[0-9]',
    'M': '[0-9]',
    'd': '[0-9]',
    'H': '[0-9]',
    'm': '[0-9]',
    's': '[0-9]'
  }
  // hour only map...,
  // date only map...,
  // CPF map...,
  // Zip code map...
}

export default {
  charFormatMap,
  typeMap
};