import { describe, it, expect } from "vitest";
import { Cuadrado } from "../src/Cuadrado";

describe("Cuadrado", () => {
  it("debe tener 4 celdas formando un cuadrado 2x2", () => {
    const pieza = new Cuadrado();
    const celdas = pieza.getCells();

    expect(celdas).toHaveLength(4);
    expect(celdas).toEqual(
      expect.arrayContaining([
        { row: 0, column: 0 },
        { row: 0, column: 1 },
        { row: 1, column: 0 },
        { row: 1, column: 1 },
      ])
    );
  });
});