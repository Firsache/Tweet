import { useEffect, useRef, useState } from 'react';
import topImg from 'img/top.png';
import logo from 'img/Logo.png';
import {
  Container,
  LogoImg,
  AvatarImg,
  Button,
  EllipceImg,
  TweetInfo,
  Divider,
  Bottom,
  TopImg,
} from './Tweet.styled';

import { addComa } from 'helpers/addComaToNum';
import { parseDataFromLS, saveToLS } from 'helpers/localStorage';

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
  const followersWithComa = addComa(currentFollowers);
  return (
    <Container>
      <LogoImg src={logo} alt="logo image" />
      <TopImg src={topImg} alt="background image" />
      <Divider />
      <EllipceImg>
        <AvatarImg src={avatar} alt={user} />
      </EllipceImg>
      <Bottom>
        <TweetInfo>
          <p>{tweets} tweets</p>
          <p>{followersWithComa} followers</p>
        </TweetInfo>

        <Button onClick={handleFollowBtnClick} isFollowing={isFollowing}>
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </Bottom>
    </Container>
  );
};
