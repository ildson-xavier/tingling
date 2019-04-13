<template>
    <div id="wrapper" class="active">
      
      <!-- Sidebar -->
      <div id="sidebar-wrapper">
      <ul id="sidebar_menu" class="sidebar-nav">
           <li class="sidebar-brand"><a id="menu-toggle" href="#">Menu<span id="main_icon" class="sub_icon glyphicon glyphicon-align-justify"></span></a></li>
      </ul>
        <ul class="sidebar-nav" id="sidebar">     
          <li><a><span class="sub_icon glyphicon glyphicon-link"></span>Lista de grupos</a></li>
          <li><a><span class="sub_icon glyphicon glyphicon-link"></span>Meus grupos</a></li>
          <li><a><span class="sub_icon glyphicon glyphicon-link"></span>Meus interesses</a></li>
          <li><router-link to="fatura"><span class="sub_icon glyphicon glyphicon-link"></span>Minhas faturas</router-link></li>
          <li><router-link to="credito"><span class="sub_icon glyphicon glyphicon-link"></span>Meus créditos</router-link></li>
          <li><router-link to="pages" class="btn btn-primary">Cadastra-se</router-link></li>
        </ul>
      </div>
      
    </div>
</template>

<script>

export default {
    
}
</script>

<style>
  .navbar-right {
     margin-right: 20px;
  }

</style>

