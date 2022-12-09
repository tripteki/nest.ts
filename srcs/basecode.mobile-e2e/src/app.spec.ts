"use strict";

import { by, device, element, expect, } from "detox";

describe ("App", () =>
{
    beforeEach (async () =>
    {
        await device.reloadReactNative ();
    });

    it ("Should return 'Hello World...'", async () =>
    {
        await expect (element (by.text ("Hello World..."))).toExist ();
    });

    afterEach (async () => {

        //
    });
});
