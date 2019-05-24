import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    server: '10.0.3.2',
    port: 9090,
    enabled: true,
  })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
