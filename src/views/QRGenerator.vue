<template>

    <div class="bg-gray-50">
        <v-container>
            <v-row>
                <v-col>
         <img src="qrcode1.jpg" >
       </v-col>
       <v-col>
        <!-- <form @submit.prevent="getQRcode">
            <input type="text" v-model="QRValue">
        </form> -->
        <qrcode-vue v-if="QRValue" :value="QRValue" :size="400" />
        <h1>Scan <b>QR</b> to mark your attendance</h1>
        <h3>Refresh the page🔁 before you Scan</h3>
        </v-col>
      
        </v-row>
      </v-container>
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import axios from 'axios';

export default {
    data() {
        return{
            QRValue: "",
            timer:"",
        }
    },
    components: {
        QrcodeVue
    },
     mounted() {
       this.getQRcode();
       this.timer = setInterval(() => {
          this.save();
        }, 1000)
     },
     methods:{
      getQRcode(){
        axios.get('https://ptf-attendance.onrender.com/api/qr/get')
        .then((response)=>{
          // this.QRValue=response.data;
             this.QRValue = response.data.qrString;
          console.log(response.status);
          console.log(response.data);
          console.log("success...")
        }).catch((error)=>{
          console.log(error);
        }) 
        },

      save(){
        axios.post('https://ptf-attendance.onrender.com/api/qr/response')
        .then((response)=>{

       // let i = response.data;
        while (response.data.response == 100) {
            console.log(response.data);
            console.log("aaaa");
            this.$router.go();
            break;
        }  
        }).catch((error)=>{
          console.log(error);
        }) 
        }
        
      },
}
</script>

