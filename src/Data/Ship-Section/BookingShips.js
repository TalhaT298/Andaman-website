const ship = [
  {
    shipID: 1,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Makruzz Pearl',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Neil Island',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 2,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Nautika Lite',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Neil Island',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 3,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Green Ocean 1',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Neil Island',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 4,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Makruzz Pearl',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Neil Island',
    nextDestination: 'Port Blair',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 5,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Nautika Lite',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Neil Island',
    nextDestination: 'Port Blair',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 6,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Green Ocean 1',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Neil Island',
    nextDestination: 'Port Blair',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 7,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Makruzz Pearl',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Havelock',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 8,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Nautika Lite',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Havelock',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 9,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Green Ocean 1',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Havelock',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 10,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Makruzz Pearl',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Havelock',
    departureTime: '1:00 pm',
    arrivalTime: '3:30 pm',
    shift: 'evening',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 11,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Makruzz Pearl',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Havelock',
    departureTime: '1:00 pm',
    arrivalTime: '3:30 pm',
    shift: 'evening',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 12,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Makruzz Pearl',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Port Blair',
    nextDestination: 'Havelock',
    departureTime: '1:00 pm',
    arrivalTime: '3:30 pm',
    shift: 'evening',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 13,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Makruzz Pearl',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Havelock',
    nextDestination: 'Port Blair',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 14,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Nautika Lite',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Havelock',
    nextDestination: 'Port Blair',
    departureTime: '8:00 am',
    arrivalTime: '09:30 am',
    shift: 'morning',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  {
    shipID: 15,
    shipGateway: 'Terminal 1',
    shipLogo: 'https://ship.easemytrip.com/Content/AirlineLogon/G8.png',
    shipName: 'Green Ocean 1',
    shipInterval: 'non-stop', // 1 stoppages // 2 stoppages
    currentDestination: 'Havelock',
    nextDestination: 'Port Blair',
    departureTime: '1:00 pm',
    arrivalTime: '03:30 pm',
    shift: 'evening',
    shipDuration: '02h 00m',
    adultPrice: 6700,
    childrenPrice: 3000, // this is just dummy price
    infantPrice: 2000, // this is just dummy price
  },
  
]

export default ship;
