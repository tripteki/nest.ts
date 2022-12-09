import React, { useRef, useState, Component, } from "react";
import { View, Text, } from "react-native";

/**
 * @class
 * @extends Component
 */
export default class App extends Component
{
    /**
     * @returns {any}
     */
    render ()
    {
        return (<View style={{ flex: 1, alignItems: "center", backgroundColor: "#FFFFFF", }}>
            <Text testID="testing" style={{ color: "#000000", }}>Hello World...</Text>
        </View>);
    }

    /**
     * @param {any} properties
     * @returns {void}
     */
    constructor (properties)
    {
        // As created
        super (properties);

        // As data
        this.state =
        {
            title: "Default Title", // Reactivity? const state = Object.assign ({}, this.state); state.title.deep[key] = "value"; this.setState (state);
        };

        // As methods
        this.method = this.method.bind (this);
    }

    /**
     * @returns {void}
     */
    method ()
    {
        //
    }

    //

    /**
     * @returns {void}
     */
    UNSAFE_componentWillMount ()
    {
        // As beforeMount
    }

    /**
     * @returns {void}
     */
    componentDidMount ()
    {
        // As mounted
    }

    /**
     * @returns {void}
     */
    UNSAFE_componentWillUpdate ()
    {
        // As beforeUpdate
    }

    /**
     * @returns {void}
     */
    componentDidUpdate ()
    {
        // As updated
    }

    /**
     * @returns {void}
     */
    componentWillUnmount ()
    {
        // As beforeUnmount
    }
};
