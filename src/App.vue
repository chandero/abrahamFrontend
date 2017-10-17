<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title" 
          router
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon 
      @click.stop="sideNav=!sideNav"
      class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{ title }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          flat 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Sistema de Gestión de Cartera',
      sideNav: false,
      menuItems: [
        {icon: 'featured_play_list', title: 'Solicitud de Crédito', link: '/solicitud'},
        {icon: 'send', title: 'Notificar Solicitud', link: '/notifica'},
        {icon: 'attach_money', title: 'Desembolsar Crédito', link: '/desembolso'},
        {icon: 'shopping_basket', title: 'Liquidar Cuota', link: '/liquida'},
        {icon: 'exit_to_app', title: 'Cerrar Sesión'}
      ]
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
