import {Greeter} from './model/Greeter';

let greeter = new Greeter("world");

console.log(greeter.greet());

// export default {
//     Greeter : Greeter
// };



// declare module "TS" {
// }
// declare module "./model/Greeter" { import { Greeter } from './model/Greeter'; export default Greeter; }