let db = {
  users: [
    {
      userId: "username", // string, document ID of the user (copied from the document reference)
      email: "user@email.com",
      userHandle: "username", // string, username that is == to the userId (it's the reference call)
      createdAt: "2019-03-1T10:59:52.789Z", // string - new Date().toISOString()
      imageUrl: "image/31231273127318932.jpg", // string, profile picture that user uploaded
      bio: "Hello! I am super nice person and I study CompSci!", // string
      website: "https://username.com", // string
      location: "Zagreb, Hrvatska" // string
    }
  ],
  events: [
    {
      eventId: "mile-i-milena", // string, document ID of the event (copied from the document reference)
      authorId: "hsjhfaofsasdjsk2hfajsdh", // string, document ID of the user that created this event
      createdAt: "23.2.2019. 17:54", // string - new Date().toISOString()
      name: "Mile i Milena - Vjencanje", // string, the actual name of the event
      slug: "mile-i-milena", // string, to be used as part of URL and as eventId
      type: "Wedding", // string
      location: "Zagreb", // string
      address: "Crveni pupoljci 17, 10000 Zagreb", //string
      eventDate: "23.2.2019. 17:54", // string - new Date().toISOString()
      invitedGuests: 0, // Number
      confirmedGuests: 0 // Number
    }
  ],
  guests: [
    {
      guestId: "h3423kfajs34k2n4asd", // string, document ID of the guest (copied from the document reference)
      eventId: "hwskdajk231ksjdan13", // string, document ID of the event that this guest is attending
      authorId: "hwskdajk2asdasd2133", // string, document ID of the user that created/added this guest
      firstName: "Domagoj", // string
      lastName: "Siljeg", // string
      phone: "+385 98 490 231", // string
      replied: true, // boolean
      createdAt: "23.2.2019. 17:54", // string - new Date().toISOString()
      updatedAt: "24.2.2020. 12:43", // string - new Date().toISOString()
      repliedAt: "23.2.2019. 17:54", // string - new Date().toISOString()
      status: "yes | no | maybe", // string
      needsRoom: true, // boolean
      hotelId: "h3u324jsafji32432l", //string, document ID of the Hotel that is assigned to this guest
      adults: 2, // number
      kids: 0 // number
    }
  ],

  invitations: [
    {
      invitationId: "hahsjdashjdhasjd23h", // string, document ID of the response (copied from the document reference)
      guestId: "hasjdahsjdh2h3j2asdsa", // string. document ID of the guest that is responding
      repliedAt: "23.2.2019. 17:54", // string - new Date().toISOString()
      status: "yes | no | maybe", // string
      needsRoom: true, // boolean
      adults: 2, // number
      kids: 0 // number
    }
  ],

  status: [
    {
      yes: "Dolazim", // string
      no: "Ne dolazim", // string
      maybe: "Mozda" //
    }
  ],

  hotels: [
    {
      hotelId: "jashrkwhkasfhaskhhkasd", // string, document ID of the hotel (copied from the document reference)
      name: "Panorama Hotel", // string
      address: "Tresnjevka 17, Zagreb", // string
      googleMaps: "https://maps.google.com/h312h31jshada" // string-url
    }
  ]
};
