const api = {
  getMethod(){
    console.log({arguments})
    return axios.get.apply(null, arguments)
  },
  postMethod(){
    return axios.post.apply(null, arguments)
  },
  patchMethod(){
    return axios.patch.apply(null, arguments)
  },
  deleteMethod(){
    return axios.delete.apply(null, arguments)
  }
}
export default api