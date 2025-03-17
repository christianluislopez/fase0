package assuretask;

public class EmpleadoPorMes extends Empleado {
    
    private int diasTrabajados;
    private int diasDeTrabajoDelMes;
    
    public EmpleadoPorMes(String nombre, String correo, String cargo, float sueldo, int diasTrabajados, int diasDeTrabajoDelMes) {
        this.nombre = nombre;
        this.correo = correo;
        this.cargo = cargo;
        this.sueldo = sueldo;
        this.diasTrabajados = diasTrabajados;
        this.diasDeTrabajoDelMes = diasDeTrabajoDelMes;
    }

    @Override
    public float obtenerSueldoTotal() {
        return ((float)diasTrabajados/diasDeTrabajoDelMes) * super.sueldo;
    }
}
