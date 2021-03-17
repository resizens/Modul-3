Vue.component('showform', {
    template : '#show-form',
    data(){
        return {
            data : {nama : '', jenis : '', jumlah: ''}
        }
    },
    methods : {
        simpan : function () {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.jenis = "";
            this.data.jumlah = "";
        }
    }
})

Vue.component('showdata', {
    template : '#show-data',
    props : ['data']
})

var app = new Vue({
    el : "#app",
    data : {
        tokomainan : {}
    },

    methods : {
        getData : function (value) {
            this.tokomainan = {
                nama : value.nama,
                jenis : value.jenis,
                jumlah : value.jumlah
            }
        }
    }
})