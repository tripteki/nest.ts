"use strict";

describe ("App", () =>
{
    beforeEach (() =>
    {
        cy.visit ("/");
    });

    it ("Should return 'Hello World...'", () =>
    {
        cy.contains ("Hello World...");
    });

    afterEach (async () => {

        //
    });
});
