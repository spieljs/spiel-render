import {VNode} from "ultradom";

export type Keys = string;
export type State = {[k in Keys]: any};

export type View = (state: State) => VNode<any>;
export type JSXElements = VNode<any>;
