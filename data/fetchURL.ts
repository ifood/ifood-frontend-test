export async function fetchURL(url: string, options?: RequestInit) {
  const response = await fetch(url, options)
  return response.json()
}