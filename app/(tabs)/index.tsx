import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const safetyScore = 86;

  return (
    <SafeAreaProvider>
    <ImageBackground source={require('@/assets/images/blue-background.jpg')} style={styles.bg}>
      <ScrollView style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.title}>Welcome, User 👋</Text>
        </View>

        <View style={styles.scoreCard}>
          <Text style={styles.scoreValue}>{safetyScore}</Text>
          <Text style={styles.scoreLabel}>Safety Score</Text>
        </View>

        <Text style={styles.sectionTitle}>Current Location</Text>

        <View style={styles.locationBox}>
          <Image
            source={require('@/assets/images/safeguarding.png')}
            style={styles.locationImage}
          />
          <Text style={styles.locationStatus}>Safe</Text>
        </View>

        <TouchableOpacity style={styles.panicBtn}>
          <Image source={require('@/assets/images/info.png')} />
          <Text style={styles.panicTxt}>Panic Button</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatBotBox}>
          <Image source={require('@/assets/images/chat.png')} />
          <Text style={styles.chatBotText}>Suraksha-Mitra</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  container: {
    flexGrow: 1,
  },
  header: {
    backgroundColor:'#2E2EFF',
    paddingTop: 40,
    paddingBottom: 28,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: 'bold',
  },
  scoreCard: {
    backgroundColor: '#0096FF',
    paddingVertical: 64,
    paddingHorizontal: 80,
    borderRadius: 120,
    marginTop: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#00AAFF',
  },
  scoreValue: {
    color: 'white',
    fontWeight: '900',
    fontSize: 64,
  },
  scoreLabel: {
    color: '#EEEEEE',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 48,
    fontSize: 20,
    marginLeft: 16,
  },
  locationBox: {
    marginTop: 12,
    marginLeft: 16,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  locationImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  locationStatus: {
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 20,
    marginLeft: 4,
    marginBottom:8
  },
  panicBtn: {
    backgroundColor: '#FF3B30',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:8,
    alignSelf: 'center',
    borderRadius: 16,
    marginTop: 16,
    width: '90%',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: 4,
  },
  panicTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 12,
  },
  chatBotBox: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    width: "90%",
    alignSelf: 'center',
    borderRadius: 16,
    marginTop: 28,
    marginBottom: 32,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    gap:8
  },
  chatBotText: {
    color: "#000000",
    fontWeight: 'bold',
    fontSize: 20,
  }
});
