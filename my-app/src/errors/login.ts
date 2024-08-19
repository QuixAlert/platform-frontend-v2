import {ErrorName} from "@/errors/error-names";

export class LoginError extends Error {

  constructor(message: string) {

    super(message)

    this.name = ErrorName.LOGIN
  }
}