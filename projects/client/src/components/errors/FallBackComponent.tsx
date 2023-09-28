import styled from "styled-components";
import { colors } from "../../shared/colors";
////////////////////////////////////////////////////////////////////////////////

type Props = {
  error: any;
  resetErrorBoundary: any;
};

export default function FallbackComponent({
  error,
  resetErrorBoundary,
}: Props) {
  return (
    <Wrapper>
      <Dialog>
        <Content>
          <Title>An unexpected error occured.</Title>
          <div>Cause: {error.message}</div>
          <div>
            <RedButton onClick={resetErrorBoundary}>
                Try Again...
            </RedButton>
          </div>
        </Content>
      </Dialog>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.4rem;
`

const Content = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 1rem;
`;

const RedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.red};
  color: ${colors.white};
  font-family: "Noto" sans-serif;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 4px;
  max-width: 350px;
  &:hover {
    transform: scale(1.03);
  }
`;

const Dialog = styled.div`
  border-radius: 6px;
  background: ${colors.dark};
  color: ${colors.white}
`
