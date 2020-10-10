import Cookies from 'js-cookie'
import Router from 'next/router'

export async function getFilters() {

    const response = await fetch(`https://www.mocky.io/v2/5a25fade2e0000213aa90776`, {
        method: 'GET',
    })
    const json = await response.json()
    if (!response.ok) {
        const error = new Error(response.status)
        error.info = json
        error.status = response.status
        throw error
    }
    return json
}

export async function getFeaturedPlaylist(path, token = null, filters) {
    let searchQuery = filters ? Object.keys(filters).map(key =>
        `${key}=${filters[key]}&`).join('') : null

    const headers = {
        Authorization: `${token.token_type} ${token.access_token}`,
    }
    const response = await fetch(`https://api.spotify.com${path}?${searchQuery}`, {
        method: 'GET',
        headers,
    })
    const json = await response.json()

    if (!response.ok) {
        var error = new Error(json.error.message)
        error.status = json.error.status
        Cookies.remove('access_token')
        Cookies.remove('token_type')
        Router.push('/login')
        throw error
    }
    return json


}
