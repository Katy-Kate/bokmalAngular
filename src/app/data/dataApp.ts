import {ArticleData} from '../classes/classes';

export const menuListChangeTheme = [
  {name: 'Для усіх', path: '/'},
  {name: 'Baby side', path: '/baby-side'},
  {name: 'Teen side', path: '/'}
];

export const menu = [
  {name: 'Про Букмоль', path: '/'},
  {name: 'Співпраця', path: '/'},
  {name: 'Підтримка', path: '/'}
];

export const leftMenu = [
  {name: 'Головна', path: '/'},
  {name: 'ТОП', path: '/'},
  {name: 'Огляди', path: '/'},
  {name: 'Корисні статті', path: '/'},
  {name: 'Новини', path: '/'},
  {name: 'Авторська колонка', path: '/'},
  {name: 'Головна', path: '/'},
  {name: 'Інтерактив', path: '/'},
  {name: 'Літклуб', path: '/'}
];

export const OPTIONS_DATA_FORMAT = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};


export const DATA_BANNER = {
  id: 100,
  section: 'Огляди',
  title: 'Шість пригодницьких історій для літнього читання',
  publickDate: 3256625515599,
  watches: '980',
  addedToFavorite: false,
  picture: 'https://cn.opendesktop.org/img/2/6/8/e/5a86b7241d412a0aef4085d49757d5a7488b.jpg'
};

export const GET_DATA = (numberData): string => {
  return new Date(Number(numberData)).toLocaleDateString('en-US',  OPTIONS_DATA_FORMAT);

};

export const DATA_ARTICLES: ArticleData[] = [
  {
    id: 1,
    section: 'Огляди',
    title: 'Шість пригодницьких історій для літнього читання',
    publickDate: 3256625515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://cn.opendesktop.org/img/2/6/8/e/5a86b7241d412a0aef4085d49757d5a7488b.jpg'
  },
  {
    id: 2,
    section: '  Корисні статті',
    title: 'Тварини Патріка Джорджа: врятуй їх усіх',
    publickDate: 1556625515544,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 3,
    section: 'Огляди',
    title: 'Шість пригодницьких історій для літнього читання',
    publickDate: 1555425515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 4,
    section: '  Корисні статті',
    title: 'Тварини Патріка Джорджа: врятуй їх усіх',
    publickDate: 1536625515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 5,
    section: 'Огляди',
    title: 'Шість пригодницьких історій для літнього читання',
    publickDate: 1256625515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://cn.opendesktop.org/img/2/6/8/e/5a86b7241d412a0aef4085d49757d5a7488b.jpg'
  },
  {
    id: 6,
    section: '  Корисні статті',
    title: 'Тварини Патріка Джорджа: врятуй їх усіх',
    publickDate: 1556545515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 7,
    section: 'Огляди',
    title: 'Шість пригодницьких історій для літнього читання',
    publickDate: 1587625515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 8,
    section: '  Корисні статті',
    title: 'Тварини Патріка Джорджа: врятуй їх усіх',
    publickDate: 1567825515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 9,
    section: 'Огляди',
    title: 'Шість пригодницьких історій для літнього читання',
    publickDate: 1556565515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://cn.opendesktop.org/img/2/6/8/e/5a86b7241d412a0aef4085d49757d5a7488b.jpg'
  },
  {
    id: 10,
    section: '  Корисні статті',
    title: 'Тварини Патріка Джорджа: врятуй їх усіх',
    publickDate: 1559625515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 11,
    section: 'Огляди',
    title: 'Шість пригодницьких історій для літнього читання',
    publickDate: 1558625515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 12,
    section: '  Корисні статті',
    title: 'Тварини Патріка Джорджа: врятуй їх усіх',
    publickDate: 1556795515599,
    watches: '980',
    addedToFavorite: false,
    picture: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }
];

