import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    AsyncStorage,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
// import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import loginImg from "../../../assets/imgs/login.jpg";

import AuthInput from "../../components/AuthInput";

import { server, showError, showSuccess } from "../../global/common";

const AuthPage = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newStage, setNewStage] = useState(false);

    // const navigation = useNavigation();

    const signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name,
                email,
                password,
                confirmPassword,
            });

            showSuccess("Usuário cadastrado");

            setNewStage(false);
        } catch (e) {
            showError(e);
        }
    };

    const signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email,
                password,
            });

            AsyncStorage.setItem("userData", JSON.stringify(res.data));

            axios.defaults.headers.common[
                "Authorization"
            ] = `bearer ${res.data.token}`;

            navigation.navigate("Home", res.data);
        } catch (e) {
            showError(e);
        }
    };

    const signinOrSignup = () => {
        if (newStage) {
            signup();
        } else {
            signin();
        }
    };

    const validations = [];
    validations.push(email && email.includes("@"));
    validations.push(password && password.length >= 6);

    if (newStage) {
        validations.push(name && name.trim().length >= 3);
        validations.push(confirmPassword);
        validations.push(confirmPassword === password);
    }

    const validForm = validations.reduce((total, atual) => total && atual);

    return (
        <ImageBackground source={loginImg} style={styles.background}>
            {newStage && (
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={() => setNewStage(false)}
                >
                    <Feather name="arrow-left" size={30} color="#fff" />
                </TouchableOpacity>
            )}
            <Text style={styles.title}>Tasks</Text>

            <View style={styles.formContainer}>
                {newStage && (
                    <AuthInput
                        icon="user"
                        style={styles.input}
                        placeholder="Nome"
                        value={name}
                        onChangeText={(name) => setName(name)}
                    />
                )}

                <AuthInput
                    icon="at"
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <AuthInput
                    icon="lock"
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />

                {newStage && (
                    <AuthInput
                        icon="asterisk"
                        style={styles.input}
                        placeholder="Confirme sua senha"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(confirmPassword) =>
                            setConfirmPassword(confirmPassword)
                        }
                    />
                )}

                {newStage ? null : (
                    <View style={styles.registerLink}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => setNewStage(true)}
                        >
                            <Text style={styles.registerText}>
                                Não tenho cadastro
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <TouchableOpacity
                disabled={!validForm}
                style={[
                    styles.btn,
                    validForm ? {} : { backgroundColor: "#aaa" },
                ]}
                activeOpacity={0.7}
                onPress={() => signinOrSignup()}
            >
                <Text style={styles.btnText}>
                    {newStage ? "Registrar" : "Entrar"}
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default AuthPage;
