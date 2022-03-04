exports.error404 = (request, response, next) => {
    const error = new Error('Not found.');
    error.statusCode = 404;
}

exports.error500 = (error, request, response, next) => {
    const data = error.data;
    response.status(error.statusCode || 500);
    response.json({
        error: {
            message: error.message,
            data: data,
        }
    });
};