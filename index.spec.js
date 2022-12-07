import { Soma } from "./index";

describe("Teste de soma", () => {
  it("deve somar os numeros de x e y", () => {
    expect(Soma(15, 15)).toBe(30);
  });
});
