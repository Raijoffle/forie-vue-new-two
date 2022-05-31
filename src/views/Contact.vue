<template>
    <Header />
    <div class="contact">
        <div class="contactPage container">
            <div class="contactHead">
                <div class="pageRoute">
                    <span>HomePage</span> <span>➤</span> <span>{{ $route.name }}</span>
                </div>
                <div class="contactHeader">
                    <div class="headerTitle"><span>Contact</span></div>
                </div>
            </div>
            <div class="contactContent">
                <div class="contactAuth">
                    <div class="authPerson"><span class="material-icons">person</span><span>Authorized Person</span><span>Eser KAYA</span></div>
                    <div class="authAdres">
                        <span class="material-icons">map</span><span>Address</span><span>Şekerpınar Mah. Ece Sk. No: 3, Gebze, Kocaeli, Turkey</span>
                    </div>
                    <div class="auth"><span class="material-icons">phone</span><span>Phone</span><span>+90 262 290 26 15</span></div>
                </div>
                <div class="contactLine"></div>
                <div class="contactForm">
                    <div class="inputDouble">
                        <div><input type="text" placeholder="Name Surname" v-model="ContactNameSurname" /></div>
                        <div><input type="email" placeholder="E-mail" v-model="ContactEmail" @blur="validateEmail" /></div>
                    </div>
                    <div class="selectCountry">
                        <select name="country" id="country" v-model="ContactCountry">
                            <option value="" disabled selected hidden style="color: white !important">Select Country</option>
                            <option value="1">United Steas</option>
                            <option value="90">Turkey</option>
                        </select>
                    </div>
                    <div class="subject"><input type="text" placeholder="Subject" v-model="ContactSubject" /></div>
                    <div class="message">
                        <textarea name="message" id="message" placeholder="Message" v-model="ContactPageMessage"></textarea>
                    </div>
                    <div class="formButtons">
                        <div class="attachBtn"><span class="material-icons">attach_file</span><span>Attach</span></div>
                        <div class="sendBtn" @click="contactValidate()"><span>Send Message</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "contact",
    setup() {},
    components: {
        Header,
        Footer,
    },
    methods: {
        contactValidate() {
            if (this.ContactNameSurname == "" || this.ContactEmail == "" || this.ContactSubject == "" || this.ContactPageMessage == "") {
                alert("Please fill all fields");
            } else if (this.ValidateEmail == false) {
                alert("Email format is incorrect, please check.");
            } else if (this.ContactCountry == "" || this.ContactCountry == null) {
                alert("Please select a country");
            } else {
                alert("Your message has been sent successfully");
                this.ContactNameSurname = "";
                this.ContactEmail = "";
                this.ContactSubject = "";
                this.ContactPageMessage = "";
                this.ContactCountry = "";
            }
        },
        validateEmail() {
            // eslint-disable-next-line no-useless-escape
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.ContactEmail)) {
                this.ValidateEmail = true;
            } else {
                this.ValidateEmail = false;
            }
        },
    },
    data() {
        return {
            ContactNameSurname: "",
            ContactEmail: "",
            ContactCountry: "",
            ContactSubject: "",
            ContactPageMessage: "",
            ValidateEmail: "",
        };
    },
};
</script>
<style scoped>
.contactPage {
    margin-top: 104px !important;
    margin-bottom: 50px;
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
.contactHeader {
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
    justify-content: center;
    padding: 20px;
    gap: 10px;
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
.contactContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 50px 100px;
    gap: 50px;
    width: 100%;
    height: 100%;
    background: #ffffff;
    margin-top: 50px;
}
.contactAuth {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0px;
    gap: 10px;
    max-width: 880px;
    width: 100%;
    height: 100%;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.contactLine {
    max-width: 928px;
    width: 100%;
    height: 0px;
    border: 1px solid #74777f;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.contactForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 24px;
    max-width: 744px;
    width: 100%;
    height: 481px;
    flex: none;
    order: 2;
    flex-grow: 0;
}
.contactAuth div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 15px;
    gap: 17px;
    width: 280px;
    height: 280px;
    background: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.contactAuth div:nth-child(1) {
    border-right: 1px solid rgba(116, 119, 127, 0.08);
}
.contactAuth div:nth-child(2) {
    border-right: 1px solid rgba(116, 119, 127, 0.08);
}
.contactAuth div:nth-child(3) {
    border-right: 1px solid rgba(116, 119, 127, 0.08);
}
.contactAuth div span:nth-child(1) {
    font-size: 36px;
    border-radius: 0px;
    color: #005eb5;
}
.contactAuth div span:nth-child(2) {
    height: 28px;
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
    flex-grow: 0;
}
.contactAuth div span:nth-child(3) {
    width: 202px;
    height: 72px;
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
    flex-grow: 0;
}
/*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */ /*  */
.contactForm {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    max-width: 744px;
    width: 100%;
    flex: none;
    order: 1;
    flex-grow: 0;
}

#country {
    color: #1b1b1d !important;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    font-size: 14px;
}
#country > * {
    color: #1b1b1d;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
}

.inputDouble {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0px;
    gap: 24px;
    max-width: 744px;
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
    width: 360px;
    height: 56px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
    color: #1b1b1d;
}
.selectCountry {
    width: 100%;
}
.selectCountry select {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;
    max-width: 744px;
    width: 100%;
    height: 56px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
}

.subject {
    width: 100%;
}
.subject input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;
    max-width: 744px;
    width: 100%;
    height: 56px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
    color: #1b1b1d;
}
.message {
    width: 100%;
}
.message textarea {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 16px;
    gap: 10px;
    max-width: 744px;
    width: 100%;
    height: 117px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
    border-radius: 8px;
    flex: none;
    order: 3;
    flex-grow: 0;
    min-height: 117px;
    max-height: 117px;
    max-width: 744px;
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
    width: 97px;
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
@media only screen and (max-width: 1200px) {
    .inputDouble {
        flex-direction: column;
        width: 100%;
    }
    .inputDouble div,
    .inputDouble div input {
        width: 100%;
    }
}
@media only screen and (max-width: 780px) {
    .contactContent {
        padding: 0;
    }
    .contactAuth {
        flex-direction: column;
        align-items: center;
    }
}
@media only screen and (max-width: 320px) {
    .sendBtn {
        width: 100px;
    }
    .sendBtn span {
        font-size: 12px;
        width: 100%;
        text-align: center;
    }
}
@media only screen and (max-width: 280px) {
    .contactAuth > div {
        width: 260px;
    }
    .contactAuth div {
        padding: 0 !important;
    }
}
</style>
