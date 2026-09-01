import { describe, it, expect } from "vitest";
import { Tetris } from "../src/Tetris";
import { Cuadrado } from "../src/Cuadrado";

describe("Tetris", () => {
  it("debe poder crear y comenzar el juego", () => {
    const juego = new Tetris();
    const pieza = new Cuadrado();

    const iniciado = juego.inicio(pieza);

    expect(iniciado).toBe(true);
  });

  it("debe poder indicar desde afuera que avance un tick", () => {
    const juego = new Tetris();
    const pieza = new Cuadrado();

    juego.inicio(pieza);
    juego.tick();

    expect(juego.getCantidadTicks()).toBe(1);
  });

  it("en cada tick debe mover la pieza actual en el tablero", () => {
    const juego = new Tetris();
    const pieza = new Cuadrado();

    juego.inicio(pieza);
    juego.tick();

    const tablero = juego.estado();
    expect(tablero.getCell(0, 0)).toBeNull();
  });
});