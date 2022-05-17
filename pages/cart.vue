<template>
    <v-main>
        <v-container>
            <h2 class="mt-8 mb-8">Your Cart</h2>
            <v-card outlined class="mb-4 accent">
                <v-list-item>
                    <v-list-item-avatar
                    tile
                    size="100"
                    color="grey"
                    ></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title mb-1">Latte</v-list-item-title>
                        <v-list-item-content>Rp 25000</v-list-item-content>
                        <v-list-item-content>
                            <input :v-model="amount" type="number"/>
                        </v-list-item-content>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn color="red" max-width="100"><v-icon>mdi-delete</v-icon></v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-card>
            <v-card outlined class="mb-4 accent">
                <v-list-item>
                    <v-list-item-avatar
                    tile
                    size="100"
                    color="grey"
                    ></v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title mb-1">Latte</v-list-item-title>
                        <v-list-item-content>Rp 25000</v-list-item-content>
                        <v-list-item-content>
                            <input :v-model="amount" type="number"/>
                        </v-list-item-content>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn color="red" max-width="100"><v-icon>mdi-delete</v-icon></v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {

}
</script>