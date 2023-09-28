import styled from "styled-components"
import ImageForm from "@/components/ImageForm"
import { useSelector, useDispatch } from "react-redux"

export default function LandingPage(){

  return <Wrapper>
    <GridLayout>
      <Fullwidth>
        <Header>
          Place Keanu App
        </Header>
      </Fullwidth>
      <ImageForm/>
    </GridLayout>
    <div>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const GridLayout = styled.div`
  display: grid; 
  grid: auto-flow min-content / repeat(12, 1fr);
`

const Fullwidth = styled.div`
  grid-column-start: 1;
  grid-column-end: 13;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`
