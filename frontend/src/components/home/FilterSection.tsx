import CustomInput from "../shared/Input";
import CustomSelect from "../shared/Select";
import { INDUSTRY_TYPES, ORGANIZATION_TYPES } from "@/config/constants";

const EMAIL_VERIFICATION_ARRAY = [{ label: "All", value: "all" }];
const SORT_BY_ARRAY = [
	{ label: "Newest First", value: "newest" },
	{ label: "Oldest First", value: "oldest" },
];

const FilterSection = () => {
	return (
		<div className="grid grid-cols-5 gap-4 mb-4 bg-gray-200 p-5 rounded-md">
			<CustomInput
				label="Search"
				name="search"
				className="bg-white"
				placeholder="Search"
			/>

			<CustomSelect
				label="All"
				name="organizationType"
				options={ORGANIZATION_TYPES}
				className="bg-white"
			/>

			<CustomSelect
				name="industryType"
				label="Industry Type"
				className="bg-white"
				options={INDUSTRY_TYPES}
			/>
			<CustomSelect
				label="Email Verification"
				name="emailVerification"
				options={EMAIL_VERIFICATION_ARRAY}
				className="bg-white"
			/>

			<CustomSelect
				label="Sort By"
				name="sortBy"
				options={SORT_BY_ARRAY}
				className="bg-white"
			/>
		</div>
	);
};

export default FilterSection;
