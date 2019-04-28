<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>
    <div class="barra-azul">
      <div class="container bread-crump">
        <ol class="breadcrumb">
          <li>Você está em:</li>
          <router-link to="/" class="link">Home</router-link>
          <span class="esp">/</span>
          <li>{{ link }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titulo", "link"]
};
</script>

<style scoped>
.titulo {
  margin-top: 70px;
  padding: 40px;
  text-align: center;
  background-image: url("/static/explicacao/como-funciona.png");
  background-repeat: repeat-x;
  background-color: rgba(226, 226, 226, 0.5);
}

.barra-azul {
  --background-color: #337ab7;
  background-image: linear-gradient(to bottom, #337ab7, #1d65a5);
  margin-top: -10px;
  margin-bottom: 25px;
}

.breadcrumb {
  margin-top: 3px;
  color: #fff;
  text-decoration: none;
  --background-color: #337ab7;
  background-image: linear-gradient(to bottom, #337ab7, #1d65a5);
}
a.breadcrumb:hover {
  color: #fff;
  text-decoration: none;
}

.link {
  color: #fff;
}

.link:hover {
  color: #f0ad4e;
  text-decoration: none;
}

.bread-crump {
  height: 40px;
}

.esp {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
