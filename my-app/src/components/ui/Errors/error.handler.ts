import { ErrorName } from "@/errors/error-names";
import ForbiddenErrorHandler from "@/components/ui/Errors/ForbiddenError";
import NotFoundErrorHandler from "@/components/ui/Errors/NotFoundError";
import UnknownErrorHandler from "@/components/ui/Errors/UnknownError";
import EmptyResultErrorHandler from "@/components/ui/Errors/EmptyResultError";
import GenericErrorHandler from "@/components/ui/Errors/GenericError";

const errorHandlers: { [key in ErrorName]: React.FC<{ error: Error }> } = {
    [ErrorName.FORBIDDEN]: ForbiddenErrorHandler,
    [ErrorName.NOT_FOUND]: NotFoundErrorHandler,
    [ErrorName.EMPTY_RESULT]: EmptyResultErrorHandler,
    [ErrorName.UNKNOWN]: UnknownErrorHandler,
    [ErrorName.BAD_REQUEST]: GenericErrorHandler,
    [ErrorName.LOGIN]: GenericErrorHandler,
};

export default errorHandlers;