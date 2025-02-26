# TNT 组件元数据

## 安装

```bash
npm i @tntx/package-meta-react --save
```

## 使用

```jsx
import PackageMeta from "@tntx/package-meta-react";
import avatarImg from "./avatar3.jpg";

export default () => {
  return (
    <div style={{ padding: "10px 30px" }}>
      <PackageMeta
        title="Disk资源管理"
        description="一个小而美的资源管理UI组件，通过简单的配置就有好的用户体验，上手简单，搭配灵活，支持folder文件夹、file文件、link链接；"
        author={{
          nickname: "露娜",
          avatar: <img src={avatarImg} />,
        }}
        link={{
          url: "https://github.com/moco-ui/moco-ui",
          type: "design",
        }}
        extra={{
          npm: "https://www.npmjs.com/package/disk-resource-manager",
          github: "https://github.com/rookie-ninja/disk-resource-manager",
          gitlab: "https://gitlab.com/rookie-ninja/disk-resource-manager",
          // gitee: "https://gitee.com/rookie-ninja/disk-resource-manager",
          // otherLink: "https://github.com/rookie-ninja/disk-resource-manager",
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

| 属性名      | 描述                   | 类型                                                | 必需 | 默认值 |
| ----------- | ---------------------- | --------------------------------------------------- | ---- | ------ |
| title       | 组件标题               | string                                              | 否   | -      |
| description | 组件描述               | string                                              | 是   | -      |
| author      | 作者信息               | { nickname: string \| string[]; avatar: ReactNode } | 否   | -      |
| link        | 相关链接               | { url?: string; type?: "component" \| "design" }    | 否   | -      |
| extra       | 额外链接和成熟度等信息 | object                                              | 否   | -      |

`extra`对象定义如下：

```ts
{
  github?: string;
  gitee?: string;
  gitlab?: string;
  npm?: string;
  otherLink?: string;
  maturity?: number;
  useList?: {
    name: string;
    version: string
  }[] | "all"
}
```

## 字段详细说明

- **title**: 组件的标题，可以为空。
- **description**: 对组件功能的简要描述，此字段是必需的。
- **author**: 包含作者昵称（支持单个或多个）和头像元素的对象。
- **link**: 包含可选 URL 及其类型的对象，用于指定组件或设计相关链接。
- **extra**: 包含一系列额外链接（如 GitHub、Gitee、GitLab、npm 等）以及组件成熟度评分和使用列表。
