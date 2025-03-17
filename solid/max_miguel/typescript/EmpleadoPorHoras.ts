import Empleado from "./Empleado";

export default class EmpleadoPorHoras extends Empleado {
  private horasTrabajadas: number;
  private montoPorHora: number;

  constructor(
    horasTrabajadas: number,
    montoPorHora: number,
    nombre: string,
    id: number
  ) {
    super(nombre, id);
    this.horasTrabajadas = horasTrabajadas;
    this.montoPorHora = montoPorHora;
  }

  public calcularSueldo(): number {
    return this.horasTrabajadas * this.montoPorHora;
  }
}
