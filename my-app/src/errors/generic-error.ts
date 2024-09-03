import {ErrorName} from "@/errors/error-names";

export class GenericError extends Error {

    constructor(message: string) {
        super(message);

        this.name = ErrorName.GENERIC
    }
}