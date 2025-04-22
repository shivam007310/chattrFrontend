import React, { memo } from 'react'

const MessageComponent = ({ message, user }) => {

  const { sender, content, attachments=[], createdAt } = message
  const isSenderUser = sender?._id === user._id
  console.log("MessageComponent", message);
  console.log("user", user);
  console.log("isSenderUser", isSenderUser);
  console.log("sender", sender);
  
  
  return (
    <div
    style={{
      alignSelf: isSenderUser ? "flex-end" : "flex-start",
    }}
    >MessageComponent</div>
  )
}

export default memo(MessageComponent)