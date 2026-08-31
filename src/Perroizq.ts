import { PiezaBase, Cell } from "./PiezaBase";

const ORIENTACION_0: Cell[] = [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
];

const ORIENTACION_90: Cell[] = [
    { row: 0, column: 1 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
];

export class PerroIzquierda extends PiezaBase {
    constructor() {
        super("PerroIzquierda", [ORIENTACION_0, ORIENTACION_90]);
    }
}