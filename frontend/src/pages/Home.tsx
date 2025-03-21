import Sidebar from "../components/home/Sidebar";
import CompanyList from "../components/home/CompanyList";

export default function Layout() {
	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<Sidebar />

			{/* Right Section */}
			<div className="flex-1 p-6 bg-gray-100">
				<CompanyList />
			</div>
		</div>
	);
}
