module.exports = (sequelize, DataTypes) => {
    const Peripheral = sequelize.define('Peripheral', {
        'id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'size': DataTypes.STRING,
        'weight': DataTypes.STRING,
        'colors': DataTypes.STRING,
        'type': DataTypes.STRING,
        'ProductId': DataTypes.INTEGER,
    }, {});
    Peripheral.associate = function (models) {
        Peripheral.belongsTo(models.Product, { foreignKey: 'ProductId', as: 'product' });
    };
    return Peripheral;
}
