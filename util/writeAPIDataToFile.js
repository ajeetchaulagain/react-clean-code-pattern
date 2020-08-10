const fs = require("fs");

const user = {
  users: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Rafael",
        last: "Numan",
      },
      location: {
        street: {
          number: 4699,
          name: "Buytengors",
        },
        city: "Stedum",
        state: "Zuid-Holland",
        country: "Netherlands",
        postcode: 68702,
        coordinates: {
          latitude: "40.9000",
          longitude: "-33.9510",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "rafael.numan@example.com",
      login: {
        uuid: "b8e74cea-eb06-443b-ac55-6d73f26ad3aa",
        username: "greenfrog467",
        password: "simba",
        salt: "6QdzqmUi",
        md5: "28b85bf091d1da393656940a47f126c2",
        sha1: "33d8569ac121cf67e9522efe9456df888710b6c6",
        sha256:
          "c8aa3c090fd88a9c76fc2ce093b41a8a129a477cf14a493f66249d30034e8f43",
      },
      dob: {
        date: "1990-04-18T14:44:55.955Z",
        age: 30,
      },
      registered: {
        date: "2010-06-19T02:09:08.319Z",
        age: 10,
      },
      phone: "(914)-682-6664",
      cell: "(627)-163-4010",
      id: {
        name: "BSN",
        value: "21792113",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/20.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
      },
      nat: "NL",
    },
    {
      gender: "female",
      name: {
        title: "Mademoiselle",
        first: "Johanna",
        last: "Noel",
      },
      location: {
        street: {
          number: 3195,
          name: "Quai Charles-De-Gaulle",
        },
        city: "Mézières (Fr)",
        state: "Obwalden",
        country: "Switzerland",
        postcode: 3456,
        coordinates: {
          latitude: "18.1737",
          longitude: "-5.7768",
        },
        timezone: {
          offset: "+5:45",
          description: "Kathmandu",
        },
      },
      email: "johanna.noel@example.com",
      login: {
        uuid: "94b2a570-3032-4cf3-9153-c7c6b548999a",
        username: "organicpeacock788",
        password: "ming",
        salt: "MQxD0C9r",
        md5: "7b3deecd3041c89077729b146f361262",
        sha1: "aa4033fb929071a4afd505be82e7f4b48f214f7a",
        sha256:
          "137231d5ea2aa4f6dab79386a80a9e71d6fe2fd430aea1c1f0dc7085739735f2",
      },
      dob: {
        date: "1957-05-17T00:07:53.440Z",
        age: 63,
      },
      registered: {
        date: "2017-08-31T19:18:34.992Z",
        age: 3,
      },
      phone: "075 993 84 07",
      cell: "077 885 82 80",
      id: {
        name: "AVS",
        value: "756.4920.2019.50",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/81.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
      },
      nat: "CH",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Lorenzo",
        last: "Adam",
      },
      location: {
        street: {
          number: 3844,
          name: "Rue de Bonnel",
        },
        city: "Roubaix",
        state: "Somme",
        country: "France",
        postcode: 64566,
        coordinates: {
          latitude: "-22.7994",
          longitude: "-7.5174",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "lorenzo.adam@example.com",
      login: {
        uuid: "f7f499cc-3ed3-442e-a5e7-1b9cc8e3d07f",
        username: "beautifulwolf487",
        password: "hotbox",
        salt: "TKFB6WIv",
        md5: "172a8f047e0345b646b1a76d30f6dfd8",
        sha1: "d96f373e23e4488582dd8fd006e2fb64d6166d27",
        sha256:
          "79adebc0fa6d15ffcfc0cf5d07183486ff9817514b9f26f34d84146ecea21fab",
      },
      dob: {
        date: "1988-02-19T08:15:18.780Z",
        age: 32,
      },
      registered: {
        date: "2006-02-14T23:46:44.638Z",
        age: 14,
      },
      phone: "02-18-50-81-91",
      cell: "06-14-59-37-21",
      id: {
        name: "INSEE",
        value: "1NNaN10785069 51",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/68.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Özsu",
        last: "Limoncuoğlu",
      },
      location: {
        street: {
          number: 845,
          name: "Vatan Cd",
        },
        city: "Trabzon",
        state: "Iğdır",
        country: "Turkey",
        postcode: 93886,
        coordinates: {
          latitude: "-37.8129",
          longitude: "-161.4778",
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo",
        },
      },
      email: "ozsu.limoncuoglu@example.com",
      login: {
        uuid: "412f8073-7016-47cd-9b98-7ec8571f6c3a",
        username: "bluewolf576",
        password: "knight1",
        salt: "PFa6GoRb",
        md5: "6bc33638472ad42b6d5240b2984ec7ec",
        sha1: "a12fff86afe197f90cd5300980fce16da0c1fe62",
        sha256:
          "0310c8b4fc10f17ea4488b9d83e6eb1dc09dab1a34a4c0117826b0ffa2ee5916",
      },
      dob: {
        date: "1946-02-06T13:18:15.331Z",
        age: 74,
      },
      registered: {
        date: "2007-01-23T14:12:26.885Z",
        age: 13,
      },
      phone: "(580)-557-4049",
      cell: "(683)-398-2195",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      },
      nat: "TR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Dwayne",
        last: "Carlson",
      },
      location: {
        street: {
          number: 6181,
          name: "Country Club Rd",
        },
        city: "Rockhampton",
        state: "Queensland",
        country: "Australia",
        postcode: 7970,
        coordinates: {
          latitude: "-29.7570",
          longitude: "-125.7309",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "dwayne.carlson@example.com",
      login: {
        uuid: "d91e3e22-78f5-4b32-b0bc-90af93edc92c",
        username: "bluegoose574",
        password: "tototo",
        salt: "c9ByHWWL",
        md5: "cf95fcb9713fc4627407d82a71a3d478",
        sha1: "85a3826d2a6e2988bcfbaa4ba99f2d339093856f",
        sha256:
          "f4a6140ebc0614e3a88b969e73adf0ebddc1adc1d9c66581bbbd0526f864dd8e",
      },
      dob: {
        date: "1994-01-02T15:15:47.310Z",
        age: 26,
      },
      registered: {
        date: "2004-02-15T07:39:49.697Z",
        age: 16,
      },
      phone: "01-1540-6215",
      cell: "0498-330-987",
      id: {
        name: "TFN",
        value: "770538218",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
      },
      nat: "AU",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Larry",
        last: "Black",
      },
      location: {
        street: {
          number: 1706,
          name: "The Avenue",
        },
        city: "Belfast",
        state: "County Down",
        country: "United Kingdom",
        postcode: "SU0A 4XS",
        coordinates: {
          latitude: "-74.8003",
          longitude: "172.0503",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "larry.black@example.com",
      login: {
        uuid: "cfea80e8-3b08-43e8-8409-d199c717fbc5",
        username: "sadfrog767",
        password: "sirius",
        salt: "RALniNT1",
        md5: "ab000e839d8f438ac50bca3d018ef77f",
        sha1: "33532daea1a929ec90a2cb0623daeb03a9a2c075",
        sha256:
          "1b592a1d31d4a57bfdb57a9aaacdc5f062b4659d622713f9af52d36fc80f5af3",
      },
      dob: {
        date: "1984-08-22T22:36:04.987Z",
        age: 36,
      },
      registered: {
        date: "2015-10-06T17:11:52.515Z",
        age: 5,
      },
      phone: "015396 76674",
      cell: "0757-677-953",
      id: {
        name: "NINO",
        value: "GS 58 20 18 D",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/54.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/54.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/54.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Mirko",
        last: "Gautier",
      },
      location: {
        street: {
          number: 3376,
          name: "Rue Abel",
        },
        city: "Rafz",
        state: "Basel-Landschaft",
        country: "Switzerland",
        postcode: 9787,
        coordinates: {
          latitude: "-28.8500",
          longitude: "170.9371",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "mirko.gautier@example.com",
      login: {
        uuid: "d31f8064-1392-4b7f-8f76-8cc9e358e1a2",
        username: "biggorilla646",
        password: "gremlin",
        salt: "C8Q4lqwO",
        md5: "7ddfd5b4c4dd592cd079b748276960d0",
        sha1: "14a642769b6c374fe2616c31399a89a675ce0750",
        sha256:
          "2fcb94bce83f78e2ec0aee2c15545055b5549694d7fe3cfec4c7ad3b020ec59d",
      },
      dob: {
        date: "1989-07-07T10:42:01.557Z",
        age: 31,
      },
      registered: {
        date: "2017-10-29T21:19:09.343Z",
        age: 3,
      },
      phone: "079 795 93 16",
      cell: "078 702 01 05",
      id: {
        name: "AVS",
        value: "756.0294.9296.59",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/8.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
      },
      nat: "CH",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Hortênsia",
        last: "Santos",
      },
      location: {
        street: {
          number: 2071,
          name: "Rua Bela Vista ",
        },
        city: "Rio Verde",
        state: "Pernambuco",
        country: "Brazil",
        postcode: 66242,
        coordinates: {
          latitude: "-54.0800",
          longitude: "24.5475",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "hortensia.santos@example.com",
      login: {
        uuid: "70b328fd-561f-4dbb-8085-c43dc869112d",
        username: "bluezebra234",
        password: "awful",
        salt: "n4j5Zrot",
        md5: "2049d8310e7f14f3d6bcb758024448a8",
        sha1: "f2bf353710327dc7fbcd387e479b01f2e1e8c39c",
        sha256:
          "002f6c9cbaea3b4234201c543937a0687196af6bd18d318d66488b6aa60446b4",
      },
      dob: {
        date: "1955-11-17T09:20:58.383Z",
        age: 65,
      },
      registered: {
        date: "2006-11-25T02:07:00.120Z",
        age: 14,
      },
      phone: "(09) 8778-5697",
      cell: "(75) 0859-5089",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/81.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
      },
      nat: "BR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Miro",
        last: "Ahonen",
      },
      location: {
        street: {
          number: 3414,
          name: "Hämeentie",
        },
        city: "Ilmajoki",
        state: "Finland Proper",
        country: "Finland",
        postcode: 27671,
        coordinates: {
          latitude: "-76.3922",
          longitude: "-109.6850",
        },
        timezone: {
          offset: "+5:45",
          description: "Kathmandu",
        },
      },
      email: "miro.ahonen@example.com",
      login: {
        uuid: "bb6932ab-ddb5-4bbc-825a-cfbe7bc272e5",
        username: "tinylion649",
        password: "1941",
        salt: "8NW8z933",
        md5: "dbf37d782e888ce02ad29eb998f6ddb4",
        sha1: "a40a66b804f5ac5756ebe7531f3e955e02d45b1c",
        sha256:
          "0ab27242a939edc18b459df1b9984097b6dfb22a049221d4b8a4d7d28ca32e22",
      },
      dob: {
        date: "1973-01-10T19:26:22.154Z",
        age: 47,
      },
      registered: {
        date: "2012-01-19T04:13:29.522Z",
        age: 8,
      },
      phone: "03-621-137",
      cell: "043-819-39-82",
      id: {
        name: "HETU",
        value: "NaNNA773undefined",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/86.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg",
      },
      nat: "FI",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Evelyn",
        last: "Lee",
      },
      location: {
        street: {
          number: 7011,
          name: "Te Rapa Road",
        },
        city: "Whanganui",
        state: "Waikato",
        country: "New Zealand",
        postcode: 92376,
        coordinates: {
          latitude: "-44.1771",
          longitude: "-109.0943",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "evelyn.lee@example.com",
      login: {
        uuid: "fc7531c8-8329-4607-8095-dbd01b29e447",
        username: "angryladybug338",
        password: "bigballs",
        salt: "BK9i2FWY",
        md5: "34767b62df7e3fdc1813675810d2c5c7",
        sha1: "4bfe7bc643dd0137726654173c410224bd56b5b7",
        sha256:
          "0bbfcdb6dae643403900c33194152904a089a67416d96d14a0f57d177bc3afbb",
      },
      dob: {
        date: "1969-06-29T19:20:16.161Z",
        age: 51,
      },
      registered: {
        date: "2008-05-26T12:13:24.113Z",
        age: 12,
      },
      phone: "(051)-808-9591",
      cell: "(873)-486-6827",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/49.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Brandie",
        last: "Carroll",
      },
      location: {
        street: {
          number: 8904,
          name: "Elgin St",
        },
        city: "Sterling Heights",
        state: "Pennsylvania",
        country: "United States",
        postcode: 15661,
        coordinates: {
          latitude: "-22.5532",
          longitude: "-147.2067",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "brandie.carroll@example.com",
      login: {
        uuid: "cd55c0ba-ab75-48ab-bcd9-8fde5558e149",
        username: "organicmouse915",
        password: "japanes",
        salt: "a7SDfJdY",
        md5: "568f0ccc41d17eefa23347aa5db5bac0",
        sha1: "d4c0b6a58d2e8d9c83c96d7c4df4f3507d4ef3b7",
        sha256:
          "cef44d9295835c280f2cac388feef866dae1b16880837fb470247ccdcb72f288",
      },
      dob: {
        date: "1947-04-20T15:48:22.167Z",
        age: 73,
      },
      registered: {
        date: "2015-09-23T13:29:43.768Z",
        age: 5,
      },
      phone: "(515)-331-4711",
      cell: "(659)-279-1077",
      id: {
        name: "SSN",
        value: "742-16-2215",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/54.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Mademoiselle",
        first: "Vivienne",
        last: "Arnaud",
      },
      location: {
        street: {
          number: 6177,
          name: "Rue Principale",
        },
        city: "Bellikon",
        state: "Luzern",
        country: "Switzerland",
        postcode: 9009,
        coordinates: {
          latitude: "-59.4821",
          longitude: "55.1580",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "vivienne.arnaud@example.com",
      login: {
        uuid: "c79c06b3-d819-4e98-92ed-9ffb33578bac",
        username: "brownswan156",
        password: "rocks",
        salt: "vHgSKAA9",
        md5: "57289c5d1a003f5cbc5e57a5e38d1123",
        sha1: "5a31d65ac37d3953a29c9f32d85060ee964baefe",
        sha256:
          "6348cbf877186b76ee29c5448b36f5ce6ad714192a529e46b61c18ad894207b4",
      },
      dob: {
        date: "1993-05-30T03:44:08.488Z",
        age: 27,
      },
      registered: {
        date: "2007-08-29T01:03:48.759Z",
        age: 13,
      },
      phone: "075 107 79 98",
      cell: "079 734 21 03",
      id: {
        name: "AVS",
        value: "756.4043.1155.99",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/64.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
      },
      nat: "CH",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Friedhold",
        last: "Wollny",
      },
      location: {
        street: {
          number: 8120,
          name: "Kirchweg",
        },
        city: "Jerichower Land",
        state: "Thüringen",
        country: "Germany",
        postcode: 37316,
        coordinates: {
          latitude: "42.9429",
          longitude: "147.2105",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "friedhold.wollny@example.com",
      login: {
        uuid: "95a3e422-2738-4052-9faf-d43d0fdbc107",
        username: "whiteostrich326",
        password: "larson",
        salt: "xC9ljo4z",
        md5: "d7504719b85c5dce8666abc60b29b011",
        sha1: "8d4d2e620afcd24dd23e33bea3c079631dcfb57c",
        sha256:
          "7f1ec4df9b0ddebbcbb3fb3b83eca70e0ba4f1f42714b1b69d149e11d33b6be1",
      },
      dob: {
        date: "1964-08-17T17:13:06.348Z",
        age: 56,
      },
      registered: {
        date: "2007-07-28T07:38:40.068Z",
        age: 13,
      },
      phone: "0237-9646411",
      cell: "0171-4874219",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/31.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
      },
      nat: "DE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Lewis",
        last: "Newman",
      },
      location: {
        street: {
          number: 6265,
          name: "Station Road",
        },
        city: "Westport",
        state: "Longford",
        country: "Ireland",
        postcode: 97685,
        coordinates: {
          latitude: "71.9066",
          longitude: "60.0885",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "lewis.newman@example.com",
      login: {
        uuid: "849be4b3-b9d3-402e-a34b-5d55a137fae3",
        username: "sadsnake269",
        password: "badboy",
        salt: "8Pbc9Ggh",
        md5: "b096c070d83efe5fbb49f7ab8ba5eb62",
        sha1: "49e4f5ba3b1b7da45f8f5fb19227ad3169b4741f",
        sha256:
          "6cb6df899229fc7aa5968ff5ece53dbc5fac37d3b3a5167270da08ab289d1a66",
      },
      dob: {
        date: "1987-09-30T17:43:32.034Z",
        age: 33,
      },
      registered: {
        date: "2002-09-22T06:25:21.383Z",
        age: 18,
      },
      phone: "071-575-6353",
      cell: "081-102-8252",
      id: {
        name: "PPS",
        value: "5035020T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/88.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
      },
      nat: "IE",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Melinda",
        last: "Bergheim",
      },
      location: {
        street: {
          number: 7844,
          name: "Stjerneblokkveien",
        },
        city: "Tornes",
        state: "Finnmark - Finnmárku",
        country: "Norway",
        postcode: "0754",
        coordinates: {
          latitude: "-40.7297",
          longitude: "-47.5534",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "melinda.bergheim@example.com",
      login: {
        uuid: "a6169de1-ffcf-48f5-aacb-03031903f6e4",
        username: "redgoose424",
        password: "celica",
        salt: "9TEJXrEl",
        md5: "a8454b91021263bacb4b19c91c8d4b78",
        sha1: "918838df33d14b48ff61b1f79f8ae6d70bbaf531",
        sha256:
          "9dbd88476ed4ff8d55d1e259ae596c1efc2093b9ff8a82a4e54b5d2c480bb440",
      },
      dob: {
        date: "1950-05-15T17:20:49.227Z",
        age: 70,
      },
      registered: {
        date: "2011-02-04T13:12:52.369Z",
        age: 9,
      },
      phone: "80689781",
      cell: "40145515",
      id: {
        name: "FN",
        value: "15055032057",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/83.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/83.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/83.jpg",
      },
      nat: "NO",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Auguste",
        last: "Mathieu",
      },
      location: {
        street: {
          number: 1423,
          name: "Rue des Chartreux",
        },
        city: "Colombes",
        state: "Guadeloupe",
        country: "France",
        postcode: 42717,
        coordinates: {
          latitude: "81.8530",
          longitude: "43.8556",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "auguste.mathieu@example.com",
      login: {
        uuid: "8f1b6e55-31ca-493e-aed4-3412f234d0fe",
        username: "goldenrabbit332",
        password: "slayer1",
        salt: "1gYPPX81",
        md5: "e6a9588a4b6953060c145ed9b09af5e3",
        sha1: "341e8820180712b0b1ce38c82899fc05d7d1d9be",
        sha256:
          "c919c455139a64693b80bf53aeb87ee8b41654cf179cf084783b249a0f9c6cec",
      },
      dob: {
        date: "1984-12-27T15:59:22.830Z",
        age: 36,
      },
      registered: {
        date: "2004-02-26T06:22:01.273Z",
        age: 16,
      },
      phone: "04-89-84-94-93",
      cell: "06-97-87-14-50",
      id: {
        name: "INSEE",
        value: "1NNaN37548385 10",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Aaliyah",
        last: "Chen",
      },
      location: {
        street: {
          number: 9570,
          name: "Mt Eden Road",
        },
        city: "Christchurch",
        state: "Manawatu-Wanganui",
        country: "New Zealand",
        postcode: 96487,
        coordinates: {
          latitude: "52.4096",
          longitude: "96.2520",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "aaliyah.chen@example.com",
      login: {
        uuid: "d99fbb81-c8f8-40ee-b290-b54223facf6f",
        username: "blackmeercat777",
        password: "username",
        salt: "YxBSOIEI",
        md5: "6b5fb4dd20d1917ce06d73c540eb2958",
        sha1: "6035b345a1014dac61a5904f163950d5bb1f40b8",
        sha256:
          "e49c4094401386eb8a427552920b2b8ccb859161252e2ddff0235fee8d356580",
      },
      dob: {
        date: "1975-05-27T08:42:52.871Z",
        age: 45,
      },
      registered: {
        date: "2013-09-25T16:05:03.285Z",
        age: 7,
      },
      phone: "(252)-130-8604",
      cell: "(778)-175-4490",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/36.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Jacob",
        last: "Lowe",
      },
      location: {
        street: {
          number: 5871,
          name: "W Dallas St",
        },
        city: "Las Vegas",
        state: "Tennessee",
        country: "United States",
        postcode: 79781,
        coordinates: {
          latitude: "67.7771",
          longitude: "137.0017",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "jacob.lowe@example.com",
      login: {
        uuid: "0e9988d2-b322-45c6-92f5-fd3bc5de4614",
        username: "blackmouse690",
        password: "pickles",
        salt: "GqPbidFy",
        md5: "023dac919cd69fac5608cd235a0ee993",
        sha1: "d988b1061a6a8ed6983dc7a48a332a7230fde1d5",
        sha256:
          "70aa7e2d0abfe9d4c73f77bef023d6fa9fcafc6a2d58b9f7a0e682cfaa3301a2",
      },
      dob: {
        date: "1985-06-02T05:14:06.245Z",
        age: 35,
      },
      registered: {
        date: "2016-07-15T04:40:10.674Z",
        age: 4,
      },
      phone: "(001)-039-2078",
      cell: "(767)-686-1239",
      id: {
        name: "SSN",
        value: "023-39-4127",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/29.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/29.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Nellie",
        last: "Meyer",
      },
      location: {
        street: {
          number: 6995,
          name: "Mockingbird Hill",
        },
        city: "Gladstone",
        state: "South Australia",
        country: "Australia",
        postcode: 4350,
        coordinates: {
          latitude: "36.1972",
          longitude: "131.2344",
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "nellie.meyer@example.com",
      login: {
        uuid: "fde79f2d-8cd2-4074-b581-91c1de8e3db6",
        username: "happyfish819",
        password: "citadel",
        salt: "5UeXXcyi",
        md5: "b858414dd508dbf8ae013ef42defec2a",
        sha1: "f1787484496b6ab4c14a53369472c87a820babad",
        sha256:
          "c4df8b7b04e60826e76ca8d6b5d271f093b414f21ac805846dfe7cbe90a14cb9",
      },
      dob: {
        date: "1993-02-06T07:27:14.192Z",
        age: 27,
      },
      registered: {
        date: "2010-02-23T06:08:35.234Z",
        age: 10,
      },
      phone: "05-9121-7021",
      cell: "0485-449-726",
      id: {
        name: "TFN",
        value: "043076500",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/38.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/38.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
      },
      nat: "AU",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Rasmus",
        last: "Rajala",
      },
      location: {
        street: {
          number: 252,
          name: "Myllypuronkatu",
        },
        city: "Marttila",
        state: "Central Finland",
        country: "Finland",
        postcode: 85375,
        coordinates: {
          latitude: "-10.3705",
          longitude: "122.5248",
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)",
        },
      },
      email: "rasmus.rajala@example.com",
      login: {
        uuid: "aae4cfb2-2f7e-44dc-90fb-7190c79ae0c8",
        username: "goldenfrog992",
        password: "fantasy",
        salt: "Ij6DxerQ",
        md5: "62bb7e9897b89e7ee2dc61d995c0db9c",
        sha1: "d5c599de25053fa41edd5dde515940ab715b45a4",
        sha256:
          "bd3c1ce4542ae4098aaa1204ec195ed96d79c2143970b680b764a3f24560e716",
      },
      dob: {
        date: "1951-02-01T14:18:47.785Z",
        age: 69,
      },
      registered: {
        date: "2004-10-18T08:26:04.445Z",
        age: 16,
      },
      phone: "06-378-157",
      cell: "043-782-02-71",
      id: {
        name: "HETU",
        value: "NaNNA669undefined",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/27.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg",
      },
      nat: "FI",
    },
  ],
  info: {
    seed: "5f95601362b4e57c",
    results: 20,
    page: 1,
    version: "1.3",
  },
};

const newuser = user.users.map((user) => {
  return {
    username: user.login.username,
    firstName: user.name.first,
    lastName: user.name.last,
    profileImageUrl: user.picture.large,
    isFavorite: user.name.first.length > 6 ? true : false,
  };
});

user;
const data = JSON.stringify(newuser);
fs.writeFile("user.json", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
