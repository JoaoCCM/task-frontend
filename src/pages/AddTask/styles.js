import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerTitle: {
        fontFamily: "lato-regular",
        backgroundColor: "#b13b44",
        color: "#fff",
        padding: 10,
        textAlign: "center",
        fontSize: 18,
    },
    input: {
        fontFamily: "lato-regular",
        width: "90%",
        height: 40,
        marginTop: 10,
        marginLeft: 15,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#e3e3e3",
        paddingLeft: 7,
    },
    btns: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        position: "absolute",
        bottom: 0,
    },
    btn: {
        fontFamily: "lato-regular",
        margin: 20,
        marginRight: 30,
        color: "#b13b44",
    },
    date: {
        fontFamily: "lato-regular",
        fontSize: 20,
        color: "#555",
        marginLeft: 15,
        marginTop: 15,
    },
});

export default styles;
