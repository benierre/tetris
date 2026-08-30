import { describe, it, expect } from "vitest";
import { PiezaT } from "../src/PiezaT";

describe("PiezaT", () => {
  it("debe tener 4 celdas en su orientación inicial", () => {
    const pieza = new PiezaT();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
        { row: 0, column: 1 },
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
      ])
    );
  });

it("debe rotar a la derecha correctamente", () => {
    const pieza = new PiezaT();
    pieza.rotateRight();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
        { row: 0, column: 0 },
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 2, column: 0 },
      ])
    );
 });
  it("debe rotar a la izquierda correctamente", () => {
   const pieza = new PiezaT();
    pieza.rotateLeft();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
       { row: 0, column: 1 },
       { row: 1, column: 0 },
       { row: 1, column: 1 },
       { row: 2, column: 1 },  
      ])
    );
 });
});