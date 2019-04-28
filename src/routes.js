import Home from "./components/home/Home.vue";
import ComoFunciona from "./components/como-funciona/ComoFunciona.vue";
import TelaGrupo from "./components/grupos/Tela.vue";
import DetalheGrupo from "./components/detalhe-grupo/DetalheGrupo.vue";
import Login from "./components/login/Login.vue";
import Cadastro from "./components/cadastro/Cadastro.vue";
import Duvidas from "./components/duvidas/Duvidas.vue";
import Contato from "./components/contato/Contato.vue";

import Sidebar from "./components/auth/menu/Sidebar.vue";
import Fatura from "./components/auth/fatura/Fatura.vue";
import Credito from "./components/auth/credito/Credito.vue";

export const routes = [
  { path: "/", component: Home, titulo: "Home", detalhe: "" },
  { path: "/sidebar", component: Sidebar, titulo: "Sidebar", detalhe: "" },
  { path: "/fatura", component: Fatura, titulo: "Fatura", detalhe: "" },
  { path: "/credito", component: Credito, titulo: "Credito", detalhe: "" },
  {
    path: "/como-funciona",
    component: ComoFunciona,
    titulo: "Por onde começar?",
    detalhe: "Vou te explicar como funciona!"
  },
  {
    path: "/tela-pesquisa-grupo",
    component: TelaGrupo,
    titulo: "Grupos",
    detalhe: "O que estão comprando?"
  },
  {
    path: "/duvidas",
    titulo: "Dúvidas",
    component: Duvidas,
    detalhe: "Em que pode ajudá-lo?"
  },
  {
    path: "/contato",
    titulo: "Contato",
    component: Contato,
    detalhe: "Envie sua mensagem"
  },
  {
    path: "/detalhe-grupo",
    component: DetalheGrupo,
    titulo: "DetalheGrupo",
    detalhe: "O que está vendendo?"
  },
  { path: "/login", component: Login, titulo: "Login", detalhe: "" },
  { path: "/cadastro", component: Cadastro, titulo: "Cadastro", detalhe: "" }
];
