import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${props => props.theme.colors.primary.main};
  height: 100%;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const BannerWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const BannerImage = styled.Image`
  width: 100%;
  height: 275px;
`;

const TitleText = styled.Text`
  font-size: 52px;
  text-align: center;
  margin-bottom: 22px;
`;

const DescriptionText = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 22px;
`;

const SignInButton = styled.TouchableOpacity`
  padding: 20px 40px;
  border-radius: 20px;
  background-color: white;
  width: 100%;
`;

const SignInButtonLabel = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: black;
`;

export {
  Container,
  BannerWrapper,
  BannerImage,
  TitleText,
  DescriptionText,
  SignInButton,
  SignInButtonLabel,
};
