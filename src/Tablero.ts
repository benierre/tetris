
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
}