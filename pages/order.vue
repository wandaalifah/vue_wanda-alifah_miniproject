<template>
    <v-main>
        <v-container>
            <h3 class="mt-8">Insert Your Reservation Code</h3>
            <v-layout>
                <v-flex>
                    <v-text-field label="Booking code" :v-model="order_code"></v-text-field>
                </v-flex>
                <v-flex>
                    <v-btn
                        class="ma-2"
                        :loading="loading"
                        :disabled="loading"
                        color="secondary"
                        @click="loader = 'loading', showDetail()"
                    >Submit</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <h3 class="mb-4">Reservation Details</h3>
            <v-card v-for="order in cafeCoffee_orders" :key="order.id">
                <div v-for="user in order.detail_orders" :key="user">
                    <v-card-text>Name : {{ user.username }}</v-card-text>
                    <v-card-text>Phone Number : {{ user.phone_number }} </v-card-text>
                </div>
                <hr>
                <v-card-text>Reservation date : {{ order.reserv_date }} {{ order.reserv_time }}</v-card-text>
                <v-card-text>Menu ordered :
                    <ul v-for="list in order.ordered_menus" :key="list">
                        <li>{{ list }}</li>
                    </ul>
                </v-card-text>
                <v-card-text>Total : {{ order.total_order }}</v-card-text>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
import gql from 'graphql-tag'

export default {
    data(){
        return {
            loader: null,
            loading: false,
            order_code: "5d85911e-192c-4565-b4c6-def24626485d",
            // orders: [this.$apollo.orders]
        }
    },
    apollo: {
        cafeCoffee_orders: {
                query: gql `query CafeOrder($order_code: uuid){
                    cafeCoffee_orders(where: {order_code: {_eq: $order_code}}){
                    id
                    order_code
                    ordered_menus
                    reserv_date
                    reserv_time
                    total_order
                    detail_orders {
                        phone_number
                        username
                        }
                    }
                }`,
                variables() {
                    return {
                        order_code: this.order_code
                    }
                },
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
}
</script>