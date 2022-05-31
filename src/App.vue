<template>
    <div class="allPageView">
        <router-view />
    </div>
</template>
<script>
export default {
    name: "App",
};
</script>
<style>
@import "/assets/css/reset.css";
#app {
    font-family: Dm Sans;
    text-align: center;
    color: #2c3e50;
}
.allPageView {
    margin-top: 56px;
    /* margin-bottom: 50px; */
}
</style>
