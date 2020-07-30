function csvToJson(csv) {

  const lines = csv.split('\n');
  const result = [];
  let headers = lines[0].split(',');

  headers = headers.map((o) => o.trim());

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(',');
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }

  return result;
}

export default {
  csvToJson,
};
