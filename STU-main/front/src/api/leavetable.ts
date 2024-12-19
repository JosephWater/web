import request from "../utils/request.ts";

export const getLeaveList = () =>{
    return request({
        method:'GET',
        url:'/studentleave/getStudentleaveList',
    })
}
export const processedLeaveListView = () =>{
    return request({
        method:'GET',
        url:'/studentleave/getProcessedStudentleaveList',
    })
}
//新增和修改
export const approveLeave = (data) =>{
    return request({
        method: 'POST',
        url: '/studentleave/approveLeave',
        data
    })
}
//
export const rejectLeave = (data) => {
    return request({
        method: 'POST',
        url: '/studentleave/rejectLeave',
        data:data
    })
}

