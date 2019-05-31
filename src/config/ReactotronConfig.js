import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({
    server: '10.0.3.2',
    port: 9090,
    enabled: true,
  })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;

  tron.clear();
}
