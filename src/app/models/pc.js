module.exports = (sequelize, DataTypes) => {
    const PC = sequelize.define('PC', {
        'id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'processor': DataTypes.STRING,
        'motherBoard': DataTypes.STRING,
        'sd': DataTypes.STRING,
        'ram': DataTypes.STRING,
        'videoCard': DataTypes.STRING,
        'keyboard': DataTypes.STRING,
        'cooling': DataTypes.STRING,
        'screen': DataTypes.STRING,
        'mouse': DataTypes.STRING,
        'speakers': DataTypes.STRING,
        'powerUsage': DataTypes.STRING,
        'case': DataTypes.STRING,
        'ProductId': DataTypes.INTEGER,
    }, {});
    PC.associate = function (models) {
        PC.belongsTo(models.Product, { foreignKey: 'ProductId', as: 'product' });
    };
    return PC;
}
