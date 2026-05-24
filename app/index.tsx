import QRCodeCard from '@/QrCodeCard';
import { View, Text, Platform } from 'react-native';

const DEFAULT_QR_CODE_LINK = 'exp://7zeap-0-devine200-8081.exp.direct';

const qrCodeLink =
  process.env.EXPO_PUBLIC_QR_CODE_LINK ?? DEFAULT_QR_CODE_LINK;

export default function Index() {
  return (Platform.OS !== 'web' ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>ADA</Text>
    </View>
  ): <QRCodeCard link={qrCodeLink} />);
}
