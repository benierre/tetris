import { PiezaBase } from "./PiezaBase";

export class PiezaL extends PiezaBase {
    constructor() {
        super("L", [
            // Orientación 0
            [
                { row: 0, column: 0 },
                { row: 1, column: 0 },
                { row: 2, column: 0 },
                { row: 2, column: 1 },
            ],

            // Orientación 1
            [
                { row: 0, column: 0 },
                { row: 0, column: 1 },
                { row: 0, column: 2 },
                { row: 1, column: 0 },
            ],

            // Orientación 2
            [
                { row: 0, column: 0 },
                { row: 0, column: 1 },
                { row: 1, column: 1 },
                { row: 2, column: 1 },
            ],

            // Orientación 3
            [
                { row: 0, column: 2 },
                { row: 1, column: 0 },
                { row: 1, column: 1 },
                { row: 1, column: 2 },
            ],
        ]);
    }
}