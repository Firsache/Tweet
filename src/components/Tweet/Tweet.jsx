import { useEffect, useRef, useState } from 'react';

export const Tweet = ({ id, user, tweets, followers, avatar }) => {
  const initialUserFollowers = followers;
  const STORAGE_FOLLOWERS_KEY = 'followersAmount';
  const STORAGE_IS_FOLLOWING_KEY = 'isFollowingAmount';

  const parsedFollowers = JSON.parse(
    localStorage.getItem(STORAGE_FOLLOWERS_KEY)
  );
  const parsedIsFollowing = JSON.parse(
    localStorage.getItem(STORAGE_IS_FOLLOWING_KEY)
  );

  const [isFollowing, setIsFollowing] = useState(
    () => parsedIsFollowing[id] ?? false
  );

  const [currentFollowers, setCurrentFollowers] = useState(
    () => parsedFollowers[id] ?? initialUserFollowers
  );
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const followersData = parsedFollowers;
    followersData[id] = currentFollowers;

    localStorage.setItem(STORAGE_FOLLOWERS_KEY, JSON.stringify(followersData));

    const isFollowingData = parsedIsFollowing;
    isFollowingData[id] = isFollowing;

    localStorage.setItem(
      STORAGE_IS_FOLLOWING_KEY,
      JSON.stringify(isFollowingData)
    );
  }, [currentFollowers, id, isFollowing, parsedFollowers, parsedIsFollowing]);

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
      <img src={avatar} alt={user} width="62" />
      <p>{tweets} tweets</p>
      <p>{currentFollowers} followers</p>
      <button onClick={handleFollowBtnClick} isFollowing={isFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </>
  );
};
