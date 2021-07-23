import React, { Component} from "react";
import { StyleSheet, Text, View } from 'react-native';

class Nav extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
    return(
        <View style={styles.nav}>
            <Text style={{color: 'white'}}>
                {this.props.nameOfApp}
            </Text>
            <Text style={{color: 'white'}}>{this.props.children}</Text>
        </View>
    );}
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'purple',
        alignItems: 'center',
        padding: 40,
        width: '100%'
    }
});

export default Nav;