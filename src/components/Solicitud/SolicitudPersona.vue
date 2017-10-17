<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 lg2>
        <v-select v-bind:items="tiposDocumento" v-model="persona.documento.tipo" label="Tipo de Persona" class="input-group--focused" item-value="" ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([]),
    ...mapMutations([])
  }
}
</script>
