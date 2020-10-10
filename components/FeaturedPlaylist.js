import Loader from '../components/Loader'

export default function FeaturedPlaylist({ playlists, isLoading }) {
    return (
        <>{!isLoading ?
            playlists.items.length > 0 ?
                <div className='flex justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {playlists.items.map(playlist => (
                        <div className="shadow relative transition duration-500 transform hover:-translate-y-1 hover:scale-110 " >
                            <a href={`https://open.spotify.com/playlist/${playlist.id}`}>
                                <img
                                    src={playlist.images[0].url}
                                />
                            </a>
                        </div>
                    ))}
                </div>
                :
                <div className='flex justify-center italic'>Nenhuma playlist a ser mostrada</div>
            :
            <div>
                <Loader />

            </div>
        }
        </>
    )

}