# Caixa da Lanchonete

Este é um programa em JavaScript que simula um sistema de caixa de uma lanchonete. Ele permite calcular o valor total da compra com base nos itens selecionados, aplicando descontos e acréscimos de acordo com a forma de pagamento escolhida. Além disso, ele implementa regras específicas, como a necessidade de pedir itens principais antes de itens extras.

## Como Usar

1. **Inicialização:**

   O código começa com a criação de uma classe chamada `CaixaDaLanchonete`, que possui métodos para calcular o valor da compra.

2. **Cardápio:**

   O cardápio da lanchonete é definido como uma lista de objetos, onde cada objeto representa um item disponível para compra. Cada objeto contém o `codigo` do item, a `descricao` e o `valor`.

3. **Variáveis de Resposta de Erro:**

   O programa define uma variável chamada `resultadoEsperado` que armazena as mensagens de erro correspondentes a diferentes cenários, como quantidade inválida, carrinho vazio, item inválido, forma de pagamento inválida, entre outros.

4. **Formas de Pagamento:**

   As formas de pagamento são definidas em um objeto chamado `formaDePagamento`. Cada forma de pagamento (dinheiro, débito e crédito) possui uma descrição e um valor de desconto ou acréscimo associado.

5. **Função `calcularValorDaCompra`:**

   A função `calcularValorDaCompra` recebe a forma de pagamento escolhida e uma lista de itens do pedido como argumentos. Ela percorre os itens do pedido, verifica a quantidade e a validade dos itens, calcula o valor total da compra e aplica os descontos ou acréscimos de acordo com a forma de pagamento. 

6. **Exemplo de Uso:**

   O código final cria uma nova instância da classe `CaixaDaLanchonete` e simula um pedido com itens e uma forma de pagamento escolhida. O resultado é exibido no console.

## Observações Importantes

- Itens extras só podem ser pedidos se acompanhados de um item principal.
- Combos não são considerados itens principais.
- O valor total da compra é calculado com base na quantidade e valor dos itens do pedido.
- O desconto ou acréscimo da forma de pagamento é aplicado ao valor total.
