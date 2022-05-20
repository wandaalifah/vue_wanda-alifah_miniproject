<template>
    <v-main>
        <v-container>
            <h2 class="mt-8 mb-8">Your Cart</h2>
            <v-card 
            v-for="cart in carts" :key="cart.id"
            outlined 
            class="mb-4 accent">
                <v-list-item>
                    <v-list-item-avatar
                    tile
                    size="100"
                    :src="cart.url"
                    ></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title mb-1">{{ cart.menuName }}</v-list-item-title>
                        <v-list-item-content>Rp {{ cart.price }}</v-list-item-content>
                        <v-list-item-content>
                            <input :v-model="cart.amount" type="number"/>
                        </v-list-item-content>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn color="red" max-width="100"><v-icon>mdi-delete</v-icon></v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-card>
            <h2 class="mt-8">Total :</h2>
            <v-spacer></v-spacer>
            <v-btn 
            class="mt-8 accent"
            :loading="loading"
            :disabled="loading"
            @click="loader = 'loading'"
            >Check out</v-btn>
        </v-container>
    </v-main>
</template>

<script>
import gql from 'graphql-tag'

export default {
    data() {
        return {
            loader: null,
            loading: false,
            carts: [this.$store.state.carts]
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
    methods: {
        insertOrder() {
            this.$apollo.mutate({
                mutation: gql`
                mutation insertOrder() {
                    insert_cafeCoffee_orders_one(objects: {ordered_menus: $ordered, reserv_date: $reserv_date, reserv_time: $reserve_time, total_order: $total}) {
                        created_at
                        id
                        order_code
                        ordered_menus
                        reserv_date
                        reserv_time
                        total_order
                    }
                }`
            })
        }
    },
}
</script>