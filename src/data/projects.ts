import CroppedSS from '../assets/ProjectMedia/croppedSS.mp4';
import AHKImage from '../assets/ProjectMedia/AHKImage.png'

export type MediaType = 'image' | 'gif' | 'video' | 'embed' | undefined;

export interface Project {
  id: number;
  title: string;
  mediaUrl?: string | null;
  mediaType?: MediaType;
  linkUrl?: string | null;
  linkLabel?: string | null;
  autoPlay?: boolean;
  loop?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'donut.c adaptation',
    mediaUrl: CroppedSS,
    mediaType: 'video',
    linkUrl: null,
    linkLabel: null,
    autoPlay: true,
    loop: true,
  },
  {
    id: 2,
    title: 'AutoHotKey UI Assistant (Neutron)',
    mediaUrl: AHKImage,
    mediaType: 'image',
    linkUrl: 'https://github.com/SLin24/Reminders',
    linkLabel: 'See More',
  },
//   {
//     id: 3,
//     title: 'WIP',
//     mediaUrl: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=80',
//     mediaType: 'image',
//     linkUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1',
//     linkLabel: 'TBD',
//   },
];
