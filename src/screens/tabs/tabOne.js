import React, { Component } from "react";
import {View, Text, StyleSheet } from "react-native";
import { getMerchantLocator } from "../../components/merchantlocator";
import {Alert} from "react-native";

export default class Tab1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      data: null
    }
  }

  componentDidMount(){
    getMerchantLocator().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render(){
    console.log(this.state.data);
      return(
          <View style={styles.container}>
              <Text>Merchant Locator</Text>
          </View>
      )
  }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });