"use strict";

import React, { Component, } from "react";
import { render, } from "@testing-library/react";
import Index from "../pages/index";

describe ("Index", () =>
{
    it ("Should return 'Hello World...'", () =>
    {
        const { getByText, } = render (<Index />);

        expect (getByText ("Hello World...")).toBeTruthy ();
    });
});
