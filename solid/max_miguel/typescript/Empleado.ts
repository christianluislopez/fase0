export default abstract class Empleado {
  protected nombre: string;
  protected id: number;

  constructor(nombre: string, id: number) {
    this.nombre = nombre;
    this.id = id;
  }

  abstract calcularSueldo(): number;
}
