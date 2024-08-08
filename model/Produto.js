const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto',{
    codProduto: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    preco:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    tableName: 'produtos',
    createdAt: false,
    updatedAt: false
})

module.exports = Produto