import React, { useState, useReducer, useCallback, useEffect } from 'react';
import { StyleSheet, ScrollView, Button, View, Alert, ActivityIndicator } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

import { useDispatch } from 'react-redux';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

import * as authActions from '../../store/actions/auth';

const INPUT_CHANGE = 'INPUT_CHANGE';

const formReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            const updatedValues = {
                ...state.values,
                [action.input]: action.value
            }
            const updatedValidities = {
                ...state.validities,
                [action.input]: action.isValid
            }
            let updatedFormIsValid = true;
            for (const key in updatedValidities) {
                updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
            }
            return {
                values: updatedValues,
                validities: updatedValidities,
                isFormValid: updatedFormIsValid
            };
        default:
            return state;
    }
}

const AuthScreen = props => {

    const [isSignup, setIsSignup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        values: {
            email: "",
            password: ""
        },
        validities: {
            email: false,
            password: false
        },
        isFormValid: false
    })

    useEffect(() => {
        if (error) {
            Alert.alert('An error occured', error, [{ text: 'Okay' }]);
        }
    }, [error])

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            input: inputIdentifier,
            value: inputValue,
            isValid: inputValidity,
            type: INPUT_CHANGE
        })
    }, [dispatchFormState])

    const dispatch = useDispatch();

    const submitHandler = async () => {
        if (!formState.isFormValid) {
            Alert.alert("Error", "Please fill the form correctly", [{ text: 'Okay' }])
            return;
        }
        let action;
        if (isSignup) {
            action = authActions.signup(formState.values.email, formState.values.password);
        }
        else {
            action = authActions.login(formState.values.email, formState.values.password);
        }

        setError(null);
        setIsLoading(true);
        try {
            await dispatch(action);
            props.navigation.navigate('Shop');
        }
        catch (error) {
            setError(error.message);
            setIsLoading(false)

        }
    }

    return (
        <View style={styles.screen} >
            {/* <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}> */}
            <View style={styles.gradient}>
                <Card style={styles.authContainer}>
                    <ScrollView>
                        <Input
                            id="email"
                            label="E-mail"
                            keyboardTYpe="email-address"
                            required
                            email
                            autoCapitalize="none"
                            errMsg="Please enter a valid email address"
                            initialValue=""
                            initiallyValid={false}
                            onInputChange={inputChangeHandler}
                        />
                        <Input
                            id="password"
                            label="Password"
                            keyboardTYpe="default"
                            secureTextEntry
                            required
                            minLength={5}
                            autoCapitalize="none"
                            errMsg="Please enter a valid password"
                            initialValue=""
                            initiallyValid={false}
                            onInputChange={inputChangeHandler}
                        />
                        {isLoading ?
                            <ActivityIndicator size='small' color={Colors.primary} style={styles.spinner} /> :
                            <View style={styles.buttonContainer}>
                                <Button
                                    color={Colors.primary}
                                    title={isSignup ? "Signup" : "Login"}
                                    onPress={submitHandler} />
                            </View>}
                        <View>
                            <Button
                                color={Colors.accent}
                                title={`Switch to ${isSignup ? 'Login' : 'Sign up'}`}
                                onPress={() => {
                                    setIsSignup(prevState => !prevState)
                                }} />
                        </View>
                    </ScrollView>
                </Card>
            {/* </LinearGradient> */}
            </View>
        </View>
    )
}

AuthScreen.navigationOptions = {
    headerTitle: "Authenticate"
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    authContainer: {
        width: '80%',
        maxHeight: 400,
        maxWidth: 400,
        padding: 20
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginVertical: 10
    },
    spinner: {
        marginVertical: 10
    }

})

export default AuthScreen