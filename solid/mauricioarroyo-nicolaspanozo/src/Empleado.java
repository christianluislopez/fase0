public abstract class Empleado {
    private String Nombre;

    public Empleado(String nombre) {
        this.Nombre = nombre;
    }

    public abstract double calcularSueldo();

}
