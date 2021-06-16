# AiModal
Minimal Modal React Component

![npm bundle size](https://img.shields.io/bundlephobia/min/@aiui/ai-modal)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@aiui/ai-modal)
![npm download](https://img.shields.io/npm/dm/@aiui/ai-modal.svg)

## Install
    npm i @aiui/ai-modal

## Import
    import AiModal from '@aiui/ai-modal';


## Props
|   Name          |  Type  |   Default  | Description |
|-----------------|:-------|:-----------|:------------|
| opened          | bool   | false      | If true, the modal is open |
| title           | string |            | Modal Title |
| size            | string | md         | Modal size (sm, md, lg)  |
| onClose         | func   | ( ) => { } | Callback fired when the component requests to be closed |
| onOverlayClick  | func   | ( ) => { } | Callback fired when the Overlay is Clicked |
| children        | node   |            | Modal children, usually the included sub-components |
| color           | string | #ffffff    | Modal Color |
| overlayColor    | string | #e0e0e0    | Overlay Color  |