import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
const spotifyUrl = 'https://accounts.spotify.com/authorize'

export default function loginPage() {

    const redirectToSpotify = () => {
        const queryString = `client_id=${clientId}&response_type=token&redirect_uri=${origin}`
        Router.push({
            pathname: spotifyUrl,
            query: queryString,
        })
    }



    return (
        <div className="h-full">
            <Head>
                <title>Spotifood - Seja Bem Vindo</title>
            </Head>

            <div className="h-full mt-12 flex justify-center items-center">
                <div className="w-full  h-full max-w-sm flex flex-col items-center">
                    <div className="logo">
                        <a href="/" alt="Spotifood"><img src="https://res.cloudinary.com/paulobetareli/image/upload/w_465,h_250,c_limit/v1601350706/Spotifood/spotifood_uboyy7.png" alt="Spotifood" /></a>
                    </div>
                    <button onClick={redirectToSpotify} className="mt-6 btn btn-primary w-2/4">
                        Entrar
                    </button>
                    <div  className='mt-3'>
                        <text className='text-sm'>Para acessar a aplicação você precisar estar logado</text>
                    </div>
                </div>
            </div>

        </div>

    )
}