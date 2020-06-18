import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Alert } from 'react-native'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: "",
        }
    }
    submit = () => {
        let { userName, password } = this.state
        if (userName === "") {
            Alert.alert("Enter userName ..!")

        }
        else if (password === "") {
            Alert.alert("Enter  Password...!")
        }
        else {
            Alert.alert("login success...!",
                null,
                [{
                    text: "OK",
                    onPress: () => this.props.navigation.navigate('UserScreen', { userName: this.state.userName, password: this.state.password })
                }]

            )
        }
    }
    render() {
        return (
            <View style={styles.conatiner}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter User Name"
                    onChangeText={(user) => { this.setState({ userName: user }) }}
                    value={this.state.userName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    onChangeText={(password) => { this.setState({ password: password }) }}
                    value={this.state.password}
                    secureTextEntry
                />

                <TouchableHighlight style={styles.submit} onPress={this.submit}>
                    <Text style={styles.loginTextStyle}>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }

}
export default Login;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#4e71ba',

    },
    input: {
        height: 40,
        backgroundColor: "#fff",
        opacity: 0.8,
        width: 300,
        borderRadius: 20,
        marginTop: 15,
        paddingLeft: 20,
        color: "blue"
    },
    submit: {
        marginTop: 15,
        height: 40,
        width: 300,
        backgroundColor: "#39569c",
        borderRadius: 20,
        justifyContent: "center",
    },
    loginTextStyle: {
        fontSize: 17,
        color: "#fff",
        textAlign: "center",
    },
})

