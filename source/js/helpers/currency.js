const formatCurrency = amount => {
    let currencyString = Number( amount / 100).toFixed(2)
    return currencyString
}

export default formatCurrency