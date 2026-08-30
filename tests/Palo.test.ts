import { describe, it, expect } from "vitest";
import { Palo } from "../src/Palo";

describe("Palo", () => {
    it("debe tener 4 celdas en su orientación inicial", () => {
        const pieza = new Palo();
        const celdas = pieza.getCells();

        expect(celdas).toHaveLength(4);
        expect(celdas).toEqual(
            expect.arrayContaining([
                { row: 0, column: 0 },
                { row: 1, column: 0 },
                { row: 2, column: 0 },
                { row: 3, column: 0 },
            ])
        );
    });

    it("debe rotar a la derecha correctamente", () => {
        const pieza = new Palo();
        pieza.rotateRight();
        const celdas = pieza.getCells();

        expect(celdas).toHaveLength(4);
        expect(celdas).toEqual(
            expect.arrayContaining([
                { row: 0, column: 0 },
                { row: 0, column: 1 },
                { row: 0, column: 2 },
                    { row: 0, column: 3 }
                ])
        );
    })
});