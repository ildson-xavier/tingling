<template>
<div>
    <top-menu/>
    <bread-crumb titulo="Dúvidas frequentes" link="Duvidas"/>
    <div class="container">
        <div>
            <div class="panel">
                <div class="panel-body">
                    <div class="form-group">
                        <label for="exampleInputEmail2">O que gostaria de pesquisar?</label>
                        <input type="text" class="form-control" id="exampleInputEmail2" placeholder="Pesquisar...">
                    </div>
                </div>
            </div>
        </div>
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
                <div class="panel-heading2" role="tab" id="headingOne">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <font-awesome-icon icon="question-circle" size="2x"/><span class="titulo">Como sair de um grupo?</span>
                    </a>
                </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading2" role="tab" id="headingTwo">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <font-awesome-icon icon="question-circle" size="2x"/><span class="titulo">Como receber reembolso?</span>
                    </a>
                </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading2" role="tab" id="headingThree">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <font-awesome-icon icon="question-circle" size="2x"/><span class="titulo">Quais as formas de pagamento?</span>
                    </a>
                </h4>
                </div>
                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
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
    .titulo {
        margin-left: 10px;
    }

    input {
        width: 70%;
        border-radius: 20px;
        border-color: #337ab7;
        background: #eee;
    }

    .panel-heading2 {
        background-color: #eee;
        height: 45px;
        padding: 5px;
    }

    a.panel-heading2 {
        text-decoration: none;
    }
</style>
