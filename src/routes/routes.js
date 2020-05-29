import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import AuthPage from "../pages/AuthPage";
import TasksList from "../pages/TasksList";

import Menu from "../pages/Menu";
import AuthOrApp from "../pages/AuthOrApp";

const menuConfig = {
    initialRouteName: "Today",
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: "lato-regular",
            fontSize: 20,
        },
        activeLabelStyle: {
            fontWeight: "bold",
            color: "#080",
        },
    },
};

const menuRoutes = {
    Today: {
        name: "Today",
        screen: (props) => <TasksList title="Hoje" daysAhead={0} {...props} />,
        navigationOptions: {
            title: "Hoje",
        },
    },
    Tomorrow: {
        name: "Tomorrow",
        screen: (props) => (
            <TasksList title="Amanhã" daysAhead={1} {...props} />
        ),
        navigationOptions: {
            title: "Amanhã",
        },
    },
    Week: {
        name: "Week",
        screen: (props) => (
            <TasksList title="Semana" daysAhead={7} {...props} />
        ),
        navigationOptions: {
            title: "Semana",
        },
    },
    Month: {
        name: "Month",
        screen: (props) => <TasksList title="Mês" daysAhead={30} {...props} />,
        navigationOptions: {
            title: "Mês",
        },
    },
};

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig);

const mainRoutes = {
    AuthOrApp: {
        name: "AuthOrApp",
        screen: AuthOrApp,
    },
    Auth: {
        name: "Auth",
        screen: AuthPage,
    },
    Home: {
        name: "Home",
        screen: menuNavigator,
    },
};

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: "AuthOrApp",
});

export default createAppContainer(mainNavigator);
