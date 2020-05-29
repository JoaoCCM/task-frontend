import { StyleSheet, Dimensions, Platform } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "lato-regular",
        color: "#fff",
        fontSize: 70,
        marginBottom: 10,
    },
    formContainer: {
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: 20,
        width: "90%",
        borderRadius: 20,
        elevation: 30,
        // height: "35%",
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginTop: 10,
        padding: Platform.OS === "ios" ? 15 : 5,
        fontFamily: "lato-regular",
        fontSize: 16,
        paddingLeft: 9,
    },
    btn: {
        backgroundColor: "#070",
        marginTop: 30,
        padding: 15,
        width: "50%",
        borderRadius: 8,
        elevation: 20,
    },
    btnText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "lato-regular",
        fontSize: 16,
    },
    registerLink: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 20,
    },
    registerText: {
        color: "#666",
        textDecorationLine: "underline",
        fontFamily: "lato-regular",
    },
    arrow: {
        position: "absolute",
        left: 20,
        top: Platform.OS === "ios" ? 45 : 30,
    },
});

export default styles;
