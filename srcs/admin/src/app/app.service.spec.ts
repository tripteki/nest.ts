"use strict";

import { Test, } from "@nestjs/testing";
import { AppService, } from "./app.service";

describe ("AppService", () =>
{
    let appService: AppService;

    beforeAll (async () =>
    {
        const app = await Test.createTestingModule ({

            providers: [ AppService, ],

        }).compile ();

        appService = app.get <AppService> (AppService);
    });

    it ("Should return 'Hello World...'", () =>
    {
        expect (appService.data ()).toEqual ({ message: "Hello World...", });
    });

    afterAll (async () => {

        //
    });
});
