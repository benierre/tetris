import { describe, it, expect } from "vitest";
import { EleDerecha } from "../src/PiezaLderecha";
import { EleIzquierda } from "../src/PiezaLizquierda";

describe("EleDerecha", () => {
  it("debe tener 4 celdas en su orientación inicial", () => {
    const pieza = new EleDerecha();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
        { row: 0, column: 0 },
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
      ])
    );
  });

    it("debe rotar a la derecha correctamente", () => {
      const pieza = new EleDerecha();
      pieza.rotateRight();
      const celdas = pieza.getCells();

      expect(celdas).toHaveLength(4);
      expect(celdas).toEqual(
        expect.arrayContaining([
         { row: 0, column: 0 },
         { row: 0, column: 1 },
         { row: 1, column: 0 },
         { row: 2, column: 0 }, 
        ])
      );
    });
});

describe("EleIzquierda", () => {
  it("debe tener 4 celdas en su orientación inicial", () => {
    const pieza = new EleIzquierda();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
       { row: 0, column: 2 },
       { row: 1, column: 0 },
       { row: 1, column: 1 },
       { row: 1, column: 2 },
      ])
    );
  });

  it("debe rotar a la izquierda correctamente", () => {
    const pieza = new EleIzquierda();
    pieza.rotateLeft();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
       { row: 0, column: 0 },
       { row: 1, column: 0 },
       { row: 2, column: 0 },
       { row: 2, column: 1 },
     ])
    );
  });
})
