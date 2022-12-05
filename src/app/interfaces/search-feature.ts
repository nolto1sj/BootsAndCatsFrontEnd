export interface SearchFeature {
  albums: Albums
}

export interface Albums {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous: string
  total: number
}

export interface Item {
  album_type: string
  artists: Artist[]
  external_urls: ExternalUrls2
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface ExternalUrls {
  spotify: string
}

export interface ExternalUrls2 {
  spotify: string
}

export interface Image {
  height: number
  url: string
  width: number
}


// export interface SearchFeature {
//     albums: Albums 
//   }
  
// //   export interface Artists {
// //     href: string
// //     items: Item[]
// //     limit: number
// //     next: string
// //     offset: number
// //     previous: string
// //     total: number
// //   }
  
// //   export interface Item {
// //     external_urls: ExternalUrls
// //     followers: Followers
// //     genres: string[]
// //     href: string
// //     id: string
// //     images: Image[]
// //     name: string
// //     popularity: number
// //     type: string
// //     uri: string
// //   }
  
// //   export interface ExternalUrls {
// //     spotify: string
// //   }
  
// //   export interface Followers {
// //     href: any
// //     total: number
// //   }
  
// //   export interface Image {
// //     height: number
// //     url: string
// //     width: number
// //   }
  
// //   export interface Tracks {
// //     href: string
// //     // items: Item2[]
// //     limit: number
// //     next: string
// //     offset: number
// //     previous: string
// //     total: number
// //   }
  
// //   // export interface Item2 {
// //   //   album: Album
// //   //   artists: Artist2[]
// //   //   disc_number: number
// //   //   duration_ms: number
// //   //   explicit: boolean
// //   //   external_ids: ExternalIds
// //   //   external_urls: ExternalUrls5
// //   //   href: string
// //   //   id: string
// //   //   is_local: boolean
// //   //   is_playable: boolean
// //   //   name: string
// //   //   popularity: number
// //   //   preview_url: string
// //   //   track_number: number
// //   //   type: string
// //   //   uri: string
// //   // }
  
// //   // export interface Album {
// //   //   album_type: string
// //   //   artists: Artist[]
// //   //   external_urls: ExternalUrls3
// //   //   href: string
// //   //   id: string
// //   //   images: Image2[]
// //   //   name: string
// //   //   release_date: string
// //   //   release_date_precision: string
// //   //   total_tracks: number
// //   //   type: string
// //   //   uri: string
// //   // }
  
// //   export interface Artist {
// //     external_urls: ExternalUrls2
// //     href: string
// //     id: string
// //     name: string
// //     type: string
// //     uri: string
// //   }
  
// //   export interface ExternalUrls2 {
// //     spotify: string
// //   }
  
// //   export interface ExternalUrls3 {
// //     spotify: string
// //   }
  
// //   export interface Image2 {
// //     height: number
// //     url: string
// //     width: number
// //   }
  
// //   export interface Artist2 {
// //     external_urls: ExternalUrls4
// //     href: string
// //     id: string
// //     name: string
// //     type: string
// //     uri: string
// //   }
  
// //   export interface ExternalUrls4 {
// //     spotify: string
// //   }
  
// //   export interface ExternalIds {
// //     isrc: string
// //   }
  
// //   export interface ExternalUrls5 {
// //     spotify: string
  
// // }
