import { useNavigation } from '@react-navigation/native';
import { CarStatus } from '../../components/carStatus';
import { HomeHeader } from '../../components/homeHeader';
import { Container, Content } from './styles';

export function Home() {
  const { navigate } = useNavigation();

  function handleRegisterMoviment() {
    navigate('departure')
  }
  
  return (
    <Container>
      <HomeHeader />

      <Content>
        <CarStatus licensePlate="XXX-1234" onPress={handleRegisterMoviment} />
      </Content>
    </Container>
  );
}