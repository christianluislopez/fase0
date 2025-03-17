public class Main {
    public static void main(String[] args) {
        PlanillaServicio planillaServicio = new PlanillaServicio();
        Empleado[] empleados = {
                new EmpleadoTiempoCompleto("Daniel", 2100),
                new EmpleadoPorHora("Juan", 15.22, 75),
                new EmpleadoTiempoCompleto("Jose", 2300),
                new EmpleadoPorHora("Matias", 8.7, 65),
                new EmpleadoTiempoCompleto("Marcelo", 2980),
        };

        planillaServicio.calcularPlanilla(empleados);
    }
}