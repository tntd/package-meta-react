# TNT 组件元数据

## 安装

```bash
npm i @tntx/package-meta-react --save
```

## 使用

```jsx
import React from "react";
import DashboardCard from "../src";
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
    <Row gutter={20}>
      {list.map((item: any, index: number) => {
        return (
          <Col span={6}>
            <DashboardCard
              key={index}
              {...item}
              onClick={() => {
                message.info("点击了卡片");
              }}
            />
          </Col>
        );
      })}
    </Row>
  );
};
```

## API

### 组件 API

### API

| 参数        | 说明             | 类型                            | 是否必须 | 默认值  |
| ----------- | ---------------- | ------------------------------- | -------- | ------- |
| title       | 标题             | string                          | 否       | -       |
| tipText     | 提示文本         | string                          | 否       | -       |
| count       | 数量             | number \| string                | 否       | -       |
| countPrefix | 数量前缀         | string                          | 否       | -       |
| countUnit   | 数量单位         | string                          | 否       | -       |
| countColor  | 数量颜色         | string                          | 否       | -       |
| icon        | 图标             | React.ReactNode                 | 否       | -       |
| color       | 颜色             | string                          | 否       | #59a6e5 |
| iconShape   | 图标形状         | round \| circle                 | 否       | round   |
| theme       | 主题             | default \| s1 \| s2 \| s3 \| s4 | 否       | default |
| bgGradient  | 是否启用背景渐变 | boolean                         | 否       | false   |
