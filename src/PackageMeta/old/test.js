import { Link } from "dva/router";
import cn from "classnames";
import { uedPartners } from "./constant";
import { Popover, Icon, Tooltip } from "antd";
import { NpmSvg, GithubSvg, GitlabSvg } from "./svg";
import TextAvatar from "@tntx/text-avatar-react";
import { isJSON } from "@tntd/utils";
import defaultAvatar from "./images/defaultAvatar.svg";

import "./index.less";
const NpmIcon = (props) => <Icon component={NpmSvg} {...props} />;
const GithubIcon = (props) => <Icon component={GithubSvg} {...props} />;
const GitlabIcon = (props) => <Icon component={GitlabSvg} {...props} />;

export default ({
  typeText = "组件负责人",
  title,
  joinUserText,
  account = "someBody",
  description,
  mb = 20,
  assist,
  link = {},
  extra = {},
}) => {
  const { url, type } = link;
  const { github, gitlab, npm, maturity, useList = [] } = extra;

  const getUser = (uid) => {
    let userItem = uedPartners.find((user) => user.account === uid);
    return userItem
      ? userItem
      : uedPartners.find((user) => user.account === "someBody");
  };

  let maturityClass = "green";
  if (maturity < 75) {
    maturityClass = "red";
  } else if (maturity >= 75 && maturity < 85) {
    maturityClass = "yellow";
  } else if (maturity >= 85 && maturity <= 100) {
    maturityClass = "green";
  }

  let authorInfo = getUser(account);
  return (
    <div className="author-component" style={{ marginBottom: mb || 0 }}>
      <div className="author-header">
        <h2>{title}</h2>
        {url && type && (
          <div className="link-info">
            <Link to={url}>
              <i className="iconfont icon-hand"></i>
              <span>
                {type === "component" ? "查看配套组件" : "查看配套设计"}
              </span>
            </Link>
          </div>
        )}
      </div>
      <div
        className="author-body"
        style={{ borderLeftColor: authorInfo.color }}
      >
        <div className="avatar">
          {/* <a href={`https://sinan.tongdun.me/user/${authorInfo.sinanUid}`} target="_blank"></a> */}
          <TextAvatar
            nickname={authorInfo.name}
            account={authorInfo.account}
            cardConfig={[
              {
                label: "部门",
                value: authorInfo.depName,
              },
              {
                label: "邮箱",
                value: `${authorInfo.account}@tongdun.net`,
              },
            ]}
            onClick={() => {
              window.open(
                `https://sinan.tongdun.me/user/${authorInfo.sinanUid}`
              );
            }}
            theme="plant"
          >
            <img
              src={authorInfo.avatar}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultAvatar;
              }}
            />
          </TextAvatar>
        </div>
        <div className="info">
          <h4>
            {typeText}：{joinUserText ? joinUserText : authorInfo.name}
            {!joinUserText && assist && <span>、{getUser(assist).name}</span>}
          </h4>
          <div className="extra">
            {github && (
              <a className="link-icon github" href={github} target="_blank">
                <Tooltip title="点击跳转到github">
                  <GithubIcon />
                </Tooltip>
              </a>
            )}
            {gitlab && (
              <a className="link-icon gitlab" href={gitlab} target="_blank">
                <Tooltip title="点击跳转到gitlab">
                  <GitlabIcon />
                </Tooltip>
              </a>
            )}
            {npm && (
              <a className="link-icon npm" href={npm} target="_blank">
                <Tooltip title="点击跳转到npm">
                  <NpmIcon style={{ fontSize: "32px" }} />
                </Tooltip>
              </a>
            )}
            {maturity && (
              <div className={cn("git-tag", { mr10: github || gitlab || npm })}>
                <span>成熟度</span>
                <em className={maturityClass}>{`${maturity}%`}</em>
              </div>
            )}
            {useList && useList !== "all" && useList.length > 0 && (
              <Popover
                placement="bottomRight"
                content={
                  <table className="author-component-use-table">
                    <thead>
                      <th>项目名称</th>
                      <th>版本</th>
                    </thead>
                    <tbody>
                      {useList.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.version}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                }
                title="项目使用"
              >
                <div className="git-tag">
                  <span>项目使用</span>
                  <em>{useList.length}</em>
                </div>
              </Popover>
            )}
            {useList && useList === "all" && !isJSON(useList) && (
              <Popover
                placement="bottomRight"
                content={<div>私有云所有业务系统</div>}
                title="项目使用"
              >
                <div className="git-tag">
                  <span>项目使用</span>
                  <em>ALL</em>
                </div>
              </Popover>
            )}
          </div>
          <p>组件简介：{description}</p>
        </div>
      </div>
    </div>
  );
};
