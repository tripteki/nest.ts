"use strict";

import { device, } from "detox";

beforeAll (async () =>
{
    await device.launchApp ();
});
