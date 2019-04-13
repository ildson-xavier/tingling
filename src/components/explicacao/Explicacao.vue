<template>
<div>
    <top-menu/>
    <div class="container-fluid explicacao-top">
        <h1 class="text-center">Veja como funciona os grupos</h1>
        <div class="row explicacao-top">
            <div class="col-md-4 text-center">
                <img src="/static/explicacao/cliente.png"/>
                <h2>Interessado</h2>
                <div class="">
                    <p>Escolha um grupo que quer comprar um produto que também seja do seu interesse. 
                        Verifique se há vaga no grupo, havendo cadastre-se na plataforma e solicite 
                        acesso ao grupo. Caso não hava um grupo ou vaga, crie seu próprio grupo. </p>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <img src="/static/explicacao/grupo.png"/>
                <h2>Grupo</h2>
                <div class="">
                    <p>A política do grupo decidirá se aceita o novo integrante no momento ou não. Isso,
                    porque deverá ter um prazo para novos integrantes entrarem e deverá ter um calculo
                    baseado na quantidade de itens que um único integrante quer comprar. Sempre que
                    entrar um novo integrante, e baseando na quantidade de itens que ele quer comprar,
                    será possível diminuir o valor inicialmente proposto que cada integrante quer pagar por
                    item de produto.
                    Portanto, quanto mais pessoas comprando menor pode ser o valor unitário pago por
                    produto.</p>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <img src="/static/explicacao/fornecedor.png"/>
                <h2>Fornecedor</h2>
                <div class="">
                    <p>Com o grupo já formada e passado o período de inclusão de novos integrantes, o grupo
                    já está pronto para ir até o mercado negociar a compra dos produtos. O “ir até o
                    mercado” seria deixar a proposta de comprar disponível para os fornecedores
                    consultarem e iniciar as negociações.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Menu from '../shared/menu/Menu.vue';
export default {
    components: {
        'top-menu': Menu
    },
}
</script>

<style>
    .explicacao-top {
        margin-top: 20px;
    }
</style>
