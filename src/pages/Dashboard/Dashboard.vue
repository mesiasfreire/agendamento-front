<template>
  <v-app>
      <v-app-bar
      app
      color="primary"
      elevation="0"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
       <v-main>
        <v-container fluid>
          <BaseButton large block color="primary" descricao="Botão" @click="clicou"/>
          <BaseButton
            large
            color="secundary"
            descricao="Botão 2"
            icone="mdi-cloud-upload"
            @onClick=cliCou />
            <BaseButton
              fab
              dark
              small
              icone="mdi-minus"
            />
            <v-col>
              <tabela/>
            </v-col>
        </v-container>
    </v-main>
    <Menu :showMenu="drawer"/>
    {{drawer}}
  </v-app>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import Tabela from '@/components/Tabela.vue';
import Menu from './Menu.vue';

export default {
  components: { Menu, BaseButton, Tabela },
  data: () => ({
    group: null,
    drawer: false,
  }),
  methods: {
    clicou() {
      console.log('clicou');
    },
  },
};
</script>

<style>

</style>
