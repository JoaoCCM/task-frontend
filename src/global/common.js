import { Alert, Platform } from "react-native";

const server =
    Platform.OS === "ios" ? "url referente a IOS" : "http://192.168.1.106:5000";

function showError(err) {
    if (err.response && err.response.data) {
        Alert.alert("Ops!", `Mensagem: ${err.response.data}`);
    } else {
        Alert.alert("Ops!", `Algo deu errado, tente novamente :(`);
    }
}

function showSuccess(msg) {
    Alert.alert("Sucesso!", msg);
}

export { server, showError, showSuccess };
