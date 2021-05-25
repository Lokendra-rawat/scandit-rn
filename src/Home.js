/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import {
  BarcodePicker,
  ScanditModule,
  Barcode,
  ScanSettings
} from 'scandit-react-native';

// Set your license key.
ScanditModule.setAppKey('AUBvODQhFJIkKmSYYymIUNspayuxCCHcw0pZvRxVDBkKdWeS73SmcLMxbWC4cYYkdUKHxnNXVsDEd8POQwLOseoy9ojUIPNhzAsi0AViHzBsNCVdZRn1UpUZJQXJFlmACYP/BMeXeJ0QB39FrrjnENzIT0B5Wh9Xnb6E0To/ULWsCcxkUrQWMU485ZZv6dXaav3AmsmOLTT1/gKEYQPlW5nX4TGtZvjCVv390UHym1+q9KFodFrecyNXBLxgzXQ16FklwcIx3G18QVRHOi4VDwR7HIHY/hrhDR5DxxfcLw5lH5Z8ph3OrGJpdJM6TJmEBU4THjt4DaelFV/3MBFYOAGLDwBLGyFrkuh1EstTN9J3uB2wSAA6n6KrjHrqpVjk0IzFBdCNWwESd8QOf8xf00wCXI9qbD6hI0K/HdgBf+CPb81F1pIgezPqNkFTo9RTRZbD6a7sHeezw46Ns/hrfz3VFY+nWRZoW4H0UVb+40R8gP0bBdoLH3HRRekS9xaDBBEeB5AQaoqLOmQ7DKtwuHscs7n0hXwKpTSoGFahO/KAeVTd2PTMrLs8fid2E05rVwsqbUy53gP7L6G7F1jkL9y6jrHErgL5vsMOvuF/nDqYsbpTmTEVFWvfM8FNIPYmlPwoX788R1owL+xqb3e6SwWu1nmSarUhiMuiK4g7+NiIMaI2gSV2ALBaEgy7UsZKJt3FBBWA3MNUABUxxcM4UYSKlqT2s+n2+OEDRT0rp8IT8QrB5yRnlGkf8eVBuquSWfCsvYUdjPGo0EQ9dSc6/PDZKrr9ErH4YGoUKYH5K94=');

let settings = new ScanSettings();
settings.setSymbologyEnabled(Barcode.Symbology.EAN13, true);
// settings.setSymbologyEnabled(Barcode.Symbology.EAN8, true);
settings.setSymbologyEnabled(Barcode.Symbology.UPCA, true);
// settings.setSymbologyEnabled(Barcode.Symbology.UPCE, true);

settings.setSymbologyEnabled(Barcode.Symbology.CODE128, true);
settings.setSymbologyEnabled(Barcode.Symbology.CODE39, true);
settings.setSymbologyEnabled(Barcode.Symbology.QR, true);
settings.setSymbologyEnabled(Barcode.Symbology.EAN8, true);
settings.setSymbologyEnabled(Barcode.Symbology.UPCE, true);
settings.setSymbologyEnabled(Barcode.Symbology.EAN13, true);
// settings.

// Barcode.Symbology.

const Home = ({ navigation }) => {
  let scannerRef = React.useRef();

  let [scan, setData] = React.useState([]);
  let [rescanRequired, setRescanRequired] = React.useState(false);

  React.useEffect(() => scannerRef.current.startScanning())

  onSuccess = e => {
    setData([...scan, e.data])
    setRescanRequired(true);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{
          flex: 1,
        }}>
          {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.sectionDescription}>
            Home
          </Text> */}

          <BarcodePicker
            onRecognizeNewCodes={(data) => {
              console.log('data is ', data);
            }}
            ref={scannerRef}
            scanSettings={settings}
            // scanSettings={{
            //   enabledSymbologies: [
            //     'EAN13',
            //     'EAN8',
            //     'UPCA',
            //     'UPCE',
            //   ],
            //   cameraFacingPreference: 'back',
            //   highDensityModeEnabled: true,
            //   // settings
            // }}
            setBeepEnabled={true}
            onScan={(session) => {
              console.log('on scan session is ', session);
              // this.onScan(session)
            }}
            style={{ height: Dimensions.get('screen').height, width: '100%', }}
          />


          {/* <QRCodeScanner
            ref={scannerRef}
            onRead={onSuccess}
            // showMarker={true}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            // topContent={
            //   <Text style={styles.centerText}>
            //     Go to{' '}
            //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            //     your computer and scan the QR code.-
            //   </Text>
            // }
            containerStyle={{
              overflow: 'hidden'
            }}
            bottomContent={<Text> </Text>}
          /> */}


          {/* <View style={{
            padding: 12,
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {rescanRequired && <Button
                color="#e91e63"
                onPress={() => {
                  setRescanRequired(false);
                  scannerRef.current.reactivate()
                }}
                title="Rescan">
              </Button>}
            </View>
            <View style={{
              marginTop: 12,
            }}>
              {scan.map((x, i) => {
                return <Text key={i} style={{
                  color: '#e91e63',
                  fontSize: 28,
                  fontWeight: 'bold',
                  marginBottom: 12,
                }}>
                  {x}
                </Text>
              })}
            </View>
          </View> */}

          {/* </ScrollView> */}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
