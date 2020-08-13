export async function fetchURL(url: string, options?: RequestInit): Promise<any> {
  const response = await fetch(url, options)

  if ([400, 401].includes(response.status))
    throw new Error('Faça login')

  return response.json()
}