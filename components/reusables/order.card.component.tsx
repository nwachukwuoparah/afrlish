import { FlatList, Image, StyleSheet, View } from "react-native";
import TextComponent from "./Text.component";
import appColors from "../../utill/helpers/colors";
import { OrderDetailCard } from "./Order.component";
import CustButton from "./Buttons.component";

const OrderCardList = ({
	status,
	type,
}: {
	status?: string;
	type?: string;
}) => {

	
	const item = [
		[
			{
				__v: 0,
				_id: "656f278558cbb1bcf5e7a351",
				createdAt: "2023-12-05T13:37:09.291Z",
				deliveryOption: "rider",
				description: "Chicken lap",
				image:
					"https://res.cloudinary.com/dn6eonkzc/image/upload/v1701783428/afrilish/itemImage/qyytzhurgf4thop5slw7.jpg",
				isDelete: false,
				leastOrder: "200",
				menuId: "656f26ad58cbb1bcf5e7a347",
				name: "Chicken",
				outOfStock: true,
				preparationTime: "45 minutes",
				price: 50000,
				priceDescription: "50000 per kilo",
				selectPack: "rider",
				status: "pending",
				tag: "500",
				updatedAt: "2023-12-05T17:28:21.080Z",
				vendorId: "656f23c158cbb1bcf5e7a335",
			},
			{
				__v: 0,
				_id: "656f278558cbb1bcf5e7a351",
				createdAt: "2023-12-05T13:37:09.291Z",
				deliveryOption: "rider",
				description: "Chicken lap",
				image:
					"https://res.cloudinary.com/dn6eonkzc/image/upload/v1701783428/afrilish/itemImage/qyytzhurgf4thop5slw7.jpg",
				isDelete: false,
				leastOrder: "200",
				menuId: "656f26ad58cbb1bcf5e7a347",
				name: "Chicken",
				outOfStock: true,
				preparationTime: "45 minutes",
				price: 50000,
				priceDescription: "50000 per kilo",
				selectPack: "rider",
				status: "pending",
				tag: "500",
				updatedAt: "2023-12-05T17:28:21.080Z",
				vendorId: "656f23c158cbb1bcf5e7a335",
			},
			{
				__v: 0,
				_id: "656f278558cbb1bcf5e7a351",
				createdAt: "2023-12-05T13:37:09.291Z",
				deliveryOption: "rider",
				description: "Chicken lap",
				image:
					"https://res.cloudinary.com/dn6eonkzc/image/upload/v1701783428/afrilish/itemImage/qyytzhurgf4thop5slw7.jpg",
				isDelete: false,
				leastOrder: "200",
				menuId: "656f26ad58cbb1bcf5e7a347",
				name: "Chicken",
				outOfStock: true,
				preparationTime: "45 minutes",
				price: 50000,
				priceDescription: "50000 per kilo",
				selectPack: "rider",
				status: "pending",
				tag: "500",
				updatedAt: "2023-12-05T17:28:21.080Z",
				vendorId: "656f23c158cbb1bcf5e7a335",
			},
			{
				__v: 0,
				_id: "656f278558cbb1bcf5e7a351",
				createdAt: "2023-12-05T13:37:09.291Z",
				deliveryOption: "rider",
				description: "Chicken lap",
				image:
					"https://res.cloudinary.com/dn6eonkzc/image/upload/v1701783428/afrilish/itemImage/qyytzhurgf4thop5slw7.jpg",
				isDelete: false,
				leastOrder: "200",
				menuId: "656f26ad58cbb1bcf5e7a347",
				name: "Chicken",
				outOfStock: true,
				preparationTime: "45 minutes",
				price: 50000,
				priceDescription: "50000 per kilo",
				selectPack: "rider",
				status: "pending",
				tag: "500",
				updatedAt: "2023-12-05T17:28:21.080Z",
				vendorId: "656f23c158cbb1bcf5e7a335",
			},
			{
				__v: 0,
				_id: "656f278558cbb1bcf5e7a351",
				createdAt: "2023-12-05T13:37:09.291Z",
				deliveryOption: "rider",
				description: "Chicken lap",
				image:
					"https://res.cloudinary.com/dn6eonkzc/image/upload/v1701783428/afrilish/itemImage/qyytzhurgf4thop5slw7.jpg",
				isDelete: false,
				leastOrder: "200",
				menuId: "656f26ad58cbb1bcf5e7a347",
				name: "Chicken",
				outOfStock: true,
				preparationTime: "45 minutes",
				price: 50000,
				priceDescription: "50000 per kilo",
				selectPack: "rider",
				status: "pending",
				tag: "500",
				updatedAt: "2023-12-05T17:28:21.080Z",
				vendorId: "656f23c158cbb1bcf5e7a335",
			},
			{
				__v: 0,
				_id: "656f278558cbb1bcf5e7a351",
				createdAt: "2023-12-05T13:37:09.291Z",
				deliveryOption: "rider",
				description: "Chicken lap",
				image:
					"https://res.cloudinary.com/dn6eonkzc/image/upload/v1701783428/afrilish/itemImage/qyytzhurgf4thop5slw7.jpg",
				isDelete: false,
				leastOrder: "200",
				menuId: "656f26ad58cbb1bcf5e7a347",
				name: "Chicken",
				outOfStock: true,
				preparationTime: "45 minutes",
				price: 50000,
				priceDescription: "50000 per kilo",
				selectPack: "rider",
				status: "pending",
				tag: "500",
				updatedAt: "2023-12-05T17:28:21.080Z",
				vendorId: "656f23c158cbb1bcf5e7a335",
			},
			{
				__v: 0,
				_id: "656f278558cbb1bcf5e7a351",
				createdAt: "2023-12-05T13:37:09.291Z",
				deliveryOption: "rider",
				description: "Chicken lap",
				image:
					"https://res.cloudinary.com/dn6eonkzc/image/upload/v1701783428/afrilish/itemImage/qyytzhurgf4thop5slw7.jpg",
				isDelete: false,
				leastOrder: "200",
				menuId: "656f26ad58cbb1bcf5e7a347",
				name: "Chicken",
				outOfStock: true,
				preparationTime: "45 minutes",
				price: 50000,
				priceDescription: "50000 per kilo",
				selectPack: "rider",
				status: "pending",
				tag: "500",
				updatedAt: "2023-12-05T17:28:21.080Z",
				vendorId: "656f23c158cbb1bcf5e7a335",
			},
		],
	];


	return (
		<>
			<View style={styles.cardWrap}>
				<View style={styles.actionContain}>
					<TextComponent
						type="text16"
						sx={{ fontWeight: 500, color: appColors.black1 }}
					>
						Morning
					</TextComponent>
					{type === "schedule" && (
						<View style={styles.action}>
							<CustButton
								type="rounded-rect"
								sx={{
									...styles.button,
									backgroundColor: appColors.red3,
								}}
							>
								<TextComponent
									type="text16"
									sx={{ fontWeight: 500, color: appColors.red2 }}
								>
									Reject
								</TextComponent>
							</CustButton>
							<CustButton
								type="rounded-rect"
								color={appColors.black1}
								sx={{
									...styles.button,
									backgroundColor: appColors.black,
								}}
							>
								<TextComponent
									type="text16"
									sx={{ fontWeight: 500, color: appColors.white }}
								>
									Accept
								</TextComponent>
							</CustButton>
						</View>
					)}
				</View>
				{[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map((i) => (
					<OrderDetailCard key={i.id} status={status} item={item} />
				))}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	cardWrap: {
		marginTop: 15,
		// backgroundColor:"grey"
	},
	card: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 25,
		borderBottomWidth: 1,
		borderBottomColor: appColors.grey2,
		paddingBottom: 15,
		marginTop: 10,
	},
	cardCont: {
		flexDirection: "row",
		gap: 25,
	},
	text: {
		gap: 9,
	},
	checkBox: {
		width: 20,
		height: 20,
		borderWidth: 2,
		borderRadius: 2,
		alignItems: "center",
		justifyContent: "center",
	},
	actionContain: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	action: {
		flexDirection: "row",
		gap: 20,
	},
	button: {
		padding: 10,
		borderRadius: 8,
	},
});

export default OrderCardList;
