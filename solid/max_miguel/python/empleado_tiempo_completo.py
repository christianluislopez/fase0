from empleado import Empleado

class EmpleadoTiempoCompleto(Empleado):
    def __init__(self, nombre, id, salario_mensual):
        super().__init__(nombre, id)
        self._salario_mensual = salario_mensual

    def calcular_salario(self):
        return self._salario_mensual