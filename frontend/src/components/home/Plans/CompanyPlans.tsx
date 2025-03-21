import React from "react";
import { useState, useEffect } from "react";
import { fetchPlans } from "@/services/planServices";

import { Pricing } from "@/types";
import PricingCard from "./PlanCard";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/shared/Select";
import { DEFAULT_PACKAGES, RECOMMENDED_PACKAGES } from "@/config/constants";

const CompanyPlans: React.FC = () => {
	const [plans, setPlans] = useState<Pricing[]>([]);

	const localFetchPlans = async () => {
		try {
			const data = await fetchPlans();

			setPlans(data);
		} catch (error) {
			console.error("Error fetching plans:", error);
		}
	};
	const updatePlan = (updatedPlan: any) => {
		setPlans((prevPlans) =>
			prevPlans.map((plan) =>
				plan.uid === updatedPlan.uid ? { ...plan, ...updatedPlan } : plan
			)
		);
	};

	useEffect(() => {
		localFetchPlans();
	}, []);

	return (
		<div className="space-y-10 w-full mx-auto p-6 border rounded-lg shadow-md bg-white">
			<h2 className="text-xl font-semibold border-b-2 pb-2 border-red-300 w-full ">
				Company Price Plan
			</h2>

			<div className="w-full p-4 bg-gray-200 flex justify-between items-end gap-5 rounded-md shadow-md">
				<div className="flex justify-start items-end gap-2">
					<CustomSelect
						label="Set Recommended Package"
						name="recommendedPackage"
						options={RECOMMENDED_PACKAGES}
						className="bg-white"
					/>

					<Button className="cursor-pointer">Update</Button>
				</div>

				<div className="flex justify-start items-end gap-2">
					<CustomSelect
						label="Set Default Package"
						name="defaultPackage"
						options={DEFAULT_PACKAGES}
						className="bg-white"
					/>

					<Button className="cursor-pointer">Update</Button>
				</div>

				<Button className="bg-blue-500 hover:bg-blue-400 text-white font-bold cursor-pointer">
					+ Create
				</Button>
			</div>

			<div className="grid grid-cols-4 gap-4">
				{plans.map((plan, _index) => (
					<PricingCard pricing={plan} key={plan.uid} updatePlan={updatePlan} />
				))}
			</div>
		</div>
	);
};

export default CompanyPlans;
