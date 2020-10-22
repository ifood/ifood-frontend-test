export function toISOString(time) {
  const date = new Date(time)
  return date.toISOString().slice(0,-1)
}
