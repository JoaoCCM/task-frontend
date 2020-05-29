import React from "react";
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { Gravatar } from "react-native-gravatar";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

import styles from "./styles";

const Menu = (props) => {
    const optionsGravatar = {
        email: props.navigation.getParam("email"),
        secure: true,
    };

    const signout = () => {
        delete axios.defaults.headers.common["Authorization"];
        AsyncStorage.removeItem("userData");
        props.navigation.navigate("AuthOrApp");
    };
    return (
        <ScrollView>
            <Text style={styles.title}>Tasks</Text>
            <View style={styles.header}>
                <Gravatar style={styles.avatar} options={optionsGravatar} />
            </View>
            <View>
                <Text style={styles.name}>
                    {props.navigation.getParam("name")}
                </Text>
                <Text style={styles.name}>
                    {props.navigation.getParam("email")}
                </Text>
            </View>
            <TouchableOpacity onPress={() => signout()}>
                <View style={styles.signOutIcon}>
                    <FontAwesome name="sign-out" size={30} color="#800" />
                </View>
            </TouchableOpacity>
            <DrawerItems {...props} />
        </ScrollView>
    );
};

export default Menu;
