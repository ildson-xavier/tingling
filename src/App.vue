<template>
  <div>
   <!--  <top-menu :rotas="routes"/> -->
    <!-- <top-menu/> -->
    <router-view></router-view>
<!--     <rodape/>
 -->  </div>
  
</template>

<script>
//import { routes }  from './routes';
//import Menu from './components/shared/menu/Menu.vue';
import Rodape from './components/shared/rodape/Rodape.vue';
export default {

  components: {
    //'top-menu' : Menu,
    'rodape': Rodape
  },
/*   data () {
    return {
        routes: [
          { path: '/como-funciona',  titulo: 'Por onde começar?', detalhe: 'Vou te explicar como funciona!' },
          { path: '/tela-pesquisa-grupo', titulo: 'Grupos', detalhe: 'O que estão comprando?' },
          { path: '/duvidas', titulo: 'Dúvidas', detalhe: 'Em que pode ajudá-lo?' },
          { path: '/contato', titulo: 'Contato', detalhe: 'Envie sua mensagem' },
          { path: '/sidebar', titulo: 'Sidebar', detalhe: 'Envie sua mensagem' }
        ]
      }
  } */
}
</script>

<style scoped>
  
</style>
