const app = Vue.createApp({
    data: function() {
        return {
            cart: 0,
            premium: true,
            selectedFeature: 0
        }
    },
    methods: {
        selectFeature(id) {
            this.selectedFeature = id;
        }
    }
});
