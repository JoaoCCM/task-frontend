import { StyleSheet, Dimensions, Platform } from "react-native";
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    background: {
        flex: 3,
        width: width,
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: "flex-end",
    },
    title: {
        fontFamily: "lato-regular",
        fontSize: 50,
        color: "#fff",
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: "lato-regular",
        fontSize: 20,
        color: "#fff",
        marginLeft: 20,
        marginBottom: 30,
    },
    iconBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: Platform.OS === "ios" ? 40 : 30,
    },
    Addbtn: {
        position: "absolute",
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#b13b44",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
