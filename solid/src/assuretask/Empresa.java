package assuretask;

import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private List<Empleado> empleados;
    
    public Empresa() {
        empleados = new ArrayList<>();
    }
    
    public void agregarEmpleado(Empleado empleado) {
        empleados.add(empleado);
    }
    
    public void calcularPlanilla() {
        float totalPlanilla = 0;
        for (Empleado empleado : empleados) {
            System.out.println(empleado.nombre + " sueldo : " + empleado.obtenerSueldoTotal());
            totalPlanilla+= empleado.obtenerSueldoTotal();
        }
        String resultado = String.format("%.2f", totalPlanilla);
        System.out.println("Planilla total "+ resultado);
    }
}
