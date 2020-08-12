import { List } from 'antd'

type Playlist = {
  id: string
  images: { url: string }[]
  external_urls: { spotify: string }
  name: string
  description: string
}

export const Playlists = (props: any) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={props.playlists ? props.playlists : []}
      renderItem={(item: Playlist) => (
        <List.Item
          key={item.id}
          extra={<img width={272} src={item.images[0].url} />}
        >
          <List.Item.Meta
            title={
              <a target="_blank" href={item.external_urls.spotify}>
                {item.name}
              </a>
            }
            description={item.description}
          />
        </List.Item>
      )}
    />
  )
}
