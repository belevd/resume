import {writable} from "svelte/store";
import {TITLES} from "../config";

const Titles = TITLES.reduce((object, title, index) => {
  return { ...object, [title]: { title, index, active: false } }
}, {});

export const activeTitle = writable(Titles)

function changeTitle(title) {
  activeTitle.set(title)
}