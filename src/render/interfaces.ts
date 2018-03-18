import {VNode} from "ultradom";

export type Keys = string;
export type State = {[k in Keys]: any};

export type View = (state: any) => VNode<any>;
export type JSXElements = VNode<any>;
export type Children = Array<VNode<{}>>;
