export const errorHandlers = {
    'Forbidden Error': (error: Error) => console.error(`Forbidden error: ${error.message}`),
    'Empty Response Error': (error: Error) => console.error(`Empty Response error: ${error.message}`),
    'Error': (error: Error) => console.error(error.message),
};