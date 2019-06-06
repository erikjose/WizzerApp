const INITIAL_STATE = {
  property: [
    // {
    //   image: [
    //     require('~/assets/placeholder.jpg'),
    //     require('~/assets/placeholder.jpg'),
    //     require('~/assets/placeholder.jpg'),
    //     require('~/assets/placeholder.jpg'),
    //   ],
    //   advert_id: 4,
    //   price: 700,
    //   transaction: 'alugar',
    //   property: {
    //     city: 'Varginha',
    //     neighborhood: 'Residencial Vale das Palmeiras',
    //     number: 160,
    //     state: 'MG',
    //     street: 'Rua Doutor Benedito Hélio Gonçalves',
    //   },
    // },
    // {
    //   image: [
    //     require('~/assets/placeholder.jpg'),
    //     require('~/assets/placeholder.jpg'),
    //     require('~/assets/placeholder.jpg'),
    //     require('~/assets/placeholder.jpg'),
    //   ],
    //   advert_id: 6,
    //   price: 250000,
    //   transaction: 'vender',
    //   property: {
    //     city: 'Varginha',
    //     neighborhood: 'Residencial Belo Horizonte',
    //     number: 65,
    //     state: 'MG',
    //     street: 'Rua Juvenal Cardoso',
    //   },
    // },
  ],
};

export default function Properties(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PROPERTIES':
      return [...state, { property: action.property }];
    default:
      return state;
  }
}
