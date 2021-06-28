module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        'id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'address': DataTypes.STRING,
        'city': DataTypes.STRING,
        'date': DataTypes.DATE,
        'discount': DataTypes.STRING,
        'deliveryDate': DataTypes.DATE,
        'card': DataTypes.STRING,
        'price': DataTypes.INTEGER,
        'shipping': DataTypes.INTEGER,
        'ProductId': DataTypes.INTEGER,
        'UserId': DataTypes.INTEGER,
    }, {});
    Order.associate = function (models) {
        Order.belongsTo(models.Product, { foreignKey: 'ProductId', as: 'product' });
        Order.belongsTo(models.User, { foreignKey: 'UserId', as: 'user' });
    };
    return Order;
}
