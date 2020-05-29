import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import AuthPage from "./src/pages/AuthPage";
import TasksList from "./src/pages/TasksList";
import Routes from "./src/routes/routes";

const getFonts = () => {
    return Font.loadAsync({
        "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#1C1C1C"
                    />
                    <Routes />
                </SafeAreaView>
            </>
            //     <TasksList />
        );
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
