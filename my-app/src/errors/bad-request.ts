import {ErrorName} from "@/errors/error-names";

export class BadRequestError extends Error {

  constructor(message: string) {

    super(message)

    this.name = ErrorName.BAD_REQUEST
  }
}