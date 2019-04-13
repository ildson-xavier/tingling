<template>
<div>
  <top-menu/>
    <div class="back-produto">
        <bread-crumb titulo="Detalhe do grupo" link="Detalhe do grupo"/>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="panel">
                        <div class="panel-heading">Detalhe do grupo</div>
                        <div class="panel-body">
                            <p>Este grupo foi criado para quem quer estudar no melhor 
                                curso de TI no Brasil, a Alura é uma estrutura virtual da 
                                instituição Caelum, conhecida pelas grandes empresas do Brasil 
                                como sendo os melhores cursos na área de Tecnologia da informação. 
                                (Pessoalmente já testei todos os demais cursos concorrentes e nenhum 
                                se equipara a Alura).</p>
                                <br/>
                            <div class="table-responsive">
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Expectativa</th>
                                    <th>Quatidade de integrantes</th>
                                    <th>Quantidade de itens</th>
                                    <th>Valor cotado</th>
                                    <th>Total cotado</th>
                                    <th>Valor proposto</th>
                                    <th>Total proposto</th>
                                    <th>Economizado</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Meta</td>
                                    <td>20</td>
                                    <td>20</td>
                                    <td>R$ 1.200,00</td>
                                    <td>R$ 24.000,00</td>
                                    <td>R$ 930,00</td>
                                    <td>R$ 18.600,00</td>
                                    <td>R$ 5.400,00</td>
                                  </tr>
                                  <tr>
                                    <td>Real</td>
                                    <td>12</td>
                                    <td>18</td>
                                    <td>R$ 1.200,00</td>
                                    <td>R$ 21.600,00</td>
                                    <td>R$ 930,00</td>
                                    <td>R$ 16.740,00</td>
                                    <td>R$ 4.860,00</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                        </div>
                      </div>
                      <div class="panel">
                        <div class="panel-heading">Regras</div>
                        <div class="panel-body">
                            <p>A regra é simples, você terá acesso a um login e uma senha, duas 
                                pessoas não poderão usar este mesmo login e senha ou sua conta será 
                                bloqueada, tenho apenas 3 vagas disponíveis no plano que eu contratei, 
                                permitindo no máximo 3 acessos simultâneos ao curso. Atendo todos do 
                                grupo com agilidade para qualquer suporte que precise, estou sempre 
                                online.</p>
                              <br/>
                            <div class="table-responsive">
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Data criação</th>
                                    <th>Inicio vigencia</th>
                                    <th>Fim vigencia</th>
                                    <th>Valor cotado</th>
                                    <th>Valor proposto</th>
                                    <th>Economia de</th>
                                    <th>Grupo proposto por</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>12/02/2019</td>
                                    <td>12/03/2019</td>
                                    <td>12/04/2019</td>
                                    <td>R$ 1.200,00</td>
                                    <td>R$ 930,00</td>
                                    <td>22.50%</td>
                                    <td>20</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-4">
                    <div class="panel">
                        <div class="panel-heading">Participação</div>
                        <div class="panel-body">
                            <radialbar-grafico/>
                            <p>Ainda temos 8 vagas disponíveis</p>
                            <router-link class="btn btn-primary btn-block" to="login">Quero participar</router-link>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-heading">Recurso por participante</div>
                        <div class="panel-body">
                          <p>Meta: R$ 23.234,12</p>
                          <p>Atingido: R$ 19.424,21</p>
                            <pie-grafico/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
   </div>
  </div>
</template>

<script>
import Menu from '../shared/menu/Menu.vue';
import ApexCharts from 'apexcharts';
import Breadcrumb from '../shared/breadcrumb/Breadcrumb.vue';
import Pie from '../graficos/Pie.vue';
import RadialBar from '../graficos/RadialBar.vue';
export default {
    components: {
        'bread-crumb': Breadcrumb,
        'pie-grafico': Pie,
        'radialbar-grafico': RadialBar,
        'top-menu': Menu
    },

};

        

</script>

<style scoped>
    .back-produto {
        background-color: #eee;
        margin-top: 20px;
    }

    .panel-heading {
        border-bottom: 1px solid #eee !important;
        background: #fff !important;
    }
</style>
