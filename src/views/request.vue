<template>
    
</template>
<script>
export default{
    name:"MyRequest",
    data(){
        requestData:[];
    },
    created(){
       this.getDataRequest(); 
    },
    methods:{
        getDataRequest(){
            axios
        .get("http://localhost:3000/pessoas").then((response)=>{
          console.log(response.data)
          this.requestData = response.data
        }).catch((err)=>{
          console.log(err)
        })
        }
    }
}
</script>