import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerAsset } from "expo-image-picker";
import * as Permissions from "expo-permissions";
import TextComponent from "./Text.component";
import appColors from "../../utill/helpers/colors";

const PickImage = ({ setValue, control, children, errors, sx }: any) => {
	const [image, setImage] = React.useState(null);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		const prepFileForUpload = (file: ImagePickerAsset) => {
			let uri = (file as ImagePicker.ImagePickerAsset).uri;
			let name = uri.split("/").pop() as string;
			let match = /\.(\w+)$/.exec(name);
			let type = match ? `image/${match[1]}` : "image";
			setValue("image", { uri, name, type });
			// console.log({ uri, name, type });
		};
		if (!result.canceled) {
			prepFileForUpload(result.assets[0]);
		}
	};

	// const requestPermission = async () => {
	// 	const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
	// 	if (status !== "granted") {
	// 		alert("Sorry, we need camera roll permissions to make this work!");
	// 	} else {
	// 		pickImage();
	// 	}
	// };

	return (
		<View style={sx}>
			<Controller
				control={control}
				render={({ field }) => (
					<>
						<TouchableOpacity onPress={pickImage}>{children}</TouchableOpacity>
						{errors?.["image"] && (
							<TextComponent
								type="text14"
								sx={{ color: appColors.red }}
							>
								{errors?.["image"]?.message}
							</TextComponent>
						)}
					</>
				)}
				name="image"
			/>
		</View>
	);
};

export default PickImage;
