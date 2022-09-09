import React from 'react'

export default function wrap() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light">PORTFOLIO</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/269944219_3193306470902585_5096346253765224292_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHiqcOpAE6ZOkNw_8vF6PcfoFZlUa5C0ZWgVmVRrkLRlZ_hiv15yjqiYy5jpSiTlr8al_ce-EIh-wlGIBXSZjoZ&_nc_ohc=sME0O8G6v5gAX_NOIwQ&tn=hUw_9pREkTAt6mnO&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT-Bn8s7c0J0v6mA2hNe2zHL0UG5HqYpMIdm-pKpq6t-3w&oe=631AF4CF" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Patipat Padungsat</a>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./Dashboard" className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Home</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./Content" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>About us</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./Report" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Portfolio</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

