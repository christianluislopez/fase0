package EjercicioAssure;

public class EmpleadoTiempoCompleto implements Empleado {
    
    private String nombre;
    private double salarioMensual;

    public EmpleadoTiempoCompleto(String nombre, double salarioMensual) {
        this.nombre = nombre;
        this.salarioMensual = salarioMensual;
    }
    
    @Override
    public double calcularSalario() {
        return this.salarioMensual;
    }
    
    @Override
    public String toString() {
      return this.nombre + " - Salario Fijo: $" + this.salarioMensual;
    }
}
