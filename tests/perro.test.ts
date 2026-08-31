import { describe, it, expect } from "vitest";
import { Perroderecha } from "../src/Perroder";
import { Perroizquierda } from "../src/Perroizq";

describe("Perroderecha", () => {
  it("debe tener 4 celdas en su orientación inicial", () => {
    const pieza = new Perroderecha();
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
    const pieza = new Perroderecha();
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

describe("Perroizquierda", () => {
  it("debe tener 4 celdas en su orientación inicial", () => {
    const pieza = new Perroizquierda();
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
    const pieza = new Perroizquierda();
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