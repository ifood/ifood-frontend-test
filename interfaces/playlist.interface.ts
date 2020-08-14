type Image = {
  url: string;
};

export interface PlaylistInterface {
  id: string;
  images: Image[];
  name: string;
  external_urls: {
    spotify: string;
  };
}
