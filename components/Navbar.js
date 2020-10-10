import Fuse from 'fuse.js'
import React from 'react'

export default function Navbar({ logout, playlists, getPlaylist }) {

    const options = {
        includeScore: true,
        matchEmptyQuery: true,
        keys: [{name: 'name', weight: 0.3}]
    }
    const fuse = new Fuse(playlists.items, options)

    return (
        <div className="flex mb-6 h-16 justify-between py-6 z-100 items-center">
            <div className="w-1/6 mx-2 justify-center flex">
                <a href="/" alt="Spotifood">
                    <img
                        width="120" height="300"
                        src="https://res.cloudinary.com/paulobetareli/image/upload/q_auto:good/v1601350706/Spotifood/spotifood_uboyy7.png"
                        alt="Spotifood logo"
                    />
                </a>
            </div>

            <div className="my-6 justify-center flex w-4/6 ">
                <input
                    onChange={event => getPlaylist(fuse.search(event.target.value))}
                    type="search"
                    className="w-full bg-gray-200 shadow rounded border-1 p-3"
                    placeholder="Buscar por nome..." />
            </div>
            <div className="w-1/6 flex justify-center">
                <button onClick={() => logout()}>Sair</button>
            </div>

        </div>
    )
}
