public class EmpleadoTiempoCompleto extends Empleado {
    private double sueldoMensual;

    public EmpleadoTiempoCompleto(String nombre, double sueldoMensual) {
        super(nombre);
        this.sueldoMensual = sueldoMensual;
    }

    @Override
    public double calcularSueldo() {
        return sueldoMensual;
    }
}
