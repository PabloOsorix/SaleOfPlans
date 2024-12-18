
import { $ } from "@utils/selectors";


export const requestOpenTermsConditionsPopUp = (domElement, payload) => {
    console.log(payload)
    $(domElement).addEventListener("click", () => {
        window.EventBus.dispatchEvent('request-open-terms-condition-pop-up', {data: () => payload});
    });
}


export function setTermsConditionPopUp(popUpSelector) {
    window.EventBus.addEventListener('request-open-terms-condition-pop-up', (event) => {
    const data = event.detail.data()
    if(!data) {
        return
    }
    const popUp = $(`.${popUpSelector}`)
    popUp.querySelector(".title").innerHTML = data.title
    popUp.querySelector(".description").innerHTML = data.description
    popUp.classList.add("show")
    window.EventBus.dispatchEvent('open-terms-condition-pop-up')

  });
} 

export function openTermsConditionsPopUp(showPopUpCallback) {
    window.EventBus.addEventListener('open-terms-condition-pop-up', () => {
        showPopUpCallback()
    })
}
