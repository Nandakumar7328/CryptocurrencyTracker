import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {listOfCrypto: [], isDataDisplay: true}

  componentDidMount() {
    this.getDataList()
  }

  getDataList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({listOfCrypto: updateData, isDataDisplay: false})
  }

  render() {
    const {listOfCrypto, isDataDisplay} = this.state

    return (
      <div className="sub-container">
        {isDataDisplay ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            {' '}
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="main-coin-container">
              <div className="currency-container">
                <p className="nav-para">Coin Type</p>
                <div className="usd-euro-container">
                  <p className="nav-para para-margin">USD</p>
                  <p className="nav-para">EURO</p>
                </div>
              </div>
              <ul className="ul-container">
                {listOfCrypto.map(eachList => (
                  <CryptocurrencyItem
                    key={eachList.id}
                    listCurrencyDetails={eachList}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
