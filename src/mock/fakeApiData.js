export const allProductsFakeData = [
  {
    id: 1,
    name: 'Potatoes',
    unit: 'kg',
    rating: {
      score: 4.9,
      totalReviews: '7K',
    },
    price: 5,
    currency: 'AED',
    discount: 10,
    imageUrl: require('../assets/images/potato-3.jpeg'),
  },
  {
    id: 2,
    name: 'Carrots',
    unit: 'kg',
    rating: {
      score: '5.0',
      totalReviews: '10K',
    },
    price: 4,
    currency: 'AED',
    discount: 15,
    imageUrl: require('../assets/images/carrots-1.webp'),
    imageUrl: require('../assets/images/carrots-3.jpeg'),
  },
  {
    id: 3,
    name: 'Onions',
    unit: 'kg',
    rating: {
      score: 4.8,
      totalReviews: '5K',
    },
    price: 2,
    currency: 'AED',
    discount: 20,
    imageUrl: require('../assets/images/onion-3.webp'),
  },
];
export const announcementFakeData = [
  {
    id: 1,
    text: 'Get 20% OFF on first order',

    imageUrl: require('../assets/images/home-cards-1.jpeg'),
  },
  {
    id: 2,
    text: 'Free home delivery on tuesday',

    imageUrl: require('../assets/images/home-cards-3.webp'),
  },
  {
    id: 2,
    text: 'Nearest Grocery store',

    imageUrl: require('../assets/images/home-cards-2.jpeg'),
  },
];
