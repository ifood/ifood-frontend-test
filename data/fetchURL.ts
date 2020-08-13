export async function fetchURL(url: string, options?: RequestInit): Promise<any> {
  const response = await fetch(url, options)

  if (response.status === 401)
    throw new Error('Token expirado')

  return response.json()
}