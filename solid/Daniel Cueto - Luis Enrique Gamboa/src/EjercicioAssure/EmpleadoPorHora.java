package EjercicioAssure;

public class EmpleadoPorHora implements Empleado {
    private String nombre;
    private double tarifaHora;
    private int horasTrabajadas;

    public EmpleadoPorHora(String nombre, double tarifaHora, int horasTrabajadas) {
        this.nombre = nombre;
        this.tarifaHora = tarifaHora;
        this.horasTrabajadas = horasTrabajadas;
    }
    
    @Override
    public double calcularSalario() {
        return this.tarifaHora * (double)this.horasTrabajadas;
    }
    
    @Override
    public String toString() {
      return this.nombre + " - Pago por hora: $" + this.tarifaHora + " x " + this.horasTrabajadas + "h = $" + this.calcularSalario();
   }
}
