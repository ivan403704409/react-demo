import './assess/css/common.scss'

import React from 'react'
import { render } from 'react-dom'



// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu



// 引入单个页面（包括嵌套的子页面）
import Food from './views/Food'
import Login from './views/Login'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'


// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick(e){
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser(){
        this.setState({
            username: 'luozh'
        })
    }

    render() {
        return (
            <div>
                <div id="leftMenu"> 
                    <img src='src/assets/images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 185 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                      
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                            <Menu.Item key="6"><Link to="/login">登陆</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/food">asdfjl</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div id="rightWrap">
                    <Menu mode="horizontal">
                        <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

console.log(123)
render(
	<Login/>,
	document.getElementById('app')
)

// // 配置路由
// render((
//     <Router history={hashHistory} >
//         <Route path="/" component={Sider}>
//             <IndexRoute path="food" component={Food} />
//             <Route path="food" component={Food} />
//             <Route path="login" component={Login} />
//         </Route>
//     </Router>
// ), document.getElementById('app'));
