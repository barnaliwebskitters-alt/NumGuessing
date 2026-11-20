import React, { useState } from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Mainlayout from '../components/Mainlayout';
import Fonts from '../theme/Fonts';
import Icons from '../theme/Icons';
import color from '../theme/color';
import Button from '../components/Button';
import css from '../theme/css';
import normalize from '../utils/normalize';

const difficulties = [
    {
        id: 'easy',
        title: 'Easy',
        range: '1 - 50',
        attempts: '(5 attempts)',
        icon: Icons.smilingFace,
        iconColors: ['#34EA92', '#25B954'],
        cardColors: ['#1B5A89', '#222164'],
        accent: '#4AE79B',
    },
    {
        id: 'medium',
        title: 'Medium',
        range: '1 - 100',
        attempts: '(7 attempts)',
        icon: Icons.star,
        iconColors: ['#4FB9FF', '#2778E8'],
        cardColors: ['#2D2A98', '#1D1D72'],
        accent: '#B64BF2',
    },
    {
        id: 'hard',
        title: 'Hard',
        range: '1 - 500',
        attempts: '(10 attempts)',
        icon: Icons.crown,
        iconColors: ['#FFB35A', '#FF6341'],
        cardColors: ['#38266D', '#25205D'],
        accent: '#A447E8',
    },
];

const SelectDifficulty = ({ navigation }) => {
    const [selected, setSelected] = useState('medium');

    return (
        <Mainlayout>
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <View style={styles.header}>
                    <Pressable
                        onPress={() => navigation?.goBack()}
                        hitSlop={12}
                        style={({ pressed }) => [
                            styles.backButton,
                            pressed && styles.pressed,
                        ]}>
                        <Text style={styles.backArrow}>{'‹'}</Text>
                    </Pressable>
                    <Text style={styles.headerTitle}>Select Difficulty</Text>
                    <View style={styles.headerSpacer} />
                </View>

                <View style={styles.cards}>
                    {difficulties.map(item => {
                        const isSelected = selected === item.id;

                        return (
                            <Pressable
                                key={item.id}
                                onPress={() => setSelected(item.id)}
                                style={({ pressed }) => [
                                    styles.cardPressable,
                                    pressed && styles.pressed,
                                ]}>
                                {isSelected ? (
                                    <LinearGradient
                                        colors={['#C05EFF', '#7654FF']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        style={styles.selectedBorder}>
                                        <LinearGradient
                                            colors={item.cardColors}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            style={styles.card}>
                                            <DifficultyContent item={item} isSelected />
                                        </LinearGradient>
                                    </LinearGradient>
                                ) : (
                                    <LinearGradient
                                        colors={item.cardColors}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        style={[styles.card, styles.unselectedCard]}>
                                        <DifficultyContent item={item} />
                                    </LinearGradient>
                                )}
                            </Pressable>
                        );
                    })}
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: normalize(60) }} >
                    <Button
                        title="Start Game"
                        onPress={() => navigation.navigate('GameScreen', { difficulty: selected })}
                    />
                </View>
            </SafeAreaView>
        </Mainlayout>
    );
};

const DifficultyContent = ({ item, isSelected = false }) => (
    <>
        <LinearGradient
            colors={item.iconColors}
            style={styles.iconCircle}>
            {item.id === 'easy' ? (
                <Image source={item.icon} style={styles.smileyIcon} resizeMode="contain" />
            ) : (
                <Image
                    source={item.icon}
                    style={[
                        styles.difficultyIcon,
                        item.id === 'crown' && styles.crownIcon,
                    ]}
                    resizeMode="contain"
                />
            )}
        </LinearGradient>

        <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.range}>{item.range}</Text>
            <Text style={styles.attempts}>{item.attempts}</Text>
        </View>

        <View
            style={[
                styles.selectionIndicator,
                isSelected && styles.selectedIndicator,
                isSelected && { borderColor: item.accent, backgroundColor: item.accent },
            ]}>
            {isSelected && <View style={styles.selectedDiamond} />}
        </View>
    </>
);

export default SelectDifficulty;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        height: 112,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backButton: {
        width: 42,
        height: 42,
        justifyContent: 'center',
    },
    backArrow: {
        color: color.white,
        fontSize: 58,
        lineHeight: 58,
        marginTop: -6,
        fontFamily: Fonts.bold,
    },
    headerTitle: {
        color: color.white,
        fontSize: normalize(20),
        lineHeight: 32,
        fontFamily: Fonts.extraBold,
        textAlign: 'center',
    },
    headerSpacer: {
        width: 42,
    },
    cards: {
        paddingHorizontal: 18,
        gap: 17,
    },
    cardPressable: {
        width: '100%',
        height: 136,
    },
    selectedBorder: {
        flex: 1,
        borderRadius: 25,
        padding: 3,
    },
    card: {
        flex: 1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    unselectedCard: {
        borderWidth: 2,
        borderColor: '#353A81',
    },
    iconCircle: {
        width: 82,
        height: 82,
        borderRadius: 41,
        alignItems: 'center',
        justifyContent: 'center',
    },
    smileyIcon: {
        width: 74,
        height: 74,
    },
    difficultyIcon: {
        width: 48,
        height: 48,
        tintColor: color.white,
    },
    crownIcon: {
        width: '30%',
        height: 52,
    },
    cardText: {
        marginLeft: 20,
        flex: 1,
    },
    cardTitle: {
        color: color.white,
        fontSize: normalize(18),
        lineHeight: 36,
        fontFamily: Fonts.extraBold,
    },
    range: {
        color: color.white,
        fontSize: normalize(18),
        lineHeight: 35,
        fontFamily: Fonts.semiBold,
    },
    attempts: {
        color: color.white,
        fontSize: normalize(10),
        lineHeight: 23,
        fontFamily: Fonts.semiBold,
    },
    selectionIndicator: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 5,
        borderColor: '#343A81',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedIndicator: {
        borderWidth: 0,
    },
    selectedDiamond: {
        width: 15,
        height: 15,
        borderRadius: 3,
        backgroundColor: color.white,
        transform: [{ rotate: '45deg' }],
    },
    bottomArea: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 32,
        paddingBottom: 58,
    },
    startButton: {
        height: 82,
        borderRadius: 41,
        overflow: 'hidden',
        elevation: 8,
        shadowColor: '#5C32BE',
        shadowOpacity: 0.45,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 8 },
    },
    startGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startText: {
        color: color.white,
        fontSize: 24,
        fontFamily: Fonts.extraBold,
    },
    pressed: {
        opacity: 0.85,
    },
    startPressed: {
        transform: [{ scale: 0.98 }],
    },
});