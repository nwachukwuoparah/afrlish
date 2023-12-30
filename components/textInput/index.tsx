import {
	DropdownInputProps,
	inputPropType,
	phoneInputProps,
} from "../../utillity/type.check";
import { Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import colors from "../../utillity/colors";
import {
	Platform,
	StyleProp,
	StyleSheet,
	TextInput,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import { useRef, useState } from "react";
import TextComponent from "../reusables/Text.component";
import PhoneInput from "react-native-phone-number-input";
import OTPTextInput from "react-native-otp-textinput";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { font } from "../../utillity/font";
import RNDateTimePicker, {
	DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import moment from "moment";

const InputText = ({
	type,
	children,
	editable,
	sx,
	placeholder,
	defaultValue,
	hidden,
	multiLine,
	keyboardType,
	control,
	name,
	errors,
	label,
}: inputPropType) => {
	const styles = StyleSheet.create({
		inputWrapper: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			borderWidth: 1,
			paddingHorizontal: 5,
			borderColor: colors.grey,
			borderRadius: 8,
		},

		textInput: {
			width: type === "password" ? "90%" : "100%",
			paddingVertical: "4%",
			paddingHorizontal: 10,
			fontSize: hp("1.8%"),
		},
	});
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => setToggle(!toggle);

	return (
		<View style={{ gap: 5 }}>
			{label && (
				<TextComponent
					type="text16"
					sx={{ fontFamily: font.DMSans_500Medium, color: colors.black1 }}
				>
					{label}
				</TextComponent>
			)}
			<View
				style={{
					...styles.inputWrapper,
					...sx?.wrapper,
				}}
			>
				{children}
				<Controller
					control={control}
					name={name}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							multiline={multiLine}
							keyboardType={keyboardType}
							defaultValue={defaultValue}
							style={{ ...styles.textInput, ...sx?.textInput }}
							placeholder={placeholder}
							placeholderTextColor={colors.grey}
							editable={editable}
							secureTextEntry={type === "text" ? false : !toggle}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
				/>
				{type === "password" &&
					(toggle ? (
						<Ionicons
							name="eye"
							size={24}
							color="black"
							onPress={handleToggle}
						/>
					) : (
						<Ionicons
							name="eye-off"
							size={24}
							color="black"
							onPress={handleToggle}
						/>
					))}
			</View>
			{errors?.[name] && (
				<TextComponent
					type="text14"
					sx={{ color: colors.red, fontFamily: font.DMSans_400Regular }}
				>
					{errors?.[name]?.message}
				</TextComponent>
			)}
		</View>
	);
};

export const DropdownInput = ({
	data,
	style,
	placeholder,
	placeholderStyle,
	selectedTextStyle,
	itemTextStyle,
	iconStyle,
	containerStyle,
	defualtValue,
	errors,
	control,
	name,
}: DropdownInputProps) => {
	const styles = StyleSheet.create({
		dropdown: {
			width: "100%",
			padding: "2%",
			borderBottomWidth: 1.5,
			borderColor: colors.grey,
			backgroundColor: colors.white,
			...(style as object),
		},

		placeholder: {
			fontSize: hp("1.8%"),
			color: colors.black1,
			...(placeholderStyle as object),
		},

		selectedText: {
			fontSize: hp("2%"),
			...(selectedTextStyle as object),
		},

		itemTextStyle: {
			color: colors.black,
			...(itemTextStyle as object),
		},

		iconStyle: {
			backgroundColor: colors.white,
			...(iconStyle as object),
		},

		containerStyle: {
			...(containerStyle as object),
		},
	});

	return (
		<View style={{ gap: 5 }}>
			<Controller
				control={control}
				render={({ field }) => (
					<Dropdown
						style={styles.dropdown}
						placeholderStyle={styles.placeholder}
						selectedTextStyle={styles.selectedText}
						itemTextStyle={styles.itemTextStyle}
						containerStyle={styles.containerStyle}
						iconStyle={styles.iconStyle}
						data={data}
						labelField="label"
						valueField="value"
						placeholder={placeholder}
						onChange={(text) => field.onChange(text["value"])}
						value={field.value}
					/>
				)}
				name={name}
			/>
			{errors?.[name] && (
				<TextComponent type="text14" sx={{ color: colors.red }}>
					{errors?.[name]?.message}
				</TextComponent>
			)}
		</View>
	);
};

export const Phone_Input = ({
	label,
	style,
	defaultValue,
	countryCode,
	control,
	errors,
}: phoneInputProps) => {
	const styles = StyleSheet.create({
		phoneNumberView: {
			width: "100%",
			borderColor: colors.grey,
			borderWidth: 1,
			borderRadius: 8,
			backgroundColor: colors.white,
			fontSize: hp("3%"),
			...(style as object),
		},
	});

	return (
		<View style={{ gap: 10 }}>
			{label && (
				<TextComponent
					type="text16"
					sx={{ fontFamily: font.DMSans_500Medium, color: colors.black1 }}
				>
					{label}
				</TextComponent>
			)}
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<PhoneInput
						defaultCode={"GB"}
						layout="first"
						placeholder="Enter phone"
						containerStyle={styles.phoneNumberView}
						textContainerStyle={{ borderRadius: 8 }}
						textInputStyle={{
							color: colors.black1,
						}}
						codeTextStyle={{ color: colors.black1 }}
						defaultValue={value}
						onChangeFormattedText={(formattedText) => {
							onChange(formattedText);
						}}
					/>
				)}
				name="phone"
			/>
			{errors?.["phone"] && (
				<TextComponent
					type="text14"
					sx={{ color: colors.red, fontFamily: font.DMSans_400Regular }}
				>
					{errors?.["phone"]?.message}
				</TextComponent>
			)}
		</View>
	);
};

