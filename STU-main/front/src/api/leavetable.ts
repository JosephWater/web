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
        url: '/studentleave/approveStudentleave',
        data
    })
}
//
export const rejectLeave = (data) => {
    return request({
        method: 'POST',
        url: '/studentleave/rejectStudentleave',
        data:data
    })
}

export const deleteLeave = (data) => {
    return request({
        method: 'POST',
        url: '/studentleave/deleteStudentleave',
        data:data
    })
}


export const addLeave = (data) =>{
    return request({
        method: 'POST',
        url: '/studentleave/addStudentStudentleave',
        data
    })
}
export const getSTULeave = (id) =>{
    return request({
        method: 'GET',
        url:'/studentleave/getStudentStudentleaveList',
        params:{studentId: id}
    })
};

    export const updateStudentleave = (data) => {
        return request({
            method: 'POST',
            url: '/studentleave/updateStudentleave',
            data:data
        })
    }



