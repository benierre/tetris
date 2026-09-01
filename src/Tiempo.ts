export class Tiempo {
    private ticks: number = 0;

    tick(): number {
        this.ticks++;
        return this.ticks;
    }

    getTicks(): number {
        return this.ticks;
    }
}