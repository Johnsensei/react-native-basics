import React, { Component} from "react";
import { Modal, StyleSheet, Text, View, Button } from 'react-native';
import { useState } from "react/cjs/react.development";

const ModalComponent = () => {

    const [modalState, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modalState);
    }

    return(
        <View>
            <Modal
                visible={modalState}
                animationType='slide'
            >
                <View style={{marginTop: 50}}>
                    <Text>The Modal</Text>
                    <Button
                        title='Close Modal'
                        onPress={handleModal}
                    />
                </View>
            </Modal>
            <Button
                title='Open Modal'
                onPress={handleModal}
            />
        </View>
    )

}

const styles = StyleSheet.create({

})

export default ModalComponent;