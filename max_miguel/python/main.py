from empleado_tiempo_completo import EmpleadoTiempoCompleto
from empleado_por_horas import EmpleadoPorHoras
from planilla import Planilla

def main():
    empleado1 = EmpleadoTiempoCompleto("Maximiliano", 1, 3000)
    empleado2 = EmpleadoPorHoras("Maria", 1, 160, 20)
    empleados = [empleado1, empleado2]
    nomina = Planilla(empleados)
    total = nomina.calcular_total_planilla()
    print(f"Total de la planilla: {total}")

if __name__ == "__main__":
    main()