import React from "react";
import PackageMeta from "../src";
import { message, Row, Col } from "antd";
import {
  AreaChartOutlined,
  DotChartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default () => {
  const list: any = [
    {
      title: "内容生成量",
      count: "5367",
      color: "#F78435",
      icon: <AreaChartOutlined />,
    },
    {
      title: "内容点击量",
      count: "123",
      color: "#6BCE6B",
      icon: <DotChartOutlined />,
    },
    {
      title: "内容曝光量",
      count: "5643",
      color: "#59a6e5",
      icon: <HeartOutlined />,
    },
    {
      title: "用户活跃数",
      count: "7779",
      color: "#ec7f7f",
      icon: <UserOutlined />,
    },
  ];
  return (
    <div style={{ padding: "10px 30px" }}>
      <h3>默认主题</h3>
      <PackageMeta
        key={index}
        {...item}
        onClick={() => {
          message.info("点击了卡片");
        }}
      />
    </div>
  );
};
