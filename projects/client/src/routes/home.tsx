import styled from "styled-components";
import ImageForm from "../components/ImageForm";
import { useSelector } from "react-redux";
////////////////////////////////////////////////////////////////////////////////

const Home = () => {
  const image = useSelector(state => state?.images?.selected)
  

  return (
    <Wrapper>
      <Layout>
        <ImageForm />
        <ImageContainer>
          <img src={image}/>
        </ImageContainer>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
  display: grid;
  grid: auto-flow min-content / 1fr;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
`

const Layout = styled.div`
  margin: 1rem;
  display: grid;
  grid: auto-flow min-content / .3fr 1fr;
  gap: 1rem;
`;

export default Home;
