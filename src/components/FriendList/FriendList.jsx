import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
