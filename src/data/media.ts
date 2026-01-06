export interface MediaItem {
  id: number;
  imageUrl: string;
  label?: string;
  songUrl?: string;
  songLabel?: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    imageUrl: '/Gallery/pool.png',
    label: '2025 Asia Chengdu Regional',
  },
  {
    id: 2,
    imageUrl: '',
    songUrl: 'https://www.youtube.com/watch?v=jOofzffyDSA&list=RDjOofzffyDSA',
    songLabel: 'Dvořák: Symphony No. 9',
  },
];
