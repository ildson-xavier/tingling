<template>
  <div class="carousel-width">
    <div id="carousel-example-generic" class="carousel slide carousel-custom" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <!-- <li data-target="#carousel-example-generic" data-slide-to="2"></li> -->
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div
          class="item carousel-item-custom active"
          style="background-image: url('https://radiohuancavilca.com.ec/wp-content/uploads/2019/02/Economi%CC%81a-Colaborativa-1.png');"
        >
          <!-- <img
            src="https://radiohuancavilca.com.ec/wp-content/uploads/2019/02/Economi%CC%81a-Colaborativa-1.png"
            alt="..."
          >-->
          <div class="carousel-caption">Economia colaborativa 1</div>
        </div>
        <div
          class="item carousel-item-custom"
          style="background-image: url('https://radiohuancavilca.com.ec/wp-content/uploads/2019/02/Economi%CC%81a-Colaborativa-1.png');"
        >
          <!-- <img
            src="https://radiohuancavilca.com.ec/wp-content/uploads/2019/02/Economi%CC%81a-Colaborativa-1.png"
            alt="..."
          >-->
          <div class="carousel-caption">Economia colaborativa 2</div>
        </div>
      </div>

      <!-- Controls -->
      <a
        class="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-width {
  margin-top: 70px;
  max-width: 100%;
}

.carousel-item-custom {
  height: 80vh;
  background-position: cover;
}
</style>
