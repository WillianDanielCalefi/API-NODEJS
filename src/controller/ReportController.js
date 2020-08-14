const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        // Encontrar todos os usuários que tem email que termina com @hotmail.com
        // Desses usuários que moram na rua "Rua das Figueiras"
        // Desses usuários que usem a tecnologia React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@hotmail.com'
                }
            },
            include: [
                { 
                    association: 'addresses', 
                    where: { 
                        street: 'Rua das Figueiras' 
                    } 
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }
            ]
        })

        return res.json(users);
    }
};