const app = Vue.createApp({
    data: function() {
        return {
            selectedFeature: 0
        }
    },
    methods: {
        selectFeature(id) {
            this.selectedFeature = id;
        },
        logoutApp() {
            sessionStorage.clear();
            window.location.href = "/";
        }
    }
});
