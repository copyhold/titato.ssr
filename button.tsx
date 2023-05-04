//** @jsxImportSource https://esm.sh/preact */
import { h, html } from "https://deno.land/x/htm@0.0.10/mod.tsx";
export function Button(props) {
    return <button type="button" onClick={props.onClick}>click me</button>
}