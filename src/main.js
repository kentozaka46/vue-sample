const URL_API = "https://api.zipaddress.net/";

const vm = new Vue({
    el: '#demo',
    data: {
        inputZip: '',
        defaultZip: '1000000',
        results: '結果がここに表示されます'
    },
    computed: {
        computedZip: function() {
            return !isNaN(this.inputZip) && this.inputZip.length == 7 ? this.inputZip : this.defaultZip
        }
    },
    methods: {
        getAddress: function(z) {
            let params = { params: { zipcode: z } };
            axios
                .get(URL_API, params)
                .then(res => {
                    this.results = res.data.code == 200 ? res.data.data.fullAddress : res.data.message;
                });
        }
    },
    filters: {
        filterZip: function(d) {
            let buf = ('0000000' + d).slice(-7);
            return isNaN(buf) ? '1000000' : buf
        }
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})