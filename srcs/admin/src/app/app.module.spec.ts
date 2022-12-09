"use strict";

import * as test from "supertest";
import { Test, } from "@nestjs/testing";
import { INestApplication, } from "@nestjs/common";
import { AppModule, } from "./app.module";

describe ("AppModule", () =>
{
    let app: INestApplication;

    beforeAll (async () =>
    {
        const appInit = await Test.createTestingModule ({

            imports: [ AppModule, ],

        }).compile ();

        app = appInit.createNestApplication ();

        await app.init ();
    });

    it ("Should return 'Hello World...'", () =>
    {
        test (app.getHttpServer ()).get ("/").expect (200).expect ({

            message: "Hello World...",
        });
    });

    afterAll (async () =>
    {
        await app.close ();
    });
});
