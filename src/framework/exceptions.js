
class internalServerErrorException extends Error{
    constructor(){
    super('interal error');
    this.name = 'internalServierError';
    this.statusCode = 500;
}
}


class userNotFoundException extends Error{
    constructor(){
    super('userNotFound');
    this.name = 'userNotFound';
    this.statusCode = 404;
}
}


module.exports = {
    internalServerErrorException,
    userNotFoundException
}