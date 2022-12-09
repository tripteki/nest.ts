"use strict";

import { render, } from "@testing-library/react-native";
import React from "react";
import App from "./App";

test ("Should return 'Hello World...'", () =>
{
    const { getByTestId, } = render (<App />);

    expect (getByTestId ("testing")).toHaveTextContent ("Hello World...");
});
