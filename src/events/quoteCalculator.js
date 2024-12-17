
import { $ } from "@utils/selectors";


export const requestOpenSelectedPlan = (domElement, planName) => {
    $(domElement).addEventListener("click", () => {
        window.EventBus.dispatchEvent('request-open-selected-plan', {plan_name: () => planName});
    })
}


export function openRequestedPlan(planSelector) {
  window.EventBus.addEventListener('request-open-selected-plan', (event) => {
    let planName = event.detail.plan_name()
    if (!planName) {
      return
    }
    const plans = $(`${planSelector}`)
      
    plans.childNodes.forEach(option => {
      if (option.value === planName) {
        option.selected = 'selected'
        /*plans.dispatchEvent(new Event("change"))*/
        window.EventBus.dispatchEvent('new-selected-plan', {});
      }
    });
  });
} 

export function newSelectedPlan(callback) {
  window.EventBus.addEventListener('new-selected-plan', (event) => {
    callback()
  })
}


/*
this.querySelector(".button.quotes").addEventListener("click", () => {
    const event = new CustomEvent("opengivenplan", {
      bubbles: true,
      detail: { plan_id: () => this.id}
});*/