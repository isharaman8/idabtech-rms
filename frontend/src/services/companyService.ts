import axiosInstance from "@/config/api";

const API_ENDPOINT = `/companies`;

export const fetchCompanies = async () => {
	try {
		const response = await axiosInstance.get(API_ENDPOINT);
		return response.data;
	} catch (error) {
		console.error("Error fetching companies:", error);
		throw error;
	}
};

export const createCompany = async (company: any) => {
	try {
		// TEMP
		const uid = crypto.randomUUID();
		company.uid = uid;
		company.id = uid;

		const response = await axiosInstance.post(API_ENDPOINT, company);
		return response.data;
	} catch (error) {
		console.error("Error creating company:", error);
		throw error;
	}
};

export const updateCompany = async (uid: string, updatedCompany: any) => {
	try {
		const url = `${API_ENDPOINT}/${uid}`;
		const response = await axiosInstance.put(url, updatedCompany);

		return response.data;
	} catch (error) {
		console.error("Error updating company:", error);
		throw error;
	}
};

export const deleteCompany = async (uid: string) => {
	try {
		await axiosInstance.delete(`${API_ENDPOINT}/${uid}`);
	} catch (error) {
		console.error("Error deleting company:", error);
		throw error;
	}
};
