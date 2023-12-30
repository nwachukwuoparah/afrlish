import {
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import colors from '../../utillity/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { DarkModeContext } from '../contexts/darkMode.context';

const Container = ({ children, sx }: any) => {
    // const [darkMode] = useContext(DarkModeContext);

    const styles = StyleSheet.create({
        container: {
            width: wp('100%'),
            height: hp('100%'),
            backgroundColor: colors.white,
            alignItems: "center",
        },
    })

    return (
        <SafeAreaView style={{ ...styles.container, ...sx }}>
            {children}
        </SafeAreaView>
    )
};

export const KeyboardView = ({ children, sx }: any) => {
    const styles = StyleSheet.create({
        wrapper: {
            width: '100%',
            height: "100%",
            // backgroundColor: "yellow",
            alignItems: "center"
        },
    })

    return (
        <KeyboardAvoidingView style={{ ...styles.wrapper, ...sx }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                    {children}
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export const ScrollContainer = ({ children, sx, horizontal, innerStyles }: any) => {
    const styles = StyleSheet.create({
        wraper: {
            height: "100%",
            width: '100%',
            // backgroundColor:"grey",
            ...sx
        },
    })

    return (
        <ScrollView contentContainerStyle={innerStyles} showsVerticalScrollIndicator={false} style={styles.wraper} horizontal={horizontal}>
            {children}
        </ScrollView>
    )
};

export const InnerWrapper = ({ children, sx }: any) => {
    const styles = StyleSheet.create({
        innerWrapper: {
            width: '90%',
            height: "100%",
            // backgroundColor:"red"
        }
    })

    return (
        <View style={{ ...styles.innerWrapper, ...sx }}>
            {children}
        </View>
    )
};


export default Container