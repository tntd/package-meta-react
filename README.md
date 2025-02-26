# TNT 组件元数据

## 安装

```bash
npm i @tntx/package-meta-react --save
```

## 使用

```jsx
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
        nickname="露娜"
        avatar={<img src={avatarImg} />}
        link={{
          url: "https://www.tntd.pro",
          type: "design",
        }}
        extra={{
          npm: "https://github.com/tntd/package-meta-react",
          github: "https://github.com/tntd/package-meta-react",
          gitlab: "https://github.com/tntd/package-meta-react",
          gitee: "https://github.com/tntd/package-meta-react",
          otherLink: "https://github.com/tntd/package-meta-react",
          maturity: 85,
          useList: [
            {
              name: "天策",
              version: "1.0.0",
            },
          ],
        }}
      />
    </div>
  );
};
```

## API

### 组件 API

### API

| 参数        | 说明       | 类型   | 是否必须 | 默认值 |
| ----------- | ---------- | ------ | -------- | ------ |
| title       | 组件标题   | string | 否       | -      |
| description | 组件描述   | string | 否       | -      |
| nickname    | 组件负责人 | string | 否       | -      |
