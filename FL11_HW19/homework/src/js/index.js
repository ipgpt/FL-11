import { bar } from "./test.js";
import "../scss/styles.scss";

console.log("test1");
bar();

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
