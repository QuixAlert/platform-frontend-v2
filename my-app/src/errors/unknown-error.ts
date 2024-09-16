import {ErrorName} from "@/errors/error-names";

export class UnknownError extends Error {

    constructor(message: string) {
        super(message);

        this.name = ErrorName.UNKNOWN
    }
}