<template>
    <Header />
    <div class="home">
        <div class="homeHeader">
            <img src="@/assets/img/alkim81.jpg" alt="" />
            <div class="imageGray"></div>
            <div class="homeHeaderContent">
                <div class="homeTitle"><h1>Eurotray Metal Kablo</h1></div>
                <div class="homeText">
                    <span
                        >Export Products: cable trays, cable ladders, wire mesh trays, standart cable trays, heavy duty cable trays, strenghened cable
                        trays, unperforated cable trays, unperforated heavy duty cable trays, wire mesh cable trays, trunking cable trays, marine
                        cable trays, underfloor cable trays, ladder cable trays, marine cable ladders, u profiles, c profiles, welded u profiles, u
                        profile ceiling supports, u brackets, wall brackets, c brackets, double c brackets, wall type c brackets, npi profiles, welded
                        npi profiles, npi, steel strips</span
                    >
                </div>
                <div class="btnSroll"><span class="material-icons">arrow_downward</span> <span>SCROLL</span></div>
            </div>
        </div>
        <div class="homePage container">
            <div class="homeAbout">
                <div class="aboutHead">
                    <span class="aboutTitle">About Us</span>
                    <span class="aboutText"
                        >As a member of metal industry based group of companies, Eurotray brings decades of metal manafactoring experince with the
                        construction industry since the early 1990s. New facility which is equipped with the latestproduction machenry and we hod, was
                        established in 2012 in order prowide best quality and high capacity to the customer needs .</span
                    >
                </div>
                <div class="aboutContent">
                    <div class="aboutImage"><img src="@/assets/img/aboutImage.png" alt="" /></div>
                    <div class="userAuth">
                        <div class="authStatus"><span class="material-icons"> account_circle </span> <span>Authorized</span></div>
                        <div class="userData">
                            <div class="userName"><span>Eser Kaya</span></div>
                            <div class="userAdress"><span>Şekerpınar Mah. Ece Sk. No: 3, Gebze, Kocaeli, Turkey</span></div>
                            <div class="userTel"><span>+90 262 290 26 15</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="homeProducts">
                <div class="productsHead">
                    <span class="productsTitle">Products</span>
                    <span class="productsText"
                        >Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos.</span
                    >
                </div>
                <div class="productSlide">
                    <!-- slidee start -->
                    <carousel :settings="settings" :breakpoints="breakpoints">
                        <slide v-for="slide in 10" :key="slide">
                            <div class="carousel__item">
                                <img
                                    class="w-100"
                                    :src="require(`/src/assets/img/productImage1.png`)"
                                    oncontextmenu="return false"
                                    onselectstart="return false"
                                    ondragstart="return false"
                                />

                                <small :title="slide">{{ slide }} slide</small>
                            </div>
                        </slide>
                        <template #addons>
                            <div class="sider-btn">
                                <Navigation />
                            </div>
                        </template>
                    </carousel>
                    <!-- slidee end -->
                    <div class="allProducts"><span>All Products</span></div>
                </div>
                <div class="productsTags">
                    <div class="tag"><span class="material-icons">label</span><span>cable</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>cables</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>كابل</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>الكابلات</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>قناة الكابل</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>سلالم الكابلات</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>cable ducts</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>cable duct</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>cable ladders</span></div>
                    <div class="tag"><span class="material-icons">label</span><span>cable ladder</span></div>
                </div>
            </div>
        </div>
        <Manufacturing />
        <Contact />
    </div>
    <Footer />
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Contact from "@/components/PageDownContact.vue";
import Manufacturing from "@/components/Manufacturing.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
    name: "HomeView",
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1.5,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            200: {
                itemsToShow: 1,
                snapAlign: "center",
            },
            300: {
                itemsToShow: 1,
                snapAlign: "start",
            },
            400: {
                itemsToShow: 1.5,
                snapAlign: "start",
            },
            500: {
                itemsToShow: 1.5,
                snapAlign: "start",
            },
            600: {
                itemsToShow: 2,
                snapAlign: "start",
            },
            // 700px and up
            700: {
                itemsToShow: 2,
                snapAlign: "start",
            },
            // 1024 and up
            1024: {
                itemsToShow: 4,
                snapAlign: "start",
            },
        },
    }),
    components: {
        Carousel,
        Slide,
        Navigation,
        Contact,
        Manufacturing,
        Header,
        Footer,
    },
    created() {
        // axios.get(this.url).then((response) => (this.products = response.data));
    },
    methods: {},
});
</script>
<style scoped>
.homeHeader {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.homeHeader img {
    width: 100%;
    height: 100%;
    max-height: 600px;
}
.imageGray {
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 590px;
    left: 0px;
    top: 0px;
    background: #1b1b1d;
    opacity: 0.8;
}
.homeHeaderContent {
    background-color: transparent;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-height: 600px;
}
.homeTitle {
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 52px;
    text-align: center;
    color: #fdfbff;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    letter-spacing: 1px;
}
.homeText {
    max-width: 1128px;
    width: 100%;
    height: 96px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #fdfbff;
    margin-top: 16px;
}
.btnSroll {
    position: absolute;
    bottom: 20px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
}
.btnSroll:hover {
    opacity: 0.8;
    color: #005eb5;
}
.homePage {
    width: 100%;
    height: 100%;
    margin-top: 100px;
}
.homeAbout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.aboutHead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.aboutHead .aboutTitle {
    max-width: 1124px;
    width: 100%;
    height: 44px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #005eb5;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.aboutHead .aboutText {
    max-width: 1124px;
    width: 100%;
    /* height: 72px; */
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.aboutContent {
    max-width: 1124px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin-top: 24px;
}
.aboutContent .aboutImage {
    width: 744px;
    height: 264px;
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.aboutContent .aboutImage img {
    width: 100%;
    height: 100%;
}
.userAuth {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px;
    max-width: 360px;
    width: 100%;
    height: 264px;
    background: #005eb5;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.authStatus {
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.userData {
    color: #ffffff;
}
.userName {
    width: 280px;
    height: 28px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-feature-settings: "liga" off;
    color: #ffffff;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.userAdress {
    width: 280px;
    height: 48px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.5px;
    color: #ffffff;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
.userTel {
    width: 280px;
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.5px;
    color: #ffffff;
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
}
.homeProducts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
    gap: 10px;
    width: 100%;
    height: 800px;
    margin-top: 100px;
}
.productsHead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.productsTitle {
    width: 150px;
    height: 44px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    color: #555f71;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.productsText {
    max-width: 1128px;
    width: 100%;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
}
.productSlide {
    width: 100%;
    height: 430px;
}
.carousel__item {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 250px;
    height: 300px;
    background: #fdfbff;
    border: 1px solid rgba(116, 119, 127, 0.08);
    border-radius: 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: 8px;
}
.carousel__item img {
    width: 250px;
    height: 244px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
}

.carousel__item small {
    width: 100%;
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    padding: 0px 16px;
    box-sizing: border-box;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.allProducts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 10px;
    width: 151px;
    height: 40px;
    background: #555f71;
    border-radius: 100px;
    flex: none;
    order: 4;
    flex-grow: 0;
    margin: 70px auto;
    cursor: pointer;
}
.allProducts span {
    height: 20px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #ffffff;
    text-transform: uppercase;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.productsTags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-height: 88px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.productsTags::-webkit-scrollbar {
    display: none;
}
.tag {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 16px 6px 8px;
    gap: 8px;
    height: 32px;
    background: #fdfbff;
    border: 1px solid rgba(116, 119, 127, 0.08);
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 6px 4.6px;
}
.tag span:nth-child(2) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #43474f;
    flex: none;
    order: 1;
    flex-grow: 0;
}
@media only screen and (max-width: 1200px) {
    .aboutContent[data-v-fae5bece] {
        justify-content: center;
    }
    .userAuth {
        margin-top: 16px;
    }
}
@media only screen and (max-width: 1024px) {
    .homeText {
        height: 100%;
        font-size: 14px;
        padding: 0px 20px;
    }
    .homeProducts {
        padding: 0;
    }
}
@media only screen and (max-width: 780px) {
    .homeHeader {
        height: 300px;
    }
}
@media only screen and (max-width: 560px) {
    .homeHeader {
        height: 330px;
    }
}
@media only screen and (max-width: 460px) {
    .homeHeader {
        height: 450px;
    }
}
@media only screen and (max-width: 280px) {
    .homeHeader {
        height: 530px;
    }
}
</style>
<style lang="postcss">
.sider-btn .carousel__prev,
.sider-btn .carousel__next {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 8px;
    width: 38px;
    height: 38px;
    background: #d9e3f8;
    border-radius: 100px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px -24px;
    color: #555f71;
}
.sider-btn {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
