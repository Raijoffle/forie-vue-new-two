<template>
    <div id="header">
        <div class="container headerComponentView">
            <div class="headerLogo">
                <div class="logoFlex">
                    <img src="https://cdn.forie.com/storage/general/logo/forie-logo.svg" alt="forie" />
                </div>
            </div>
            <div id="nav">
                <div class="links">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/products">Our Products</router-link>
                    <router-link to="/contact">Contact</router-link>
                    <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">Request For Quotation</button>
                </div>
            </div>
            <div class="headerLanguage">
                <div class="changeLanguage">
                    <span> <country-flag country="tr" size="normal" /></span>
                    <span>Türkçe</span>
                    <span><img src="@/assets/img/arrowDown.svg" alt="" /></span>
                </div>
            </div>
            <div class="logAndSig">
                <div class="logIn"><span class="material-icons"> verified_user </span><span>Log in</span></div>
                <div class="signUp"><span>Sign up</span></div>
            </div>
            <div class="mobilNav">
                <span class="material-icons"> search </span>
                <span class="material-icons mobilMenuIcon" @click="openMobilMenuActive"> menu </span>
                <span class="material-icons mobilMenuClose"> close </span>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" id="modal-alignment ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Request For Quotation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span class="material-icons">close</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contactForm">
                        <div class="inputDouble">
                            <div><input type="text" placeholder="Name Surname" v-model="ModalNameSurname" /></div>
                            <div><input type="email" placeholder="E-mail" v-model="ModalEmail" @blur="validateEmail" /></div>
                        </div>
                        <div class="selectCountry">
                            <select name="country" id="country" v-model="ModalCountry">
                                <option value="" disabled selected hidden style="color: white !important">Select Country</option>
                                <option value="1">United Steas</option>
                                <option value="90">Turkey</option>
                            </select>
                        </div>
                        <div class="subject"><input type="text" placeholder="Subject" v-model="ModalSubject" /></div>
                        <div class="message">
                            <textarea name="message" id="message" placeholder="Message" v-model="ModalMessage"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="formButtons">
                        <div class="attachBtn"><span class="material-icons">attach_file</span><span>Attach</span></div>
                        <div class="sendBtn" @click="questValidate()"><span>Send R.F.Q</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
</template>

<script>
import $ from "jquery";

export default {
    methods: {
        targetSearch() {
            document.getElementById("headerSearchInput").focus();
        },
        openMobilMenuActive() {
            const mobilMenuIcon = $(".mobilMenuIcon");
            const headerLinks = $("#nav");
            const headerFixed = $("#header");
            const headerComponentView = $(".headerComponentView");

            mobilMenuIcon.click(() => {
                headerLinks.addClass("mobilMenu-active");
                $(".mobilMenuIcon").hide();
                $(".mobilMenuClose").show();
                headerFixed.addClass("headerFixed");
                headerComponentView.addClass("headerComponentView-Active");
            });
            $(".mobilMenuClose").click(() => {
                headerLinks.removeClass("mobilMenu-active");
                $(".mobilMenuIcon").show();
                $(".mobilMenuClose").hide();
                headerFixed.removeClass("headerFixed");
                headerComponentView.removeClass("headerComponentView-Active");
            });
            $(".headerLinks a").click(() => {
                headerLinks.removeClass("mobilMenu-active");
                $(".mobilMenuIcon").show();
                $(".mobilMenuClose").hide();
                headerFixed.removeClass("headerFixed");
            });
        },
        questValidate() {
            if (this.ModalNameSurname == "" || this.ModalEmail == "" || this.ModalSubject == "" || this.ModalMessage == "") {
                alert("Please fill all fields");
            } else if (this.ValidateEmail == false) {
                alert("Email format is incorrect, please check.");
            } else if (this.ModalCountry == "" || this.ModalCountry == null) {
                alert("Please select a country");
            } else {
                alert("Your message has been sent successfully");
                this.ModalNameSurname = "";
                this.ModalEmail = "";
                this.ModalSubject = "";
                this.ModalMessage = "";
                this.ModalCountry = "";
            }
        },
        validateEmail() {
            // eslint-disable-next-line no-useless-escape
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.ModalEmail)) {
                this.ValidateEmail = true;
            } else {
                this.ValidateEmail = false;
            }
        },
    },
    data() {
        return {
            ModalNameSurname: "",
            ModalEmail: "",
            ModalCountry: "",
            ModalSubject: "",
            ModalMessage: "",
            ValidateEmail: "",
        };
    },
    name: "Header",
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav,
.links {
    /* padding: 0px 16px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start; /*Bu Yer Daha Sonra Değiştirilebir*/
}
#nav a,
#nav button {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0px 16px;
    text-decoration: none;
    background: transparent;
    border: none;
}
#nav a.router-link-exact-active {
    font-style: normal;
    font-weight: 500;
    font-size: 15.78px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #a5c8ff;
    flex: none;
    order: 0;
    flex-grow: 0;
}
#header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: absolute;
    width: 100%;
    height: 56px;
    left: 0px;
    top: 0px;

    background: #005eb5;
}
.headerComponentView {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}
.headerLogo {
    width: 106px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}
