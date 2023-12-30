import { AntDesign, Ionicons } from '@expo/vector-icons'
import { ReactNode } from 'react'
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface propType {
    children?: ReactNode,
    type: 'close' | 'default' | 'rounded' | 'rounded-rect' | 'back' | 'forward',
    sx?: any,
    color?: string,
    onPress?: (e: GestureResponderEvent) => void
}

const CustButton = ({ children, type, sx, onPress, color }: propType) => {

    const styles = StyleSheet.create({
        backButn: {
            marginBottom: '3%',
        },

        closeButn: {

        },

        rounded: {
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            width: hp('7%'),
            height: hp('7%'),
            backgroundColor: color,
            borderRadius: 50
        },

        roundedRect: {
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 50,
            backgroundColor: color,
        },

        default: {
            width: wp(40),
            hegiht: hp(80),
            paddingVertical: hp(1.5),
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: color,
            alignItems: 'center',
            borderRadius: 15,
        }
    })

    switch (type) {
        case 'forward':
            return (
                <TouchableOpacity onPress={onPress}>
                    <AntDesign name="right" size={hp(6)} color={color} />
                </TouchableOpacity>
            )
        case 'back':
            return (
                <TouchableOpacity onPress={onPress}>
                    <AntDesign name="arrowleft" style={{ ...styles.backButn, ...sx }} size={hp(2.5)} color={color} />
                </TouchableOpacity>
            )
        case 'close':
            return (
                <TouchableOpacity onPress={onPress}>
                    <Ionicons name="ios-close-outline" style={{ ...styles.closeButn, ...sx }} size={hp(3.5)} color={color} />
                </TouchableOpacity>
            )
        case 'rounded':
            return (
                <TouchableOpacity onPress={onPress} style={{ ...styles.rounded, ...sx }}>
                    {children}
                </TouchableOpacity>
            )
        case 'rounded-rect':
            return (
                <TouchableOpacity onPress={onPress} style={{ ...styles.roundedRect, ...sx }}>
                    {children}
                </TouchableOpacity>
            )
        default:
            return (
                <TouchableOpacity onPress={onPress} style={{ ...styles.default, ...sx }}>
                    {children}
                </TouchableOpacity>
            )
    }
}

export default CustButton