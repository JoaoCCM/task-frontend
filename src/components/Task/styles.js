import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: "#aaa",
        borderBottomWidth: 1,
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: "#fff",
    },
    checkContainer: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    pending: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555",
    },
    done: {
        width: 25,
        height: 25,
        borderRadius: 13,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    desc: {
        fontFamily: "lato-regular",
        color: "#222",
        fontSize: 15,
    },
    date: {
        fontFamily: "lato-regular",
        color: "#555",
        fontSize: 12,
    },
    right: {
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    },
    left: {
        flex: 1,
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
    },
    excludeText: {
        fontFamily: "lato-regular",
        color: "#fff",
        fontSize: 20,
        margin: 10,
    },
});

export default styles;
