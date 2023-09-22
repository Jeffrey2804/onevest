import { authAxiosHelper } from "./axiosHelper";

//Fetch All Advisor List 
export const fetchAdvisorList = async () => {
    try {
        const response = await authAxiosHelper.get("/advisors/filter", {
            headers: { token: localStorage.getItem("cflToken") }
        })
        const data = response.data.body;
        return data;
    } catch (error) {
        console.log(error);
    }
}

//Fetch Available Time
export const fetchTimeAvailable = async (id) => {
    try {
        const response = await authAxiosHelper.get(`/session?advisor_id=${id}`,
            {
                headers: { token: localStorage.getItem("cflToken") }
            }
        );
        const data = response.data.body || [];
        console.log(response);
        return data;
    } catch (error) {
        console.log(error);
    }
};

//Get Advisor Profile
export const getAdvisorProfile = async (id) => {
    try {
        const response = await authAxiosHelper.get(`/users/profile?user_id=${id}`, {
            headers: { token: localStorage.getItem("cflToken") }
        });
        const data = response.data.body;
        return data;
    } catch (error) {
        return error.response.data.code;
    }
}