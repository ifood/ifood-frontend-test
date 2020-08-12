export async function fetchURL(url: string, options: any) {
  const response = await fetch(url, options)
  return response.json()
}