import React from 'react';
import { Button } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { authorize } from './LoginLogic';
import {
  LayoutContainer,
  Header,
  Content,
  Footer,
} from '../../component/Layout';
import Banner from './banner.png';
import {
  LoginWrapper,
  BannerContainer,
  Image,
  TextContent,
  Text,
} from './Login.styled';

function handleClickLogin() {
  authorize();
}

export default function Login() {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <LoginWrapper>
          <BannerContainer>
            <Image src={Banner} alt="spotifood banner" />
          </BannerContainer>
          <TextContent>
            <Text>
              <FormattedMessage id="login.message" />
            </Text>
            <Button color="red" onClick={handleClickLogin}>
              <FormattedMessage id="login.on.spotify" />
            </Button>
          </TextContent>
        </LoginWrapper>
      </Content>
      <Footer />
    </LayoutContainer>
  );
}
