export function getInitials(name) {
  let initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  if (initials && initials.length > 0 && initials.length > 2) {
    initials = initials.substr(0, 2);
  }
  return initials;
}

export function validateEmail(str) {
  // eslint-disable-next-line max-len,no-useless-escape
  const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return exp.test(str);
}

export function removeSpecialChars(str) {
  return str ? str.replace(/[^A-Za-z0-9]/g, '').replace(/\/s/g, '') : null;
}
