import Empleado from "./Empleado";

export default class Empresa {
  private empleados: Empleado[];

  constructor() {
    this.empleados = [];
  }

  public agregarEmpleado(empleado: Empleado): void {
    this.empleados.push(empleado);
  }

  public calcularPlanillaTotal(): number {
    let total: number = 0;
    for (const empleado of this.empleados) {
      total += empleado.calcularSueldo();
    }
    return total;
  }
}
