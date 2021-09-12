import React, { useState, useEffect } from '@ant-design/pro-layout';
import { history, Link } from 'umi';
import * as ICONMAP from '@ant-design/icons';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';

import './index.less';

function SimpleLayout(props) {
  const { children, ...rest } = props;

  // 不带子菜单的导航
  const renderMenuItem = (item) => {
    const Icon = ICONMAP[item.icon as string];

    return (
      <div style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
        <Icon width={18} height={18} style={{ fontSize: 24, marginRight: 6 }} />
        <Link className="menuLink" to={item.path}>
          {item.name}
        </Link>
      </div>
    );
  };

  // 带子菜单的一级导航
  const renderSubMenuItem = (item) => {
    const Icon = ICONMAP[item.icon as string];
    return (
      <div style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
        <Icon width={18} height={18} style={{ fontSize: 24, marginRight: 6 }} />
        <div className="menuLink">{item.name}</div>
      </div>
    );
  };

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        subMenuItemRender={renderSubMenuItem}
        menuItemRender={renderMenuItem}
        navTheme="dark"
        headerTheme="light"
        title="题库系统休息休息"
        logo="https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg"
        siderWidth={220}
        fixedHeader
        {...rest}
      >
        {children}
      </ProLayout>
    </div>
  );
}

export default SimpleLayout;
