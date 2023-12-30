import { View, StyleSheet, Pressable, TextInput } from "react-native";
import TextComponent from "./Text.component";
import appColors from "../../utill/helpers/colors";
import { Store } from "../../assets";
import { MaterialIcons } from "@expo/vector-icons";
import { resturantData } from "../../utill/helpers/dummy";
import InputText from "../textInput";
import { LoginInType } from "../../utill/helpers/type.check";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addResturant } from "../../utill/schema";
import { useEffect, useState } from "react";
import { font } from "../../utill/helpers/font";

const ProfileCard = ({
	icon,
	type,
	value,
	value1,
	value2,
	onPress,
	name,
	inputType,
	multiLine,
	placeholder,
	edit,
	errors,
	control,
	defaultValue,
}: any) => {
	return (
		<Pressable onPress={onPress}>
			<View style={{ ...styles.profile, paddingVertical: edit ? 7 : 10 }}>
				<View style={styles.profile_left}>
					<Store />
					<View style={{ gap: 2 }}>
						{value1 && (
							<TextComponent
								type="text14"
								sx={{
									fontfamily: font.DMSans_400Regular,
									color: appColors.grey,
								}}
							>
								{value1}
							</TextComponent>
						)}
						{value2 && (
							<TextComponent
								type="text14"
								sx={{
									fontfamily: font.DMSans_400Regular,
									color: appColors.grey,
								}}
							>
								{value2}
							</TextComponent>
						)}
						{edit ? (
							<InputText
								control={control}
								name={name as keyof LoginInType}
								type={inputType}
								multiLine={multiLine}
								placeholder={placeholder}
								errors={errors}
								defaultValue={defaultValue}
								sx={{
									wrapper: {
										height: 30,
										borderBottomWidth: 0,
										width: "92%",
									},
									textInput: { paddingVertical: "2%" },
								}}
							/>
						) : (
							value && (
								<TextComponent
									type="text16"
									sx={{
										fontfamily: font.DMSans_400Regular,
										color: appColors.black1,
									}}
								>
									{value}
								</TextComponent>
							)
						)}
					</View>
				</View>

				<View style={styles.profile_right}>
					{type === "status" && (
						<View style={styles.status}>
							<TextComponent
								type="text12"
								sx={{ fontfamily: font.DMSans_700Bold, color: appColors.grey }}
							>
								Incomplete
							</TextComponent>
						</View>
					)}
					{type !== "info" && (
						<MaterialIcons
							name="keyboard-arrow-right"
							size={24}
							color="black"
						/>
					)}
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	profile: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderColor: appColors.grey3,
		marginBottom: 10,
	},
	profile_right: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 15,
	},
	profile_left: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 15,
	},
	status: {
		padding: 5,
		justifyContent: "center",
		backgroundColor: appColors.grey2,
		borderRadius: 8,
	},
});

export default ProfileCard;
