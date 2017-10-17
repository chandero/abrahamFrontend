<template>
 <div>
   <div>
   <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 lg2>
        <v-select v-bind:items="tiposDocumento" v-model="persona.documento.tipo" label="Tipo de Documento" class="input-group--focused" item-value=""></v-select>
      </v-flex>
      <v-flex xs12 sm6 md3 lg2>
        <v-text-field name="inputDocumento" v-model="persona.documento.numero" label="Documento" id="inputDocumento"></v-text-field>
      </v-flex>
      <v-flex xs1 sm1 md1 lg1>
        <v-btn primary fab small dark>
          <v-icon>search</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm6 md3 lg2>
        <v-text-field name="inputPrimerNombre" v-model="persona.nombre.primerNombre" label="Primer Nombre" id="inputPrimerNombre"></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3 lg2>
        <v-text-field name="inputSegundoNombre" v-model="persona.nombre.segundoNombre" label="Segundo Nombre" id="inputSegundoNombre"></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3 lg2>
        <v-text-field name="inputPrimerApellido" v-model="persona.nombre.primerApellido" label="Primer Apellido" id="inputPrimerApellido"></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3 lg2>
        <v-text-field name="inputSegundoApellido" v-model="persona.nombre.segundoApellido" label="Segundo Apellido" id="inputSegundoApellido"></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3 lg2>
        <v-text-field name="inputLugarExpedicion" v-model="persona.documento.lugarExpedicion" label="Lugar Expedición" id="inputLugarExpedicion"></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3 lg2>
        <v-dialog persistent lazy full-width>
          <v-text-field slot="activator" label="Fecha de Expedición" v-model="persona.documento.fechaDeExpedicion" prepend-icon="event" readonly></v-text-field>
          <v-date-picker v-model="persona.documento.fechaDeExpedicion" scrollable actions>
            <template scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat primary @click="cancel">Cancelar</v-btn>
                <v-btn flat primary @click="save">Aceptar</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
  <div>
  <v-container>
    <v-tabs v-model="activeTab" dark  icons centered>
        <v-tabs-bar class="primary">
         <v-tabs-slider class="yellow"></v-tabs-slider>
         <v-tabs-item v-for="tab in tabs" :key="tab.key" :href="'#' + tab.key" ripple>
            <v-icon> {{ tab.icon }}</v-icon>
            {{ tab.text }}
         </v-tabs-item>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content v-for="tab in tabs" :key="tab.key" :id="tab.text">
            <keep-alive>
              <component :is="tab.template"></component>
            </keep-alive>
          </v-tabs-content>
        </v-tabs-items>
    </v-tabs>
  </v-container>
  </div>
 </div>
</template>

<script>
import SolicitudPersona from './SolicitudPersona'

export default {
  created () {
    this.store.dispatch('consultarDocumentos')
  },
  components: {
    'solicitud-persona': SolicitudPersona
  },
  data () {
    return {
      tabs: [
        { key: 1, icon: 'person_pin', text: 'Persona', template: 'solicitud-persona' },
        { key: 2, icon: 'description', text: 'Solicitud', template: '' },
        { key: 3, icon: 'recent_actors', text: 'Referencias', template: '' },
        { key: 4, icon: 'perm_device_information', text: 'Observaciones', template: '' }
      ],
      activeTab: null,
      tiposDocumento: [
        { value: 1, text: 'Tarjeta de Identidad' },
        { value: 3, text: 'Cédula de Ciudadanía' },
        { value: 4, text: 'NIT' }
      ],
      persona: {
        documento: {
          tipo: 0,
          numero: '',
          fechaDeExpedicion: '',
          lugarDeExpedicion: ''
        },
        nombre: {
          primerNombre: '',
          segundoNombre: '',
          primerApellido: '',
          segundoApellido: ''
        }
      }
    }
  },
  methods: {
    next () {
      this.activeTab = this.tabs[(this.tabs.indexOf(this.activeTab) + 1) % this.tabs.length]
    }
  }
}
</script>

<<style>

</style>

