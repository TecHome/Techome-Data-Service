module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        'id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'name': DataTypes.STRING,
        'lastname': DataTypes.STRING,
        'email': DataTypes.STRING,
        'password': DataTypes.STRING,
        'phone': DataTypes.STRING,
        'address': DataTypes.STRING,
        'city': DataTypes.STRING,
        'login': DataTypes.BOOLEAN,
    }, {});
    User.associate = function (models) {
        User.hasMany(models.Order, { as: 'order' });
    };
    return User;
}
