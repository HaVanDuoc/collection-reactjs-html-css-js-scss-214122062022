import React from 'react'

const Search = () => {
    return (
        <div className="hvd-search">
            <div className="hvd-input-wrapper">
                <input type="text" placeholder='Tìm kiếm bài đăng hoặc người dùng' />
            </div>
            <div className="hvd-icon-search-wrapper">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}

export default Search