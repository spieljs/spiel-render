import {createNode, VNode} from "ultradom";
import {render, State, View} from "../src";

export const state: State = {
    title: "Hello",
};

export const view: View = (model: State): VNode<any> => {
    const changeTitle = () => {
        state.title = "Hello World";
        render(view, state);
    };

    return(
        <div>
            <h1>{state.title}</h1>
            <button onclick={() => changeTitle()}></button>
        </div>
    );
};
