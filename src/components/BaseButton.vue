<template>
  <v-btn
    v-bind="{...$props, ...$attrs}"
    v-on="{...$listeners}"
    class="pa-2 ma-6"
    >
     <template name=icon v-if="icone">
        <v-icon
          dark
          left
        >
            {{icone}}
        </v-icon>
    </template>{{ descricao }}
</v-btn>
</template>

<script>
export default {
  props: {
    descricao: {
      type: String,
    },
    icone: {
      type: String,
    },
  },
};
//   block
//   color="primary"
//   disabled
//   elevation="6"
//   large
//   loading
//   medium
//   small
//   x-large
//   x-small
</script>

<style>

</style>
