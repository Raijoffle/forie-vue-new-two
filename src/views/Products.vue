<template>
    <Header />
    <div class="product">
        <div class="productPage container">
            <div class="productHead">
                <div class="pageRoute">
                    <span>HomePage</span> <span>➤</span> <span>{{ $route.name }}</span>
                </div>
                <div class="productHeader">
                    <div class="headerTitle"><span>Product</span></div>
                </div>
            </div>
            <div class="productContent">
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage1.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage2.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage3.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage4.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage5.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage6.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage7.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage8.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage9.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
                <div class="products">
                    <div class="productImage">
                        <img src="@/assets/img/productImage10.png" alt="" />
                    </div>
                    <div class="productName"><span>Cable Ladders</span></div>
                </div>
            </div>
        </div>
        <PageDownContact />
    </div>
    <Footer />
</template>
<script>
import PageDownContact from "@/components/PageDownContact.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "product",
    setup() {},
    components: {
        PageDownContact,
        Header,
        Footer,
    },
};
</script>
<style scoped>
.productPage {
    margin-top: 104px !important;
}
.pageRoute {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #1b1b1d;
}
.pageRoute span {
    margin-right: 10px;
}
.pageRoute span:nth-child(2) {
    font-size: 12px;
}
.pageRoute span:nth-child(3) {
    color: #005eb5;
}
.productHeader {
    height: 360px;
    width: 100%;
    left: 0px;
    top: 0px;
    border-radius: 28px;
    background: url(../assets/img/alkim81.jpg) no-repeat center center / cover;
    border-radius: 28px;
    margin-top: 25px;
    position: relative;
}
.headerTitle {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    gap: 10px;
    position: absolute;
    width: 195px;
    height: 84px;
    left: calc(50% - 195px / 2 + 0.5px);
    top: calc(50% - 84px / 2);

    background: #ffffff;
}
.headerTitle span {
    height: 44px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #005eb5;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.productContent {
    width: 100%;
    height: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
}
.products {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 264px;
    height: 300px;
    background: #ffffff;
    border: 1px solid rgba(116, 119, 127, 0.08);
    border-radius: 12px;
    margin: 12px 30px;
}
.productImage {
    width: 264px;
    height: 244px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
}
.productName {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 264px;
    height: 56px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
@media only screen and (max-width: 1280px) {
    .productContent {
        justify-content: center;
    }
}
@media only screen and (max-width: 280px) {
    .products > * {
        width: 100%;
    }
    .products {
        margin: 0;
    }
}
</style>
