import React, { Component } from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';

class SplashScreen extends Component {
    componentDidMount() {
        // Vous pouvez effectuer des opérations d'initialisation ici, par exemple, vérifier l'état de l'authentification ou charger des données.

        // Après une courte période (par exemple, 2 secondes), naviguez vers l'écran principal de l'application.
        setTimeout(() => {
            this.props.navigation.navigate('SignIn'); // Remplacez 'Main' par le nom de votre écran principal.
        }, 2000); // 2000 ms (2 secondes)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/images/Exaderma.png')} // Remplacez par le chemin de votre image d'écran de démarrage.
                    style={styles.image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200, // Ajustez la largeur et la hauteur selon vos besoins.
        height: "25%",
    },
});

export default SplashScreen;
