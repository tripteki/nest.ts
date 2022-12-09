"use strict";

import { Test, TestingModule, } from "@nestjs/testing";
import { AppService, } from "./app.service";
import { AppController, } from "./app.controller";

describe ("AppController", () =>
{
    let app: TestingModule;

    beforeAll (async () =>
    {
        app = await Test.createTestingModule ({

            providers: [ AppService, ],
            controllers: [ AppController, ],

        }).compile ();
    });

    it ("Should return 'Hello World...'", () =>
    {
        const appController = app.get <AppController> (AppController);

        expect (appController.data ()).toEqual ({ message: "Hello World...", });
    });

    afterAll (async () => {

        //
    });
});
