<template>
<div>
    
    <div class="back-grupo">
        <div class="container">
            <h2 class="text-center">Últimos grupos criados</h2><br/>

            <div class="row">
                <div class="col-md-3">
                    <div class="panel panel-primary sem-borda">
                        <div class="panel-heading">
                            <h3 class="panel-title text-center">
                                    <font-awesome-icon icon="bicycle" size="2x"/><br/>
                                    <h4>Bicicleta monarqui aluminio 2019 aro 17</h4>
                                <br/>                   
                            </h3>
                        </div>
                        <div class="panel-body">
                            <h4 class="text-center"></h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                <router-link class="btn btn-success btn-block" to="detalhe-grupo">Mais Detalhes</router-link>
                                    </li>
                                <li class="list-group-item ">Início Vigência: 11/02/2019</li>
                                <li class="list-group-item">Fim Vigência: 20/02/2019</li>
                                <li class="list-group-item">Valor de mercado: R$ 1.890,00</li>
                                <li class="list-group-item">Valor negociável: R$ 1100,00</li>
                                <li class="list-group-item">Vagas: 12/20</li>
                                <li class="list-group-item">
                                    <span class="label label-default">Aguardando inicio da vigência</span>
                                </li>
                            </ul>
                            <apexchart type=radialBar height=250 :options="chartOptions" :series="series" />
                        
                        </div>
                    </div>
                </div>
                
                <div class="col-md-3">
                    <div class="panel panel-primary sem-borda">
                        <div class="panel-heading">
                            <h3 class="panel-title text-center">
                                    <font-awesome-icon icon="bicycle"  size="2x"/><br/>
                                    <h4>Bicicleta monarqui aluminio 2019 aro 17</h4>
                                <br/>                   
                            </h3>
                        </div>
                        <div class="panel-body">
                            <h4 class="text-center"></h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <router-link class="btn btn-success btn-block" to="detalhe-grupo">Mais Detalhes</router-link>
                                    </li>
                                <li class="list-group-item ">Início Vigência: 11/02/2019</li>
                                <li class="list-group-item">Fim Vigência: 20/02/2019</li>
                                <li class="list-group-item">Valor de mercado: R$ 1.890,00</li>
                                <li class="list-group-item">Valor negociável: R$ 1100,00</li>
                                <li class="list-group-item">Vagas: 12/20</li>
                                <li class="list-group-item">
                                    <span class="label label-default">Aguardando inicio da vigência</span>
                                </li>
                            </ul>
                            <apexchart type=radialBar height=250 :options="chartOptions" :series="series" />
                        
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="panel panel-primary sem-borda">
                        <div class="panel-heading">
                            <h3 class="panel-title text-center">
                                    <font-awesome-icon icon="tools"  size="2x"/><br/>
                                    <h4>Bicicleta monarqui aluminio 2019 aro 17</h4>
                                <br/>                   
                            </h3>
                        </div>
                        <div class="panel-body">
                            <h4 class="text-center"></h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                <router-link class="btn btn-success btn-block" to="detalhe-grupo">Mais Detalhes</router-link>
                                    </li>
                                <li class="list-group-item ">Início Vigência: 11/02/2019</li>
                                <li class="list-group-item">Fim Vigência: 20/02/2019</li>
                                <li class="list-group-item">Valor de mercado: R$ 1.890,00</li>
                                <li class="list-group-item">Valor negociável: R$ 1100,00</li>
                                <li class="list-group-item">Vagas: 12/20</li>
                                <li class="list-group-item">
                                    <span class="label label-default">Aguardando inicio da vigência</span>
                                </li>
                            </ul>
                            <apexchart type=radialBar height=250 :options="chartOptions" :series="series" />
                        
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="panel panel-primary sem-borda">
                        <div class="panel-heading">
                            <h3 class="panel-title text-center">
                                    <font-awesome-icon icon="bicycle"  size="2x"/><br/>
                                    <h4>Bicicleta monarqui aluminio 2019 aro 17</h4>
                                <br/>                   
                            </h3>
                        </div>
                        <div class="panel-body">
                            <h4 class="text-center"></h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                <router-link class="btn btn-success btn-block" to="detalhe-grupo">Mais Detalhes</router-link>
                                    </li>
                                <li class="list-group-item ">Início Vigência: 11/02/2019</li>
                                <li class="list-group-item">Fim Vigência: 20/02/2019</li>
                                <li class="list-group-item">Valor de mercado: R$ 1.890,00</li>
                                <li class="list-group-item">Valor negociável: R$ 1100,00</li>
                                <li class="list-group-item">Vagas: 12/20</li>
                                <li class="list-group-item">
                                    <span class="label label-default">Aguardando inicio da vigência</span>
                                </li>
                            </ul>
                            <apexchart type=radialBar height=250 :options="chartOptions" :series="series" />
                        
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="text-center">
                        <button type="button" class="btn btn-warning btn-lg">Pesquisar mais grupos</button>
                    </div>
                </div>
                <br/>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
        series: [67],
        chartOptions: {
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 1,
                size: '60%',
                image: '/static/grupo.png',
                imageWidth: 54,
                imageHeight: 54,
                imageClipped: false
              },
              dataLabels: {
                name: {
                  show: false,
                  color: '#fff'
                },
                value: {
                  show: true,
                  color: '#333',
                  offsetY: 50,
                  fontSize: '18px'

                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Volatility'],
        }
        }
    }
}
</script>

<style scoped>
    .back-grupo {
        background-color: #eee;
        margin-top: 20px;
    }

    .sem-borda {
        border: 0px;
        -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.30);
        -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.30);
        box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.30);
        --border-radius: 10px 20px 20px ;
    }

    .link-titulo {
        color: #fff;

    }

    .link-card:hover {
        text-decoration:none;

    }

    .panel {
       border: 0.2px solid rgba(255,255,255,.5);
    }

    .panel:hover {
        -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
        -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
        box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
        border: 0px solid rgba(255,255,255,.5);
        transition: 0.5s ease-in;
        -webkit-transition: 0.5s ease-in;
        -moz-transition: 0.5s ease-in;
        -o-transition: 0.5s ease-in;
    }

    a.link-titulo:hover {
        text-decoration:none;
        color: #fff;
    }

    .panel-footer {
        height: 2px;
        background-color: #337ab7;
    }

    .panel-title {
        padding: 5px;
        max-height: 80px;
    }

    .default{
        background-color: #eee;
        text-align: center;
    }

    .list-group-item {
        padding: 5px;
    }

    .panel-body {
        padding: 2px;
        margin: 0px;
    }

    .panel-heading {
        background-image: linear-gradient( to bottom, #337ab7, #1d65a5 );
    }
    

</style>
