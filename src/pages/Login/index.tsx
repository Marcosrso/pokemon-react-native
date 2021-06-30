import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
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
  const onGoogleButtonPress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

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
        <SignInButton
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }>
          <SignInButtonLabel>Entrar com Google</SignInButtonLabel>
        </SignInButton>
      </Container>
    </SafeAreaView>
  );
}
