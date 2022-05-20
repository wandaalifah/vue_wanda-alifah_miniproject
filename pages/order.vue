<template>
    <v-main>
        <v-container>
            <h3 class="mt-8">Insert Your Reservation Code</h3>
            <v-layout>
                <v-flex>
                    <v-text-field v-model="insertedCode" label="Booking code"></v-text-field>
                </v-flex>
                <v-flex>
                    <v-btn
                        class="ma-2 accent"
                        :loading="loading"
                        :disabled="loading"
                        @click="loader = 'loading', showDetail(insertedCode)"
                    >Submit</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <div v-for="order in orders" :key="order.id">
                <h3 class="mb-4">Reservation Details</h3>
                <v-card>
                    <div v-for="user in order.detail_orders" :key="user">
                        <v-card-text>Name : {{ user.username }}</v-card-text>
                        <v-card-text>Phone Number : {{ user.phone_number }} </v-card-text>
                    </div>
                    <hr>
                    <v-card-text>Order Code : {{ order.order_code }}</v-card-text>
                    <v-card-text>Reservation date : {{ order.reserv_date }} {{ order.reserv_time }}</v-card-text>
                    <v-card-text>Menu ordered :
                        <ul v-for="list in order.ordered_menus" :key="list">
                            <li>{{ list }}</li>
                        </ul>
                    </v-card-text>
                    <v-card-text>Total : {{ order.total_order }}</v-card-text>
                </v-card>
            </div>
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
            insertedCode: "",
            orders: []
        }
    },
    apollo: {
        cafeCoffee_orders: {
            query: gql `query CafeOrder{
                cafeCoffee_orders{
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
        showDetail(insertedCode) {
            this.$apollo.query({
                query: gql`query CodeAdded($order_code: uuid) {
                    cafeCoffee_orders(where: { order_code: { _eq: $order_code } }) {
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
                        order_code: insertedCode,
                    }
                },
                updateQueries: {
                    cafeCoffeeQuery: (prev, { queryResult }) => {
                        const newOrder = queryResult.data.cafeCoffee_orders
                        const newOrders = [newOrder, ...prev.cafeCoffee_orders]
                        return {
                            cafeCoffee_orders: newOrders,
                        }
                    },
                },
            })
            const currentOrder = this.$apollo.cafeCoffee_orders
            this.orders.push({...currentOrder})
        }
    }
}
</script>