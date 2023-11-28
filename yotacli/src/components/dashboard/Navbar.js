import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Notification from "./Notification";
import UserProfilePhoto from "../user/UserProfilePhoto";
function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className={classes.appHeader + ' ' + classes.headerShadow}>
        <div className={classes.appHeaderLogo}>
          <div className={classes.logoSrc}></div>
          <div className={classes.headerPane + ' ' + classes.mlAuto}>
            <div>
              <button type="button" className={classes.hamburger + ' ' + classes.closeSidebarBtn + ' ' + classes.hamburgerElastic}>
                <span className={classes.hamburgerBox}>
                  <span className={classes.hamburgerInner}></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={classes.appHeaderMobileMenu}>
          <div>
            <button type="button" className={classes.hamburger + ' ' + classes.hamburgerElastic + ' ' + classes.mobileToggleNav}>
              <span className={classes.hamburgerBox}>
                <span className={classes.hamburgerInner}></span>
              </span>
            </button>
          </div>
        </div>
        <div className={classes.appHeaderMenu}>
          <span>
            <button type="button" className={classes.btnIcon + ' ' + classes.btnIconOnly + ' ' + classes.btn + ' ' + classes.btnPrimary + ' ' + classes.btnSm + ' ' + classes.mobileToggleHeaderNav}>
              <span className={classes.btnIconWrapper}>
                <i className={classes.fa + ' ' + classes.faEllipsisV + ' ' + classes.faw6}></i>
              </span>
            </button>
          </span>
        </div>
        <div className={classes.appHeaderContent}>
          <div className={classes.appHeaderLeft}>
            <div className={classes.searchWrapper}>
              <div className={classes.inputHolder}>
                <input type="text" className={classes.searchInput} placeholder="Type to search" />
                <button className={classes.searchIcon}><span></span></button>
              </div>
              <button className={classes.close}></button>
            </div>
            <ul className={classes.headerMegamenu + ' ' + classes.nav}>
              <li className={classes.navItem}>
                <a href="javascript:void(0);" data-placement="bottom" rel="popover-focus" data-offset="300" data-toggle="popover-custom" className={classes.navLink}>
                  <i className={classes.navLinkIcon + ' ' + classes.pe7Gift}> </i> Mega Menu
                  <i className={classes.fa + ' ' + classes.faAngleDown + ' ' + classes.ml2 + ' ' + classes.opacity5}></i>
                </a>
                <div className={classes.rmMaxWidth}>
                  <div className={classes.dNone + ' ' + classes.popoverCustomContent}>
                    <div className={classes.dropdownMegaMenu}>
                      <div className={classes.gridMenu + ' ' + classes.gridMenu3 + ' ' + classes.col}>
                        <div className={classes.noGutters + ' ' + classes.row}>
                          <div className={classes.colsm6 + ' ' + classes.colxl4}>
                            <ul className={classes.nav + ' ' + classes.flexColumn}>
                              <li className={classes.navItemHeader + ' ' + classes.navItem}> Overview</li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>
                                  <i className={classes.navLinkIcon + ' ' + classes.lnrInbox}></i>
                                  <span> Contacts</span>
                                </a>
                              </li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>
                                  <i className={classes.navLinkIcon + ' ' + classes.lnrBook}></i>
                                  <span> Incidents</span>
                                  <div className={classes.mlAuto + ' ' + classes.badgebadgePill + ' ' + classes.badgeDanger}>5</div>
                                </a>
                              </li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>
                                  <i className={classes.navLinkIcon + ' ' + classes.lnrPicture}></i>
                                  <span> Companies</span>
                                </a>
                              </li>
                              <li className={classes.navItem}>
                                <a disabled href="javascript:void(0);" className={classes.navLink + ' ' + classes.disabled}>
                                  <i className={classes.navLinkIcon + ' ' + classes.lnrFileEmpty}></i>
                                  <span> Dashboards</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className={classes.colsm6 + ' ' + classes.colxl4}>
                            <ul className={classes.nav + ' ' + classes.flexColumn}>
                              <li className={classes.navItemHeader + ' ' + classes.navItem}> Favourites</li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}> Reports Conversions </a>
                              </li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>
                                  Quick Start
                                  <div className={classes.mlAuto + ' ' + classes.badgebadgeSuccess}>New</div>
                                </a>
                              </li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>Users &amp; Groups</a>
                              </li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>Proprieties</a>
                              </li>
                            </ul>
                          </div>
                          <div className={classes.colsm6 + ' ' + classes.colxl4}>
                            <ul className={classes.nav + ' ' + classes.flexColumn}>
                              <li className={classes.navItemHeader + ' ' + classes.navItem}>Sales &amp; Marketing</li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>Queues </a>
                              </li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>Resource Groups </a>
                              </li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>
                                  Goal Metrics
                                  <div className={classes.mlAuto + ' ' + classes.badge + ' ' + classes.badgeWarning}>3</div>
                                </a>
                              </li>
                              <li className={classes.navItem}>
                                <a href="javascript:void(0);" className={classes.navLink}>Campaigns</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={classes.btnGroup + ' ' + classes.navItem}>
                <a className={classes.navItem} data-toggle="dropdown" aria-expanded="false">
                  <span className={classes.badge + ' ' + classes.badgePill + ' ' + classes.badgeDanger + ' ' + classes.ml0 + ' ' + classes.mr2}>4</span> Settings
                  <i className={classes.fa + ' ' + classes.faAngleDown + ' ' + classes.ml2 + ' ' + classes.opacity5}></i>
                </a>
                <div tabindex="-1" role="menu" aria-hidden="true" className={classes.rmPointers + ' ' + classes.dropdownMenu}>
                  <div className={classes.dropdownMenuHeader}>
                    <div className={classes.dropdownMenuHeaderInner + ' ' + classes.bgSecondary}>
                      <div className={classes.menuHeaderImage + ' ' + classes.opacity5}></div>
                      <div className={classes.menuHeaderContent}>
                        <h5 className={classes.menuHeaderTitle}>Overview</h5>
                        <h6 className={classes.menuHeaderSubtitle}>Dropdown menus for everyone</h6>
                      </div>
                    </div>
                  </div>
                  <div className={classes.scrollAreaXs}>
                    <div className={classes.scrollbarContainer}>
                      <h6 tabindex="-1" className={classes.dropdownHeader}>Key Figures</h6>
                      <button type="button" tabindex="0" className={classes.dropdownItem}>Service Calendar</button>
                      <button type="button" tabindex="0" className={classes.dropdownItem}>Knowledge Base</button>
                      <button type="button" tabindex="0" className={classes.dropdownItem}>Accounts</button>
                      <div tabindex="-1" className={classes.dropdownDivider}></div>
                      <button type="button" tabindex="0" className={classes.dropdownItem}>Products</button>
                      <button type="button" tabindex="0" className={classes.dropdownItem}>Rollup Queries</button>
                    </div>
                  </div>
                  <ul className={classes.nav + ' ' + classes.flexColumn}>
                    <li className={classes.navItemDivider + ' ' + classes.navItem}></li>
                    <li className={classes.navItemBtn + ' ' + classes.navItem}>
                      <button className={classes.btnWide + ' ' + classes.btnShadow + ' ' + classes.btn + ' ' + classes.btnDanger + ' ' + classes.btnSm} >Cancel</button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={classes.dropdown + ' ' + classes.navItem}>
                <a aria-haspopup="true" data-toggle="dropdown" className={classes.navItem} aria-expanded="false">
                  <i className={classes.navLinkIcon + ' ' + classes.pe7Settings} ></i> Projects
                  <i className={classes.fa + ' ' + classes.faAngleDown + ' ' + classes.ml2 + ' ' + classes.opacity5}></i>
                </a>
                <div tabindex="-1" role="menu" aria-hidden="true" className={classes.dropdownMenuRounded + ' ' + classes.dropdownMenulg + ' ' + classes.rmPointers + ' ' + classes.dropdownMenu}>
                  <div className={classes.dropdownMenuHeader}>
                    <div className={classes.dropdownMenuHeaderInner + ' ' + classes.bgSuccess}>
                      <div className={classes.menuHeaderImage + ' ' + classes.opacity1} ></div>
                      <div className={classes.menuHeaderContent + ' ' + classes.textLeft}>
                        <h5 className={classes.menuHeaderTitle}>Overview</h5>
                        <h6 className={classes.menuHeaderSubtitle}>Unlimited options</h6>
                        <div className={classes.menuHeaderBtnPane}>
                          <button className={classes.mr2 + ' ' + classes.btn + ' ' + classes.btnDark + ' ' + classes.btnSm} >Settings</button>
                          <button className={classes.btnIcon + ' ' + classes.btnIconOnly + ' ' + classes.btn + ' ' + classes.btnWarning + ' ' + classes.btnSm} >
                            <i className={classes.pe7Config + ' ' + classes.btnIconWrapper}></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" tabindex="0" className={classes.dropdownItem}>
                    <i className={classes.dropdownIcon + ' ' + classes.lnrFileEmpty}></i>Graphic Design
                  </button>
                  <button type="button" tabindex="0" className={classes.dropdownItem}>
                    <i className={classes.dropdownIcon + ' ' + classes.lnrFileEmpty}> </i>App Development
                  </button>
                  <button type="button" tabindex="0" className={classes.dropdownItem}>
                    <i className={classes.dropdownIcon + ' ' + classes.lnrFileEmpty}> </i>Icon Design
                  </button>
                  <div tabindex="-1" className={classes.dropdownDivider}></div>
                  <button type="button" tabindex="0" className={classes.dropdownItem}>
                    <i className={classes.dropdownIcon + ' ' + classes.lnrFileEmpty}></i>Miscellaneous
                  </button>
                  <button type="button" tabindex="0" className={classes.dropdownItem}>
                    <i className={classes.dropdownIcon + ' ' + classes.lnrFileEmpty}></i>Frontend Dev
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}
export default Navbar;
