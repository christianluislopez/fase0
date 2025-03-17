import Empleado from "./Empleado";
import EmpleadoPorHoras from "./EmpleadoPorHoras";
import EmpleadoTiempoCompleto from "./EmpleadoTiempoCompleto";
import Empresa from "./Empresa";

function main(): void {
  const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto(
    100,
    "Max",
    1234
  );
  const empleadoPorHoras: Empleado = new EmpleadoPorHoras(
    10,
    10,
    "Miguel",
    213214
  );

  const empresa: Empresa = new Empresa();
  empresa.agregarEmpleado(empleadoTiempoCompleto);
  empresa.agregarEmpleado(empleadoPorHoras);

  const planillaTotal: number = empresa.calcularPlanillaTotal();
  console.log(`La planilla total es: ${planillaTotal} pesos`);
}

main();
