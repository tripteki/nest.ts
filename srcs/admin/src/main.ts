"use strict";

import { NestFactory, } from "@nestjs/core";
import { ClusterService, } from "./cluster.service";
import { AppModule, } from "./app/app.module";

ClusterService.register (async () =>
{
    const app = await NestFactory.create (AppModule);
    const port = process.env.PORT;
    const globalPrefix: string = "api/admin";

    app.setGlobalPrefix (globalPrefix);

    await app.listen (port);
});
