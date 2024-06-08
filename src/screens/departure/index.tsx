import { useRef } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/header';
import { LicensePlateInput } from '../../components/licensePlateInput';
import { TextAreaInput } from '../../components/textAreaInput';

import { Container, Content } from './styles';

import { TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const keyboardAvoidingViewBehavior = Platform.OS === 'android' ? 'height' : 'position';

export function Departure() {
  const descriptionRef = useRef<TextInput>(null); // Declare descriptionRef variable

  function handleDepartureRegister() {
    console.log('OK!');
  }
  
  return (
    <Container>
       <Header title='Saída' />

       <KeyboardAvoidingView style={{ flex: 1 }} behavior={keyboardAvoidingViewBehavior} >
        <ScrollView>
          <Content>
            <LicensePlateInput
              label='Placa do veículo'
              placeholder="BRA1234"
              onSubmitEditing={() => {
                descriptionRef.current?.focus()
              }}
              returnKeyType='next'
            />

            <TextAreaInput
              ref={descriptionRef}
              label='Finalizade'
              placeholder='Vou utilizar o veículo para...'
              onSubmitEditing={handleDepartureRegister}
              returnKeyType='send'
              blurOnSubmit
            />

            <Button 
              title='Registar Saída'
              onPress={handleDepartureRegister}
            />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}