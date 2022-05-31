<template>
    <Header />
    <div class="about">
        <div class="aboutPage container">
            <div class="aboutHead">
                <div class="pageRoute">
                    <span>HomePage</span> <span>➤</span> <span>{{ $route.name }}</span>
                </div>
                <div class="aboutHeader">
                    <div class="headerTitle"><span>About</span></div>
                </div>
            </div>
            <div class="aboutContent">
                <div class="companyHead">
                    <div class="companyTitle"><span>Eurotray Metal Kablo Taşıma ve Elektrik San. Tic. A.Ş.</span></div>
                    <div class="companyStatus">
                        <div class="compayCountry">
                            <span><country-flag country="tr" size="normal" /></span> <span>Turkey</span>
                        </div>
                        <div class="companyMemberType">
                            <span class="material-icons">emoji_events</span><span>Standard Member</span>
                        </div>
                        <div class="companyPersonel">
                            <span class="material-icons">people_alt</span> <span>Personel Count: 101-250</span>
                        </div>
                    </div>
                </div>
                <div class="companyContent">
                    <div class="contentOne">
                        <div class="contentAbout">
                            <div class="contentAboutTitle"><span class="material-icons">business</span><span>About</span></div>
                            <div class="contentAboutText">
                                <span
                                    >In the light of our 100% home production and always-positive stock principle; our team
                                    contributes to the selection of the right product, solutions to the problems our customers
                                    face, and assures the application and gives full support to our customer starting from the
                                    design phase of the Project. Since we have a project-oriented point of view, we propose a
                                    strategic action plan and deliver on time in the proper order. To do this, we design our
                                    production automation ourselves and invest continuously. Therefore, we both provide continuity
                                    reasonable prices to our customers. We do not compromise on understanding, openness,
                                    transparency, trust, product project, and standard requirements, which are based on our
                                    quality assurance system from supplier selection to packaging. By this means, while we keep
                                    growing, we continue our production with the capacity of 20.000 tons/year in our Dilovası
                                    Factory, which we established in 2011, and with the strength, we receive from our strong
                                    references, we contribute to the economy of our country.</span
                                >
                            </div>
                        </div>
                        <div class="contentCertificates">
                            <div class="contentCertificatesTitle">
                                <span class="material-icons">article</span><span>Certificates</span>
                            </div>
                            <div class="contentCertificatesText"><span>ISO9001</span></div>
                        </div>
                        <div class="contentBrands">
                            <div class="contentBrandsTitle"><span class="material-icons">store</span><span>Brands</span></div>
                            <div class="contentBrandsText"><span>CEMESAN</span></div>
                        </div>
                    </div>
                    <div class="contentTwo">
                        <div class="contentCategories">
                            <div class="contentCategoriesTitle">
                                <span class="material-icons">book</span><span>Categories</span>
                            </div>
                            <div class="contentCategoriesText">
                                <span>Electric – Electronic </span><span>Electrical Supplies – Instrument</span>
                            </div>
                        </div>
                        <div class="contentBusiness">
                            <div class="contentBusinessTitle">
                                <span class="material-icons">segment</span><span>Business Segments</span>
                            </div>
                            <div class="contentBusinessText"><span>Exporter</span><span>Manufacturer</span></div>
                        </div>
                        <div class="contentAuth">
                            <div class="contentAuthTitle">
                                <span class="material-icons">account_circle</span><span>Authorized</span>
                            </div>
                            <div class="contentAuthText">
                                <span class="authName">Eser KAYA</span
                                ><span span="authAdress">Şekerpınar Mah. Ece Sk. No: 3, Gebze, Kocaeli, Turkey</span
                                ><span class="authPhone">+90 262 290 26 15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Manufacturing />
        <PageDownContact />
    </div>
    <Footer />
</template>
<script>
import Manufacturing from "@/components/Manufacturing.vue";
import PageDownContact from "@/components/PageDownContact.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "About",
    setup() {},
    components: {
        Manufacturing,
        PageDownContact,
        Header,
        Footer,
    },
};
</script>
<style scoped>
.aboutPage {
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
.aboutHeader {
    height: 360px;
    width: 100%;
    left: 0px;
    top: 0px;
    border-radius: 28px;
    background: url(../assets/img/alkim81.jpg) no-repeat center center / cover;
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
    position: absolute;
    background: #ffffff;
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
.aboutContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 28px;
    margin-top: 25px;
}
.companyHead {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    width: 100%;
    /* height: 144px; */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    border-bottom: 1px solid rgba(116, 119, 127, 0.08);
}
.companyTitle {
    width: 100%;
    /* height: 40px; */
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
.companyStatus {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px;
    gap: 8px;
    max-width: 1064px;
    width: 100%;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.companyStatus div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.companyContent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 32px;
    gap: 24px;
    width: 100%;
    height: 100%;
}
.contentOne {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    max-width: 681px;
    width: 100%;
    height: 100%;
    flex: none;
    order: 0;
    flex-grow: 1;
}
.contentTwo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    max-width: 335px;
    width: 100%;
    height: 378px;
    flex: none;
    order: 2;
    flex-grow: 0;
}
.contentAbout {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 100%;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.contentAboutTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    height: 28px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.contentAboutTitle span:nth-child(2) {
    width: 63px;
    height: 28px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    font-feature-settings: "liga" off;
    color: #555f71;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.contentAboutTitle span:nth-child(1) {
    color: #555f71;
}
.contentAboutText {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 100%;
    /* height: 312px; */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.contentAboutText span {
    width: 100%;
    /* height: 312px; */
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    text-align: left;
}
.contentCertificates {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    height: 56px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.contentCertificatesTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    height: 24px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.contentCertificatesTitle span:nth-child(2) {
    width: 90px;
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.contentCertificatesTitle span:nth-child(1) {
    color: #555f71;
}
.contentCertificatesText {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    height: 24px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.contentCertificatesText span {
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.contentBrands {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    max-width: 681px;
    width: 100%;
    height: 56px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
.contentBrandsTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    height: 24px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.contentBrandsTitle span:nth-child(1) {
    color: #555f71;
}
.contentBrandsTitle span:nth-child(2) {
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.contentBrandsText {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    height: 24px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.contentBrandsText span {
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.contentCategories {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 100%;
    height: 80px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.contentCategoriesTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    height: 24px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.contentCategoriesTitle span:nth-child(1) {
    color: #555f71;
}
.contentCategoriesTitle span:nth-child(2) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.contentCategoriesText {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.contentBusiness {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    height: 80px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin-top: 40px !important;
}
.contentBusinessTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.contentBusinessTitle span:nth-child(1) {
    color: #555f71;
}
.contentBusinessTitle span:nth-child(2) {
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.contentBusinessText {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: left;
    text-align: left;
    flex-direction: column;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.contentAuth {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
.contentAuthTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.contentAuthTitle span:nth-child(1) {
    color: #555f71;
}
.contentAuthTitle span:nth-child(2) {
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.contentAuthText {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: flex-start;
    text-align: left;
    flex-direction: column;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
.contentAuthText span:nth-child(1) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.contentAuthText span:nth-child(2) {
    width: 100%;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}
.contentAuthText span:nth-child(3) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
}
@media only screen and (max-width: 320px) {
    .contentTwo div {
        margin: 6px 0px;
    }
}
</style>
h
