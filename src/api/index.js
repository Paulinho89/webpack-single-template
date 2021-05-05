import Fetch from "@/utils/fetch";

export const queryUserInfo = params => (
    Fetch({
        url: "/api/query_user_info",
        params
    })
);
