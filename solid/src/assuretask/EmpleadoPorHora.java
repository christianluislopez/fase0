package assuretask;

public class EmpleadoPorHora extends Empleado {
    private int horasTrabajadas;
    
    public EmpleadoPorHora(String nombre, String correo, String cargo, float sueldo, int horasTrabajadas) {
        this.nombre = nombre;
        this.correo = correo;
        this.cargo = cargo;
        this.sueldo = sueldo;
        this.horasTrabajadas = horasTrabajadas;
    }

    @Override
    public float obtenerSueldoTotal() {
        return horasTrabajadas * super.sueldo;
    }
}
