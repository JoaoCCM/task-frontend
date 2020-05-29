import React from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/pt-br";
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from "./styles";

function getCheck(doneAt) {
    if (doneAt !== null) {
        return (
            <View style={styles.done}>
                <FontAwesome name="check" size={20} color="#fff" />
            </View>
        );
    } else {
        return <View style={styles.pending}></View>;
    }
}

const Task = ({ desc, estimateAt, doneAt, id, toggleTask, onDelete }) => {
    const date = doneAt ? doneAt : estimateAt;

    const formatedDate = moment(date)
        .locale("pt-br")
        .format("ddd, D [de] MMMM");

    const doneOrNotStyle =
        doneAt !== null ? { textDecorationLine: "line-through" } : {};

    const getRightContent = () => {
        return (
            <TouchableOpacity
                style={styles.right}
                onPress={() => onDelete && onDelete(id)}
            >
                <FontAwesome name="trash" size={30} color="#fff" />
            </TouchableOpacity>
        );
    };

    const getLeftContent = () => {
        return (
            <View style={styles.left}>
                <FontAwesome
                    name="trash"
                    size={20}
                    color="#fff"
                    style={{ marginLeft: 10 }}
                />
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        );
    };

    return (
        <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => onDelete && onDelete(id)}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => toggleTask(id)}>
                    <View style={styles.checkContainer}>
                        {getCheck(doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={(styles.desc, doneOrNotStyle)}>
                        {desc + ""}{" "}
                    </Text>
                    <Text style={styles.date}>{formatedDate}</Text>
                    {/* <Text>{doneAt + ""}</Text> */}
                </View>
            </View>
        </Swipeable>
    );
};

export default Task;
