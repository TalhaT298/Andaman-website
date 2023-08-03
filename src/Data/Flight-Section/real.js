const flight = [
    // direct flights start here 
    {
        flightID: 1,
        flightDate: ['27-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 607'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['11:30'],
        arrivalTime: ['13:35'],
        flightDuration: ['02h 05m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7133,//base price
        fare: 4951,
        tax: 1332,
        discount: 550,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 05m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 2,
        flightDate: ['27-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['AI- 550'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['08:05'],
        arrivalTime: ['10:20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7725,
        fare: 5000,
        tax: 1325,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },
    {
        flightID: 3,
        flightDate: ['27-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 312'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['07:40'],
        arrivalTime: ['09:35'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 8410,
        fare: 5233,
        tax: 1777,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 4,
        flightDate: ['28-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 550'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['08:05'],
        arrivalTime: ['10:20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7725,
        fare: 5000,
        tax: 1325,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },
    {
        flightID: 5,
        flightDate: ['28-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 312'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['07:40'],
        arrivalTime: ['09:35'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 9363,
        fare: 6550,
        tax: 1413,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 6,
        flightDate: ['29-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 550'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['08:05'],
        arrivalTime: ['10:20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7725,
        fare: 5000,
        tax: 1325,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },
    {
        flightID: 7,
        flightDate: ['29-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 607'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['11:30'],
        arrivalTime: ['13:35'],
        flightDuration: ['02h 05m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7511,
        fare: 5555,
        tax: 556,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 05m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 8,
        flightDate: ['29-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 312'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['07:40'],
        arrivalTime: ['09:35'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 8766,
        fare: 5572,
        tax: 1794,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 9,
        flightDate: ['30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 607'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['11:30'],
        arrivalTime: ['13:35'],
        flightDuration: ['02h 05m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7013,
        fare: 5044,
        tax: 1336,
        discount: 767,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 05m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 10,
        flightDate: ['30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 550'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['08:05'],
        arrivalTime: ['10.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 8348,
        fare: 5600,
        tax: 1348,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },
    {
        flightID: 11,
        flightDate: ['30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 312'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['07:40'],
        arrivalTime: ['09:35'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 8766,
        fare: 5572,
        tax: 1794,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    // fare: 5000,
    // tax: 1325,
    // discount: 0,
    {
        flightID: 12,
        flightDate: ['31-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 550'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['08:05'],
        arrivalTime: ['10.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7725,
        fare: 5000,
        tax: 1325,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },
    {
        flightID: 13,
        flightDate: ['31-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 607'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['11:30'],
        arrivalTime: ['13:35'],
        flightDuration: ['02h 05m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7013,
        fare: 5044,
        tax: 1336,
        discount: 767,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 05m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 14,
        flightDate: ['31-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 312'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['07:40'],
        arrivalTime: ['09:35'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 10413,
        fare: 7550,
        tax: 1463,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    // august flight schedule
    // with discount 
    {
        flightID: 15,
        flightDate: ['01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 607'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['11:30'],
        arrivalTime: ['13:35'],
        flightDuration: ['02h 05m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 6968,
        fare: 5044,
        tax: 1336,
        discount: 812,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 05m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 16,
        flightDate: ['01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 550'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['08:05'],
        arrivalTime: ['10.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7725,
        fare: 5000,
        tax: 1325,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },
    {
        flightID: 17,
        flightDate: ['01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 312'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['07:40'],
        arrivalTime: ['09:35'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 8410,
        fare: 6233,
        tax: 1777,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 25,
        flightDate: ['01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 804'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['14:00'],
        arrivalTime: ['15:55'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7010,
        fare: 6233,
        tax: 1777,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    // with discount 
    {
        flightID: 18,
        flightDate: ['02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 607'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['11:30'],
        arrivalTime: ['13:35'],
        flightDuration: ['02h 05m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 6968,
        fare: 5044,
        tax: 1336,
        discount: 812,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 05m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    // without discount
    {
        flightID: 19,
        flightDate: ['02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 550'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['08:05'],
        arrivalTime: ['10.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7725,
        fare: 5000,
        tax: 1325,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    {
        flightID: 20,
        flightDate: ['02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 312'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['07:40'],
        arrivalTime: ['09:35'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 8410,
        fare: 5233,
        tax: 1777,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 26,
        flightDate: ['02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 804'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['14:00'],
        arrivalTime: ['15:55'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 8410,
        fare: 5233,
        tax: 1777,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 21,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 607'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['11:30'],
        arrivalTime: ['13:35'],
        flightDuration: ['02h 05m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 6968,
        fare: 6044,
        tax: 1336,
        discount: 812,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 05m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 22,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 312'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['07:40'],
        arrivalTime: ['09:35'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 8410,
        fare: 5233,
        tax: 1777,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 23,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 804'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['14:00'],
        arrivalTime: ['15:55'],
        flightDuration: ['01h 55m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 9048,
        fare: 6250,
        tax: 1398,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['01h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 24,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 550'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['08:05'],
        arrivalTime: ['10.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Veer Savarkar International Airport, India"],
        flightLocationTo: ["Chennai International Airport, India"],
        adultPrice: 7725,
        fare: 5000,
        tax: 1325,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    // chennai to port blair
    {
        flightID: 27,
        flightDate: ['27-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 609'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['08:40'],
        arrivalTime: ['10:55'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 6702,
        fare: 5302,
        tax: 901,
        discount: 685,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 28,
        flightDate: ['27-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 549'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['05:05'],
        arrivalTime: ['07.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7220,
        fare: 5000,
        tax: 820,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },
    {
        flightID: 29,
        flightDate: ['27-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 6213'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['04:55'],
        arrivalTime: ['07:10'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 8382,
        fare: 6047,
        tax: 935,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 61,
        flightDate: ['27-07-2023', '27-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-987', '6E-345'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['01h 35m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['05.10', '09.15'],
        arrivalTime: ['07:40', '11.25'],
        flightDuration: ['02h 30m', '02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 9955,
        fare: 7448,
        tax: 1107,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['6h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 62,
        flightDate: ['27-07-2023', '28-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19:55', '05:50'],
        arrivalTime: ['22:25', '08:10'],
        flightDuration: ['02h 30m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 9955,
        fare: 7448,
        tax: 1107,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 30,
        flightDate: ['28-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 549'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['05:05'],
        arrivalTime: ['07.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7220,
        fare: 5000,
        tax: 820,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    {
        flightID: 31,
        flightDate: ['28-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 6213'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['04:55'],
        arrivalTime: ['07:10'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7962,
        fare: 6647,
        tax: 915,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 63,
        flightDate: ['28-07-2023', '29-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19:55', '05:50'],
        arrivalTime: ['22:25', '08:10'],
        flightDuration: ['02h 30m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 10291,
        fare: 7764,
        tax: 1127,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 32,
        flightDate: ['29-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 609'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['08:40'],
        arrivalTime: ['10:55'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 6955,
        fare: 5050,
        tax: 505,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 33,
        flightDate: ['29-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 549'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['05:05'],
        arrivalTime: ['07.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7220,
        fare: 5000,
        tax: 820,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    {
        flightID: 34,
        flightDate: ['29-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 6213'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['04:55'],
        arrivalTime: ['07:10'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 8382,
        fare: 6047,
        tax: 935,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 64,
        flightDate: ['29-07-2023', '29-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-987', '6E-345'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['01h 35m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['05.10', '09.15'],
        arrivalTime: ['07:40', '11.25'],
        flightDuration: ['02h 30m', '02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 9959,
        fare: 7448,
        tax: 1111,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['6h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 65,
        flightDate: ['29-07-2023', '30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19:55', '05:50'],
        arrivalTime: ['22:25', '08:10'],
        flightDuration: ['02h 30m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 9559,
        fare: 7448,
        tax: 1111,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 66,
        flightDate: ['29-07-2023', '29-07-2023', '30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-5278', '6E-5287', '6E-2788'],
        travelRoute: ['MAA', 'BOM', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Mumbai', 'Kolkata'],
        flightInterval: '2 stop BOM,CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['01h 35m', '4h 35m'],
        nextDestination: ['Mumbai', 'Kolkata', 'Port Blair'],
        departureTime: ['19:15', '22.40', '05:50'],
        arrivalTime: ['21:05', '01.15', '08:10'],
        flightDuration: ['01h 50m', '2h 35m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Chhatrapati Shivaji International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Chhatrapati Shivaji International Airport, India", "Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 10274,
        fare: 7333,
        tax: 1541,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 35,
        flightDate: ['30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 609'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['08:40'],
        arrivalTime: ['10:55'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 6515,
        fare: 4800,
        tax: 875,
        discount: 560,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 36,
        flightDate: ['30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 549'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['05:05'],
        arrivalTime: ['07.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7277,
        fare: 5000,
        tax: 877,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    {
        flightID: 37,
        flightDate: ['30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 6213'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['04:55'],
        arrivalTime: ['07:10'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7336,
        fare: 5047,
        tax: 889,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 38,
        flightDate: ['30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-987', '6E-345'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['01h 35m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['05:10', '09.15'],
        arrivalTime: ['07.40', '11:25'],
        flightDuration: ['02h 30m', '02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 9955,
        fare: 7448,
        tax: 1107,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['6h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 39,
        flightDate: ['30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19:55', '05.50'],
        arrivalTime: ['22.25', '08:10'],
        flightDuration: ['02h 30m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 7336,
        fare: 5047,
        tax: 889,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 67,
        flightDate: ['30-07-2023', '30-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-987', '6E-345'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['01h 35m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['05.10', '09.15'],
        arrivalTime: ['07:40', '11.25'],
        flightDuration: ['02h 30m', '02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 10472,
        fare: 7940,
        tax: 1132,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['6h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 68,
        flightDate: ['30-07-2023', '31-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19:55', '05:50'],
        arrivalTime: ['22:25', '08:10'],
        flightDuration: ['02h 30m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 9959,
        fare: 7448,
        tax: 1111,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 40,
        flightDate: ['31-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 609'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['08:40'],
        arrivalTime: ['10:55'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 6515,
        fare: 4800,
        tax: 875,
        discount: 560,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 41,
        flightDate: ['31-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 549'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['05:05'],
        arrivalTime: ['07.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7277,
        fare: 5000,
        tax: 877,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    {
        flightID: 42,
        flightDate: ['31-07-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 6213'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['04:55'],
        arrivalTime: ['07:10'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7336,
        fare: 5047,
        tax: 889,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 43,
        flightDate: ['31-07-2023', '01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19.55', '05.50'],
        arrivalTime: ['22.25', '08.10'],
        flightDuration: ['02h 30m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 9955,
        fare: 7448,
        tax: 1107,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    // test data 
    // {
    //     flightID: 4,
    //     flightDate: ['31-07-2023'],
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: ['6E-6411', '6E-2788'],
    //     travelRoute: ['MAA', 'CCU', 'IXZ'],
    //     currentDestination: ['Chennai', 'Kolkata', 'Port Blair'],
    //     flightInterval: '2 stop CCU', // 1 stoppages // 2 stoppages
    //     flightIntervalTime: ['07h 25m'],
    //     nextDestination: ['Kolkata', 'Port Blair', 'Delhi'],
    //     departureTime: ['19.55', '05.50'],
    //     arrivalTime: ['22.25', '08.10'],
    //     flightDuration: ['02h 30m', '02h 20m'],
    //     flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
    //     flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India", "Chennai International Airport, India",],
    //     adultPrice: 10559,
    //     fare: 9448,
    //     tax: 1111,
    // discount: 0,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    // convenience: 400,
    // fee: 1000,
    // totalFlightDuration: [''],
    //     refund: 'Partially Refundable',
    //     meals: 'Not Mentioned',
    //     baggage: {
    //         handBag: '7 kgs',
    //         checkIn: '15 kgs',
    //     }
    // },
    // august flight schdule start here

    {
        flightID: 44,
        flightDate: ['01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 609'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['08:40'],
        arrivalTime: ['10:55'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 6515,
        fare: 4800,
        tax: 875,
        discount: 560,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 45,
        flightDate: ['01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 549'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['05:05'],
        arrivalTime: ['07.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7277,
        fare: 5000,
        tax: 877,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    {
        flightID: 46,
        flightDate: ['01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 6213'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['04:55'],
        arrivalTime: ['07:10'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7332,
        fare: 6047,
        tax: 885,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 47,
        flightDate: ['01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 548'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['11:00'],
        arrivalTime: ['13:10'],
        flightDuration: ['02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7962,
        fare: 5647,
        tax: 915,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 10m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 48,
        flightDate: ['01-08-2023', '01-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-987', '6E-345'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['01h 35m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['05:10', '09.15'],
        arrivalTime: ['07.40', '11.25'],
        flightDuration: ['02h 30m', '02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 9955,
        fare: 7448,
        tax: 1107,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['6h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 49,
        flightDate: ['01-08-2023', '02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19:55', '05:50'],
        arrivalTime: ['22:25', '08:10'],
        flightDuration: ['02h 30m', '02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 10291,
        fare: 7764,
        tax: 1127,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    // 2nd agust
    {
        flightID: 50,
        flightDate: ['02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 609'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['08:40'],
        arrivalTime: ['10:55'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 6515,
        fare: 4800,
        tax: 875,
        discount: 560,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 51,
        flightDate: ['02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai- 549'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['05:05'],
        arrivalTime: ['07.20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7239,
        fare: 5000,
        tax: 839,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    {
        flightID: 52,
        flightDate: ['02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 6213'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['04:55'],
        arrivalTime: ['07:10'],
        flightDuration: ['02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7336,
        fare: 5047,
        tax: 889,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 10m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 53,
        flightDate: ['02-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 548'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['11:00'],
        arrivalTime: ['13:10'],
        flightDuration: ['02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 7962,
        fare: 5647,
        tax: 915,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 10m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 54,
        flightDate: ['02-08-2023', '03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19:55', '05:50'],
        arrivalTime: ['22:25', '08:10'],
        flightDuration: ['02h 30m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 10959,
        fare: 8448,
        tax: 1111,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },
    {
        flightID: 55,
        flightDate: ['02-08-2023', '03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['Ai-786', 'Ai-787'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['18h 55m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['08.10', '05:35'],
        arrivalTime: ['10.40', '08:00'],
        flightDuration: ['02h 30m', '02h 25m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 11317,
        fare: 8721,
        tax: 1196,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['23h 50m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 69,
        flightDate: ['02-08-2023', '02-08-2023', '03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-5278', '6E-5287', '6E-2788'],
        travelRoute: ['MAA', 'BOM', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Mumbai', 'Kolkata'],
        flightInterval: '2 stop BOM,CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['01h 35m', '4h 35m'],
        nextDestination: ['Mumbai', 'Kolkata', 'Port Blair'],
        departureTime: ['19:15', '22.40', '05:50'],
        arrivalTime: ['21:05', '01.15', '08:10'],
        flightDuration: ['01h 50m', '2h 35m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Chhatrapati Shivaji International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Chhatrapati Shivaji International Airport, India", "Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 10319,
        fare: 7378,
        tax: 1541,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },


    // 3rd agust  
    {
        flightID: 56,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: ['SG- 609'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['08:40'],
        arrivalTime: ['10:55'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 6515,
        fare: 4800,
        tax: 875,
        discount: 560,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: [''],
        refund: 'Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 57,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 6213'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['04:55'],
        arrivalTime: ['07:10'],
        flightDuration: ['02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 8596,
        fare: 6247,
        tax: 949,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 10m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 58,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E - 548'],
        travelRoute: ['MAA', 'IXZ'],
        currentDestination: ['Chennai'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Port Blair'],
        departureTime: ['11:00'],
        arrivalTime: ['13:10'],
        flightDuration: ['02h 10m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 9642,
        fare: 7247,
        tax: 995,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 10m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 59,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: ['AI- 549'],
        travelRoute: ['IXZ', 'MAA'],
        currentDestination: ['Port Blair'],
        flightInterval: 'Direct', // 1 stoppages // 2 stoppages
        nextDestination: ['Chennai'],
        departureTime: ['05:05'],
        arrivalTime: ['07:20'],
        flightDuration: ['02h 15m'],
        flightLocationFrom: ["Chennai International Airport, India"],
        flightLocationTo: ["Veer Savarkar International Airport, India"],
        adultPrice: 10122,
        fare: 7742,
        tax: 980,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['02h 15m'],
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8 kgs',
            checkIn: '20 kgs',
        }
    },

    {
        flightID: 60,
        flightDate: ['03-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-6411', '6E-2788'],
        travelRoute: ['MAA', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Kolkata'],
        flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['07h 25m'],
        nextDestination: ['Kolkata', 'Port Blair'],
        departureTime: ['19:55', '05:50'],
        arrivalTime: ['22:25', '08:10'],
        flightDuration: ['02h 30m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 10955,
        fare: 8448,
        tax: 1107,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 15m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

    {
        flightID: 70,
        flightDate: ['03-08-2023', '03-08-2023', '04-08-2023'],
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: ['6E-5278', '6E-5287', '6E-2788'],
        travelRoute: ['MAA', 'BOM', 'CCU', 'IXZ'],
        currentDestination: ['Chennai', 'Mumbai', 'Kolkata'],
        flightInterval: '2 stop BOM,CCU', // 1 stoppages // 2 stoppages
        flightIntervalTime: ['01h 35m', '4h 35m'],
        nextDestination: ['Mumbai', 'Kolkata', 'Port Blair'],
        departureTime: ['19:15', '22.40', '05:50'],
        arrivalTime: ['21:05', '01.15', '08:10'],
        flightDuration: ['01h 50m', '2h 35m', '02h 20m'],
        flightLocationFrom: ["Chennai International Airport, India", "Chhatrapati Shivaji International Airport, India", "Netaji Subhash Chandra Bose International Airport, India"],
        flightLocationTo: ["Chhatrapati Shivaji International Airport, India", "Netaji Subhash Chandra Bose International Airport, India", "Veer Savarkar International Airport, India"],
        adultPrice: 10274,
        fare: 7333,
        tax: 1541,
        discount: 0,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        convenience: 400,
        fee: 1000,
        totalFlightDuration: ['12h 55m'],
        refund: 'Partially Refundable',
        meals: 'Not Mentioned',
        baggage: {
            handBag: '7 kgs',
            checkIn: '15 kgs',
        }
    },

];

export default flight;
