import React, { useMemo, useRef, useState } from 'react';
import {

    Dimensions,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Mainlayout from '../components/Mainlayout';
import Fonts from '../theme/Fonts';
import color from '../theme/color';
import normalize from '../utils/normalize';
import Button from '../components/Button';

const difficultySettings = {
    easy: { max: 50, hearts: 5 },
    medium: { max: 100, hearts: 7 },
    hard: { max: 500, hearts: 10 },
};

const GameScreen = ({ navigation, route }) => {
    const difficulty = route?.params?.difficulty || 'medium';
    const settings = difficultySettings[difficulty];
    const [target] = useState(() =>
        Math.floor(Math.random() * settings.max) + 1,
    );
    const [guess, setGuess] = useState('');
    const [hearts, setHearts] = useState(settings.hearts);
    const [score, setScore] = useState(40);
    const [hint, setHint] = useState('');
    const [paused, setPaused] = useState(false);
    const inputRef = useRef(null);
    const keypad = useMemo(() => [2, 7, 9], []);

    const appendDigit = digit => {
        setGuess(current => `${current}${digit}`.slice(0, 3));
    };

    const submitGuess = () => {
        const value = Number(guess);
        if (!guess || value < 1 || value > settings.max) {
            setHint(`Enter 1 - ${settings.max}!`);
            return;
        }

        if (value === target) {
            setHint('Correct!');
            setScore(current => current + 20);
            return;
        }

        setHint(value < target ? 'Too Low!' : 'Too High!');
        setHearts(current => Math.max(0, current - 1));
        setScore(current => Math.max(0, current - 5));
        setGuess('');
    };

    return (
        <Mainlayout>
            <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
                <View style={styles.header}>
                    <Pressable
                        onPress={() => setPaused(current => !current)}
                        style={({ pressed }) => [
                            styles.pauseButton,
                            pressed && styles.pressed,
                        ]}>
                        <Text style={styles.pauseText}>Ⅱ</Text>
                    </Pressable>

                    <View style={styles.scoreBlock}>
                        <Text style={styles.scoreLabel}>Score</Text>
                        <Text style={styles.scoreValue}>{score}</Text>
                    </View>

                    <View style={styles.heartsBlock}>
                        <Text style={styles.heart}>♥</Text>
                        <Text style={styles.heartCount}>{hearts}</Text>
                    </View>
                </View>

                {paused ? (
                    <View style={styles.pausedOverlay}>
                        <Text style={styles.pausedTitle}>Paused</Text>
                        <Pressable
                            style={styles.resumeButton}
                            onPress={() => setPaused(false)}>
                            <Text style={styles.resumeText}>Resume</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation?.goBack()}>
                            <Text style={styles.quitText}>Quit Game</Text>
                        </Pressable>
                    </View>
                ) : (
                    <>
                        <View style={styles.gameArea}>
                            <Text style={styles.question}>Guess the number</Text>
                            <Text style={styles.range}>(1 - {settings.max})</Text>

                            <Pressable
                                style={styles.inputShell}
                                onPress={() => inputRef.current?.focus()}>
                                <TextInput
                                    ref={inputRef}
                                    value={guess}
                                    onChangeText={setGuess}
                                    keyboardType="number-pad"
                                    placeholder="Enter your guess..."
                                    placeholderTextColor="#777EA7"
                                    style={styles.input}
                                    maxLength={String(settings.max).length}
                                    returnKeyType="done"
                                    onSubmitEditing={submitGuess}
                                />
                            </Pressable>

                            <Button
                                title="Submit"
                                onPress={submitGuess}
                                style={{ width: '100%', marginTop: normalize(24) }}
                            />
                            <View style={styles.hintCard}>
                                <Text style={styles.bulb}>💡</Text>
                                <View>
                                    <Text style={styles.hintLabel}>Hint:</Text>
                                    <Text style={styles.hintText}>{hint || 'Good Luck!'}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.keypad}>
                            {keypad.map(digit => (
                                <Pressable
                                    key={digit}
                                    onPress={() => appendDigit(digit)}
                                    style={({ pressed }) => [
                                        styles.keyButton,
                                        pressed && styles.pressed,
                                    ]}>
                                    <Text style={styles.keyText}>{digit}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </>
                )}
            </SafeAreaView>
        </Mainlayout>
    );
};

export default GameScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'rgba(17, 24, 78, 0.12)',
    },
    header: {
        height: normalize(112),
        paddingHorizontal: normalize(18),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pauseButton: {
        width: normalize(40),
        height: normalize(40),
        borderRadius: normalize(28),
        backgroundColor: 'rgba(32, 41, 99, 0.72)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pauseText: {
        color: color.white,
        fontSize: normalize(20),
        fontFamily: Fonts.extraBold,

    },
    scoreBlock: {
        alignItems: 'center',
        marginLeft: normalize(12),
    },
    scoreLabel: {
        color: color.white,
        fontSize: normalize(15),
        lineHeight: normalize(18),
        fontFamily: Fonts.extraBold,
    },
    scoreValue: {
        color: color.white,
        fontSize: normalize(22),
        lineHeight: normalize(30),
        fontFamily: Fonts.extraBold,
    },
    heartsBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(8),
    },
    heart: {
        color: '#FF5266',
        fontSize: normalize(15),
        lineHeight: normalize(36),
    },
    heartCount: {
        color: color.white,
        fontSize: normalize(18),
        lineHeight: normalize(32),
        fontFamily: Fonts.bold,
    },
    gameArea: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: normalize(28),
        paddingTop: normalize(16),
    },
    question: {
        color: color.white,
        fontSize: normalize(20),
        lineHeight: normalize(20),
        fontFamily: Fonts.bold,
        textAlign: 'center',
    },
    range: {
        color: color.white,
        fontSize: normalize(22),
        lineHeight: normalize(30),
        fontFamily: Fonts.medium,
        textAlign: 'center',
    },
    inputShell: {
        width: '100%',
        height: normalize(50),
        marginTop: normalize(35),
        borderRadius: normalize(30),
        borderWidth: 3,
        borderColor: '#343B87',
        backgroundColor: 'rgba(21, 28, 83, 0.72)',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        color: color.white,
        paddingHorizontal: normalize(34),
        fontSize: normalize(15),
        fontFamily: Fonts.medium,
    },
    submitButton: {
        width: '100%',
        height: normalize(82),
        borderRadius: normalize(41),
        marginTop: normalize(24),
        overflow: 'hidden',
    },
    submitPressable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitText: {
        color: color.white,
        fontSize: normalize(30),
        fontFamily: Fonts.extraBold,
    },
    hintCard: {
        width: '100%',
        height: normalize(120),
        borderRadius: normalize(34),
        borderWidth: 2,
        borderColor: '#313879',
        backgroundColor: 'rgba(25, 31, 91, 0.82)',
        marginTop: normalize(28),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: normalize(12),
    },
    bulb: {
        fontSize: normalize(45),
    },
    hintLabel: {
        color: '#FFD230',
        fontSize: normalize(25),
        lineHeight: normalize(38),
        fontFamily: Fonts.extraBold,
    },
    hintText: {
        color: '#FFD230',
        fontSize: normalize(20),
        lineHeight: normalize(38),
        fontFamily: Fonts.extraBold,
    },
    keypad: {
        width: width,
        height: normalize(125),
        // backgroundColor: 'rgba(76, 19, 126, 0.78)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: normalize(18),
    },
    keyButton: {
        width: normalize(82),
        height: normalize(82),
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyText: {
        color: '#C8A7FF',
        fontSize: normalize(35),
        lineHeight: normalize(58),
        fontFamily: Fonts.extraBold,
    },
    pausedOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pausedTitle: {
        color: color.white,
        fontSize: normalize(38),
        fontFamily: Fonts.extraBold,
        marginBottom: normalize(30),
    },
    resumeButton: {
        width: '70%',
        height: normalize(64),
        borderRadius: normalize(32),
        backgroundColor: color.lightPurple,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: normalize(20),
    },
    resumeText: {
        color: color.white,
        fontSize: normalize(22),
        fontFamily: Fonts.extraBold,
    },
    quitText: {
        color: color.white,
        fontSize: normalize(18),
        fontFamily: Fonts.semiBold,
    },
    pressed: {
        opacity: 0.75,
    },
});