import { PiezaBase, Cell } from "./PiezaBase";

const ORIENTACION_0: Cell[] = [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
];

const ORIENTACION_90: Cell[] = [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
];

const ORIENTACION_180: Cell[] = [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
    { row: 1, column: 2 },
];

const ORIENTACION_270: Cell[] = [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
    { row: 2, column: 1 },
];

export class EleDerecha extends PiezaBase {
    constructor() {
        super("EleDerecha", [ORIENTACION_0, ORIENTACION_90, ORIENTACION_180, ORIENTACION_270]);
    }
}