import styled from '@emotion/styled'
import Navbar from './components/Navbar.tsx'
import About from './components/About.tsx'
import Tokenomics from './components/Tokenomics.tsx'
import Buy from './components/Buy.tsx'
import FundUsage from './components/FundUsage.tsx'
import Disclaimer from './components/Disclaimer.tsx'


export default function App() {

  return (
    <AppStyling>
      <Navbar></Navbar>
      <About></About>
      <Tokenomics></Tokenomics>
      <Buy></Buy>
      <FundUsage></FundUsage>
      <Disclaimer></Disclaimer>
    </AppStyling>
  )
}

const AppStyling = styled.div`
  margin: auto;
  height: 100%;
  h1 {
    font-family: AfricanCulture;
  }
  p {
    font-family: AmericanTypewriterRegular;
    font-size: 18px;
  }
  a {
    text-decoration: none !important;
  }

  @media (max-width: 759px) {
    text-align: center;
  }
`