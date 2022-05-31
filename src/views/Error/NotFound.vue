<template>
    <Header />
    <div class="error">
        <div class="errorPage container">
            <div class="errorHead">
                <div class="pageRoute">
                    <span>HomePage</span> <span>➤</span> <span>{{ $route.name }}</span>
                </div>
                <div class="errorHeader">
                    <div class="headerTitle"><span>This Page Doesn’t Exist</span></div>
                </div>
            </div>
            <div class="errorContent">
                <div class="errorText">
                    <p>You can browse the following pages.</p>
                </div>
                <div class="errorGoBack">
                    <div><span class="material-icons">home</span><span>Home Page</span><span>Go</span></div>
                    <div><span class="material-icons">business</span><span>About</span><span>Read</span></div>
                    <div><span class="material-icons">shopping_cart</span><span>Products</span><span>Review</span></div>
                    <div><span class="material-icons">phone</span><span>Contact</span><span>Call</span></div>
                </div>
                <div class="line"></div>
                <div class="errorProduct">
                    <div class="products">
                        <div class="product">
                            <div class="productImage"><img src="@/assets/img/productImage1.png" alt="" /></div>
                            <div class="productName"><span>Cable Trays</span></div>
                        </div>
                        <div class="product">
                            <div class="productImage"><img src="@/assets/img/productImage2.png" alt="" /></div>
                            <div class="productName"><span>Earthing Systems</span></div>
                        </div>
                        <div class="product">
                            <div class="productImage"><img src="@/assets/img/productImage3.png" alt="" /></div>
                            <div class="productName"><span>Electrical Installation Conduits</span></div>
                        </div>
                        <div class="product">
                            <div class="productImage"><img src="@/assets/img/productImage4.png" alt="" /></div>
                            <div class="productName"><span>Facade Fixing Systems</span></div>
                        </div>
                    </div>
                    <div class="allProduct">
                        <div class="productBtn"><span>All Product</span></div>
                    </div>
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
    name: "About",
    setup() {},
    components: {
        PageDownContact,
        Header,
        Footer,
    },
};
</script>

<style scoped>
.errorPage {
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
.errorHeader {
    height: 360px;
    width: 100%;
    left: 0px;
    top: 0px;
    border-radius: 28px;
    background: url(../../assets/img/alkim81.jpg) no-repeat center center / cover;
    border-radius: 28px;
    margin-top: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.headerTitle {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    gap: 10px;
    background: #ffffff;
    /* width: 430px; */
}
.headerTitle span {
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
/* .errorContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
} */
.errorText {
    margin-top: 100px;
    height: 28px;
}
.errorText p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: #323231;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.errorGoBack {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0px;
    gap: 10px;
    margin: 60px auto;
    width: 100%;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.errorGoBack div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px 15px;
    gap: 17px;
    width: 217px;
    height: 280px;
    background: #ffffff;
}
.errorGoBack div span:nth-child(1) {
    color: #005eb5;
    font-size: 32px;
}
.errorGoBack div span:nth-child(2) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: #1b1b1d;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.errorGoBack div span:nth-child(3) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
.line {
    height: 0px;
    border: 1px solid #74777f;
    margin: 0 auto;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
.products {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0px;
    width: 100%;
    margin-top: 100px;
}
.errorProduct .product {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 194.5px;
    background: #ffffff;
    border: 1px solid rgba(116, 119, 127, 0.08);
}
.productImage {
    width: 194.5px;
    height: 174px;
    flex: none;
    order: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}
.productImage img {
    max-height: 174px;
    height: 100%;
}
.productName {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
    flex: none;
    order: 2;
    align-self: stretch;
    height: 56px;
    overflow: hidden;
}
.productName span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 0;
    flex-grow: 0;
    overflow: hidden;
    text-align: left;
}
.allProduct {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.allProduct .productBtn {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    width: 124px;
    height: 48px;
    border: 2px solid #6e5675;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
@media only screen and (max-width: 425px) {
    .headerTitle {
        width: 60%;
    }
    .headerTitle span {
        font-size: 24px;
        line-height: 32px;
        width: 100%;
    }
}
</style>
