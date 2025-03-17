package EjercicioAssure;

public class Main {
    
   public static void main(String[] var0) {
      Empresa assureSoft = new Empresa();
      assureSoft.agregarEmpleado(new EmpleadoTiempoCompleto("Luis", 2000.0));
      assureSoft.agregarEmpleado(new EmpleadoPorHora("Ana", 15.0, 120));
      assureSoft.agregarEmpleado(new EmpleadoPorHora("Carlos", 20.0, 80));
      assureSoft.mostarEmpleados();
      System.out.println("Total Planilla: $" + assureSoft.calcularPlanilla());
   }  
}

