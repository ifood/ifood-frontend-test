import { List } from 'antd'
import { Playlist } from '../data/playlists'

export const FeaturedPlaylists = (props: Props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={props.playlists}
      renderItem={RenderItem}
    />
  )
}

function RenderItem(playlist: Playlist) {
  return (
    <List.Item
      key={playlist.id}
      extra={<img width={272} src={playlist.images[0].url} />}
    >
      <List.Item.Meta
        title={<PlaylistTitle playlist={playlist} />}
        description={playlist.description}
      />
    </List.Item>
  )
}

function PlaylistTitle({ playlist }: PlaylistTitleProps) {
  return (
    <a target="_blank" href={playlist.external_urls.spotify}>
      {playlist.name}
    </a>
  )
}

type PlaylistTitleProps = { playlist: Pick<Playlist, 'name' | 'external_urls'> }

type Props = {
  playlists: Playlist[]
}
