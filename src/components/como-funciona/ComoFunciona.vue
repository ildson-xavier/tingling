<template>
    <div>
        <top-menu/>
        <bread-crumb titulo="Como funciona" link="Como funciona"/>
        <div class="container">
            <div class="row">
                <div col-md-6>
                    <img src="/static/explicacao/interessado.JPG" class="img-rounded"/>
                </div>
                <div col-md-6>
                    <img src="/static/explicacao/grupo.JPG" class="img-rounded"/>
                </div>
                <div col-md-6>
                    <img src="/static/explicacao/fornecedores.JPG" class="img-rounded"/>
                </div>
                <div col-md-6>
                    <img src="/static/explicacao/fechado.JPG" class="img-rounded"/>
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

<style>

</style>
