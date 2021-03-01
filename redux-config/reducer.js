const Initial_State = {
  firestoreStdData: [],
  firestoreCompData: [],
  students: [
    {
      id: '1',
      name: 'Mohsin',
      email: 'mohsinsheikh473@gmail.com',
      phoneNumber: '+923005280732',
      bsDegree: 'BSCS',
      imageURL: 'https://img.icons8.com/bubbles/2x/user-male.png',
    },
    {
      id: '2',
      name: 'Zain',
      email: 'zain212@gmail.com',
      phoneNumber: '+923005346709',
      bsDegree: 'BSMS',
      imageURL: 'https://img.icons8.com/bubbles/2x/user-male.png',
    },
    {
      id: '3',
      name: 'Nelson Steve',
      email: 'nelsonsteve799@gmail.com',
      phoneNumber: '+923110671901',
      bsDegree: 'BSCS',
      imageURL: 'https://img.icons8.com/bubbles/2x/user-male.png',
    },
    {
      id: '4',
      name: 'Malik Waleed Jamshaid Jhakar',
      email: 'Waleed420@gmail.com',
      phoneNumber: '+923358338704',
      bsDegree: 'BSCS',
      imageURL: 'https://img.icons8.com/bubbles/2x/user-male.png',
    },
    {
      id: '5',
      name: 'Saad Ahmed',
      email: 'saad30298@gmail.com',
      phoneNumber: '+923075567947',
      bsDegree: 'BSCS',
      imageURL: 'https://img.icons8.com/bubbles/2x/user-male.png',
    },
    {
      id: '6',
      name: 'Jawad Khan',
      email: 'Jawad420@gmail.com',
      phoneNumber: '+923495035509',
      bsDegree: 'BSCS',
      imageURL: 'https://img.icons8.com/bubbles/2x/user-male.png',
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
    case 'getFirestoreData':
      return {
        ...state,
        // users : [...state.users, action.data]
        firestoreStdData: [...state.firestoreStdData, action.data],
      };
    case 'getFirestoreCompData':
      return {
        ...state,
        // users : [...state.users, action.data]
        firestoreCompData: [...state.firestoreCompData, action.data],
      };
  }
  return state;
};
