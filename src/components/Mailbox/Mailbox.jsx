// const Mailbox = ({ username, messages }) => {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
//     </>
//   );
// };

//Тернарний оператор
//У JSX вираз обгортається в {}, щоб відобразити його результат.
{
  /* <div>{умова ? вміст_якщо_умова_true : вміст_якщо_умова_false}</div>; */
}
// const Mailbox = ({ name, unreadMessages }) => {
//   return (
//     <div>
//       <p>Hello {name}</p>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages`
//           : "No unread messages"}
//       </p>
//     </div>
//   );
// };

// const Mailbox = ({ username, messages }) => {
//   return (
//     <div>
//       <p>Hello {username}</p>
//       {messages.length > 0 ? (
//         <div>
//           <p>You have {messages.length} unread messages</p>
//           <MessageList messages={messages} />
//         </div>
//       ) : (
//         <p>No unread messages</p>
//       )}
//     </div>
//   );
// };

// export default Mailbox;
