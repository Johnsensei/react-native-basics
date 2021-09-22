import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const ListItems = ({items, remove}) => {

    return(
        items.map((item, i) => (
            <Pressable
                onPress={() => remove(i)}
                //onPress={() => alert('Pressed')}
                //onLongPress={() => alert('Long pressed')}
                //delayLongPress={5000}
                // onPressIn={() => alert('Pressed In')}
                // onPressOut={() => alert('Pressed Out')}
            >
                <View style={styles.listItems} key={item}>
                    <Text>
                        {item}
                    </Text>
                </View>
            </Pressable>
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