export default function compare(first: string, second: string): boolean {
  return first
    .trim()
    .toUpperCase()
    .includes(second.trim().toUpperCase())
}