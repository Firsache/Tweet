import { loadFromLS, saveToLS } from 'helpers/localStorage';
import { useEffect, useRef, useState } from 'react';
import { AvatarImg, Button, EllipceImg } from './Tweet.styled';

export const Tweet = ({ id, user, tweets, followers, avatar }) => {
  const STORAGE_FOLLOWERS_KEY = 'followersAmount';
  const STORAGE_IS_FOLLOWING_KEY = 'isFollowingAmount';

  const parsedFollowers = loadFromLS(STORAGE_FOLLOWERS_KEY);
  const parsedIsFollowing = loadFromLS(STORAGE_IS_FOLLOWING_KEY);

  const [isFollowing, setIsFollowing] = useState(
    () => parsedIsFollowing[id] ?? false
  );

  const [currentFollowers, setCurrentFollowers] = useState(
    () => parsedFollowers[id] ?? followers
  );

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const followersData = parsedFollowers;
    followersData[id] = currentFollowers;

    saveToLS(STORAGE_FOLLOWERS_KEY, followersData);
  }, [currentFollowers, id, parsedFollowers]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const isFollowingData = parsedIsFollowing;
    isFollowingData[id] = isFollowing;

    saveToLS(STORAGE_IS_FOLLOWING_KEY, isFollowingData);
  }, [id, isFollowing, parsedIsFollowing]);

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
    <>
      <EllipceImg>
        <AvatarImg src={avatar} alt={user} />
      </EllipceImg>

      <p>{tweets} tweets</p>
      <p>{currentFollowers} followers</p>
      <Button onClick={handleFollowBtnClick} isFollowing={isFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </>
  );
};
