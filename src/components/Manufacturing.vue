<template>
    <div class="manufacturing container">
        <div class="manufacturingHead">
            <div class="companyName">
                <span
                    >Eurotray Metal Kablo Taşıma ve Elektrik San. Tic. A.Ş. Experts in Manufacturing and Exporting Products</span
                >
            </div>
        </div>
        <div class="manafactoringContent">
            <div class="count">
                <div>
                    <div><span>01</span></div>
                    <span>Cable Trays</span>
                </div>
                <div>
                    <div><span>01</span></div>
                    <span>Cable Ladders</span>
                </div>
                <div>
                    <div><span>01</span></div>
                    <span>Wire Mesh Trays</span>
                </div>
                <div>
                    <div><span>01</span></div>
                    <span>Standart Cable Trays</span>
                </div>
            </div>
            <div class="manufacturingTags">
                <div class="countTag"><span>05 - Heavy Duty Cable Trays</span></div>
                <div class="countTag"><span>06 - Strenghened Cable Trays</span></div>
                <div class="countTag"><span>07 - Unperforated Cable Trays</span></div>
                <div class="countTag"><span>08 - Unperforated Heavy Duty Cable Trays</span></div>
                <div class="countTag"><span>09 - Wire Mesh Cable Trays</span></div>
                <div class="countTag"><span>10 - Trunking Cable Trays</span></div>
                <div class="countTag"><span>11 - Marine Cable Tra ys</span></div>
                <div class="countTag"><span>12 - Underfloor Cable Trays</span></div>
            </div>
            <div class="showAll"><span>ShowAll</span></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Manufacturing",
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>
<style scoped>
.manufacturing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
.manafactoringContent {
    width: 100%;
}
.companyName {
    max-width: 831px;
    width: 100%;
    /* height: 72px; */
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6e5675;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.count {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;
}
.count div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 264px;
    height: 110px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.count div div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 70px;
    height: 70px;
    background: #f8d8fe;
    border-radius: 70px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.count div div span {
    width: 33px;
    height: 40px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #6e5675;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.count div span {
    width: 264px;
    height: 28px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: #6e5675;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.manufacturingTags {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px;
    gap: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: 50px;
}
.countTag {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* padding: 6px 16px; */
    height: 32px;
    background: #ffffff;
    border: 1px solid rgba(116, 119, 127, 0.16);
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.showAll {
    width: 100%;
    height: 20px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.25px;
    color: #1b1b1d;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin-top: 20px;
}
.showAll span {
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

@media only screen and (max-width: 425px) {
    .manufacturingTags div {
        font-size: 12px;
    }
    .manufacturingTags {
        flex-direction: column;
        align-items: center;
    }
    .count div {
        margin: 16px 0px;
    }
}
</style>
