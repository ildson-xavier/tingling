<template>
  <div>
    <top-menu/>
    <bread-crumb titulo="Como funciona" link="Como funciona"/>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="/static/explicacao/interessado.JPG" alt="...">
            <div class="caption">
              <h3>Thumbnail label</h3>
              <p>...</p>
              <p>
                <a href="#" class="btn btn-primary" role="button">Button</a>
                <a href="#" class="btn btn-default" role="button">Button</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="/static/explicacao/grupo.JPG" alt="...">
            <div class="caption">
              <h3>Thumbnail label</h3>
              <p>...</p>
              <p>
                <a href="#" class="btn btn-primary" role="button">Button</a>
                <a href="#" class="btn btn-default" role="button">Button</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="/static/explicacao/fornecedores.JPG" alt="...">
            <div class="caption">
              <h3>Thumbnail label</h3>
              <p>...</p>
              <p>
                <a href="#" class="btn btn-primary" role="button">Button</a>
                <a href="#" class="btn btn-default" role="button">Button</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="/static/explicacao/fechado.JPG" alt="...">
            <div class="caption">
              <h3>Thumbnail label</h3>
              <p>...</p>
              <p>
                <a href="#" class="btn btn-primary" role="button">Button</a>
                <a href="#" class="btn btn-default" role="button">Button</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../shared/menu/Menu.vue";
import Breadcrumb from "../shared/breadcrumb/Breadcrumb.vue";
export default {
  components: {
    "bread-crumb": Breadcrumb,
    "top-menu": Menu
  }
};
</script>

<style>
</style>
