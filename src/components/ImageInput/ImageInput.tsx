import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { lightTheme } from "../../../theme"

export const ImageInput = ({ onImageSelected }: { onImageSelected: (uri: string) => void }) => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    const handleSelectImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Niestety, potrzebujemy uprawnień do galerii, aby to zadziałało!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaType: 'photo' as const,
            quality: 0.7,        // Kompresja
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setImageUri(uri);
            onImageSelected(uri);
        }
    };

    const removeImage = () => {
        setImageUri(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>OBRAZ POMOCNICZY (OPCJONALNIE)</Text>

            {imageUri ? (
                <View style={styles.previewContainer}>
                    <Image source={{ uri: imageUri }} style={styles.image} />
                    <TouchableOpacity style={styles.removeBadge} onPress={removeImage}>
                        <Text style={styles.removeText}>X</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    style={styles.dropZone}
                    onPress={handleSelectImage}
                    activeOpacity={0.7}
                >
                    <Text style={styles.icon}>📷</Text>
                    <Text style={styles.dropZoneText}>Dotknij, aby dodać zdjęcie</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
        letterSpacing: 1,
    },
    dropZone: {
        height: 120,
        backgroundColor: lightTheme.colors.card, // #0F172A
        borderRadius: 12,
        borderWidth: 2,
        borderColor: lightTheme.colors.border, // #1E293B
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropZoneText: {
        color: lightTheme.colors.primary,
        fontSize: 14,
    },
    icon: {
        fontSize: 30,
        marginBottom: 5,
    },
    previewContainer: {
        height: 150,
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: lightTheme.colors.primary,
    },
    image: {
        width: "100%",
        height:"100%",
        resizeMode: 'cover',
    },
    removeBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: lightTheme.colors.notification,
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    removeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
});