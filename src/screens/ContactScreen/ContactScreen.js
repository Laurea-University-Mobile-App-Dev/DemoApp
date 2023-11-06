import React from 'react';
import { View, Text } from 'react-native';
import CustomButtons from '../../components/CustomButtons';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ContactScreen = () => {
    const navigation = useNavigation();


    const goHome = async () => {

        navigation.navigate("HomeScreen");

    };
    // Données de l'entreprise
    const companyData = {
        name: "Nom de l'entreprise",
        email: 'contact@entreprise.com',
        phone: '123-456-7890',
        // Ajoutez d'autres informations de l'entreprise si nécessaire
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>About the company</Text>
            <View style={{ borderWidth: 1, borderColor: 'lightgray', padding: 10, marginVertical: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Name of the company:</Text>
                <Text>{companyData.name}</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: 'lightgray', padding: 10, marginVertical: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>E-mail:</Text>
                <Text>{companyData.email}</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: 'lightgray', padding: 10, marginVertical: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Phone number:</Text>
                <Text>{companyData.phone}</Text>
            </View>
            < CustomButtons
                text={"Go back"}
                onPressed={goHome}
                type={"PRIMARY"}
            />
            {/* Ajoutez d'autres informations de l'entreprise si nécessaire */}
        </View>
    );
};

export default ContactScreen;
