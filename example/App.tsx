// @ts-nocheck
import React from "react";
import PackageMeta from "../src";
import { message, Row, Col } from "antd";
import avatarImg from "./avatar3.jpg";
import {
  AreaChartOutlined,
  DotChartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default () => {
  return (
    <div style={{ padding: "10px 30px" }}>
      <PackageMeta
        title="Disk资源管理"
        description="一个小而美的资源管理UI组件，通过简单的配置就有好的用户体验，上手简单，搭配灵活，支持folder文件夹、file文件、link链接；"
        nickname="moco"
        avatar={<img src={avatarImg} />}
        extra={{
          npm: "https://www.npmjs.com/package/disk-resource-manager",
          github: "https://github.com/rookie-ninja/disk-resource-manager",
          gitlab: "https://gitlab.com/rookie-ninja/disk-resource-manager",
          gitee: "https://gitee.com/rookie-ninja/disk-resource-manager",
          maturity: 85,
        }}
      />
    </div>
  );
};
