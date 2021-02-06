const Initial_State = {
  users: [
    {
      name: 'Mohsin',
      email: 'mohsinsheikh473@gmail.com',
    },
  ],
  currentUser: [],
  cards: [
    {
      id: '1',
      price: '9,524,100',
      title: 'Tesla Cybertruck Dual Motor AWD',
      imageURL: 'https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg',
    },
    {
      id: '2',
      price: '94,605',
      title: 'Sisyphus MINI VENEER',
      imageURL:
        'https://cnet1.cbsistatic.com/img/p-0JK9-392pB72yYqEAOOyuNn_c=/980x551/2019/03/23/e63175f6-3bf2-4b46-be55-27ae51ce5ba5/007-architectural-digest-ad-design-show-2019.jpg',
    },
    {
      id: '3',
      price: '174,900',
      title: 'Iphone 12 Pro Max',
      imageURL: 'https://cdn.mos.cms.futurecdn.net/jFLU2eHM8d54KLdpT5Au2S.jpg',
    },
    {
      id: '4',
      price: '29,5000',
      title: 'Macbook Pro 2020',
      imageURL:
        'https://www.dpreview.com/files/p/articles/3210487912/MacBook_Pro_13-inch_4.jpeg',
    },
    {
      id: '5',
      price: '55,650',
      title: 'Sony WH-1000XM4 Headphones',
      imageURL:
        'https://www.sony-mea.com/image/10517a29b497c2f31fb2cc1d1839f93f?fmt=png-alpha&wid=720',
    },
    {
      id: '6',
      price: '10,890 - One Night',
      title: 'Room For Rent, Islamabad Hotel',
      imageURL:
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/183576552.webp?k=55dd24feb500e0624258c888f84d68154ab26ed2d8caec36684336ac7a760483&o=',
    },
    {
      id: '7',
      price: '82,000',
      title: 'Electric Bike',
      imageURL:
        'https://sc01.alicdn.com/kf/Ha29ec75145324f97ae91b46c218c63853.jpg',
    },
    {
      id: '8',
      price: '13,167',
      title: 'AIR JORDAN 1 MID',
      imageURL:
        'https://i.pinimg.com/originals/b5/70/00/b570007814cfcdce9ea771e66775f700.jpg',
    },
  ],
};

export default (state = Initial_State, action) => {
  // console.log("Action==>",action)
  switch (action.type) {
    case 'Auth':
      return {
        ...state,
        // users : [...state.users, action.data]
        currentUser: [action.data],
      };
  }
  return state;
};
