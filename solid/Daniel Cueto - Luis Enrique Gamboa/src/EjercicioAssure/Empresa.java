package EjercicioAssure;
import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private List<Empleado> empleados;

    public Empresa() {
        this.empleados = new ArrayList<>();
    }
    
    public void agregarEmpleado(Empleado empleado) {
        this.empleados.add(empleado);
    }
    
    public double calcularPlanilla() {
        double total = 0;
        for (Empleado e : empleados) {
            total += e.calcularSalario();
        }
        return total;
    }
    
    public void mostarEmpleados() {
        for (Empleado e : empleados) {
            System.out.println(e);
        }
    }  
}
