import request from "../utils/request.ts";

export const rapproveActivity = (data) =>{
    return request({
        method: 'POST',
        url: '/activity/rapproveActivity',
        data:data
    })
};
export const approveActivity = (data) =>{
    console.log(data)
    return request({
        method: 'POST',
        url: '/activity/approveActivity',
        data:data
    })
};
export const addActivity = (data) =>{
    return request({
        method: 'POST',
        url: '/activity/addActivity',
        data:data
    })
};
export const deleteActivity = (data) => {
    return request({
        method: 'POST',
        url: '/activity/deleteActivity',
        data:data
    })
};
export const getActivitychooseList = (pagination) => {
    return request({
        method: 'GET',
        params: {
            page: pagination.page,
            pageSize: pagination.pageSize,
            select:pagination.select
        },
        url: '/activity/getProcessedActivityList'
    });
};
