const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const PedidoProduto = db.define('pedidoproduto',{
    codPedido: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'pedidos',
            key: 'codPedido'
        },
        primaryKey: true
    },
    codProduto: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'codProduto'
        },
        primaryKey: true
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'pedidos_produtos',
    createdAt: false,
    updatedAt: false
})
module.exports = PedidoProduto