module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        'id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'name': DataTypes.STRING,
        'price': DataTypes.INTEGER,
        'description': DataTypes.STRING,
        'brand': DataTypes.STRING,
        'code': DataTypes.STRING,
        'stock': DataTypes.INTEGER,
        'imageBg': DataTypes.STRING,
        'imageCard': DataTypes.STRING,
        'imageGallery': DataTypes.STRING,
    }, {});
    Product.associate = function (models) {
        Product.hasMany(models.Console, { as: 'console' });
        Product.hasMany(models.PC, { as: 'pc' });
        Product.hasMany(models.Peripheral, { as: 'peripheral' });
    };
    return Product;
}
