<template>
    <v-main>
        <v-container>
            <h3 class="mt-8">Insert Your Reservation Code</h3>
            <v-layout>
                <v-flex>
                    <v-text-field label="Booking code"></v-text-field>
                </v-flex>
                <v-flex>
                    <v-btn
                        class="ma-2"
                        :loading="loading"
                        :disabled="loading"
                        color="secondary"
                        @click="loader = 'loading'"
                    >Submit</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <h3 class="mb-4">Reservation Details</h3>
            <v-card>
                <v-card-text>Name :</v-card-text>
                <v-card-text>Phone Number : </v-card-text>
                <hr>
                <v-card-text>Reservation date :</v-card-text>
                <v-card-text>Status :</v-card-text>
                <v-card-text>Menu ordered :</v-card-text>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data(){
        return {
            loader: null,
            loading: false,
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