import { cloneButtons } from "./cloneButtons"
import { isMobile } from "../utils/isMobile"
import { initProductPageMobile } from "./Mobile";
import { movePrices } from "./OldPriceMove";
export const initProductPage = () => {
  setTimeout(() => {
    cloneButtons();
  }, 2000);
  setTimeout(() => {
    document.querySelector('.prices--big .prices__compare') ? movePrices() : null;
  }, 2100);
  
  isMobile ? initProductPageMobile () : null;
}