# Spiel Render
Spiel render is a render for every framework that use ultradom.

## How use it

### Render yours views

```typescript
import {createNode, VNode} from "ultradom";
import {render, State, View} from "spiel-render";

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

document.body.appendChild(render(view, state));
```

## Run Spiel Render tests

`npm test`

## License

Spiel Render is MIT licensed. See [license](LICENSE.md)