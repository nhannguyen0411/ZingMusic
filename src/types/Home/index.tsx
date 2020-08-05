export type infoSinger = {
  id: number;
  singer: string;
};

export type infoPartner = {
  id: number;
  image: string;
};

export type infoSong = {
  title: string;
  song: string;
  song_id: string;
  image_url: string;
  singer: Array<infoSinger>;
};

export type infoNews = {
  image_url: string;
  id: number;
  title: string;
};

export interface PropTopic {
  name: string;
  parentTitle: string;
  icon: string;
  parentIcon: string;
}
