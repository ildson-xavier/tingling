<template>
  <div class="">
    <top-menu/>
    <top-carousel/>
    <explicacao/>
    <grupos/>
    <novo-grupo/>
  </div>
</template>

<script>
import Menu from '../shared/menu/Menu.vue';
import Carousel from '../carousel/Carousel.vue';
import Explicacao from '../explicacao/Explicacao.vue';
import Grupos from '../grupos/Grupos.vue';
import NovoGrupo from '../novo-grupo/NovoGrupo.vue';

export default {

  components: { 
    'top-carousel': Carousel,
    'explicacao': Explicacao,
    'grupos': Grupos,
    'novo-grupo': NovoGrupo,
    'top-menu': Menu
  },
}
</script>

<style scoped>
  
</style>
