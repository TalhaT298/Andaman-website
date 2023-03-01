import { lazy, Suspense } from 'react';
import { RingLoader, ScaleLoader } from 'react-spinners';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



<Router>
  <Suspense
    fallback={
      <div className="h-screen w-full flex flex-col bg-white">
        <ScaleLoader
          size={500}
          color="green"
          className="mx-auto w-screen h-full items-center justify-center border-transparent"
        />
      </div>
    }
  >
    <Routes>
      
    </Routes>
  </Suspense>
</Router>;

const dining = [
  {
    id: 1,
    imageLink:
      'https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=612x612&w=0&k=20&c=GGT5LN7G4zLhJTEnP_KcyvYuayi8f1nJcvQwvmj0rCM=',

    name: 'Tandoor',
    genre: 'Restaurant',
    link: 'Tandoor',
    speciality: 'Tandoor, Indian',
    location: 'Port Blair, Lamba Line',
  },
  {
    id: 2,
    imageLink:
      'https://st4.depositphotos.com/1884173/24675/i/600/depositphotos_246751852-stock-photo-spicy-garlic-chilli-prawns-shrimps.jpg',

    name: 'Trio',
    genre: 'Restaurant',
    link: 'Trio',
    speciality: 'Indian, Chinese',
    location: 'Port Blair, Bhatu Bhasti',
  },
  {
    id: 3,
    imageLink:
      'https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',

    name: "Tillai's",
    genre: 'Bakery',
    link: 'Tillai',
    speciality: 'Bakery, Sweets',
    location: 'Port Blair, Ghanta Ghar',
  },
  {
    id: 4,
    imageLink:
      'https://media.istockphoto.com/id/159248709/photo/the-quinoa-burger.jpg?s=612x612&w=0&k=20&c=O7d3XqSlP9yQA4x0aFvwodiFzLFOxKS4eoWeiLpET5Y=',

    name: 'ICY SPICY',
    genre: 'Fully Vegetarian Bakery',
    link: 'Icyspicy',
    speciality: 'Bakery, Desserts',
    location: 'Port Blair, Junglighat',
  },

  // https://thumbs.dreamstime.com/b/chicken-dum-biryani-white-bowl-traditional-indian-one-pot-dish-background-high-angle-view-156498926.jpg
  {
    id: 5,
    imageLink:
      'https://www.dwarakaorganic.com/wp-content/uploads/2012/06/Veg-Biryani-Recipe.jpg',

    name: 'Annapurna Cafeteria',
    genre: 'Fully Veg Restaurant & Cafe',
    link: 'Annapurna',
    speciality: 'Snacks, South Indian',
    location: 'Port Blair, DollyGunj',
  },
  {
    id: 6,
    imageLink:
      'https://media.istockphoto.com/id/503636498/photo/ladys-hands-holding-cup-with-sth-heart-shaped.jpg?s=612x612&w=0&k=20&c=3lpXk7jl2CRPfMiq37aXNIgdfcFfN-BIDNMDqr6f8qE=',

    name: 'Brewbeans Cafe',
    genre: 'Cafe',
    link: 'Brewbeans',
    speciality: 'Beverages, Pizzas, Snacks',
    location: 'Port Blair, School Line',
  },
  {
    id: 7,
    imageLink:
      'https://media-cdn.tripadvisor.com/media/photo-s/09/2e/a0/75/camellia-tea-coffee.jpg',

    name: 'Chai Sutta Bar',
    genre: 'Cafe',
    link: 'Chaisuttabar',
    speciality: 'Beverages, Fast Food, Snacks',
    location: 'Port Blair, Junglighat',
  },
  {
    id: 8,
    imageLink: 'https://foodsguy.com/wp-content/uploads/2022/02/Milkshake.jpg',

    name: 'Rooftop Cafe',
    genre: 'Cafe',
    link: 'Rooftop',
    speciality: 'Cafe, Beverages',
    location: 'Port Blair, School Line',
  },
  {
    id: 9,
    imageLink:
      'https://thumbs.dreamstime.com/b/traditional-kerala-fish-curry-coconut-milk-fresh-mangoes-82241970.jpg',

    name: 'CARDAMOM',
    genre: 'Restaurant',
    link: 'Cardamom',
    speciality: 'North Indian, Indian',
    location: 'Port Blair, Garacharma',
  },
];
export default dining;
