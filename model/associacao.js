const Cliente = require('./Cliente')
const Produto = require('./Produto')
const Pedido = require('./Pedido')
const PedidoProduto = require('./PedidoProduto')

// Associação Cliente -> Pedido (1 para N)
Cliente.hasMany(Pedido,{
    foreignKey: 'clienteId',
    as: 'pedidos',
    onDelete: 'CASCADE'
})
Pedido.belongsTo(Cliente,{
    foreignKey: 'clienteId',
    as: 'cliente',
    allowNull: false
})

// Associação Pedido -> Produto (N para N) através de PedidoProduto
Pedido.belongsToMany(Produto, { 
    through: PedidoProduto,
    foreignKey: 'codPedido',
    otherKey: 'codProduto',
    as: 'produtdos'
})

Produto.belongsToMany(Pedido,{
    through: PedidoProduto,
    foreignKey: 'codPedido',
    otherKey: 'codProduto',
    as:'pedido'
})
module.exports = { Cliente, Produto, Pedido, PedidoProduto }
