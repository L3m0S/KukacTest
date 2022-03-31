import { StandartButton } from '../Button/StandartButton';
import './Header.css'
import logo from '../../images/logo.webp';


export function Header() {

    return (
      <div className="root">
        <header> 
          <div className="main">
            <div className='container'> 
              <div className='DI'>
                <img src={logo} className='logo'></img>
              </div>
              <div className='buttons'>
                <StandartButton text='Home' url="/home"/>
                <StandartButton text='Palindromes' url="/palindromes"/>
                <StandartButton text='Money' url="/money-change"/>
                <StandartButton text='Vehicles' url="/vehicles"/>
                <StandartButton text='Cep' url="/cep"/>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
} 