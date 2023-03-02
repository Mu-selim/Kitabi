import React from 'react';
import './RightNav.scss';
import logo from '../../../assets/logo.png';
import Search from '../../../utils/search/Search';

const propsData = {
    "placeholder": "عنوان الكتاب, المؤلف, دار النشر",
    "borderRadiusInput": "input-small",
    "borderRadiusSearchIcon": "search-small",
};

const RightNav = () => {
    console.log(logo);
    return (
        <div className="right-nav">
            <img src={logo} alt="logo" />
            <Search propsData={propsData}/>
        </div>
    );
}
 
export default RightNav;