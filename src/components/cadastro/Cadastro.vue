<template>
  <div>
    <top-menu/>
    <div class="back-login">
      <div class="box-login">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-9"></div>
            <div class="col-md-3">
              <div class="panel">
                <div class="text-center texto">Nova conta</div>
                <div class="panel-body">
                  <form>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Nome"
                      >
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Sobrenome"
                      >
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      >
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Senha"
                      >
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Confirmação da senha"
                      >
                    </div>
                    <div class="checkbox">
                      <label class="texto">
                        <input type="checkbox"> Ao cadastrar você concorda com os
                        <a
                          href="#"
                          class="termo-fonte"
                        >Termos de Uso</a>
                      </label>
                    </div>
                  </form>
                  <a href="#" class="btn btn-primary btn-block botao">Cadastrar</a>
                  <div class="row">
                    <div class="col-md-5 barra texto"></div>
                    <div class="col-md-2 text-center texto">OU</div>
                    <div class="col-md-5 barra texto"></div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <a href="#" class="btn btn-primary btn-block botao">Facebook</a>
                    </div>
                    <div class="col-md-6">
                      <a href="#" class="btn btn-primary btn-block botao">Google</a>
                    </div>
                    <div class="col-md-12">
                      <p class="texto">
                        Já possui uma conta? Vá para página de
                        <a href="#" class="termo-fonte">Login</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../shared/menu/Menu.vue";
export default {
  components: {
    "top-menu": Menu
  }
};
</script>

<style scoped>
.back-login {
  height: 100vh;
  background-image: url("/static/login/formigas4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.box-login {
  height: 680px;
}

.panel {
  margin-top: 100px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0.9;
}

.panel-heading {
  text-align: center;
  font-weight: 600;
}

.botao {
  background-image: linear-gradient(to bottom, #337ab7, #1d65a5) !important;
}

.texto {
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #222;
}

.link {
  color: #222;
}

.link:hover {
  text-decoration: none;
  color: #222;
}
.barra {
  border-bottom: 1px solid #eee;
  width: 40%;
}

.divisor {
  border-bottom: 1px solid #eee;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
}

.termo-fonte {
  color: #f0ad4e;
}
</style>
