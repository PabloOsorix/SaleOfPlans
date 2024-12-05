import { isNumber, getDecimalPart } from "@utils/numbers.js";
import { $, $$ } from "@utils/selectors";


export function calculateRecommendation(recommendationRate, cardID){
    const isFloatNumber = isNumber(recommendationRate)
    if (isFloatNumber === false)
        return


    const dots = $$(`promo-item-card.${cardID} .dot`);
    const decimalRecommendation = getDecimalPart(recommendationRate)

    const middleDotIndex = Math.ceil(recommendationRate) - 1
    const middleDot = dots[middleDotIndex];
    
    if (parseInt(decimalRecommendation) === 5) {
        middleDot.children[0].classList.add("active");
        
        for(let index = middleDotIndex + 1; index <= dots.length; index++) {
            dots[index].style.background = "white";
        }
    } else {
        for(let index = recommendationRate; index <= dots.length; index++) {
            dots[index].style.background = "white";
        }
    }



}