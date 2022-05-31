<template>
    <Header />
    <div class="productDetail container">
        <div class="pageRoute">
            <span>HomePage</span> <span>➤</span><span>Products</span><span>➤</span> <span>{{ $route.name }}</span>
        </div>
        <div class="detail">
            <div class="detailHead">
                <div class="detailCompany"><span>Eurotray Metal Kablo Taşıma ve Elektrik San. Tic. A.Ş.</span></div>
                <div class="detailProduct"><span>Cable Ladders</span></div>
            </div>
            <div class="detailImage">
                <img src="@/assets/img/productImage1.png" alt="" />
            </div>
        </div>
        <div class="otherProduct">
            <div class="otherTitle"><span>Other Product</span></div>
            <div class="otherProductList">
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
    </div>
    <PageDownContact />
    <Footer />
</template>
<script>
import PageDownContact from "@/components/PageDownContact.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "ProductDetail",
    setup() {},
    components: {
        PageDownContact,
        Header,
        Footer,
    },
};
</script>
<style scoped>
.productDetail {
    margin-top: 105px;
    /* margin-bottom: 100px; */
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
.pageRoute span:nth-child(2),
.pageRoute span:nth-child(4) {
    font-size: 12px;
}
.pageRoute span:nth-child(5) {
    color: #005eb5;
}
.detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 28px;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.detailHead {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 148px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    border-bottom: 1px solid rgba(116, 119, 127, 0.08);
}
.detailCompany {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 24px 0px 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.detailCompany span {
    max-width: 524px;
    width: 100%;
    height: 100%;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    font-feature-settings: "liga" off;
    color: #1b1b1d;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.detailProduct {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 24px 0px 0px;
    height: 40px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.detailProduct span {
    height: 40px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #1b1b1d;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.detailImage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    height: 620px;
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
}
.detailImage img {
    max-height: 900px;
    height: 100%;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.otherProduct {
    width: 100%;
    height: 100%;
}
.otherTitle {
    width: 100%;
    height: 36px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #1b1b1d;
}
.otherProductList {
    width: 100%;
    height: 100%;
    margin-top: 25px;
    border: 1px solid #74777f14;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
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
    margin: 12px 29px;
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

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
.productName span {
    height: 24px;
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
}
@media only screen and (max-width: 1024pc) {
    .otherProductList {
        justify-content: center;
    }
}
@media only screen and (max-width: 620px) {
    .detailImage img {
        width: 100%;
        height: 400px;
    }
}
@media only screen and (max-width: 320px) {
    .pageRoute {
        width: 100%;
        font-size: 12px;
    }
    .products > * {
        width: 100%;
    }
    .products {
        margin: 0;
    }
    .pageRoute {
        width: 100%;
        font-size: 11px;
    }
    .detailImage img {
        height: 300px;
    }
}
</style>
