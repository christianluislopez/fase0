import Empleado from "./Empleado";

export default class EmpleadoTiempoCompleto extends Empleado {
  private sueldoFijo: number;

  constructor(sueldoFijo: number, nombre: string, id: number) {
    super(nombre, id);
    this.sueldoFijo = sueldoFijo;
  }

  public calcularSueldo(): number {
    return this.sueldoFijo;
  }
}
