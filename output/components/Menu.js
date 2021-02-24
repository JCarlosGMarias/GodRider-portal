app.component('app-menu', {
    template:
    /*html*/
    `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">GodRider</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="(menu, index) in menuOptions">
                        <a v-if="menu.isSelected" class="nav-link active" aria-current="page" href="#" @click="renderMenu(index)">{{ menu.name }}</a>
                        <a v-else class="nav-link" href="#" @click="renderMenu(index)">{{ menu.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`,
    data: function() {
        return {
            menuOptions: [
                { name: 'Home', isSelected: true },
                { name: 'Providers', isSelected: false },
                { name: 'Orders', isSelected: false },
                { name: 'Logout', isSelected: false }
            ]
        }
    },
    methods: {
        renderMenu(index) {
            this.menuOptions.forEach((menu) => {
                menu.isSelected = false;
            })

            this.menuOptions[index].isSelected = true;
            this.$emit('refresh-app', index);
        }
    }
})