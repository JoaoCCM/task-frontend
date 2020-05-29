import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    TouchableWithoutFeedback,
    TextInput,
    TouchableOpacity,
    Platform,
} from "react-native";
import moment from "moment";

import DateTimePicker from "@react-native-community/datetimepicker";

import styles from "./styles";

const AddTask = ({ onCancel, isVisible, onSave }) => {
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const supportFuc = (date) => {
        setDate(date);
        setShowPicker(false);
    };

    const save = () => {
        const newTask = {
            desc: desc,
            date: date,
        };

        onSave && onSave(newTask);
    };

    const getTimePicker = () => {
        let datePicker = (
            <DateTimePicker
                value={date}
                onChange={(_, date) => {
                    date = date ? date : new Date();
                    supportFuc(date);
                }}
                mode="date"
            />
        );

        const dateString = moment(date).format("dddd, D [de] MMMM [de] YYYY");

        if (Platform.OS === "android") {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => setShowPicker(true)}>
                        <Text style={styles.date}>{dateString}</Text>
                    </TouchableOpacity>
                    {showPicker && datePicker}
                </View>
            );
        }

        return datePicker;
    };

    return (
        <Modal
            transparent={true}
            visible={isVisible}
            onRequestClose={onCancel}
            animationType="slide"
            onSave={AddTask}
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.background}></View>
            </TouchableWithoutFeedback>

            <View style={styles.container}>
                <Text style={styles.headerTitle}>Nova Tarefa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe a descrição"
                    value={desc}
                    onChangeText={(desc) => setDesc(desc)}
                />
                {getTimePicker()}
                <View style={styles.btns}>
                    <TouchableOpacity onPress={onCancel}>
                        <Text style={styles.btn}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={save}>
                        <Text style={styles.btn}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.background}></View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default AddTask;
