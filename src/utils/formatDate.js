export const formatDate = (date) => {
  var options = { year: 'numeric', month: '2-digit', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const data = new Date(date).toLocaleString('pt-BR', options);
  var d = data.split(/\D/);
  return d[0] + '-' + d[1] + '-' + d[2] + 'T' + d[3] + ':' + d[4] + ':' + d[5] + 'Z';
}