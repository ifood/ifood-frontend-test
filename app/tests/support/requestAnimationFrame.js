// prevent requestAnimationFrame warnings in tests
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
