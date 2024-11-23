// Format the price above to USD using the locale, style, and currency.

let COPesos = new Intl.NumberFormat('es', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
});

export function formatPriceToCOP(price) {
    return COPesos.format(price).replace("COP", "").trim()
}