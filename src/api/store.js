// 封装localStorage的方法
var store = {
    // 储存
    set(key,value){
      localStorage.setItem(key,JSON.stringify(value));
    },
    setToken(value){
      localStorage.setItem('set-token',value);
    },
  // 获取数据
    get(key){
      return JSON.parse(localStorage.getItem(key));
    },
    getToken(){
      return  localStorage.getItem('set-token');
    },
    // 删除
    remove(key){
      localStorage.removeItem(key);
    },
    // 清除
    clear(key){
      localStorage.clear(key);
    }
};
  // 导出
  export default store;
