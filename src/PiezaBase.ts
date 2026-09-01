import { IRotator } from "./IRotator";

export type Cell = {
    row: number;
    column: number;
};

export abstract class PiezaBase implements IRotator {
    private orientationIndex: number;
    private readonly orientations: Cell[][];
    public readonly name: string;
    

    protected constructor(name: string, orientations: Cell[][]) {
        this.name = name;
        this.orientations = orientations;
        this.orientationIndex = 0;
    }

    public getCells(): Cell[] {
        return this.orientations[this.orientationIndex].map((cell) => ({
            row: cell.row,
            column: cell.column,
        }));
    }

    public rotateLeft(): void {
        this.orientationIndex =
            (this.orientationIndex + this.orientations.length - 1) % this.orientations.length;
    }

    public rotateRight(): void {
        this.orientationIndex = (this.orientationIndex + 1) % this.orientations.length;
    }

    public getAncho(): number {
     const columnas = this.getCells().map(c => c.column);
     return Math.max(...columnas) - Math.min(...columnas) + 1;
    }
}