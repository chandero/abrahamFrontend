<template>
<v-container>
      <v-tabs v-model="activeTab" dark fixed icons centered>
        <v-tabs-bar class="primary">
         <v-tabs-slider class="yellow"></v-tabs-slider>
         <v-tabs-item v-for="tab in tabs" :key="tab" :href="'#' + tab" ripple>
            <!--<v-icon> {{ tab.icon }}</v-icon> -->
            {{ tab }}
         </v-tabs-item>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content v-for="tab in tabs" :key="tab" :id="tab">
            <v-card flat>
              <v-card-text>{{ tab }}</v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
    </v-tabs>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      tabs: ['Persona', 'Solicitud', 'Referencias', 'Observaciones'],
      /* tabs: [
        { id: 1, icon: 'person_pin', tab: 'Persona', template: '' },
        { id: 2, icon: 'description', tab: 'Solicitud', template: '' },
        { id: 3, icon: 'recent_actors', tab: 'Referencias', template: '' },
        { id: 4, icon: 'perm_device_information', tab: 'Observaciones', template: '' }
      ] */
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

