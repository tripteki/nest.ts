"use strict";

import { Injectable, } from "@nestjs/common";

@Injectable ()
/**
 * @class
 */
export class AppService
{
    /**
     * @returns {Object}
     */
    data (): { message: string }
    {
        return {

            message: "Hello World...",
        };
    }
};
