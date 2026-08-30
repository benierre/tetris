import { PiezaBase, Cell } from "./PiezaBase";

const VERTICAL: Cell[] = [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
    { row: 3, column: 0 },
];

const HORIZONTAL: Cell[] = [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
    { row: 0, column: 3 },
];

export class Palo extends PiezaBase {
    constructor() {
        super("Palo", [VERTICAL, HORIZONTAL]);
    }
}