import { assert, expect } from "chai";
import { createNode as u, patch, VNode } from "ultradom";
import { render } from "../src";
import { state, view } from "./mocks";

describe("Render", () => {
    before(() => {
        document.body.appendChild(render(view, state));
    });

    it("has to render view", () => {
        const title = document.getElementsByTagName("h1")[0];
        expect(title.textContent).has.to.be.equal("Hello");
    });

    it("has to change the title", () => {
        const button: any = document.getElementsByTagName("button")[0];
        button.click();
        const title: any = document.getElementsByTagName("h1")[0];
        expect(title.textContent).has.to.be.equal("Hello World");
    });
});
