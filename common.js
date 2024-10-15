import {getCSS, tickConfig} from "./common.js"
const getcCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}
const tickConfig = {
    color: getcCSS('--primary-color'),
    size: 16,
    family: getcCSS('--font')
}
export {getcCSS,tickConfig}