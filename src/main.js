const URL_API = "https://api.zipaddress.net/";

const vm = new Vue({
    el: '#demo',
    data: {
        inputZip: '',
        defaultZip: '1000000',
        results: '結果がここに表示されます'
    },
    computed: {
        // 入力されたものが数字かどうか、7文字かどうかで処理を分岐
        computedZip: function() {
            return !isNaN(this.inputZip) && this.inputZip.length == 7 ? this.inputZip : this.defaultZip
        }
    },
    methods: {
        getAddress: function(z) {
            let params = { params: { zipcode: z } };
            // 郵便番号検索のAPIからデータを取得する処理
            axios
                .get(URL_API, params)
                .then(res => {
                    this.results = res.data.code == 200 ? res.data.data.fullAddress : res.data.message;
                });
        }
    },
    filters: {
        // 7文字以上の数字が入力された際に、7文字に矯正する処理
        filterZip: function(d) {
            let buf = ('0000000' + d).slice(-7);
            return isNaN(buf) ? '1000000' : buf
        }
    }
})