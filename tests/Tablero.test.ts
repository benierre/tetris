import { describe, it, expect } from "vitest";
import { Tablero } from "../src/Tablero";
import { Cuadrado } from "../src/Cuadrado";

describe("Tablero", () => {
  it("debe tener el formato de 10 columnas y 20 filas", () => {
    const tablero = new Tablero();

    expect(tablero.getWidth()).toBe(10);
    expect(tablero.getHeight()).toBe(20);
  });

  it("debe poder agregar una pieza completa al tablero", () => {
    const tablero = new Tablero();
    const pieza = new Cuadrado();

    const agregada = tablero.addPiece(pieza, 0);

    expect(agregada).toBe(true);
    expect(tablero.getCell(0, 0)).not.toBeNull();
    expect(tablero.getCell(0, 1)).not.toBeNull();
    expect(tablero.getCell(1, 0)).not.toBeNull();
    expect(tablero.getCell(1, 1)).not.toBeNull();
  });

   it("no debe poder agregar una pieza que se sale de los límites del tablero", () => {
  const tablero = new Tablero();
  const pieza = new Cuadrado();

  const agregada = tablero.addPiece(pieza, 9);

  expect(agregada).toBe(false);
  expect(tablero.getCell(0, 9)).toBe(null);
  });
    it("debe recordar cual es la pieza actual despues de agregarla al tablero", () => {
    const tablero = new Tablero();
    const pieza = new Cuadrado();

    tablero.addPiece(pieza, 0);

    expect(tablero.getCurrentPiece()).not.toBeNull();
  });
  it("debe mover la pieza actual una fila hacia abajo", () => {
    const tablero = new Tablero();
    const pieza = new Cuadrado();

    tablero.addPiece(pieza, 0);
    const movida = tablero.Moverabajo();

    expect(movida).toBe(true);
    expect(tablero.getCell(0, 0)).toBeNull(); 
    expect(tablero.getCell(0, 1)).toBeNull();
    expect(tablero.getCell(2, 0)).not.toBeNull();
    expect(tablero.getCell(2, 1)).not.toBeNull();
});
})