import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItems = ({items}) => {

    return(
        items.map((item) => (
            <View style={styles.listItems}>
            <Text>
                {item}
            </Text>
        </View>
        ))
        
    );
}

const styles = StyleSheet.create({
    listItems: {
        backgroundColor: 'grey',
        alignItems: 'center',
        padding: 10,
        marginTop: 5,
        width: '100%'
    },
});

export default ListItems;