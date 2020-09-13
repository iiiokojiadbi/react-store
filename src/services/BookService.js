export default class BookService {
  data = [
    {
      id: 1,
      title: 'Совершенный код',
      author: 'Стив Макконнелл',
      price: 32,
      coverImage:
        'https://cv9.litres.ru/pub/c/pdf-kniga/cover_max1500/3836595-stiv-makkonnell-sovershennyy-kod-prakticheskoe-rukovodstvo-po-razrabotke-programmnogo-obespecheniya.jpg',
    },
    {
      id: 2,
      title: 'Грокаем алгоритмы',
      author: 'Адитья Бхаргава',
      price: 15,
      coverImage: 'https://img2.wbstatic.net/big/new/3680000/3682366-1.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.8) {
          reject(new Error('error!'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
