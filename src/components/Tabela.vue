<template>
<div class="rounded pa-5">
     <v-progress-linear
            color="primary"
            :active="loading"
            :indeterminate="loading"
            rounded
            height="6"
          ></v-progress-linear>
   <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>id</th>
          <th>nome</th>
          <th class="text-right">
            ação
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in unidades"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.nome }}</td>
          <td class="text-right"> <v-icon
                color="blue darken-2"
                @click.prevent="editar(item)"
                >
                mdi-pencil
                </v-icon></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div class="text-center">
    <v-pagination
      :length=last_page
      @input="proximo"
    ></v-pagination>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Tabela',
  data: () => ({
    page: 1,
    last_page: null,
    total: null,
    items: [],
    loading: true,
  }),
  mounted() {
    this.loading = false;
  },
  methods: {
    proximo(event) {
      this.page = event;
      axios.get(`http://localhost:8000/api/colaboradores?unidade_per_page=${this.page}`)
        .then((unidades) => {
          this.items = unidades.data.data;
        });
    },
    editar(id) {
      console.log(id);
    },
  },
  computed: {
    unidades() {
      return this.items;
    },
  },
  async created() {
    const unidades = await axios.get(`http://localhost:8000/api/colaboradores?unidade_per_page=${this.page}`);
    this.last_page = unidades.data.last_page;
    this.items = (unidades.data.data);
  },

};
</script>

<style scoped>
.section {
    border: 1px solid;
    color: #EEEEEE;
}

</style>
