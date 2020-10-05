export const nameFilter = (value, playlists) => {
  const termToLowercase = value.toLocaleLowerCase();

  const filteredItems = playlists.filter(({ name }) =>
    name.toLocaleLowerCase().includes(termToLowercase)
  );

  let nameFilterStatus = "";

  if (value === "") {
    nameFilterStatus = "isEmpty";
  }

  if (filteredItems.length !== 0 && value !== "") {
    nameFilterStatus = "hasMatch";
  }

  if (value !== "" && filteredItems.length === 0) {
    nameFilterStatus = "hasNoMatch";
  }

  return {
    nameFilterStatus,
    filteredItems,
  };
};
