<template>
  <div class="container p-3 mb-5">
    <p class="fw-bold">پرطرفدار</p>
     <vue-horizontal responsive>
            <section class=" m-3"> <displayComponent/> </section>
            <section class=" m-3"> <displayComponent/> </section>
            <section class=" m-3"> <displayComponent/> </section>
            <section class=" m-3"> <displayComponent/> </section>
            <section class=" m-3"> <displayComponent/> </section>
        </vue-horizontal>

         <p class="fw-bold">جدید</p>
     <vue-horizontal responsive>
            <section class=" m-3"> <displayComponent/> </section>
            <section class=" m-3"> <displayComponent/> </section>
            <section class=" m-3"> <displayComponent/> </section>
            <section class=" m-3"> <displayComponent/> </section>
            <section class=" m-3"> <displayComponent/> </section>
        </vue-horizontal>

        
         <p class="fw-bold">همه</p>
         <div class="row mt-3">
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
           <div class="col-6 col-md-3"><displayComponent/></div>
         </div>
   
    
  </div>
</template>

<script>
import displayComponent from './thumbCartComponent.vue'
import VueHorizontal from "vue-horizontal";
export default {
components : {displayComponent,VueHorizontal}
 
}
</script>

<style lang="">
  
</style>
