import { Account, Client } from 'appwrite';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const appwriteEndpoint = 'https://fra.cloud.appwrite.io/v1';
const appwriteProjectId = '68cac7a4001901e6f61f';

const client = new Client()
    .setEndpoint(appwriteEndpoint)
    .setProject(appwriteProjectId);

const account = new Account(client);

const router = useRouter();

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await account.createSession(email, password);
            // Redirect or update UI on successful login
            window.location.href = '/dashboard';
        } catch (err: any) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
                    <StatusBar barStyle="light-content" />
                    <KeyboardAvoidingView
                        style={styles.container}
                        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    >
                        <View style={styles.header}>
                            <Text style={styles.title}>Welcome Back</Text>
                            <Text style={styles.subtitle}>Log in to your acount</Text>
                        </View>
                        <View style={styles.form}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#aaa"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>
                                Don't have an account?{' '}
                                <TouchableOpacity onPress={()=>{router.push('/(tabs)/Signup')}}>
                                    <Text style={styles.loginText}>Sign Up</Text>
                                </TouchableOpacity>
                                
                            </Text>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
    );
};

const ACCENT_COLOR = '#6C63FF';
const BG_GRADIENT = ['#232526', '#414345'];

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: BG_GRADIENT[0],
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 28,
        backgroundColor: BG_GRADIENT[0],
    },
    header: {
        marginBottom: 32,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: ACCENT_COLOR,
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginTop: 8,
        opacity: 0.8,
    },
    form: {
        backgroundColor: '#2c2c2e',
        borderRadius: 18,
        padding: 24,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
    },
    input: {
        backgroundColor: '#232526',
        color: '#fff',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 18,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#444',
    },
    button: {
        backgroundColor: ACCENT_COLOR,
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
        shadowColor: ACCENT_COLOR,
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 1,
    },
    footer: {
        marginTop: 32,
        alignItems: 'center',
    },
    footerText: {
        color: '#aaa',
        fontSize: 15,
    },
    loginText: {
        color: ACCENT_COLOR,
        fontWeight: 'bold',
    },
});

export default Login;