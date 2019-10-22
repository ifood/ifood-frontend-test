export const mountUrlParams = (formData = {}) => {
  let firstParam = true;
  let params;
  Object.keys(formData).forEach(key => {
    if (formData[key]) {
      if (firstParam) {
        firstParam = false;
        params = `?${key}=${formData[key]}`;
      } else {
        params += `&${key}=${formData[key]}`;
      }
    }
  });
  return params;
}