export const Otp_Input = ({ control, errors }: phoneInputProps) => {
	const styles = StyleSheet.create({
		otpComp: {
			marginTop: "10%",
			// width: "100%",
			justifyContent: "space-between",
		},

		otpText: {
			borderWidth: 1,
			borderBottomWidth: 1,
			height: hp("9%"),
			width: hp("9%"),
			borderRadius: 10,
			backgroundColor: colors.white,
		},
	});

	return (
		<View style={{ gap: 10 }}>
			<Controller
				control={control}
				name="otp"
				render={({ field }) => (
					<OTPTextInput
						inputCount={4}
						containerStyle={styles.otpComp}
						textInputStyle={styles.otpText}
						offTintColor={colors.grey1}
						tintColor={colors.yellow}
						handleTextChange={(text) => {
							field.onChange(text);
						}}
					/>
				)}
			/>
			{errors?.["otp"] && (
				<TextComponent type="text14" sx={{ color: colors.red }}>
					{errors?.["otp"]?.message}
				</TextComponent>
			)}
		</View>
	);
};

interface dateInputPropType {
	onChange: (value: Date | undefined) => void;
	placeholder?: string;
	mode: "date" | "time";
	wrapperStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<TextStyle>;
}
export const DateComponent = ({
	onChange,
	placeholder,
	style,
	mode,
	wrapperStyle,
}: dateInputPropType) => {
	const [dateVal, setdateVal] = useState<Date>();
	const [showDateSelector, setshowDateSelector] = useState(false);

	const toggleDatePicker = () => {
		Platform.OS === "ios"
			? setshowDateSelector(!showDateSelector)
			: !showDateSelector
			? DateTimePickerAndroid.open({
					mode,
					value: new Date(),
					onChange: (e: any, value: Date) => {
						DateTimePickerAndroid.dismiss("date");
						if (e.type === "set") {
							onChange(value);
							setdateVal(value);
						}
					},
			  } as any)
			: DateTimePickerAndroid.dismiss("date");
	};

	const styles = StyleSheet.create({
		inputWrapper: {
			height: 40,
			flexDirection: "row",
			marginVertical: "2%",
			borderBottomWidth: 1.2,
			justifyContent: "space-between",
			// paddingHorizontal: "5%",
			alignItems: "center",
			...(wrapperStyle as object),
		},
	});

	return (
		<TouchableOpacity style={styles.inputWrapper} onPress={toggleDatePicker}>
			<RNDateTimePicker
				mode={mode}
				style={{
					opacity: 0.1,
					flex: 1,
					backgroundColor: "rgba(0,0,0,0)",
					zIndex: 10,
				}}
				value={dateVal || new Date()}
				onChange={(e, value) => {
					if (e.type === "set") {
						onChange(value);
						setdateVal(value);
					}
				}}
			/>
			<TextComponent
				sx={{ position: "absolute", left: "2%", zIndex: -1 }}
				type="text20"
			>
				{placeholder ||
					(mode === "date" ? dateVal?.toLocaleDateString() : "select time")}
			</TextComponent>

			{mode === "date" ? (
				<MaterialCommunityIcons
					name="calendar-month-outline"
					size={24}
					color="black"
				/>
			) : (
				<MaterialIcons name="access-time" size={24} color="black" />
			)}
		</TouchableOpacity>
	);
};

export default InputText;
