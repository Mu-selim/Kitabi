import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className='home-header__types'>
                <Link className='types-links' to='/books'><span>كتب ورقية للشراء</span></Link>
                <Link className='types-links' to='/free-books'><span>كتب للقراءة مجانا</span></Link>
                <Link className='types-links' to='/audiobooks'><span>كتب مسموعه</span></Link>
            </div>
        </div>
    );
}
 
export default HomeHeader;