import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, ImageBackground, StyleSheet, useWindowDimensions, TouchableWithoutFeedback, KeyboardAvoidingView, PermissionsAndroid, BackHandler} from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { useFocusEffect } from '@react-navigation/native'

const styles = StyleSheet.create({
    imageCover: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
        paddingTop: 97
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "100%",
        backgroundColor: "#3D037E",
        height: 34,
        color: "#D2D7DC",
        borderBottomWidth: 1,
        borderBottomColor: "#D2D7DC"
    },
    formControl: {
        justifyContent: "space-between",
        marginBottom: 28
    },
    form: {
        paddingHorizontal: 48
    },
    formText: {
        color: "#D2D7DC",
        fontSize: 10,
        marginBottom: 4
    },
    button: {
        borderRadius: 4,
        borderColor: "#fff",
        borderWidth: 1,
        paddingHorizontal: 39,
        paddingVertical: 11,
        alignSelf: "center"
    },
    buttonText: {
        fontSize: 12,
        color: "#fff"
    }
})


const handleBack = () => {
    return true
}

const EMAIL_REGEX = /\S+@\S+\.\S+/

function Login({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [initial, setInitial] = useState(null)
    const [error, setError] = useState(false)
    const {height} = useWindowDimensions()

    useEffect(() => {
        async function getPermissions() {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location access permission",
                    message: "Food delivery app needs to access your location",
                    buttonPositive: "Ok",
                    buttonNegative: "Cancel"
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(info => {
                    console.log(info)
                    const {latitude, longitude} = info.coords
                    setInitial({latitude: latitude, longitude: longitude})
                },
                (error) => console.log("Error occured", error),
                {maximumAge: 15000,
                enableHighAccuracy: true, timeout: 15000})
            }
            else {
                await getPermissions()
            }
        }
        getPermissions()
    }, [])

    useFocusEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBack)
        return () => BackHandler.removeEventListener("hardwareBackPress", handleBack)
    }, [])
    
    const handleLogin = () => {
        if (EMAIL_REGEX.test(email)) {
            navigation.navigate("AutoDetect", {latlng: initial})
        }
        else {
            setError(true)
            setTimeout(() => setError(false), 2000)
        }
    }

    return (
        <View style = {{flex: 1}}>
            <ImageBackground source = {require("../assets/img/loginmenu.png")} style = {styles.imageCover}>
                <KeyboardAvoidingView behavior = "height">
                    <View style = {{...styles.form, height: height/2}}>
                        <View style = {styles.formControl}>
                            <Text style = {styles.formText}>Email</Text>
                            <TextInput 
                                value = {email} 
                                onChangeText = {text => setEmail(text)} 
                                placeholder = "Enter your email" 
                                keyboardType = "email-address" 
                                placeholderTextColor = "#FFF"
                                textContentType = "emailAddress"
                                style = {styles.input}
                                autoFocus = {true}
                            />
                            {error? 
                            <Text style = {{color: "red", fontSize: 10}}>
                                Invalid email
                            </Text>: null}
                        </View>
                        <View style = {styles.formControl}>
                            <Text style = {styles.formText}>Password</Text>
                            <TextInput
                                value = {password}
                                onChangeText = {text => setPassword(text)}
                                secureTextEntry = {true}
                                textContentType = "password"
                                style = {styles.input}
                            />
                        </View>
                        <TouchableWithoutFeedback onPress = {handleLogin}>
                            <View style = {styles.button}>
                                <Text style = {styles.buttonText}>
                                    Login
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
}

export default Login