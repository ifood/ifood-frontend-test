import { extractAccessToken } from './accessToken'

test('Extract correct token', () => {
  const urlHash = '#access_token=BQBM54BUxxFedCXFwIq4ufj6w6O268zczvIJWCe6ErjeYNN_MU0BSAOafMcmGnMDYgnOuSF_sFSNr_PnaA2qBXOlPYPcOCtPIrDvlyGS4EK-FfRfx3LZUfDYazjolmI8vzCyY1lE9B6ZGMilQ2shIQ&token_type=Bearer&expires_in=3600'
  const result = extractAccessToken(urlHash)
  expect(result).toBe('BQBM54BUxxFedCXFwIq4ufj6w6O268zczvIJWCe6ErjeYNN_MU0BSAOafMcmGnMDYgnOuSF_sFSNr_PnaA2qBXOlPYPcOCtPIrDvlyGS4EK-FfRfx3LZUfDYazjolmI8vzCyY1lE9B6ZGMilQ2shIQ')
})

test('Return an empty string for empty url hash', () => {
  const urlHash = ''
  const result = extractAccessToken(urlHash)
  expect(result).toBe('')
})