import { ReactNode } from "react";
import cn from "classnames";
import { Tooltip, Popover } from "antd";
import { getColors } from "./utils";

import githubImg from "./images/github.png";
import giteeImg from "./images/gitee.png";
import gitlabImg from "./images/gitlab.png";
import npmImg from "./images/npm.png";
import otherLinkImg from "./images/link.png";
import HandIcon from "./HandIcon";

import "./index.less";

interface IProps {
  title?: string;
  nickname?: string | string[];
  avatar?: ReactNode;
  description: string;
  link?: {
    url?: string;
    type?: "component" | "design";
  };
  extra?: {
    github?: string;
    gitee?: string;
    gitlab?: string;
    npm?: string;
    otherLink?: string;
    maturity?: number;
    useList?: { name: string; version: string }[] | "all";
  };
}

export default ({
  title,
  nickname,
  avatar,
  description,
  link = {},
  extra = {},
}: IProps) => {
  const { url, type } = link;
  const {
    github,
    gitee,
    gitlab,
    npm,
    otherLink,
    maturity = 0,
    useList = [],
  } = extra;

  let maturityClass = "green";
  if (maturity < 75) {
    maturityClass = "red";
  } else if (maturity >= 75 && maturity < 85) {
    maturityClass = "yellow";
  } else if (maturity >= 85 && maturity <= 100) {
    maturityClass = "green";
  }

  let computeNickname = "";
  if (typeof nickname === "string") {
    computeNickname = nickname;
  }
  if (Array.isArray(nickname)) {
    computeNickname = nickname.join("、");
  }

  const colors = getColors(computeNickname || "a");

  return (
    <div className="tntx-package-meta">
      {title && (
        <div className="tntx-package-meta-header">
          <h2>{title}</h2>
          {url && type && (
            <div className="link-info">
              <span className="link-info-icon">
                <HandIcon width="22px" height="22px" />
              </span>
              <span>
                {type === "component" ? "查看配套组件" : "查看配套设计"}
              </span>
            </div>
          )}
        </div>
      )}
      <div
        className="tntx-package-meta-body"
        style={{ borderLeftColor: colors[0] }}
      >
        <div className="package-meta-body-content">
          {avatar && <div className="avatar">{avatar}</div>}
          <div className="info">
            <h4>组件负责人：{computeNickname}</h4>
            <p>组件简介：{description}</p>
          </div>
        </div>
        <div className="package-meta-body-extra">
          {(maturity || useList) && (
            <div className="extra-git-tag-list">
              {maturity && (
                <div
                  className={cn("git-tag", { mr10: github || gitlab || npm })}
                >
                  <span>成熟度</span>
                  <em className={maturityClass}>{`${maturity}%`}</em>
                </div>
              )}
              {useList && useList !== "all" && useList.length > 0 && (
                <Popover
                  placement="bottomRight"
                  content={
                    <table className="tntx-package-meta-use-table">
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
                  open
                >
                  <div className="git-tag">
                    <span>项目使用</span>
                    <em>{useList.length}</em>
                  </div>
                </Popover>
              )}
              {useList && useList === "all" && (
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
          )}
          <div className="extra-link-list">
            {github && (
              <a className="link-icon github" href={github} target="_blank">
                <Tooltip title="点击跳转到github">
                  <img src={githubImg} />
                </Tooltip>
              </a>
            )}
            {gitlab && (
              <a className="link-icon gitlab" href={gitlab} target="_blank">
                <Tooltip title="点击跳转到gitlab">
                  <img src={gitlabImg} />
                </Tooltip>
              </a>
            )}
            {gitee && (
              <a className="link-icon gitlab" href={gitlab} target="_blank">
                <Tooltip title="点击跳转到gitee">
                  <img src={giteeImg} />
                </Tooltip>
              </a>
            )}
            {npm && (
              <a className="link-icon npm" href={npm} target="_blank">
                <Tooltip title="点击跳转到npm">
                  <img src={npmImg} />
                </Tooltip>
              </a>
            )}
            {otherLink && (
              <a className="link-icon npm" href={otherLink} target="_blank">
                <Tooltip title="点击跳转到链接">
                  <img src={otherLinkImg} />
                </Tooltip>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
