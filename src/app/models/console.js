module.exports = (sequelize, DataTypes) => {
    const Console = sequelize.define('Console', {
        'id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'size': DataTypes.STRING,
        'weight': DataTypes.STRING,
        'colors': DataTypes.STRING,
        'controls': DataTypes.STRING,
        'ProductId': DataTypes.INTEGER,
    }, {});
    Console.associate = function (models) {
        Console.belongsTo(models.Product, { foreignKey: 'ProductId', as: 'product' });
    };
    return Console;
}
