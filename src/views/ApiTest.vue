<template>
    <div>
        <div>Nombre: {{ name }}</div>
    </div>
</template>

<script>
import api from '../services/dummy.js'

export default {
    data: () => ({
        dummy: null
    }),
    computed: {
        name() {
            return (!this.dummy ? '...' : this.dummy.name)
        }
    },
    async mounted() {
        await this.fetchDummy()
    },
    methods: {
        async fetchDummy() {
            this.dummy = await api.get();
        }
    }
}
</script>