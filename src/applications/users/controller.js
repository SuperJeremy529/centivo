
const { 
    internalServerErrorException,
    userNotFoundException
} = require("@framework/exceptions")


const {
    getUser,
    getUsers
} = require("@applications/users/service");



const getUserController = async(request, response) => {
    try {
        const user = await getUser(request.params.id)
        return response.status(200).send({sucess: true, data: user})
    }
    catch(error){
        switch (true) {
            case (error instanceof userNotFoundException):
                return response.status(error.statusCode).send({ success: false, message: error.message });
            default:
                const err = new internalServerErrorException()
                return response.status(err.statusCode).send({ success: false, message: err.message });

        }
    }
    
}

const getUsersController = async(request, response) => {
    try {
        const users = await getUsers()
        return response.status(200).send({sucess: true, data: users})
    }
    catch(error){
        switch (true) {
            case (error instanceof userNotFoundException):
                return response.status(error.statusCode).send({ success: false, message: error.message });
            default:
                const err = new internalServerErrorException()
                return response.status(err.statusCode).send({ success: false, message: err.message });

        }
    }
    
}




module.exports = {
    getUserController,
    getUsersController
}