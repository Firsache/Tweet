import { parseDataFromLS, saveToLS } from 'helpers/localStorage';
import { useEffect, useRef, useState } from 'react';
import {
  Container,
  AvatarImg,
  Button,
  EllipceImg,
  TweetInfo,
  Divider,
} from './Tweet.styled';

const STORAGE_FOLLOWERS_KEY = 'followersAmount';
const STORAGE_IS_FOLLOWING_KEY = 'isFollowingAmount';

export const Tweet = ({ id, user, tweets, followers, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(
    () => parseDataFromLS(STORAGE_IS_FOLLOWING_KEY)[id] ?? false
  );
  const [currentFollowers, setCurrentFollowers] = useState(
    () => parseDataFromLS(STORAGE_FOLLOWERS_KEY)[id] ?? followers
  );

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const followersData = parseDataFromLS(STORAGE_FOLLOWERS_KEY);
    followersData[id] = currentFollowers;

    saveToLS(STORAGE_FOLLOWERS_KEY, followersData);
  }, [currentFollowers, id]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const isFollowingData = parseDataFromLS(STORAGE_IS_FOLLOWING_KEY);
    isFollowingData[id] = isFollowing;

    saveToLS(STORAGE_IS_FOLLOWING_KEY, isFollowingData);
  }, [id, isFollowing]);

  const handleFollowBtnClick = () => {
    if (isFollowing) {
      setCurrentFollowers(+currentFollowers - 1);
      setIsFollowing(false);
    }
    if (!isFollowing) {
      setCurrentFollowers(+currentFollowers + 1);
      setIsFollowing(true);
    }
  };
  return (
    <Container>
      <>top</>
      <Divider />
      <EllipceImg>
        <AvatarImg src={avatar} alt={user} />
      </EllipceImg>
      <TweetInfo>
        <p>{tweets} tweets</p>
        <p>{currentFollowers} followers</p>
      </TweetInfo>

      <Button onClick={handleFollowBtnClick} isFollowing={isFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Container>
  );
};
