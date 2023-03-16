import styled from 'styled-components';

export const AvatarImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  /* border: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff; */
`;
export const EllipceImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Button = styled.button`
  padding: 14px;
  width: 196px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  text-align: center;
  text-transform: uppercase;

  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5cd3a8' : '#ebd8ff'};
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  outline: none;
  transition: transform 200ms ease-in-out;
  &:hover,
  &:focus,
  &:active {
    transform: translateY(-2px);
  }
`;
