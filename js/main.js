const {createApp} = Vue;

createApp({
	data() {
		return {
            emailList: []
		}
	},
	methods: {
        fetchData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp)
                console.log(resp.data)
                console.log(resp.data.response)

                this.emailList.push(resp.data.response)
            })
        }
	},
    mounted() {
        // stampa di 10 email
        for(let i = 0; i < 10; i++){
            this.fetchData()
        }
    }
}).mount ('#app')