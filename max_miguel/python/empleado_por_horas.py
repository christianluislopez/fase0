from empleado import Empleado

class EmpleadoPorHoras(Empleado):
    def __init__(self, nombre: str , id: int, horas_trabajadas: int, salario_por_hora: int):
        super().__init__(nombre, id)
        self._horas_trabajadas = horas_trabajadas
        self._salario_por_hora = salario_por_hora

    def calcular_salario(self):
        return self._salario_por_hora * self._horas_trabajadas