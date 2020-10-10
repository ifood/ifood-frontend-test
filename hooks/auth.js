import React, { useState } from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie'


export const useAuth = () => {

    const [token, setToken] = useState(null)

    React.useEffect(() => {
        if (!getTokenFromCookie()) {
            setToken(getTokenFromHashParams())
        }
        else {
            setToken(getTokenFromCookie())
        }
    }, [])

    const logout = () => {
        setToken(false)
        Cookies.remove('access_token')
        Cookies.remove('token_type')
    }


    React.useEffect(() => {
        if (token === false) {
            Router.push('/login')
        }
    }, [token])

    const getTokenFromCookie = () => {
        if (Cookies.get('access_token')) {
            const token = {
                access_token: Cookies.get('access_token'),
                token_type: Cookies.get('token_type')
            }
            return token.access_token ? token : false
        }
        return false
    }

    const getTokenFromHashParams = () => {
        var hashParams = {}
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1)
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2])
        }
        const token = hashParams
        if (token.access_token) {
            var expire_in = new Date()
            expire_in.setTime(expire_in.getTime() + 1 * (36 * 1000))
            Cookies.set('access_token', token.access_token, { expires: expire_in, sameSite: 'strict' })
            Cookies.set('token_type', token.token_type, { expires: expire_in })
            return token
        } else {
            return false
        }

    }

    return {
        token,
        logout
    }
}

export default useAuth