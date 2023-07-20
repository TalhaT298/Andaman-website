const flight = [
    // direct flights start here 
    {
        flightID: 1,
        flightDate: '27-07-2023',
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
        flightName: 'SpiceJet',
        flightNo: 'SG- 607',
        travelRoute: 'IXZ-MAA',
        currentDestination: 'Port Blair',
        flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
        nextDestination: 'Chennai',
        departureTime: '11:30',
        arrivalTime: '13:35',
        flightDuration: '02h 05m',
        flightLocation: "North landing Guide road. No:8, Chennai 34437",
        adultPrice: 6733,
        fare: 5951,
        tax: 1332,
        discount: 550,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        refund: 'Refundable',
        meals: 'NM',
        baggage: {
            handBag: '7kg',
            checkIn: '15kg',
        }
    },
    {
        flightID: 2,
        flightDate: '27-07-2023',
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
        flightName: 'Air India',
        flightNo: 'AI- 550',
        travelRoute: 'IXZ-MAA',
        currentDestination: 'Port Blair',
        flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
        nextDestination: 'Chennai',
        departureTime: '08:05',
        arrivalTime: '10:20',
        flightDuration: '02h 15m',
        flightLocation: "North landing Guide road. No:8, Chennai 34437",
        adultPrice: 7325,
        fare: 6000,
        tax: 1325,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        refund: 'Non Refundable',
        meals: 'Free Meals',
        baggage: {
            handBag: '8kg',
            checkIn: '20kg',
        }
    },
    {
        flightID: 3,
        flightDate: '27-07-2023',
        flightGateway: 'Terminal 1',
        flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
        flightName: 'Indigo',
        flightNo: '6E - 312',
        travelRoute: 'IXZ-MAA',
        currentDestination: 'Port Blair',
        flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
        nextDestination: 'Chennai',
        departureTime: '07:40',
        arrivalTime: '09:35',
        flightDuration: '01h 55m',
        flightLocation: "North landing Guide road. No:8, Chennai 34437",
        adultPrice: 8110,
        fare: 6233,
        tax: 1777,
        childrenPrice: 3000, // this is just dummy price
        infantPrice: 2000, // this is just dummy price
        refund: 'Partially Refundable',
        meals: 'NM',
        baggage: {
            handBag: '7kg',
            checkIn: '15kg',
        }
    },
    // {
    //     flightID: 4,
    //     flightDate: '28-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 550',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '08:05',
    //     arrivalTime: '10:20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7325,
    //     fare: 6000,
    //     tax: 1325,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },
    // {
    //     flightID: 5,
    //     flightDate: '28-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 312',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '07:40',
    //     arrivalTime: '09:35',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8963,
    //     fare: 7550,
    //     tax: 1413,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 6,
    //     flightDate: '29-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 550',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '08:05',
    //     arrivalTime: '10:20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7325,
    //     fare: 6000,
    //     tax: 1325,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },
    // {
    //     flightID: 7,
    //     flightDate: '29-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 607',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '11:30',
    //     arrivalTime: '13:35',
    //     flightDuration: '02h 05m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7111,
    //     fare: 6555,
    //     tax: 556,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 8,
    //     flightDate: '29-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 312',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '07:40',
    //     arrivalTime: '09:35',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8366,
    //     fare: 6572,
    //     tax: 1794,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 9,
    //     flightDate: '30-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 607',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '11:30',
    //     arrivalTime: '13:35',
    //     flightDuration: '02h 05m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7380,
    //     fare: 6044,
    //     tax: 1336,
    //     discount: 767,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 10,
    //     flightDate: '30-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 550',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '08:05',
    //     arrivalTime: '10.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7948,
    //     fare: 6600,
    //     tax: 1348,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },
    // {
    //     flightID: 11,
    //     flightDate: '30-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 312',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '07:40',
    //     arrivalTime: '09:35',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8366,
    //     fare: 6572,
    //     tax: 1794,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 12,
    //     flightDate: '31-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 550',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '08:05',
    //     arrivalTime: '10.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7325,
    //     fare: 6000,
    //     tax: 1325,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },
    // {
    //     flightID: 13,
    //     flightDate: '31-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 607',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '11:30',
    //     arrivalTime: '13:35',
    //     flightDuration: '02h 05m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7380,
    //     fare: 6044,
    //     tax: 1336,
    //     discount: 767,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 14,
    //     flightDate: '31-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 312',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '07:40',
    //     arrivalTime: '09:35',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 10013,
    //     fare: 8550,
    //     tax: 1463,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // // august flight schedule
    // // with discount 
    // {
    //     flightID: 15,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 607',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '11:30',
    //     arrivalTime: '13:35',
    //     flightDuration: '02h 05m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7380,
    //     fare: 6044,
    //     tax: 1336,
    //     discount: 812,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 16,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 550',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '08:05',
    //     arrivalTime: '10.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7325,
    //     fare: 6000,
    //     tax: 1325,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },
    // {
    //     flightID: 17,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 312',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '07:40',
    //     arrivalTime: '09:35',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8010,
    //     fare: 6233,
    //     tax: 1777,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 25,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 804',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '14:00',
    //     arrivalTime: '15:55',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8010,
    //     fare: 6233,
    //     tax: 1777,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // // with discount 
    // {
    //     flightID: 18,
    //     flightDate: '02-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 607',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '11:30',
    //     arrivalTime: '13:35',
    //     flightDuration: '02h 05m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7380,
    //     fare: 6044,
    //     tax: 1336,
    //     discount: 812,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // // without discount
    // {
    //     flightID: 19,
    //     flightDate: '02-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 550',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '08:05',
    //     arrivalTime: '10.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7325,
    //     fare: 6000,
    //     tax: 1325,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },

    // {
    //     flightID: 20,
    //     flightDate: '02-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 312',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '07:40',
    //     arrivalTime: '09:35',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8010,
    //     fare: 6233,
    //     tax: 1777,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 26,
    //     flightDate: '02-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 804',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '14:00',
    //     arrivalTime: '15:55',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8010,
    //     fare: 6233,
    //     tax: 1777,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 21,
    //     flightDate: '03-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 607',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '11:30',
    //     arrivalTime: '13:35',
    //     flightDuration: '02h 05m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7380,
    //     fare: 6044,
    //     tax: 1336,
    //     discount: 812,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 22,
    //     flightDate: '03-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 312',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '07:40',
    //     arrivalTime: '09:35',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8010,
    //     fare: 6233,
    //     tax: 1777,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 23,
    //     flightDate: '03-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 804',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '14:00',
    //     arrivalTime: '15:55',
    //     flightDuration: '01h 55m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 8648,
    //     fare: 7250,
    //     tax: 1398,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 24,
    //     flightDate: '03-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 550',
    //     travelRoute: 'IXZ-MAA',
    //     currentDestination: 'Port Blair',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Chennai',
    //     departureTime: '08:05',
    //     arrivalTime: '10.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7325,
    //     fare: 6000,
    //     tax: 1325,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },

    // // chennai to port blair
    // {
    //     flightID: 27,
    //     flightDate: '27-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 609',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '8:40',
    //     arrivalTime: '10:55',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7203,
    //     fare: 6302,
    //     tax: 901,
    //     discount: 685,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 28,
    //     flightDate: '27-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 549',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '05:05',
    //     arrivalTime: '07.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6820,
    //     fare: 6000,
    //     tax: 820,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },
    // {
    //     flightID: 29,
    //     flightDate: '27-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 6213',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '04:55',
    //     arrivalTime: '07:10',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7982,
    //     fare: 7047,
    //     tax: 935,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 30,
    //     flightDate: '28-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 549',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '05:05',
    //     arrivalTime: '07.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6820,
    //     fare: 6000,
    //     tax: 820,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },

    // {
    //     flightID: 31,
    //     flightDate: '28-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 6213',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '04:55',
    //     arrivalTime: '07:10',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7562,
    //     fare: 6647,
    //     tax: 915,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 32,
    //     flightDate: '29-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 609',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '8:40',
    //     arrivalTime: '10:55',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6555,
    //     fare: 6050,
    //     tax: 505,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 33,
    //     flightDate: '29-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 549',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '05:05',
    //     arrivalTime: '07.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6820,
    //     fare: 6000,
    //     tax: 820,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },

    // {
    //     flightID: 34,
    //     flightDate: '29-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 6213',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '04:55',
    //     arrivalTime: '07:10',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7982,
    //     fare: 7047,
    //     tax: 935,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 35,
    //     flightDate: '30-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 609',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '8:40',
    //     arrivalTime: '10:55',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6675,
    //     fare: 5800,
    //     tax: 875,
    //     discount: 560,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 36,
    //     flightDate: '30-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 549',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '05:05',
    //     arrivalTime: '07.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6877,
    //     fare: 6000,
    //     tax: 877,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },

    // {
    //     flightID: 37,
    //     flightDate: '30-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 6213',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '04:55',
    //     arrivalTime: '07:10',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6936,
    //     fare: 6047,
    //     tax: 889,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 38,
    //     flightDate: '30-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: ['6E-987', '6E-345'],
    //     travelRoute: ['MAA-CCU', 'CCU-IXZ'],
    //     currentDestination: ['Chennai', 'Kolkata'],
    //     flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
    //     flightIntervalTime: '01h 35m',
    //     nextDestination: ['Kolkata', 'Port Blair'],
    //     departureTime: ['05:10', '09.15'],
    //     arrivalTime: ['07.40', '11:25'],
    //     flightDuration: ['02h 30m', '02h 10m'],
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 9555,
    //     fare: 8448,
    //     tax: 1107,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 39,
    //     flightDate: '30-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: ['6E-6411', '6E-2788'],
    //     travelRoute: ['MAA-CCU', 'CCU-IXZ'],
    //     currentDestination: ['Chennai', 'Kolkata'],
    //     flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
    //     flightIntervalTime: '07h 25m',
    //     nextDestination: ['Kolkata', 'Port Blair'],
    //     departureTime: ['19:55', '22.25'],
    //     arrivalTime: ['05.50', '08:10'],
    //     flightDuration: ['02h 30m', '02h 20m'],
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6936,
    //     fare: 6047,
    //     tax: 889,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 40,
    //     flightDate: '31-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 609',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '8:40',
    //     arrivalTime: '10:55',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6675,
    //     fare: 5800,
    //     tax: 875,
    //     discount: 560,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 41,
    //     flightDate: '31-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 549',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '05:05',
    //     arrivalTime: '07.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6877,
    //     fare: 6000,
    //     tax: 877,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },

    // {
    //     flightID: 42,
    //     flightDate: '31-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 6213',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '04:55',
    //     arrivalTime: '07:10',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6936,
    //     fare: 6047,
    //     tax: 889,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 43,
    //     flightDate: '31-07-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: ['6E-6411', '6E-2788'],
    //     travelRoute: ['MAA-CCU', 'CCU-IXZ'],
    //     currentDestination: ['Chennai', 'Kolkata'],
    //     flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
    //     flightIntervalTime: '07h 25m',
    //     nextDestination: ['Kolkata', 'Port Blair'],
    //     departureTime: ['19.55', '05.50'],
    //     arrivalTime: ['22.25', '08.10'],
    //     flightDuration: ['02h 30m', '02h 20m'],
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 10559,
    //     fare: 9448,
    //     tax: 1111,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // // august flight schdule start here

    // {
    //     flightID: 44,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782096/spicejetlogo_vrndyy.png',
    //     flightName: 'SpiceJet',
    //     flightNo: 'SG- 609',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '8:40',
    //     arrivalTime: '10:55',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6675,
    //     fare: 5800,
    //     tax: 875,
    //     discount: 560,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 45,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689782882/AI_dnchrb.png',
    //     flightName: 'Air India',
    //     flightNo: 'Ai- 549',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '05:05',
    //     arrivalTime: '07.20',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6877,
    //     fare: 6000,
    //     tax: 877,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Non Refundable',
    //     meals: 'Free Meals',
    //     baggage: {
    //         handBag: '8kg',
    //         checkIn: '20kg',
    //     }
    // },

    // {
    //     flightID: 46,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 6213',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '04:55',
    //     arrivalTime: '07:10',
    //     flightDuration: '02h 15m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 6932,
    //     fare: 6047,
    //     tax: 885,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 47,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: '6E - 548',
    //     travelRoute: 'MAA-IXZ',
    //     currentDestination: 'Chennai',
    //     flightInterval: 'non-stop', // 1 stoppages // 2 stoppages
    //     nextDestination: 'Port Blair',
    //     departureTime: '11:00',
    //     arrivalTime: '13:10',
    //     flightDuration: '02h 10m',
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 7562,
    //     fare: 6647,
    //     tax: 915,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

    // {
    //     flightID: 48,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: ['6E-987', '6E-345'],
    //     travelRoute: ['MAA-CCU', 'CCU-IXZ'],
    //     currentDestination: ['Chennai', 'Kolkata'],
    //     flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
    //     flightIntervalTime: '07h 25m',
    //     nextDestination: ['Kolkata', 'Port Blair'],
    //     departureTime: ['05:10', '07.40'],
    //     arrivalTime: ['09.15', '11.25'],
    //     flightDuration: ['02h 30m', '02h 10m'],
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 10555,
    //     fare: 9448,
    //     tax: 1107,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },
    // {
    //     flightID: 49,
    //     flightDate: '01-08-2023',
    //     flightGateway: 'Terminal 1',
    //     flightLogo: 'https://res.cloudinary.com/dmqgkr30q/image/upload/v1689786758/IndiGo_Airlines_logo.svg_dayuu4.png',
    //     flightName: 'Indigo',
    //     flightNo: ['6E-6411', '6E-2788'],
    //     travelRoute: ['MAA-CCU', 'CCU-IXZ'],
    //     currentDestination: ['Chennai', 'Kolkata'],
    //     flightInterval: '1 stop CCU', // 1 stoppages // 2 stoppages
    //     flightIntervalTime: '07h 25m',
    //     nextDestination: ['Kolkata', 'Port Blair'],
    //     departureTime: ['19:55', '22:25'],
    //     arrivalTime: ['05:50', '08:10'],
    //     flightDuration: ['02h 30m', '02h 10m'],
    //     flightLocation: "North landing Guide road. No:8, Chennai 34437",
    //     adultPrice: 10559,
    //     fare: 9448,
    //     tax: 1111,
    //     childrenPrice: 3000, // this is just dummy price
    //     infantPrice: 2000, // this is just dummy price
    //     refund: 'Partially Refundable',
    //     meals: 'NM',
    //     baggage: {
    //         handBag: '7kg',
    //         checkIn: '15kg',
    //     }
    // },

];

export default flight;
