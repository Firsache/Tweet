import users from 'components/db/users.json';
import { Tweet } from 'components/Tweet/Tweet';

export const TweetList = () => {
  return (
    <ul>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <li key={id}>
          <Tweet
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        </li>
      ))}
    </ul>
  );
};
