export const Samplechats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    _id: "1",
    name: "Chat 1",
    groupChat: false,
    members: ["User 1", "User 2"],
  },
  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
    ],
    _id: "2",
    name: "Chat 2",
    groupChat: false,
    members: ["User 1", "User 2"],
  },
];

export const Sampleusers = [
  {
    _id: "1",
    name: "User 1",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    email: "user1@gmail.com",
  },
  {
    _id: "2",
    name: "User 2",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
  },
];

export const SampleNotifications = [
  {
    _id: "1",
    sender: {
      name: "User 1",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  },
  {
    _id: "2",
    sender: {
      name: "User 2",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  },
];

export const SampleMessages = [
  {
    attachments: [{
      public_id:"asdas",
      url:"https://www.w3schools.com/howto/img_avatar.png"
    }],
    content: "Hello",
    sender: {
      _id: "adslkjfads",
      name: "User 1",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    chat:"chatId",
    createdAt: "2023-10-01T12:00:00Z",
  },
  {
    attachments: [{
      public_id:"asdsdas",
      url:"https://www.w3schools.com/howto/img_avatar.png"
    }],
    content: "Hallalluya",
    sender: {
      _id: "asdfdfadf",
      name: "User 2",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    chat:"chat4Id",
    createdAt: "2023-10-01T12:00:00Z",
  }
]