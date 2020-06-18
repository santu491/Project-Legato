import React,{ Component } from 'react';
import { View, Text,StyleSheet } from 'react-native'

const UserScreen =(props)=>{
    const { userName } = props.route.params
        return (
            <View style={styles.container}>
                <Text style={styles.user}>{`\"${userName}\"`} is successfully loggedin</Text>
            </View>
        )
    }

export default UserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    user:{
        fontSize:21,
        color:"red"

    }

})