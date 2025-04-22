import React, { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponent";
import { orange } from "../components/constants/color";
import FileMenu from "../components/dialogs/FileMenu";
import { SampleMessages } from "../components/constants/sample";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  name: "John Doe",
  _id: "asdfdfadf",
  image: "https://via.placeholder.com/150",
};

const Chat = () => {
  const containerRef = useRef(null);
  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing="border-box"
        padding="1rem"
        spacing="1rem"
        height={"90%"}
        bgcolor={"#f5f5f5"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {SampleMessages.map((message) => (
          <MessageComponent key={message.chat} message={message} user={user} />
        ))}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1rem",
              backgroundColor: orange,
              rotate: "30deg",
              color: "white",
              "&:hover": {
                backgroundColor: "error.dark",
                opacity: 0.8,
              },
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type your message here..." />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: orange,
              rotate: "-30deg",
              color: "white",
              marginLeft: "1rem",
              "&:hover": {
                backgroundColor: "error.dark",
                opacity: 0.8,
              },
              padding: "0.5rem",
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </Fragment>
  );
};

export default AppLayout()(Chat);
