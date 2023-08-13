class CaixaDaLanchonete {
    constructor() {
        //Cardápio
        this.cardapio = [
            { codigo: 'cafe', descricao: 'Café', valor: 3.0 },
            { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.5 },
            { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
            { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
            { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.0 },
            { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
        ];
        // Variavel que retorna as respostas de erro
        this.resultadoEsperado = {
            quantidadeInvalida: 'Quantidade inválida!',
            carrinhoVazio: 'Não há itens no carrinho de compra!',
            itemInvalido: 'Item inválido!',
            formaPagamentoInvalida: 'Forma de pagamento inválida!',
            itemExtraSemPrincipal: 'Item extra não pode ser pedido sem o principal'
        };
        // Formas de pagamentos com seus respectivos descontos/acrescimos   
        this.formaDePagamento = {
        dinheiro: { descricao: 'Dinheiro', desconto: 0.05 },
        debito: { descricao: 'Débito', acrescimo: 0 },
        credito: { descricao: 'Crédito', acrescimo: 0.03 }
        };
    }
// ============================== Condições ===========================================
    calcularValorDaCompra(formaDePagamento, itens) {
        let valorTotal = 0;
        let possuiItemPrincipal = false; // Verifica se há item principal no carrinho

        for (const itemPedido of itens) {
            const [codigo, quantidade] = itemPedido.split(',');
            const itemCardapio = this.cardapio.find(item => item.codigo === codigo);
        // Condição que retorna apenas uma quantidade diferente de zero
        if (quantidade == 0) {
            return this.resultadoEsperado.quantidadeInvalida;
        }
        // Condição que comunica se há pedidos na lista
        if (!itemPedido) {
            return this.resultadoEsperado.carrinhoVazio;
        }
        // Condição que comunica se o item existe no cardápio
        if (!itemCardapio) {
            return this.resultadoEsperado.itemInvalido;
        }



            let valorItem = itemCardapio.valor * quantidade;
            // Condição que lista os itens não principais
            if (codigo !== 'chantily' && codigo !== 'queijo' && codigo !== 'combo1' && codigo !== 'combo2') {
                possuiItemPrincipal = true;
            }
            valorTotal += valorItem;
        }

        if (possuiItemPrincipal) {
            const formaPagamento = this.formaDePagamento[formaDePagamento];
            // Verifica se a forma de pagamento é válido
            if (!formaPagamento) {
                return this.resultadoEsperado.formaPagamentoInvalida;
            }
            // Aplicar desconto/acréscimo da forma de pagamento
            if (formaDePagamento === 'dinheiro') {
                valorTotal -= valorTotal * formaPagamento.desconto;
            } else if (formaDePagamento === 'credito') {
                valorTotal += valorTotal * formaPagamento.acrescimo;
            }
            const valorFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            return valorFormatado;
        } else {
            return this.resultadoEsperado.itemExtraSemPrincipal;
            
        }
    }
}
///////////////////////////////////// Exemplo de uso /////////////////////////////////////
const caixa = new CaixaDaLanchonete();
const formaPagamentoEscolhida = 'debito';
const itensDoPedido = ['chantily,1', 'cafe, 1'];
///////////////////////////////////// NOTA FISCAL /////////////////////////////////////
const valorTotal = caixa.calcularValorDaCompra(formaPagamentoEscolhida, itensDoPedido);
console.log('########## INFORMAÇÕES DO PEDIDO ##########');
console.log('Os pedidos são:', itensDoPedido);
console.log('A forma de pagamento é:', formaPagamentoEscolhida);
console.log(valorTotal);
