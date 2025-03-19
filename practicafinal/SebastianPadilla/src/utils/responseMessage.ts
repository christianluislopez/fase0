export class ResponseMessage {
    static success(data: any, message: string = "Operación exitosa") {
        return {
            status: "success",
            message,
            data,
        };
    }

    static error(message: string, error: any = null) {
        return {
            status: "error",
            message,
            error,
        };
    }

    static notFound(message: string = "Recurso no encontrado") {
        return {
            status: "error",
            message,
            error: null,
        };
    }

    static validationError(errors: any[]) {
        return {
            status: "error",
            message: "Errores de validación",
            error: errors,
        };
    }

    static internalError(message: string = "Error interno del servidor") {
        return {
            status: "error",
            message,
            error: null,
        };
    }
}
