/***
 * 请求的方法
 */
import base from './config';
import axios,{get,post} from '../utils/request';

const api={
    /**
     * 登录请求 username password
     */
    getLogin(params){
        // return axios.post(base.login,params)
        return post(base.login,params)
    },
    /**
     * 注册接口
     */

    /**
     * 商品列表接口 projectList {page:1}
     */
    getProductList(params){//{page:xx}
        return get(base.projectList,params)
    }
}

export default  api