<template>
    <div>
        <sidebar></sidebar>
        <div class="page-content inset">
          <div class="row2">
              <div class="col-md-12">
              <p class="well lead">FATURA An Experiment using the sidebar template from startbootstrap.com which I integrated in my website (<a href="http://animeshmanglik.name">animeshmanglik.name</a>)</p>
              <p class="well lead">Click on the Menu to Toggle Sidebar . Hope you enjoy it!</p> 
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../menu/Sidebar.vue';
export default {
    components: {
        'sidebar': Sidebar
    }
}
</script>

<style scoped>

</style>
