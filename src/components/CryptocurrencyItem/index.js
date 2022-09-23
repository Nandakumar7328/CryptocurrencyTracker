import './index.css'

const CryptocurrencyItem = props => {
  const {listCurrencyDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = listCurrencyDetails

  return (
    <li className="li-container">
      <div className="image-name-container">
        <img src={currencyLogo} alt={currencyName} className="coin-name" />
        <p className="coin-name-para1">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="coin-name-para">{usdValue}</p>
        <p className="coin-name-para para-margin-left">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
