import { useState } from "react";
import Sidebar from "../components/home/Sidebar";
import CompanyList from "../components/home/CompanyList";

export default function Layout() {
	const [selectedOption, setSelectedOption] = useState("companies");

	function handleRightSide(option: string) {
		console.log("option", option);

		if (option !== "Companies" && option !== "Student Plan") {
			option = "companies";
		}

		setSelectedOption(option);
	}

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<Sidebar handleRightSide={handleRightSide} />

			{/* Right Section */}
			<div className="flex-1 p-6 bg-gray-100">
				{selectedOption === "companies" && <CompanyList />}
			</div>
		</div>
	);
}
