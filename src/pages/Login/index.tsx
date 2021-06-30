import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {
  Container,
  BannerWrapper,
  BannerImage,
  TitleText,
  DescriptionText,
  SignInButton,
  SignInButtonLabel,
} from './styles';

export default function LoginPage() {
  return (
    <SafeAreaView>
      <Container>
        <BannerWrapper>
          <BannerImage
            source={require('../../assets/images/banner.png')}
            resizeMode="contain"
          />
        </BannerWrapper>
        <TitleText>
          <Text style={{fontWeight: 'bold'}}>Find </Text>
          <Text>all your favorite </Text>
          <Text style={{fontWeight: 'bold'}}>Pokemon</Text>
        </TitleText>
        <DescriptionText>
          You can know the type of Pokemon, it's strengths, disadvantages and
          abilities.
        </DescriptionText>
        <SignInButton onPress={() => console.log('Click')}>
          <SignInButtonLabel>Entrar com Google</SignInButtonLabel>
        </SignInButton>
      </Container>
    </SafeAreaView>
  );
}
