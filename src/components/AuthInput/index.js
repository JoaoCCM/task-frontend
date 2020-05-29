import React from "react";
import { View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

const AuthInput = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <FontAwesome name={props.icon} size={20} style={styles.icon} />
            <TextInput {...props} style={styles.input} />
        </View>
    );
};

export default AuthInput;
