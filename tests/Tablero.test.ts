import { describe, it, expect } from "vitest";
import { Tablero } from "../src/Tablero";

describe("Tablero", () => {
  it("debe tener el formato de 10 columnas y 20 filas", () => {
    const tablero = new Tablero();

    expect(tablero.getWidth()).toBe(10);
    expect(tablero.getHeight()).toBe(20);
  });
});