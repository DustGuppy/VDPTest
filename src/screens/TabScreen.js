import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title, Thumbnail } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left/>
            <Body>
              <Title>VDP</Title>
            </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Merchant Locator">
            <Tab1 />
          </Tab>
          <Tab heading="Merchant Measurement">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}