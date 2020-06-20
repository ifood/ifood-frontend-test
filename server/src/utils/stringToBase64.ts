export default function stringToBase64(value: string): string {
  const buffer = Buffer.from(value, 'ascii')
  return buffer.toString('base64')
}
