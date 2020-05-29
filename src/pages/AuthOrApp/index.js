import React, { useEffect } from "react";
import { View, ActivityIndicator, AsyncStorage } from "react-native";
import axios from "axios";

import styles from "./styles";

const AuthOrApp = ({ navigation }) => {
    useEffect(() => {
        async function fetchUser() {
            const userDataJSON = await AsyncStorage.getItem("userData");
            let userData = null;

            try {
                userData = JSON.parse(userDataJSON);
            } catch (e) {
                console.error(e);
            }

            if (userData && userData.token) {
                axios.defaults.headers.common[
                    "Authorization"
                ] = `bearer ${userData.token}`;

                navigation.navigate("Home", userData);
            } else {
                navigation.navigate("Auth");
            }
        }
        fetchUser();
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default AuthOrApp;
