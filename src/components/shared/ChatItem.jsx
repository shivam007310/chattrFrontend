import React, { memo } from "react";
import { Link } from "../styles/StyledComponent";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name = "",
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeletechat,
}) => {
  return (
    <Link
     sx={{
      padding: "0",
     }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeletechat(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
          color: sameSender ? "white" : "unset",
          backgroundColor: sameSender ? "black" : "unset",
          position: "relative",
        }}
      >
        {/*Avatar Card */}

        <AvatarCard avatar={avatar}  />

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert}New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
