import { describe, it, expect, vi } from "vitest";
import { Tablero } from "../src/Tablero";
import { Cuadrado } from "../src/Cuadrado";
import { Palo } from "../src/Palo";
import { PiezaT } from "../src/PiezaT";

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

    expect(tablero.getCurrentPiece()).toBe(pieza);
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

  it("debe agregar la pieza en una columna aleatoria que siempre entra", () => {
    for (let i = 0; i < 30; i++) {
      const tablero = new Tablero();
      const pieza = new Cuadrado();

      const agregada = tablero.agregarPiezaAleatoria(pieza);

      expect(agregada).toBe(true);
    }
  });

  it("debe eliminar dos lineas completas cuando las piezas se bloquean", () => {
    const tablero = new Tablero();

    for (let columna = 0; columna < 10; columna += 2) {
        const pieza = new Cuadrado();

        tablero.addPiece(
            pieza,
            columna
        );

        let seMovio = true;

        while (seMovio) {
            seMovio =
                tablero.Moverabajo();
        }
    }

    expect(
        tablero.getCell(18, 0)
    ).toBeNull();

    expect(
        tablero.getCell(19, 0)
    ).toBeNull();
 });
 
 it("no debe permitir agregar otra pieza mientras existe una pieza actual", () => {
    const tablero = new Tablero();

    const primeraPieza = new Cuadrado();
    const segundaPieza = new Cuadrado();

    const primeraAgregada =
        tablero.addPiece(
            primeraPieza,
            0
        );

    const segundaAgregada =
        tablero.addPiece(
            segundaPieza,
            3
        );

    expect(primeraAgregada).toBe(true);

    expect(segundaAgregada).toBe(false);

    expect(
        tablero.getCurrentPiece()
    ).toBe(primeraPieza);
 });
 it("debe activar game over si una nueva pieza no puede aparecer", () => {
    const tablero = new Tablero();

    for (let i = 0; i < 10; i++) {
        const pieza = new Cuadrado();

        const agregada =
            tablero.addPiece(
                pieza,
                0
            );

        expect(agregada).toBe(true);

        let seMovio = true;

        while (seMovio) {
            seMovio =
                tablero.Moverabajo();
        }
    }

    const nuevaPieza =
        new Cuadrado();

    const agregada =
        tablero.addPiece(
            nuevaPieza,
            0
        );

    expect(agregada).toBe(false);

    expect(
        tablero.isGameOver()
    ).toBe(true);
 });
 it("debe rotar una pieza hacia la derecha si hay espacio suficiente", () => {
    const tablero = new Tablero();

    const pieza =
        new PiezaT();

    tablero.addPiece(
        pieza,
        3
    );

    const rotada =
        tablero.rotarDerecha();

    expect(rotada).toBe(true);
 });
 it("no debe rotar una pieza si la rotacion sale de los limites del tablero", () => {
    const tablero = new Tablero();

    const pieza =
        new PiezaT();

    tablero.addPiece(
        pieza,
        8
    );

    const rotada =
        tablero.rotarDerecha();

    expect(rotada).toBe(false);
 });
 it("debe rotar aleatoriamente una pieza antes de agregarla", () => {
    const randomSpy =
        vi.spyOn(
            Math,
            "random"
        );

    randomSpy
        .mockReturnValueOnce(0.9)
        .mockReturnValueOnce(0);

    const tablero =
        new Tablero();

    const pieza =
        new Palo();

    const agregada =
        tablero.agregarPiezaAleatoria(
            pieza
        );

    expect(agregada).toBe(true);

    expect(
        pieza.getOrientationIndex()
    ).toBe(1);

    randomSpy.mockRestore();
 });
});