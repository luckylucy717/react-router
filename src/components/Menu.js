import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color:'green', 
        fontSize:'2rem'
    }
    return (
        <div>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">소개</Link></li>
                <li><NavLink to="/about/react" activeStyle={activeStyle}>React 소개</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>포스트 목록</NavLink></li>
            </ul>
        </div>
    )
}
export default Menu;