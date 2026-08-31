
import { PiezaBase, Cell } from "./PiezaBase";

export class Tablero {
    static readonly WIDTH = 10;
    static readonly HEIGHT = 20;

    private grid: (string | null)[][];

    constructor() {
        this.grid = this.crearGrillaVacia();
    }

    private crearGrillaVacia(): (string | null)[][] {
        return Array.from({ length: Tablero.HEIGHT }, () =>
            Array(Tablero.WIDTH).fill(null)
        );
    }

    getWidth(): number {
        return Tablero.WIDTH;
    }

    getHeight(): number {
        return Tablero.HEIGHT;
    }

    getCell(row: number, column: number): string | null {
        return this.grid[row][column];
    }

    addPiece(pieza: PiezaBase, columna: number): boolean {
        const celdasAbsolutas: Cell[] = pieza.getCells().map(c => ({
            row: c.row,
            column: c.column + columna,
        }));

        const cabe = celdasAbsolutas.every(c =>
            c.row >= 0 && c.row < Tablero.HEIGHT &&
            c.column >= 0 && c.column < Tablero.WIDTH
        );

        cabe && celdasAbsolutas.forEach(c => {
            this.grid[c.row][c.column] = pieza.name;
        });

        return cabe;
    }
}