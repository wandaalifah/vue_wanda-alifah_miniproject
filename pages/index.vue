<template>
  <v-main>
      <v-container>
        <v-row>
          <v-col class="mt-8" cols="12">
            <h1 class="d-flex justify-center">Menu</h1>
          </v-col>
          <v-card
            v-for="menu in cafeCoffee_menus" :key="menu.id"
            class="mx-auto my-12 accent"
            max-width="374"
          >
          <v-img
            height="250"
            :src="menu.url"
          ></v-img>
          <v-card-title>{{menu.menu_name}}</v-card-title>
          <v-card-text>Rp {{menu.price}}</v-card-text>
          <v-card-actions>
          <v-btn @click="AddToCart(menu.id, menu.url, menu.menu_name, menu.price, menu.name)">Add to cart</v-btn>
          </v-card-actions>
        </v-card>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      latte: 1,
    }
  },
  apollo: {
    cafeCoffee_menus: gql `query MyQuery{
      cafeCoffee_menus {
      id
      url
      menu_name
      price
      category_menu {
        category
      }
      name
      }
    }`
  },
  methods: {
    AddToCart: (id, url, menuName, price, name) => {
      this.$store.dispatch('insertCart', {
        id,
        url,
        menuName,
        price,
        name,
      })
    },
  },
}
</script>

<style>

</style>