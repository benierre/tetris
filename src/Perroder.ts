import { PiezaBase, Cell } from "./PiezaBase";

const ORIENTACION_0: Cell[] = [
    { row: 0, column: 1 },
    { row: 0, column: 2 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
];

const ORIENTACION_90: Cell[] = [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
];

export class PerroDerecha extends PiezaBase {
    constructor() {
        super("PerroDerecha", [ORIENTACION_0, ORIENTACION_90]);
    }
}