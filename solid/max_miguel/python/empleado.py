from abc import ABC, abstractmethod

class Empleado(ABC):
    def __init__(self, nombre: str, id: int):
        self._nombre = nombre
        self._id = id

    @abstractmethod
    def calcular_salario(self):
        pass
    
