function Message(message){
  return(
    <>
      <div style={message.clr}>
        {message.userName}
      </div>
    </>
  )
}

export default Message;