"use strict";

import { Controller, Get, } from "@nestjs/common";
import { AppService, } from "./app.service";

@Controller ()
/**
 * @class
 */
export class AppController
{
    /**
     * @returns {void}
     */
    constructor (private readonly appService: AppService)
    {}

    @Get ()
    /**
     * @returns {Object}
     */
    data ()
    {
        return this.appService.data ();
    }
};
