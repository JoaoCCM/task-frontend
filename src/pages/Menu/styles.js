import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    title: {
        color: "#000",
        fontFamily: "lato-regular",
        fontSize: 30,
        padding: 10,
        paddingTop: Platform.OS === "ios" ? 70 : 30,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        backgroundColor: "#333",
        margin: 10,
    },
    userInfo: {
        marginLeft: 10,
    },
    name: {
        fontFamily: "lato-regular",
        fontSize: 20,
        marginBottom: 10,
    },
    email: {
        fontFamily: "lato-regular",
        color: "#333",
    },
    signOutIcon: {
        marginLeft: 10,
        marginBottom: 10,
    },
});

export default styles;
