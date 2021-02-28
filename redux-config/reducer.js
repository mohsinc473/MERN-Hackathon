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
