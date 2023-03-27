import {writable} from "svelte/store";
import {TITLES} from "../config";

const Titles = TITLES.reduce((object, title, index) => {
  return { ...object, [title]: { title, index, active: false } }
}, {});

export const activeTitle = writable(Titles)

export function changeTitle(title) {
  activeTitle.set({
    ...Titles,
    [title]: {...Titles[title], active: true}
  })
}