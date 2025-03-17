package assuretask;

public class AssureTask {

    public static void main(String[] args) {
        Empleado empleado1 = new EmpleadoPorHora("Juan Pérez", "juan.perez@example.com", "Contador", 10.0f, 40);
        Empleado empleado2 = new EmpleadoPorHora("María López", "maria.lopez@example.com", "Asesor", 12.0f, 35);
        Empleado empleado3 = new EmpleadoPorMes("Jose Marquez", "juan.perez@example.com", "Desarrollador", 3000.0f, 22, 23);
        Empleado empleado4 = new EmpleadoPorMes("Pedro Medrano", "maria.lopez@example.com", "Diseñadora", 2800.0f, 23, 23);
        Empresa planilla1 = new Empresa();
        planilla1.agregarEmpleado(empleado1);
        planilla1.agregarEmpleado(empleado2);
        planilla1.agregarEmpleado(empleado3);
        planilla1.agregarEmpleado(empleado4);
        planilla1.calcularPlanilla();
    }
}
