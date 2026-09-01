import { describe, it, expect } from "vitest";
import { Tiempo } from "../src/Tiempo";

describe("Tiempo", () => {
  it("debe iniciar en 0 ticks", () => {
    const tiempo = new Tiempo();
    expect(tiempo.getTicks()).toBe(0);
  });

  it("debe contar de a 1 cada vez que avanza", () => {
    const tiempo = new Tiempo();
    tiempo.tick();
    expect(tiempo.getTicks()).toBe(1);

    tiempo.tick();
    expect(tiempo.getTicks()).toBe(2);
  });
});