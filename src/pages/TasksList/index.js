import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Alert,
    AsyncStorage,
} from "react-native";
import moment from "moment";
import "moment/locale/pt-br";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";

import styles from "./styles";
import globalStyles from "../../global/globalStyles";
import todayImage from "../../../assets/imgs/today.jpg";
import tomorrowImage from "../../../assets/imgs/tomorrow.jpg";
import weekImage from "../../../assets/imgs/week.jpg";
import monthImage from "../../../assets/imgs/month.jpg";
import { server, showError, showSuccess } from "../../global/common";

import Task from "../../components/Task";
import AddTask from "../AddTask";

const TasksList = ({ title, daysAhead, navigation }) => {
    const today = moment().locale("pt-br").format("ddd, D [de] MMMM");
    const [showDoneTasks, setDoneTasks] = useState(false);
    const [visibleTasks, setVisibleTasks] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [task, setTask] = useState([]);

    useEffect(() => {
        async function getState() {
            const stateString = await AsyncStorage.getItem("taskState");
            const state = JSON.parse(stateString) || null;

            loadTasks();
            setDoneTasks(state);
        }

        getState();
    }, []);

    const loadTasks = async () => {
        try {
            const maxDate = moment()
                .add({ days: daysAhead })
                .format("YYYY-MM-DD 23:59:59");
            const res = await axios.get(`${server}/task?date=${maxDate}`);

            setTask(res.data);
            filterTasks();
        } catch (e) {
            showError(e);
        }
    };

    const toggleFilter = () => {
        setDoneTasks(!showDoneTasks);
        filterTasks();
    };

    const filterTasks = async () => {
        let visible = null;
        if (showDoneTasks) {
            visible = [...task];
        } else {
            const pending = (task) => task.doneAt === null;
            visible = task.filter(pending);
        }

        setVisibleTasks(visible);
        await AsyncStorage.setItem("taskState", JSON.stringify(task));
    };

    const toggleTask = async (taskId) => {
        try {
            await axios.put(`${server}/task/${taskId}/toggle`);
            await loadTasks();
        } catch (e) {
            showError(e);
        }
    };

    const addTask = async (newTask) => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert("Dados inválidos", "Descrição não informada!");
            return;
        }

        try {
            await axios.post(`${server}/task`, {
                desc: newTask.desc,
                estimateAt: newTask.date,
            });

            setIsVisible(false);
            loadTasks();
        } catch (e) {
            showError(e);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${server}/task/${id}`);
            await loadTasks();
        } catch (e) {
            showError(e);
        }
    };

    const getImage = () => {
        switch (daysAhead) {
            case 0:
                return todayImage;
            case 1:
                return tomorrowImage;
            case 7:
                return weekImage;
            case 30:
                return monthImage;
        }
    };

    return (
        <View style={styles.container}>
            <AddTask
                isVisible={isVisible}
                onCancel={() => setIsVisible(false)}
                onSave={addTask}
            />
            <ImageBackground source={getImage()} style={styles.background}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <FontAwesome name="bars" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleFilter}>
                        <FontAwesome
                            name={showDoneTasks ? "eye" : "eye-slash"}
                            size={20}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{today}</Text>
                </View>
            </ImageBackground>
            <View style={styles.taskList}>
                <View>
                    <FlatList
                        data={visibleTasks}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item }) => (
                            <Task
                                {...item}
                                toggleTask={toggleTask}
                                onDelete={deleteTask}
                            />
                        )}
                    />
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.Addbtn}
                onPress={() => setIsVisible(true)}
            >
                <FontAwesome name="plus" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default TasksList;
