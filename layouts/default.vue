<template>
  <v-app>
    <div>
      <v-app-bar>
        <router-link to="/"><v-toolbar-title>CoffeeCafe</v-toolbar-title></router-link>
        <v-spacer></v-spacer>
        <router-link to="/order" class="mr-3">Check Order</router-link>
        <v-btn text to="/cart"><v-icon>mdi-cart</v-icon></v-btn>
      </v-app-bar>
    </div>
      <Nuxt />
  </v-app>
</template>

<script>

</script>

<style>
a { 
  text-decoration: none;
  color: inherit;
  }
</style>