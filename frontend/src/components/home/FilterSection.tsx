import CustomInput from "../shared/Input";
import CustomSelect from "../shared/Select";
import {
	SORT_BY_ARRAY,
	INDUSTRY_TYPES,
	ORGANIZATION_TYPES,
	EMAIL_VERIFICATION_ARRAY,
} from "@/config/constants";

interface FilterSectionProps {
	filters: {
		sortBy: string;
		search: string;
		industryType: string;
		organizationType: string;
		emailVerification: string;
	};
	handleFilterChange: (key: string, name: string) => void;
}

const FilterSection = ({ handleFilterChange, filters }: FilterSectionProps) => {
	return (
		<div className="grid grid-cols-5 gap-4 mb-4 bg-gray-200 p-5 rounded-md">
			<CustomInput
				label="Search"
				name="search"
				className="bg-white"
				placeholder="Search"
				value={filters.search}
				onChange={(value) => handleFilterChange("search", value)}
			/>

			<CustomSelect
				className="bg-white"
				name="organizationType"
				label="Organization Type"
				options={ORGANIZATION_TYPES}
				value={filters.organizationType}
				onChange={(value) => handleFilterChange("organizationType", value)}
			/>

			<CustomSelect
				name="industryType"
				label="Industry Type"
				className="bg-white"
				options={INDUSTRY_TYPES}
				value={filters.industryType}
				onChange={(value) => handleFilterChange("industryType", value)}
			/>
			<CustomSelect
				label="Email Verification"
				name="emailVerification"
				options={EMAIL_VERIFICATION_ARRAY}
				className="bg-white"
				value={filters.emailVerification}
				onChange={(value) => handleFilterChange("emailVerification", value)}
			/>

			<CustomSelect
				label="Sort By"
				name="sortBy"
				options={SORT_BY_ARRAY}
				className="bg-white"
				value={filters.sortBy}
				onChange={(value) => handleFilterChange("sortBy", value)}
			/>
		</div>
	);
};

export default FilterSection;
