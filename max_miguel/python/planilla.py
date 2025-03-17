class Planilla:
    def __init__(self, empleados: list):
        self.empleados = empleados

    def calcular_total_planilla(self):
        total = 0
        for empleado in self.empleados:
            total += empleado.calcular_salario()
        return total