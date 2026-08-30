import { PiezaBase, Cell } from "./PiezaBase";

const ORIENTACION: Cell[] = [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
];

export class Cuadrado extends PiezaBase {
    constructor() {
        super("Cuadrado", [ORIENTACION]);
    }
}