import CountUI from '../../components/Count'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
import {connect} from 'react-redux'
//container是一个容器，components里的Count是它的子组件
//在这里引入connect方法可以连接store和components里的Count
//至于connect()(CountUI)这个写法，是固定的写法
//暴露出去之后，在App.js里就可以通过<Count store={store}/>这种传值方式连接store
//store不是在这里连接的，是在App.js里连接的
//CountUI里不能写任何关于redux的函数，要全部删除干净，CountUI里只能写呈现数据到页面

//connect(mapStateToProps,mapDispatchToProps)(CountUI)里(mapStateToProps,mapDispatchToProps)两个形参有特殊意义
// 本组件没有引入store,因为已经连接了store
//由于前面已经在App.js里连接了store，并且CountUI是本组件的子组件(通过connect传进去的):
//第一个参数mapStateToProps，返回值是传给CountUI的props,里面形参state能看见store.getState()的返回值
//第二个参数mapDispatchToProps，返回值是给CountUI的方法，CountUI可以通过this.props调用
//mapDispatchToProps的形参dispatch能看见store.dispatch方法，在每个给CountUI的方法可以使用dispatch，等价于store.dispatch
function mapStateToProps(state){
    return {count:state}
}
function mapDispatchToProps(dispatch){
    return {
        increment:(data)=>{
            dispatch(createIncrementAction(data))
        },
        decrement:(data)=>{
            dispatch(createDecrementAction(data))
        },
        incrementasync:(data,time)=>{
            dispatch(createIncrementAsyncAction(data,time))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);