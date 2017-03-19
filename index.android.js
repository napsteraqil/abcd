import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


import {
  AppRegistry,Text, Image
} from 'react-native';
export default class mecon extends Component {
    render() {
        return (
            <Container>

              <Image
                  style={{width: '100%', height: '40%'}}
                  source={require('./m.jpg')}
                >
                    <Text style={{fontFamily: 'Lovelo_Line Bold', fontWeight: 'bold', textAlign: 'center', color: '#DE1B1B', fontSize: 49, marginTop: 160, marginBottom: -10}}> MECON</Text>
                    <Text style={{fontFamily: 'Roboto', textAlign: 'center', color: '#DE1B1B', fontSize: 25, marginTop: 0}}> P R O J E C T M A N A G E R </Text>

                </Image>

                <Content>

                </Content>

                <Footer>
                    <FooterTab>
                        <Button full style={{backgroundColor: '#DE1B1B'}}>
                            <Text style={{color: '#FFFFFF',fontFamily: 'Lovelo',fontSize: 20}}>Sign in</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
AppRegistry.registerComponent('mecon', () => mecon);
