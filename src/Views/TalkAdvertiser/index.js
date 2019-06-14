import React, { Component } from 'react';
import {
  View, StatusBar, ActivityIndicator, Text,
} from 'react-native';
import api from '~/services/api';
import { metrics, colors } from '~/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withFormik } from 'formik';
import { TextInputMask } from 'react-native-masked-text';
// import Yup from 'yup';
import * as Yup from 'yup';

import {
  styles,
  Container,
  Header,
  Logo,
  ContainerScroll,
  InfoAdvertiser,
  TalkAdvertiser,
  BoxTalk,
  TalkInput,
  TextTalk,
  TalkArea,
  TalkInputArea,
  SubmitTalk,
  SubmitText,
  InfoView,
  InfoViewPhoto,
  ImageProfile,
  InfoName,
  InfoDetails,
  BackButton,
} from './styles';

import logo from '~/assets/logo.png';
import profile from '~/assets/boss.png';

class Talk extends Component {
  state = {
    success: null,
  };

  render() {
    const { navigation } = this.props;
    const advert = navigation.getParam('advert');

    console.tron.log(advert);
    return (
      <Container>
        <StatusBar hidden={false} />
        <Header>
          <BackButton onPress={() => navigation.pop()}>
            <Icon name="arrow-left" size={25} style={styles.backIcon} />
          </BackButton>
          <Logo source={logo} resizeMode="contain" resizeMethod="scale" />
        </Header>
        <ContainerScroll>
          <InfoAdvertiser>
            <InfoViewPhoto>
              <ImageProfile source={profile} rosizeMode="contain" resizeMethod="scale" />
            </InfoViewPhoto>
            <InfoView>
              <InfoName>{advert.user_name}</InfoName>
              {advert.phone.map((item, index) => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
                  <InfoDetails style={{ marginRight: 5 }}>{item[0]}</InfoDetails>
                  {item[1] && <Icon name="whatsapp" size={20} style={{ color: colors.sucess }} />}
                </View>
              ))}
              {advert.email.map((item, index) => (
                <InfoDetails key={index}>{item}</InfoDetails>
              ))}
              {advert.site !== null && <InfoDetails>{advert.site}</InfoDetails>}
              {advert.creci !== null && <InfoDetails>{advert.creci}</InfoDetails>}
            </InfoView>
          </InfoAdvertiser>

          <TalkAdvertiser>
            <TextTalk>Falar com anunciante</TextTalk>
            <BoxTalk>
              <Icon name="account-outline" color={colors.regular} size={20} />
              <TalkInput
                onChangeText={text => this.props.setFieldValue('name', text)}
                value={this.props.values.name}
                placeholder="Nome"
                autoCapitalize="none"
              />
            </BoxTalk>

            {this.props.touched.name && this.props.errors.name && (
              <Text style={styles.textDanger}>{this.props.errors.name}</Text>
            )}

            <BoxTalk>
              <Icon name="email-open-outline" color={colors.regular} size={20} />
              <TalkInput
                onChangeText={text => this.props.setFieldValue('email', text)}
                value={this.props.values.email}
                placeholder="Email"
                autoCapitalize="none"
              />
            </BoxTalk>

            {this.props.touched.email && this.props.errors.email && (
              <Text style={styles.textDanger}>{this.props.errors.email}</Text>
            )}

            <BoxTalk>
              <Icon name="cellphone-sound" color={colors.regular} size={20} />
              <TextInputMask
                type="cel-phone"
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                style={styles.maskInput}
                onChangeText={text => this.props.setFieldValue('phone', text)}
                value={this.props.values.phone}
                placeholder="Telefone"
                autoCapitalize="none"
              />
            </BoxTalk>

            {this.props.touched.phone && this.props.errors.phone && (
              <Text style={styles.textDanger}>{this.props.errors.phone}</Text>
            )}

            <TalkArea>
              <Icon name="message-text-outline" color={colors.regular} size={20} />
              <TalkInputArea
                onChangeText={text => this.props.setFieldValue('message', text)}
                value={this.props.values.message}
                placeholder="Digite sua mensagem"
                autoCapitalize="none"
                multiline
              />
            </TalkArea>
            {this.props.touched.message && this.props.errors.message && (
              <Text style={styles.textDanger}>{this.props.errors.message}</Text>
            )}

            {this.props.status && this.props.status.success && (
              <Text style={styles.success}>{this.props.status.success}</Text>
            )}

            <SubmitTalk onPress={this.props.handleSubmit}>
              {this.props.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <SubmitText>Enviar mensagem</SubmitText>
              )}
            </SubmitTalk>
          </TalkAdvertiser>
        </ContainerScroll>
      </Container>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string('Preencha o campo Nome').required('Preencha o campo de e-mail'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de Email'),
    phone: Yup.string().required('Preencha o campo Telefone'),
    message: Yup.string().required('Preencha o campo Mensagem'),
  }),

  handleSubmit: async (values, {
    props, setSubmitting, setErrors, resetForm, setStatus,
  }) => {
    const advert = props.navigation.getParam('advert');
    // setSubmitting(false);
    try {
      const response = await api.post(`/prop/message/${advert.advert_id}`, values);

      console.tron.log(response);

      setStatus({ success: 'Mensagem enviada com sucesso!' });

      setTimeout(() => {
        resetForm({});
      }, 1000);
    } catch (err) {
      console.tron.log(err);
      setErrors({ message: 'Houve um problema, tente novamente!' });
    } finally {
      setSubmitting(false);
    }
  },
})(Talk);
