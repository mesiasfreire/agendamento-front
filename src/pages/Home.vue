<template>
<div>
  <section class="d-flex flex-column align-center justify-center ">
    <v-card elevation="0" style="width: 100%">
      <div class="px-10 mt-4">
        <v-img
        src="@/assets/seu-logo.png"
        lazy-src="https://picsum.photos/id/11/100/60"
        height="36"
        width="300"
      />
      </div>
    <v-container class="relative">
      <v-row align="center">
        <v-col md=4>
          <v-card class="pa-5" elevation="0" outlined>
            <h3>Login</h3>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              placeholder="Digite seu email"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Senha"
              placeholder="Digite sua senha"
              outlined
              required
              type="password"
            ></v-text-field>
          <v-btn
            block
            x-large
            color="blue lighten-4"
            @click.prevent="signIn"
          >
            Entrar
          </v-btn>
          <v-btn
            block
            x-large
            color="primary"
            class="mt-3"
            @click.prevent="createNewAccount"
          >
            Criar conta
          </v-btn>
          </v-form>
          </v-card>
         <v-snackbar
          absolute
          :multi-line='true'
          v-model="snackbar"
          :timeout="timeout"
        >
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="blue"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Fechar
            </v-btn>
         </template>
        </v-snackbar>
      </v-col>
      <v-spacer></v-spacer>
      <v-col md=6>
        <v-img
          src="@/assets/login.svg"
          lazy-src="https://picsum.photos/id/11/100/60"
          max-height="800"
          max-width="900"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      </v-row>
    </v-container>
    </v-card>
  </section>
</div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    email: '',
    password: '',
    snackbar: false,
    timeout: 5000,
    text: '',
  }),
  mounted() {
    console.log(this.$firebase);
  },
  methods: {
    async signIn() {
      const { email, password } = this;
      try {
        const response = await this.$firebase.auth().signInWithEmailAndPassword(email, password);
        this.snackbar = true;
        this.text = 'Bem vindo , aguarde você será redirecionado';
        console.log(response);
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          this.snackbar = true;
          this.text = 'E-mail / Senha informados estão incorretos';
        }
      }
    },
    createNewAccount() {

    },
  },
};
</script>
<style scoped>

</style>
