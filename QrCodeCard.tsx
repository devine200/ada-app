import * as Linking from 'expo-linking';
import { View, Text, Pressable } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type QRCodeCardProps = {
  link: string;
};

export default function QRCodeCard({ link }: QRCodeCardProps) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          marginBottom: 20,
          fontWeight: '600',
        }}
      >
        Scan to Download ADA App
      </Text>

      <QRCode
        value={link}
        size={220}
      />

      <Pressable
        onPress={() => Linking.openURL(link)}
        accessibilityRole="link"
        accessibilityLabel={`Open ${link}`}
        style={({ pressed }) => ({
          marginTop: 20,
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          backgroundColor: pressed ? '#0056b3' : '#007AFF',
        })}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '600',
          }}
        >
          Download on App Store
        </Text>
      </Pressable>
    </View>
  );
}