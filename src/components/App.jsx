import { GlobalStyles } from 'styles/GlobalStyles/globalStyles.styled';
import { TweetList } from './TweetList/TweetList';

export const App = () => {
  return (
    <>
      <TweetList />
      <GlobalStyles />
    </>
  );
};
