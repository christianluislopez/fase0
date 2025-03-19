class BaseService {
  getAll() {
    throw new Error("Método getAll() debe ser implementado");
  }

  create() {
    throw new Error("Método create() debe ser implementado");
  }
}

module.exports = BaseService;
