const {createApp} = Vue;

createApp({
	data() {
		return {
            emailList: [],
            preEmailList: []
		}
	},
	methods: {
        fetchData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp)
                console.log(resp.data)
                console.log(resp.data.response)

                this.preEmailList.push(resp.data.response);

                if (this.preEmailList.length === 10) {
                    this.emailList = this.preEmailList;
                }
            })
        },

        printEmailList (){
            for(let i = 0; i < 10; i++){
                this.fetchData()
            }
        }
	},
    mounted() {
        
    }
}).mount ('#app')