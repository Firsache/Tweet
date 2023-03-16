import { GlobalStyles } from 'styles/GlobalStyles/globalStyles.styled';
import { TweetList } from './TweetList/TweetList';
import { Wrapper } from './TweetList/TweetList.styled';

export const App = () => {
  return (
    <Wrapper>
      <TweetList />
      <GlobalStyles />
    </Wrapper>
  );
};
