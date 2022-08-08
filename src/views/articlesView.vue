<template>
<div>
<navbar/>
<div class="container mt-3">
    <div class="col-md-6 my-3">
        <div class="card list-group-secondary shadow">
            <div class="card-body" style="cursor:pointer">
                <div class="row">
                    <div class="col-2">
                        <img style="width:150%" src="https://iconarchive.com/download/i103416/paomedia/small-n-flat/flower.ico" alt="" class="   m-3" />
                    </div>
                    <div class="col-10 pr-5 container text-end">
                        <h3>header</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam expedita aut molestiae <br><span class="fw-bold">... more </span> </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import navbar from '../components/General/navbarComponent.vue'
export default {
components:{navbar}
}
</script>