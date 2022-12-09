import styled from "@emotion/styled";
import React, { Component, createRef, } from "react";

/**
 * @class
 * @extends Component
 */
export default class Index extends Component
{
    /**
     * @returns {any}
     */
    render ()
    {
        return (<>Hello World...</>);
    }

    /**
     * @param {any} properties
     * @returns {void}
     */
    constructor (properties)
    {
        // As created
        super (properties);

        this.text = createRef ();

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
