const { User, Product } = require('../models');

const UserService = {

    //GET
    getUsers: async (request, response) => {
        try {
            let users = await User.findAll({
                raw: true,
                nest: true,
            });
            return { response: users };
        } catch (error) {
            throw error;
        }
    },

    getUserById: async (userId) => {
        try {
            let user = await User.findByPk(userId, {
                raw: true,
                nest: true,
            });
            return { response: user };
        } catch (error) {
            throw error;
        };
    },

    getUserLogged: async (request, response) => {
        try {
            let user = await User.findAll({
                raw: true,
                nest: true,
                where: { login: true }
            });
            return { response: user };
        } catch (error) {
            throw error;
        };
    },

    //POST
    createUser: async (request, response) => {
        try {
            const newUser = await User.create(request.body);
            const result = {
                message: 'User created successfully',
                response: newUser.dataValues
            };
            return result;
        } catch (error) {
            throw error;
        }
    },

}
module.exports = UserService;