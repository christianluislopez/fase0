public class PlanillaServicio {

    public void calcularPlanilla(Empleado[] empleados)
    {
        double planilla = 0;
        for (Empleado empleado : empleados)
        {
            planilla =  planilla + empleado.calcularSueldo();
        }
        System.out.println("la planilla total es -> " + planilla);
    }
}
