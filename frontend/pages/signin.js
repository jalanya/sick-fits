import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const GridSytles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export default function SingInPage() {
  return (
    <GridSytles>
      <SignIn />
      <SignUp />
      <RequestReset />
    </GridSytles>
  );
}
