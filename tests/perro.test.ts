import { describe, it, expect } from "vitest";
import { PerroDerecha } from "../src/Perroder";
import { PerroIzquierda } from "../src/Perroizq";

describe("PerroDerecha", () => {
  it("debe tener 4 celdas en su orientación inicial", () => {
    const pieza = new PerroDerecha();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
        { row: 0, column: 1 },
        { row: 0, column: 2 },
        { row: 1, column: 0 },
        { row: 1, column: 1 }
      ])
    );
  });
  it ("debe rotar a la derecha correctamente", () => {
    const pieza = new PerroDerecha();
    pieza.rotateRight();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
        { row: 0, column: 0 },
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 2, column: 1 }
      ])
    );
  });

});

describe("PerroIzquierda", () => {
  it("debe tener 4 celdas en su orientación inicial", () => {
    const pieza = new PerroIzquierda();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
        { row: 0, column: 0 },
        { row: 0, column: 1 },
        { row: 1, column: 1 },
        { row: 1, column: 2 }
      ])
    );
  });
  it ("debe rotar a la izquierda correctamente", () => {
    const pieza = new PerroIzquierda();
    pieza.rotateLeft();
    const celdas = pieza.getCells();  
    
    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
        { row: 0, column: 1 },
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 2, column: 0 }
      ])
    );
  });
});