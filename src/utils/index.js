export const getStorageStatus = () => {
  const storageObject = JSON.parse(localStorage.getItem('spotifyToken'));

  if (!storageObject) {
    return 'first-access';
  }

  if (storageObject && storageObject.validity && storageObject.validity <= new Date().getTime()) {
    return 'token-expired';
  }

  return 'token-valid';
};
