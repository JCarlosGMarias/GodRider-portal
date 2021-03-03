app.component('providers-view', {
    template:
    /*html*/
    `<div class="row">
        <div class="col-lg-12">
            <table class="table table-striped table-bordered">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Suscribed</th>
                </thead>
                <tbody>
                    <tr v-for="provider in providers">
                        <th scope="row">{{ provider.id }}</th>
                        <td>{{ provider.name }}</td>
                        <td>{{ provider.contact }}</td>
                        <td>
                            <input v-if="provider.isSuscribed" :id="'suscribeTo' + provider.id" class="form-check-input" type="checkbox" value="" checked>
                            <input v-else :id="'suscribeTo' + provider.id" class="form-check-input" type="checkbox" value="">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <button type="button" class="btn btn-success" style="width: 100%;" @click="connect">Save</button>
        </div>
    </div>`,
    data: function() {
        return {
            providers: []
        }
    },
    emits: ['logout-provider'],
    created: function () {
        this.GetProviders();
    },
    methods: {
        GetProviders: async function() {
            var urls = sessionStorage.getItem('apiUrls');
            var userToken = sessionStorage.getItem('userToken');

            if (urls == null || userToken == null) {
                this.$emit('logout-provider');
                return
            }

            var getProvidersUrl = JSON.parse(urls).GetProvidersUrl;
            var payload = JSON.stringify({"token": userToken});

            fetch(`http://localhost:8080${getProvidersUrl}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: payload
            })
            .then(response => response.json())
            .then(data => this.providers = data)
            .catch(error => console.log("Unexpected response: " + error));
        },
        connect: function() {
            var IDs = [];
            var checks = document.getElementsByClassName('form-check-input');
            for (let index = 0; index < checks.length; index++) {
                var element = checks[index];
                if (element.checked) {
                    IDs.push(parseInt(element.id.charAt(element.id.length - 1)));
                }
            }

            console.log(IDs);
        }
    }
})