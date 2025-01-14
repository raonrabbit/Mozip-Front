import localAxios from "../http-commons";
import { GroupCreateRequest } from "@/interfaces/group/groupCreate";

export const addGroupAPI = async (groupData: GroupCreateRequest): Promise<void> => {
	try {
		const response = await localAxios.post<GroupCreateRequest>("groups", groupData);
	} catch (error: unknown) {
		throw new Error("Group creation failed");
	}
};
