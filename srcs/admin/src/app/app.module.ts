"use strict";

import { Module, } from "@nestjs/common";
import { AppService, } from "./app.service";
import { AppController, } from "./app.controller";

@Module ({

    imports: [],
    providers: [ AppService, ],
    controllers: [ AppController, ],
})
/**
 * @class
 */
export class AppModule
{};
