<template>
    <div class="pagesDownContact">
        <div class="contactFormContainer container">
            <div class="contactAuth">
                <div class="contactHead">
                    <div class="contactTitle"><span>Contact</span></div>
                </div>
                <div class="contactAuthDetail">
                    <div class="authPerson">
                        <div><span>Authorized Person</span></div>
                        <div><span>Eser KAYA</span></div>
                    </div>
                    <div class="authAddress">
                        <div><span>Address</span></div>
                        <div><span>Şekerpınar Mah. Ece Sk. No: 3, Gebze, Kocaeli, Turkey</span></div>
                    </div>
                    <div class="contactPhone">
                        <div><span>Phone</span></div>
                        <div><span>+90 262 290 26 15</span></div>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <div class="inputDouble">
                    <div><input type="text" placeholder="Name Surname" id="name" v-model="NameSurname" /></div>
                    <div><input type="email" placeholder="E-mail" id="email" v-model="Email" @blur="validateEmail" /></div>
                </div>
                <div class="selectCountry">
                    <select name="country" id="country" v-model="Country">
                        <option value="" disabled selected hidden style="color: white !important">Select Country</option>
                        <option value="1">United Steas</option>
                        <option value="90">Turkey</option>
                    </select>
                </div>
                <div class="subject"><input type="text" placeholder="Subject" id="subject" v-model="Subject" /></div>
                <div class="message">
                    <textarea name="message" id="message" placeholder="Message" v-model="Message"></textarea>
                </div>
                <div class="formButtons">
                    <div class="attachBtn"><span class="material-icons">attach_file</span><span>Attach</span></div>
                    <div class="sendBtn" @click="contactValidate()"><span>Send Message</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PageDownContact",
    props: {},
    methods: {
        // Kullanıcı gönder düğmesini tıkladığında çağrılan bir işlev.
        contactValidate() {
            // Bu bir doğrulamadır. Kullanıcı alanları doldurmaz ise uyarı verecektir.
            if (this.NameSurname == "" || this.Email == "" || this.Subject == "" || this.Message == "") {
                alert("Please fill all fields");
            }
            // E-postanın geçerli olup olmadığını kontrol etme.
            else if (this.ValidateEmail == false) {
                alert("Email format is incorrect, please check.");
            }
            // Bu bir doğrulamadır. Kullanıcı alanları doldurmaz ise uyarı verecektir.
            else if (this.Country == "" || this.Country == null) {
                alert("Please select a country");
            }
            // Yanıtın başarılı olup olmadığını kontrol etmek, başarılı ise, mesajın başarıyla
            // gönderildiği konusunda kullanıcıyı uyarır.
            else {
                alert("Your message has been sent successfully");
                this.NameSurname = "";
                this.Email = "";
                this.Subject = "";
                this.Message = "";
                this.Country = "";
            }
        },
        validateEmail() {
            // eslint-disable-next-line no-useless-escape
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.Email)) {
                this.ValidateEmail = true;
            } else {
                this.ValidateEmail = false;
            }
        },
    },
    // Bir nesne döndüren bir işlev.
    data() {
        // Bir nesneyi döndürme.
        return {
            NameSurname: "",
            Email: "",
            Country: "",
            Subject: "",
            Message: "",
            ValidateEmail: "",
        };
    },
};
</script>
<style scoped>
/* Sayfaların Aşşasındaki Contact Kısmı Başlangıcı */
.pagesDownContact {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 100px;
    gap: 26px;
    width: 100%;
    height: 100%;
    background: #3d4758;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: 100px;
}
.contactFormContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.contactAuth {
    max-width: 358px;
    width: 100%;
    height: 328px;
    display: flex;
    flex-direction: column;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.contactHead,
.contactTitle {
    width: 169px;
    height: 52px;
    left: 396px;
    top: 100px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 52px;
    color: #d4e3ff;
}
.contactAuthDetail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
    gap: 24px;
    max-width: 358px;
    width: 100%;
    height: 228px;
    left: 396px;
    top: 200px;
}
.contactAuthDetail div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
}
.contactAuthDetail div div:nth-child(1) span:nth-child(1) {
    width: 144px;
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #a5c8ff;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.contactAuthDetail div div:nth-child(2) span:nth-child(1) {
    max-width: 358px;
    width: 100%;
    max-height: 48px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #d9e3f8;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.contactForm {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    max-width: 744px;
    width: 100%;
    height: 421px;

    flex: none;
    order: 1;
    flex-grow: 0;
}

#country {
    color: #d9e3f8 !important;
    background: rgba(227, 226, 230, 0.08);
    font-size: 14px;
}
#country > * {
    color: #d9e3f8;
    background: #3d4758;
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
    /* height: 56px; */
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
    background: rgba(227, 226, 230, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
    color: #ffffff;
}
.selectCountry {
    max-width: 744px;
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
    background: rgba(227, 226, 230, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
}
.subject {
    max-width: 744px;
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
    background: rgba(227, 226, 230, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
    color: #ffffff;
}
.message {
    max-width: 744px;
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
    background: rgba(227, 226, 230, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    border-radius: 8px;
    flex: none;
    order: 3;
    flex-grow: 0;
    min-height: 117px;
    max-height: 117px;
    /* min-width: 744px; */
    max-width: 744px;
    color: #ffffff;
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
    color: #d9e3f8;
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
    color: #a5c8ff;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.attachBtn span:nth-child(1) {
    color: #a5c8ff;
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
    background: #a5c8ff;
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
    color: #273141;
    flex: none;
    order: 0;
    flex-grow: 0;
}
/* Sayfaların Aşşasındaki Contact Kısmı Bitişi */
@media only screen and (max-width: 992px) {
    .inputDouble {
        max-width: 744px !important;
        width: 100% !important;
    }

    .inputDouble div[data-v-3ffb0d8f],
    .inputDouble div[data-v-3ffb0d8f] {
        width: 100% !important;
    }

    .inputDouble div input {
        max-width: 744px !important;
        width: 100% !important;
    }
}
@media only screen and (max-width: 680px) {
    .pagesDownContact[data-v-3ffb0d8f] {
        padding: 30px;
        padding-bottom: 100px;
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
}
</style>
