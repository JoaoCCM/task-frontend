import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        marginLeft: 20,
        width: "70%",
    },
});

export default styles;
