<template>
<div>
    <navbar/>

<div class="container mt-3">
    <div class="col-md-6 my-3">
        <div class="card list-group-secondary shadow">
            <div class="" style="cursor: pointer">
                <div class="row">
                    <div class="col-2">
                        <img style="width: 170%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5KqiP_7htmin1ZO_xz4J9ZGEFums_SeuuuqQbqce4n4KAND-etj0j4opK_2TSPhdNIQ&usqp=CAU" alt="" class="rounded-circle m-3" />
                    </div>
                    <div class="col-10 mt-4 pr-4">
                        <ul style="list-style-type: none">
                            <li>shop : <span class="fw-bold"></span></li>
                            <li>seller : <span class="fw-bold"></span></li>
                            <li>phone number : <span class="fw-bold"></span> </li>
                             <li>address : <span class="fw-bold"></span> </li>
                        </ul>
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