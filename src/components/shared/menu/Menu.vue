<template>
  
    <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/"><span class="">TINGLING</span></router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav text-center">

        <li v-for="(rota, index) in rotas" :key="index">
            <router-link :to="rota.path? rota.path : '/'" class="font-negrito link">{{ rota.titulo }} <br/>
          <small class="font-small">{{ rota.detalhe }}</small>
           <span class="sr-only">(current)</span></router-link>
        </li>

      </ul>
      <form class="navbar-form navbar-right">
        <router-link to="login" class="btn btn-warning">Entrar</router-link> <span class="espaco">ou</span> 
        <router-link to="cadastro" class="btn btn-primary">Cadastra-se</router-link>
      </form>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  
</template>

<script>
export default {
   

    data: function() {
      return {
        rotas: [
          { path: '/como-funciona',  titulo: 'Por onde começar?', detalhe: 'Vou te explicar como funciona!' },
          { path: '/tela-pesquisa-grupo', titulo: 'Grupos', detalhe: 'O que estão comprando?' },
          { path: '/duvidas', titulo: 'Dúvidas', detalhe: 'Em que pode ajudá-lo?' },
          { path: '/contato', titulo: 'Contato', detalhe: 'Envie sua mensagem' }
        ]
      }
        
    }
  
}
</script>

<style scoped>
   .font-small {
     font-size: 11px;
     line-height: 0.5;
   }

   .font-negrito {
       font-weight: 400;
       font-size: 16px;
   }

   .link {
     color: #333 !important;
   }

   .link:hover {
     background-color:#eee !important;
     color: #f0ad4e !important;
   }

   .navbar-default {
     background-image: linear-gradient( to bottom,#eee, rgb(247, 247, 247)  );
   }

   .espaco {
     margin-left: 5px;
     margin-right: 5px;
   }
</style>
