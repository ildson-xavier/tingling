<template>
<div>
    <top-menu/>
    <div class="back">
        <bread-crumb titulo="Contato" link="Duvidas"/>
        <div class="espaco">
        <div class="container">
            <h2 class="text-center">Envie sua mensagem</h2>
            <p class="text-center">Conte-nos detalhadamente sua dúvida ou sugestão para que possamos te dar uma melhor resposta.</p>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputEmail2" placeholder="Nome">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputEmail2" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="3" placeholder="Mensagem..."></textarea>
                        </div>

                        <button type="bottom" class="btn btn-primary btn-block">Enviar</button>
                    </form>
                </div>
                <div class="col-md-2"></div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Menu from '../shared/menu/Menu.vue';
import Breadcrumb from '../shared/breadcrumb/Breadcrumb.vue';
export default {
    components: {
        'bread-crumb': Breadcrumb,
        'top-menu': Menu
    }
}
</script>

<style scoped>
    .back{
        background: #eee;
    }

    .espaco {
        padding: 30px;
    }

    .form-group{
        padding: 10px;
    }

</style>
