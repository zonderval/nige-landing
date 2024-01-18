import styled from '@emotion/styled'
import Navbar from './components/Navbar.tsx'
import About from './components/About.tsx'
import Tokenomics from './components/Tokenomics.tsx'


export default function App() {

  return (
    <AppStyling>
      <Navbar></Navbar>
      <About></About>
      <Tokenomics></Tokenomics>
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

  @media (max-width: 759px) {
    text-align: center;
  }
`