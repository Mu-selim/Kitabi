import React from 'react';
import Search from '../../../utils/search/Search';
import './HomeHeader.scss';

const propsData = {
    "placeholder": "ابحث عن كتاب أو مؤلف أو دار نشر ...",
    "borderRadiusInput": "input-big",
    "borderRadiusSearchIcon": "search-big",
};

const HomeHeader = () => {
    return (
        <div className="home-header">
            <h1 className="home-header__title">كتابي</h1>
            <Search propsData={propsData}/>
        </div>
    );
}
 
export default HomeHeader;