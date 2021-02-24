app.component('providers-view', {
    template:
    /*html*/
    `<div class="row">
        <div class="col-md-4 offset-8">
            <button type="button" class="btn btn-success">Save</button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 offset-3">
            <table class="table table-striped table-bordered">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Suscribed</th>
                </thead>
                <tbody>
                    <tr v-for="provider in providers">
                        <td>{{ provider.id }}</td>
                        <td>{{ provider.name }}</td>
                        <td>{{ provider.contact }}</td>
                        <td>
                            <input v-if="provider.isSuscribed" class="form-check-input" type="checkbox" value="" checked>
                            <input v-else class="form-check-input" type="checkbox" value="">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`,
    data: function() {
        return {
            providers: []
        }
    },
    created: function () {
        this.GetProviders();
    },
    methods: {
        GetProviders: async function() {
            var data = {"token": sessionStorage.getItem('userToken')};

            let rs = await fetch("http://localhost:8080/api/providers/Get", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (rs.ok) {
                this.providers = await rs.json();
            } else {
                console.log("Unexpected response: " + rsData.status);
                this.providers = [];
            }
        }
    }
})