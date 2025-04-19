import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";
import React from "react";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "1",
      count: 0,
    },
  ],
  handleDeletechat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((chat, index) => {
        const { avatar, name, _id, groupChat, members } = chat;

        const newMessageAlert = newMessagesAlert?.find(
          (alert) => alert.chatId === _id
        );

        const isOnline = members?.some((member) => onlineUsers?.includes(_id));

        return (
          <ChatItem
            newMessageAlert={newMessageAlert?.count}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}

            sameSender={chatId === _id}
            key={_id}
            index={index}
            handleDeletechat={handleDeletechat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
