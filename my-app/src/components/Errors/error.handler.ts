import { ErrorName } from "@/errors/error-names";
import ForbiddenErrorHandler from "@/components/Errors/ForbiddenError";
import NotFoundErrorHandler from "@/components/Errors/NotFoundError";
import UnknownErrorHandler from "@/components/Errors/UnknownError";
import EmptyResultErrorHandler from "@/components/Errors/EmptyResultError";
import GenericErrorHandler from "@/components/Errors/GenericError";

const errorHandlers: { [key in ErrorName]: React.FC<{ error: Error }> } = {
    [ErrorName.FORBIDDEN]: ForbiddenErrorHandler,
    [ErrorName.NOT_FOUND]: NotFoundErrorHandler,
    [ErrorName.EMPTY_RESULT]: EmptyResultErrorHandler,
    [ErrorName.UNKNOWN]: UnknownErrorHandler,
    [ErrorName.GENERIC]: GenericErrorHandler,
};

export default errorHandlers;