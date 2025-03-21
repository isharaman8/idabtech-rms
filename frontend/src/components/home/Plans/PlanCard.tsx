import { Pricing } from "@/types";
import { Button } from "@/components/ui/button";
import { CheckCircle, Pencil } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

interface PricingCardProps {
	pricing: Pricing;
	updatePlan?: (updatedPlan: Partial<Pricing>) => void;
	openPlanEdit?: (plan: Pricing) => void;
}

const PricingCard = ({
	pricing,
	updatePlan,
	openPlanEdit,
}: PricingCardProps) => {
	const {
		title,
		price,
		features,
		description,
		plan = "default",
		showOnFrontend = false,
	} = pricing;

	const handleCheckboxChange = (checked: boolean) => {
		if (updatePlan) {
			updatePlan({ ...pricing, showOnFrontend: checked });
		}
	};

	return (
		<Card className="rounded-3xl text-center p-6 shadow-xl w-80 bg-white border border-gray-200 transition hover:shadow-2xl cursor-pointer flex flex-col">
			<CardContent className="flex flex-col flex-grow">
				<h2 className="text-xl font-extrabold">{title}</h2>

				{/* Plan Badge */}
				<div className="mt-2 px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full border border-gray-300">
					{plan}
				</div>

				{/* Price */}
				<p className="text-4xl font-bold mt-3">${price}</p>
				{description && (
					<p className="text-sm text-gray-500 font-medium mt-1">
						{description}
					</p>
				)}

				{/* Features & Checkbox Container */}
				<div className="flex-grow flex flex-col justify-between text-left">
					<ul className="mt-5 space-y-3 text-gray-700">
						{features.map((feature, index) => (
							<li key={index} className="flex items-center gap-2 text-base">
								<CheckCircle className="w-5 h-5 text-green-500" />
								{feature}
							</li>
						))}
					</ul>

					<div className="flex items-center mt-6 text-sm text-gray-700">
						<label className="flex items-center gap-2 cursor-pointer">
							<Checkbox
								checked={showOnFrontend}
								onCheckedChange={handleCheckboxChange}
							/>
							Show this package on frontend
						</label>
					</div>
				</div>

				<div className="mt-auto pt-4">
					<Button
						onClick={() => openPlanEdit?.(pricing)}
						className="w-full bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition flex items-center gap-2 text-gray-700 justify-center"
					>
						<Pencil className="w-5 h-5" />
						<span className="text-sm font-medium">Edit Package</span>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default PricingCard;
