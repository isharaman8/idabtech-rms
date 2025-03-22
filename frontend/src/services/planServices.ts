import config from "@/config/default";
import axiosInstance from "@/config/api";

const API_URL = `${config.apiUrl}/plans`;

export const fetchPlans = async () => {
	try {
		const response = await axiosInstance.get(API_URL);

		return response.data?.plans || [];
	} catch (error) {
		console.error("Error fetching plans:", error);
		throw error;
	}
};

export const createPlan = async (plan: any) => {
	try {
		// TEMP
		const uid = crypto.randomUUID();
		plan.uid = uid;
		plan.id = uid;

		const response = await axiosInstance.post(API_URL, { plan });

		return response.data?.plan || {};
	} catch (error) {
		console.error("Error creating plan:", error);
		throw error;
	}
};

export const updatePlan = async (uid: string, updatedPlan: any) => {
	try {
		const url = `${API_URL}/${uid}`;
		const response = await axiosInstance.patch(url, { plan: updatedPlan });

		return response.data;
	} catch (error) {
		console.error("Error updating plan:", error);
		throw error;
	}
};

export const deletePlan = async (uid: string) => {
	try {
		await axiosInstance.delete(`${API_URL}/${uid}`);
	} catch (error) {
		console.error("Error deleting plan:", error);
		throw error;
	}
};
