
const { 
    userNotFoundException
} = require("@framework/exceptions")

const User = require("@applications/users/models");




const getUser = async(userId) => {
    console.log(userId)
    const user = await User.findById(userId)
    if (!user) {
        throw new userNotFoundException();
    }
    if (user.age < 21) {
        throw new userNotFoundException();
    } 
    return {
        id: user._id,
        email: user.email,
        age: user.age,
        name: user.name
    }
}



const getUsers = async() => {
    const users = await User.find()
    if (!users) {
        throw new userNotFoundException();
    }

    return users.map((user) => ({
        id: user._id,
        age: user.age,
        name: user.name,
        email: user.email
    }))
}


module.exports = {
    getUser,
    getUsers
}