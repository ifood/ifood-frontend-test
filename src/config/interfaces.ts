export interface IMockResponse {
  filters: [IFiltersLists, IFiltersLists, ITimeStamp, ILimit, IOffset];
}

export interface IFiltersLists {
  id: string;
  name: string;
  values: [
    {
      value: string;
      name: string;
    }
  ];
}

export interface ITimeStamp {
  id: string;
  name: string;
  validation: [
    {
      primitiveType: string;
      entityType: string;
      pattern: string;
    }
  ];
}

export interface ILimit {
  id: string;
  name: string;
  validation: {
    primitiveType: string;
    min: number;
    max: number;
  };
}

export interface IOffset {
  id: string;
  name: string;
  validation: [
    {
      primitiveType: string;
    }
  ];
}

export interface ISpotifyUser {
  display_name: string;
  images: [
    {
      url: string;
    }
  ]
}

export interface ISpotifyRequest {
  country: string;
  time: string;
  date: string;
  limit: number;
  offset: number;
  locale: string;
  token: string | null;
}

export interface ISpotifyResponse {
  message: string;
  playlists: {
    href: string;
    limit: number;
    offset: number;
    next: string;
    previous: string;
    total: number;
    items: IPlaylists[];
  };
}

export interface IPlaylists {
  id: string;
  name: string;
  description: string;
  collaborative: boolean;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
  };
  images: [
    {
      url: string;
    }
  ];
  external_urls: {
    spotify: string;
  };
  tracks: {
    total: number;
  };
}