.logoFlex {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: static;
}
.logoFlex img {
    width: 100%;
    height: 100%;
    position: absolute;
}
.headerLanguage {
    width: 138px;
    height: 40px;
    border: 1px solid #dedbe119;
    margin-right: 20px;
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
.logAndSig {
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 200px;
}
.logIn {
    width: 100px;
    height: 40px;
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
    cursor: pointer;
}
.logIn span:nth-child(1) {
    margin-right: 6px;
}
.signUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    width: 98px;
    height: 40px;
    background: #a5c8ff;
    border-radius: 100px;
    cursor: pointer;
}
.signUp span {
    width: 50px;
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
    color: #121c2b;
}

.contactForm {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    max-width: 944px;
    width: 100%;
    height: 421px;

    flex: none;
    order: 1;
    flex-grow: 0;
}

#country {
    color: #1b1b1b !important;
    background: rgba(27, 27, 29, 0.08);
    font-size: 14px;
}
#country > * {
    color: #1b1b1b;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
}
.inputDouble {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0px;
    gap: 24px;
    max-width: 944px;
    width: 100%;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.inputDouble div input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;
    width: 440px;
    height: 56px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);

    border-radius: 8px;
    color: #1b1b1d;
}
.selectCountry {
    max-width: 944px;
    width: 100%;
}
.selectCountry select {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;
    max-width: 944px;
    width: 100%;
    height: 56px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
}
.subject {
    max-width: 944px;
    width: 100%;
}
.subject input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;
    max-width: 944px;
    width: 100%;
    height: 56px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
    color: #1b1b1d;
}
.message {
    max-width: 944px;
    width: 100%;
}
.message textarea {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 16px;
    gap: 10px;
    max-width: 944px;
    width: 100%;
    height: 117px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
    flex: none;
    order: 3;
    flex-grow: 0;
    min-height: 117px;
    max-height: 117px;
    /* min-width: 944px; */
    max-width: 944px;
    color: #1b1b1d;
}
.contactForm input::placeholder,
.contactForm textarea::placeholder {
    height: 56px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
    color: #1b1b1d;
}
.formButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    width: 100%;
    height: 40px;
    flex: none;
    order: 4;
    flex-grow: 0;
}
.attachBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px 10px 12px;
    gap: 8px;
    width: 100px;
    height: 40px;
    border-radius: 100px;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
}
.attachBtn span:nth-child(2) {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #005eb5;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.attachBtn span:nth-child(1) {
    color: #005eb5;
}
.sendBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 10px;
    width: 145px;
    height: 40px;
    background: #005eb5;
    border-radius: 100px;
    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    -o-user-select: none;
    user-select: none;
}
.sendBtn span {
    height: 20px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #fff;
    flex: none;
    order: 0;
    flex-grow: 0;
}
/* Sayfaların Aşşasındaki Contact Kısmı Bitişi */
.modal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    max-width: 944px;
    width: 100% !important;
    height: 100% !important;
    max-height: 769px;
    background: #ffffff;
}
.modal-content {
    max-width: 944px;
    max-height: 769px;
    height: 100%;
    width: 100%;
}
#modal-alignment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    position: absolute;
    max-width: 944px;
    width: 100% !important;
    height: 100% !important;
    max-height: 769px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    margin: 0 !important;
}

.mobilNav {
    color: #ffffff;
    display: none;
}
.mobilNav span {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    margin: 0px 6px;
    cursor: pointer;
}
.modal-header button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #d4e3ff;
    border-radius: 100px;
    color: #005eb5;
}
.modal-header button span {
    font-size: 28px;
    color: #005eb5;
    font-weight: bold;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.mobilMenuClose {
    display: none;
}
.mobilMenu-active {
    right: 0px;
    animation: linksFade 0.3s ease-out;
    display: flex !important;
    z-index: 5;
    opacity: 1;
    visibility: inherit;
}
.headerFixed {
    position: fixed !important;
    z-index: 12 !important;
    height: 100vh !important;
    background: #1b1b1d !important;
}
@media only screen and (max-width: 1200px) {
    #nav a,
    #nav button {
        padding: 0;
        margin: 0 6px;
        font-size: 14px;
    }
}
@media only screen and (max-width: 1024px) {
    #nav {
        display: none;
    }
    .headerLanguage {
        display: none;
    }
    .logAndSig {
        display: none;
    }
    .mobilNav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .links {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: space-around !important;
        position: absolute;
        left: 0;
        top: 56px;
        height: 500px;
    }
    .links a,
    .links button {
        height: 60px;
        margin: 6px;
    }
    .headerComponentView-Active {
        position: absolute;
        top: 10px;
    }
}

@media only screen and (max-width: 992px) {
    .inputDouble[data-v-61dd7a3d] {
        flex-direction: column;
    }

    .inputDouble div input,
    .inputDouble div {
        max-width: 944px !important;
        width: 100% !important;
    }
}
@media only screen and (max-width: 680px) {
    .pagesDownContact[data-v-3ffb0d8f] {
        padding: 30px;
        padding-bottom: 100px;
    }
}
@media (min-width: 576px) {
    .modal-dialog {
        max-width: 944px;
        width: 100% !important;
        height: 100% !important;
        max-height: 769px;
    }
}
@media only screen and (max-width: 320px) {
    .sendBtn {
        width: 100px;
    }
    .sendBtn span {
        font-size: 13px;
        width: 100%;
        text-align: center;
    }
    .attachBtn span:nth-child(2) {
        font-size: 12px;
    }
    .attachBtn span:nth-child(1) {
        font-size: 20px;
    }
    .modal-header {
        padding: 16px 6px;
    }
}
</style>
