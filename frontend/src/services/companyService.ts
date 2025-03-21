import config from "@/config/default";
import axiosInstance from "@/config/api";

const API_URL = `${config.apiUrl}/companies`;

export const fetchCompanies = async () => {
	try {
		const response = await axiosInstance.get(API_URL);
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

		const response = await axiosInstance.post(API_URL, company);
		return response.data;
	} catch (error) {
		console.error("Error creating company:", error);
		throw error;
	}
};

export const updateCompany = async (uid: string, updatedCompany: any) => {
	try {
		const url = `${API_URL}/${uid}`;
		const response = await axiosInstance.put(url, updatedCompany);

		return response.data;
	} catch (error) {
		console.error("Error updating company:", error);
		throw error;
	}
};

export const deleteCompany = async (uid: string) => {
	try {
		await axiosInstance.delete(`${API_URL}/${uid}`);
	} catch (error) {
		console.error("Error deleting company:", error);
		throw error;
	}
};
