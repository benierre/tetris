import { PiezaBase, Cell } from "./PiezaBase";

export class Tablero {
    static readonly WIDTH = 10;
    static readonly HEIGHT = 20;

    private grid: (string | null)[][];
    private piezaactual: PiezaBase | null = null;
    private filaactual: number = 0;
    private columnaactual: number = 0;
    private gameOver: boolean = false;

    constructor() {
        this.grid = this.crearGrillaVacia();
    }

    private crearGrillaVacia(): (string | null)[][] {
        return Array.from(
            { length: Tablero.HEIGHT },
            () => Array(Tablero.WIDTH).fill(null)
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

    getCurrentPiece(): PiezaBase | null {
        return this.piezaactual;
    }

    isGameOver(): boolean {
        return this.gameOver;
    }

    addPiece(pieza: PiezaBase, columna: number): boolean {
        if (this.gameOver) {
            return false;
        }

        if (this.piezaactual !== null) {
            return false;
        }

        const celdasAbsolutas: Cell[] = pieza.getCells().map(c => ({
            row: c.row,
            column: c.column + columna,
        }));

        const cabe = celdasAbsolutas.every(c =>
            c.row >= 0 &&
            c.row < Tablero.HEIGHT &&
            c.column >= 0 &&
            c.column < Tablero.WIDTH &&
            this.grid[c.row]![c.column] === null
        );

        if (!cabe) {
            this.gameOver = true;
            return false;
        }

        this.fijarComoActual(
            pieza,
            columna,
            celdasAbsolutas
        );

        return true;
    }

    private fijarComoActual(
        pieza: PiezaBase,
        columna: number,
        celdas: Cell[]
    ): void {
        this.piezaactual = pieza;
        this.filaactual = 0;
        this.columnaactual = columna;

        celdas.forEach(c => {
            this.grid[c.row]![c.column] = pieza.name;
        });
    }

    Moverabajo(): boolean {
        if (!this.piezaactual) {
            return false;
        }

        const piezaActual = this.piezaactual;

        const celdasViejas = piezaActual.getCells().map(c => ({
            row: c.row + this.filaactual,
            column: c.column + this.columnaactual,
        }));

        celdasViejas.forEach(c => {
            this.grid[c.row]![c.column] = null;
        });

        const nuevaRow = this.filaactual + 1;

        const celdasNuevas = piezaActual.getCells().map(c => ({
            row: c.row + nuevaRow,
            column: c.column + this.columnaactual,
        }));

        const cabe = celdasNuevas.every(c =>
            c.row >= 0 &&
            c.row < Tablero.HEIGHT &&
            c.column >= 0 &&
            c.column < Tablero.WIDTH &&
            this.grid[c.row]![c.column] === null
        );

        if (cabe) {
            this.confirmarMovimiento(
                nuevaRow,
                celdasNuevas,
                piezaActual.name
            );

            return true;
        }

        this.restaurarCeldas(
            celdasViejas,
            piezaActual.name
        );

        this.bloquearPieza();

        return false;
    }

    private confirmarMovimiento(
        nuevaRow: number,
        celdas: Cell[],
        nombre: string
    ): void {
        this.filaactual = nuevaRow;

        celdas.forEach(c => {
            this.grid[c.row]![c.column] = nombre;
        });
    }

    private restaurarCeldas(
        celdas: Cell[],
        nombre: string
    ): void {
        celdas.forEach(c => {
            this.grid[c.row]![c.column] = nombre;
        });
    }

    private bloquearPieza(): void {
        this.piezaactual = null;

        this.limpiarLineasCompletas();
    }

    rotarDerecha(): boolean {
        if (!this.piezaactual) {
            return false;
        }

        const piezaActual = this.piezaactual;

        const orientacionAnterior =
            piezaActual.getOrientationIndex();

        const celdasViejas = piezaActual.getCells().map(c => ({
            row: c.row + this.filaactual,
            column: c.column + this.columnaactual,
        }));

        celdasViejas.forEach(c => {
            this.grid[c.row]![c.column] = null;
        });

        piezaActual.rotateRight();

        const celdasNuevas = piezaActual.getCells().map(c => ({
            row: c.row + this.filaactual,
            column: c.column + this.columnaactual,
        }));

        const rotacionValida = celdasNuevas.every(c =>
            c.row >= 0 &&
            c.row < Tablero.HEIGHT &&
            c.column >= 0 &&
            c.column < Tablero.WIDTH &&
            this.grid[c.row]![c.column] === null
        );

        if (rotacionValida) {
            celdasNuevas.forEach(c => {
                this.grid[c.row]![c.column] =
                    piezaActual.name;
            });

            return true;
        }

        piezaActual.setOrientationIndex(
            orientacionAnterior
        );

        this.restaurarCeldas(
            celdasViejas,
            piezaActual.name
        );

        return false;
    }

    rotarIzquierda(): boolean {
        if (!this.piezaactual) {
            return false;
        }

        const piezaActual = this.piezaactual;

        const orientacionAnterior =
            piezaActual.getOrientationIndex();

        const celdasViejas = piezaActual.getCells().map(c => ({
            row: c.row + this.filaactual,
            column: c.column + this.columnaactual,
        }));

        celdasViejas.forEach(c => {
            this.grid[c.row]![c.column] = null;
        });

        piezaActual.rotateLeft();

        const celdasNuevas = piezaActual.getCells().map(c => ({
            row: c.row + this.filaactual,
            column: c.column + this.columnaactual,
        }));

        const rotacionValida = celdasNuevas.every(c =>
            c.row >= 0 &&
            c.row < Tablero.HEIGHT &&
            c.column >= 0 &&
            c.column < Tablero.WIDTH &&
            this.grid[c.row]![c.column] === null
        );

        if (rotacionValida) {
            celdasNuevas.forEach(c => {
                this.grid[c.row]![c.column] =
                    piezaActual.name;
            });

            return true;
        }

        piezaActual.setOrientationIndex(
            orientacionAnterior
        );

        this.restaurarCeldas(
            celdasViejas,
            piezaActual.name
        );

        return false;
    }

    agregarPiezaAleatoria(pieza: PiezaBase): boolean {
        const cantidadRotaciones =
            Math.floor(
                Math.random() *
                pieza.getCantidadOrientaciones()
            );

        for (
            let i = 0;
            i < cantidadRotaciones;
            i++
        ) {
            pieza.rotateRight();
        }

        const maxColumna =
            Tablero.WIDTH - pieza.getAncho();

        const columna =
            Math.floor(
                Math.random() *
                (maxColumna + 1)
            );

        return this.addPiece(
            pieza,
            columna
        );
    }

    private filaCompleta(fila: number): boolean {
        return this.grid[fila]!.every(
            celda => celda !== null
        );
    }

    limpiarLineasCompletas(): number {
        const filasRestantes =
            this.grid.filter(
                (_, fila) =>
                    !this.filaCompleta(fila)
            );

        const cantidadEliminadas =
            Tablero.HEIGHT -
            filasRestantes.length;

        const filasNuevasVacias =
            Array.from(
                { length: cantidadEliminadas },
                () =>
                    Array(Tablero.WIDTH).fill(null)
            );

        this.grid = [
            ...filasNuevasVacias,
            ...filasRestantes
        ];

        return cantidadEliminadas;
    }
}