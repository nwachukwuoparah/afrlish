import { StyleSheet, View } from "react-native";
import Container, {
	InnerWrapper,
	KeyboardView,
} from "../../../components/reusables/Containers.component";
import CustButton from "../../../components/reusables/Buttons.component";
import TextComponent from "../../../components/reusables/Text.component";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import colors from "../../../utillity/colors";
import { font } from "../../../utillity/font";
import { Otp_Input } from "../../../components/textInput";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { resendOtp, verifyUser } from "../../../utill/api/mutate";
import { useMutation } from "@tanstack/react-query";
import LoadingComponent from "../../../components/reusables/Loading.component";
import {
	cacheAuthData,
	clearAuthData,
	getCachedAuthData,
} from "../../../utillity/storage";
import { handleError } from "../../../utillity/error";
import ErrorCard from "../../../components/reusables/errorCard";
import Toast from "../../../components/toste";
import { resendOtp, verifyUser } from "../../../utillity/api/mutate";
// import { truncateString } from "../../../utill/helpers";
interface props {
	navigation: StackNavigationProp<any>;
}

const validationSchema = Yup.object().shape({
	otp: Yup.string()
		.required("OTP is required")
		.matches(/^\d{4}$/, "Must be a 4-digit number"),
});

const VerificationScreen = ({ navigation }: props) => {
	const [resend, setResend] = useState(5);
	const [email, setEmail] = useState("example@gmail.com");
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const { isPending, mutate, error, data } = useMutation({
		mutationFn: verifyUser,
		onSuccess: async (data) => {
			await clearAuthData("step");
			clearAuthData("user-email");
			navigation.navigate("login");
		},
		onError: (err) => {
			console.log("err", handleError(err));
		},
	});

	const {
		isPending: reSendIsPending,
		mutate: reSendMutate,
		error: reSendError,
	} = useMutation({
		mutationFn: resendOtp,
		onSuccess: async (data) => {
			// console.log("user", data.data?.msg);
			setResend(59);
		},
		onError: (err) => {
			console.log("otpError", handleError(err));
		},
	});

	const onSubmit: SubmitHandler<any> = async (data) => {
		const email = await getCachedAuthData("user-email");
		mutate({ email: email, ...data });
		// console.log({ email: email, ...data });
	};

	useEffect(() => {
		const otpValue = watch("otp");
		if (otpValue?.length === 4) {
			handleSubmit(onSubmit)();
			// navigation.navigate("login");
		}
	}, [watch("otp")]);

	useEffect(() => {
		(async () => {
			const email = await getCachedAuthData("user-email");
			setEmail(email);
		})();
		let interval = setInterval(() => {
			setResend((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			{/* {(reSenddata || data) && (
				<Toast success={data?.data?.msg || `Token has been sent to ${email}`} />
			)}*/}
			{(error || reSendError) && (
				<Toast error={handleError(error)?.errors.msg} />
			)}
			<KeyboardView sx={{ height: "90%" }}>
				<InnerWrapper sx={{ width: "90%" }}>
					<View style={styles.header}>
						<CustButton
							onPress={() => navigation.navigate("option")}
							color={colors.black}
							type="back"
						/>
					</View>
					<View style={styles.wrapper}>
						<TextComponent
							sx={{
								color: colors.black,
							}}
							type="text24"
						>
							Enter verification code
						</TextComponent>
						<TextComponent
							sx={{
								color: colors.grey,
							}}
							type="text16"
						>
							A 4-digit SMS code was sent to {email}
						</TextComponent>

						<TouchableOpacity onPress={() => navigation.navigate("login")}>
							<TextComponent
								sx={{
									color: colors.grey,
									marginTop: 10,
								}}
								type="text16"
							>
								Wrong email?{" "}
								<TextComponent
									sx={{
										textDecorationLine: "underline",
										color: colors.black1,
									}}
									type="text16"
								>
									Edit email address
								</TextComponent>
							</TextComponent>
						</TouchableOpacity>

						<Otp_Input errors={errors} control={control} />
						<TouchableOpacity
							onPress={async () => {
								if (resend === 0) {
									const email = await getCachedAuthData("user-email");
									// console.log({ email: email });
									reSendMutate({ email: email });
								}
							}}
						>
							<TextComponent
								sx={{
									textAlign: "center",
									textDecorationLine: "underline",
									color: colors.black1,
									marginTop: "40%",
								}}
								type="text16"
							>
								Didn’t get a code?{" "}
								<TextComponent
									sx={{
										color: colors.grey,
										opacity: resend !== 0 ? 0.3 : 1,
									}}
									type="text16"
								>
									Resend code{resend !== 0 && ` in ${resend}s`}
								</TextComponent>
							</TextComponent>
						</TouchableOpacity>
					</View>
				</InnerWrapper>
			</KeyboardView>
			<LoadingComponent
				displayLoadingComponent={isPending || reSendIsPending}
			/>
		</Container>
	);
};

const styles = StyleSheet.create({
	header: {
		justifyContent: "flex-start",
		flexDirection: "row",
		width: wp("100%"),
		paddingVertical: "5%",
		backgroundColor: colors.white,
		alignItems: "flex-end",
		margin: 0,
	},

	wrapper: {
		width: "100%",
		height: "100%",
		gap: 5,
		alignItems: "center",
	},

	button: {
		width: "90%",
		marginTop: "5%",
		marginBottom: "2%",
		borderRadius: 8,
		paddingVertical: 17,
	},
});

export default VerificationScreen;
