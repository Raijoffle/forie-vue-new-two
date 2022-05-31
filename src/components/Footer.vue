<template>
    <div id="footer">
        <div class="footerLogo">
            <span><img src="@/assets/img/ForieNetwork.svg" alt="" /></span>
        </div>
        <div class="footerText">
            <span>© 1997-2022 <a href="#">TURKISHEXPORTER.COM.TR</a> | All Rights Reserved</span>
            <span>
                This website belongs to Turkishexporter which is the largest export portal of Turkey. Due to its membership
                <a href="#">EUROTRAY METAL</a> has been allocated. You can reach this member company from
                <a href="#">EUROTRAY METAL</a> contact page or call : <a href="tel:+90 2622902615">+90 2622902615</a></span
            >
        </div>
        <div class="footerLanguage">
            <div class="changeLanguage">
                <span> <country-flag country="tr" size="normal" /></span>
                <span>Türkçe</span>
                <span><img src="@/assets/img/arrowDown.svg" alt="" /></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterView",
    components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    width: 100%;
    height: 240px;
    background: #1b1b1d;
}
.footerLogo {
    width: 128px;
    height: 32px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.footerText {
    max-width: 859px;
    width: 100%;
    /* height: 48px; */
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    letter-spacing: 0.4px;
    color: #e1e2e5;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.footerLanguage {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px 10px 12px;
    gap: 8px;
    width: 138px;
    height: 40px;
    border-radius: 100px;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.changeLanguage {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: #ffffff;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.footerText span a {
    color: #a5c8ff !important;
    text-decoration: none !important;
}

@media only screen and (max-width: 475px) {
    #footer {
        padding: 0px;
    }
}
</style>
