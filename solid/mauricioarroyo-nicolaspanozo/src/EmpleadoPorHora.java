public class EmpleadoPorHora extends Empleado {
    private double sueldoPorHora;
    private int horasTrabajadas;

    public EmpleadoPorHora(String nombre, double sueldoPorHora, int horasTrabajadas) {
        super(nombre);
        this.sueldoPorHora = sueldoPorHora;
        this.horasTrabajadas = horasTrabajadas;
    }

    @Override
    public double calcularSueldo() {
        return horasTrabajadas * sueldoPorHora;
    }
}
