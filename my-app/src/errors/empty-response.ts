export class EmptyResponseError extends Error {

  constructor(message: string) {

    super(message)

    this.name = ErrorName.EMPTY_RESULT
  }
}