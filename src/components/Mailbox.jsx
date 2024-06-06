const Mailbox = ({ username, messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {(messages.length > 0 && messages.length !==1 )&& (
        <p>You have {messages.length} unread messages</p>
      )}
      {messages.length === 1 && (
        <p>You have {messages.length} unread messages</p>
      )}
      {messages.length === 3 ? (
        <p>There are more than 2 messages</p>
      ) : (
        <p>There are less than 2 messages</p>
      )  }
    </>
  );
};

export default Mailbox