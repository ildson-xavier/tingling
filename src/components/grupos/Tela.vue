<template>
<div>
    <top-menu/>
    <div class="back">
        <bread-crumb titulo="Pesquisa de grupos" link="Grupos"/>
        <div class="container">
            <div class="panel panel-primary sem-borda">
            <div class="panel-heading">Localize um grupo do seu interesse</div>
                <div class="panel-body">
                    <form class="form-inline">
                        <div class="form-group">
                            <label for="exampleInputName2">Categoria</label>
                            <select class="form-control" id="exampleInputName2">
                                <option>Categoria 1</option>
                                <option>Categoria 2</option>
                                <option>Categoria categoria 3</option>
                                <option>Categoria 4</option>
                                <option>Todas</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail2">Produto</label>
                            <input type="email" style="width: 300px" class="form-control" id="exampleInputEmail2" placeholder="Digite o produto do seu interesse">
                        </div>
                        <button type="submit" class="btn btn-warning">Pesquisar</button>
                    </form>
                </div>
            </div>
        </div>
        <grupos/>
    </div>
</div>
</template>

<script>
import Menu from '../shared/menu/Menu.vue';
import Breadcrumb from '../shared/breadcrumb/Breadcrumb.vue';
import Grupos from '../grupos/Grupos.vue';
export default {
    components: {
        'bread-crumb': Breadcrumb,
        'grupos': Grupos,
        'top-menu': Menu
    }    
}
</script>

<style>
    .sem-borda {
        border: 0px;
        -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
        -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
        box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
        --border-radius: 10px 20px 20px ;
    }

    .panel-heading {
        background-image: linear-gradient( to bottom, #337ab7, #1d65a5 );
    }

    .back {
        background-color: #eee;
    }
</style>
