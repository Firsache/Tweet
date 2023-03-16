import users from 'components/db/users.json';
import { Tweet } from 'components/Tweet/Tweet';
import { TweetsList, TweetItem } from './TweetList.styled';

export const TweetList = () => {
  return (
    <TweetsList>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <TweetItem key={id}>
          <Tweet
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        </TweetItem>
      ))}
    </TweetsList>
  );
};
