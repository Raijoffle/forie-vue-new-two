<template>
    <Header />
    <div class="serverError">
        <div class="image"><img src="@/assets/img/serverError.png" alt="" /></div>
        <div class="text"><span>An unknown error has occurred on the server.</span></div>
        <div class="errorFooter">
            <div class="footerImage"></div>
            <div class="footerText">
                <span>© 1997-2022 TURKISHEXPORTER.COM.TR | All Rights Reserved </span
                ><span>
                    This website belongs to Turkishexporter which is the largest export portal of Turkey. Due to its membership
                    EUROTRAY METAL has been allocated.</span
                ><span> You can reach this member company from EUROTRAY METAL contact page or call : 90 2622902615</span>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
    name: "ServerError",
    setup() {},
    components: {
        Header,
    },
};
</script>
<style scoped>
.serverError {
    position: relative;
    height: calc(100% - 56px);
    background-color: Red;
}
.serverError .image img {
    height: calc(100vh - 56px);
    position: absolute;
    right: 0;
    top: 0;
}
.serverError .text {
    position: absolute;
    left: 20%;
    top: 420px;
    text-align: center;
    color: #fff;
}
.text span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
}
.errorFooter {
    position: absolute;
    left: 20%;
    top: 700px;
}
.footerImage {
    display: flex;
}
.footerImage {
    background-image: url(../../assets/img/ForieNetwork.png);
    /* background-color: #000000; */
    background-blend-mode: screen;
    background-repeat: no-repeat;
    width: 200px;
    height: 50px;
}
.footerText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
</style>
