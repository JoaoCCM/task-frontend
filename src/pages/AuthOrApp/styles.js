import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
});

export default styles;
