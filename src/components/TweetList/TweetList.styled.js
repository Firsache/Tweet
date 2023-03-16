import styled from 'styled-components';

export const Wrapper = styled.div`
  /* margin: 32px auto; */
  margin: 32px 64px;
  width: 100%;
`;
export const TweetsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TweetItem = styled.li`
  position: relative;

  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
