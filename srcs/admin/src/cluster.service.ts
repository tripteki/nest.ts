"use strict";

import cluster from "cluster";
import os from "os";
import { Injectable, } from "@nestjs/common";
import { Logger, } from "@nestjs/common";

@Injectable ()
/**
 * @class
 */
export class ClusterService
{
    /**
     * @param {Function} callback
     * @returns {void}
     */
    static register (callback: Function)
    {
        if (cluster.isMaster) {

            Logger.log ("Manager-"+process.pid);

            let i: number = 0;

            for (; i < os.cpus ().length; i++) {

                cluster.fork ();
            }

            cluster.on ("exit", (worker) => {

                Logger.log ("Worker-"+worker.process.pid);

                cluster.fork ();
            });

        } else {

            Logger.log ("Clustered-"+process.pid);

            callback ();
        }
    }
};
