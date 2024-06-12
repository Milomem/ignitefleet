import { Car, FlagCheckered } from 'phosphor-react-native'

import { LocationInfo, LocationInfoProps } from '../localtionInfo'

import { Container, Line } from './styles';

type Props = {
  departure: LocationInfoProps,
  arrival?: LocationInfoProps | null
}

export function Locations({ arrival = null, departure }: Props) {
  return (
    <Container>
      <LocationInfo 
        icon={Car}
        label={departure.label}
        description={departure.description}
      />

      {arrival && (
        <>
          <Line />

          <LocationInfo 
            icon={FlagCheckered}
            label={arrival.label}
            description={arrival.description}
          />
        </>
      )}  
    </Container>
  );
}