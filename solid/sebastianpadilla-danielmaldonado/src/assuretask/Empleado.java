package assuretask;

public abstract class Empleado {
    protected String nombre;
    protected String correo;
    protected String cargo;
    protected float sueldo;
    
    public abstract float obtenerSueldoTotal();
}
