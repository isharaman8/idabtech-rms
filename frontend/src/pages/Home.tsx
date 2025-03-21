import { useState } from "react";

import Sidebar from "../components/home/Sidebar";
import CompanyList from "../components/home/CompanyList";
import CompanyPlans from "@/components/home/Plans/CompanyPlans";

export default function Layout() {
	const [selectedOption, setSelectedOption] = useState("Company");

	function handleRightSide(option: string) {
		const validPlans = ["Company", "Company Plan"];

		if (!validPlans.includes(option)) {
			option = "Company";
		}

		setSelectedOption(option);
	}

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<Sidebar handleRightSide={handleRightSide} />

			{/* Right Section */}
			<div className="flex-1 p-6 bg-gray-100">
				{selectedOption === "Company" && <CompanyList />}
				{selectedOption === "Company Plan" && <CompanyPlans />}
			</div>
		</div>
	);
}
