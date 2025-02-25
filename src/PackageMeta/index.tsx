import { ReactNode } from "react";
import cn from "classnames";
import { Tooltip } from "antd";
import { getColors } from "./utils";
import githubImg from "./images/github.png";
import giteeImg from "./images/gitee.png";
import gitlabImg from "./images/gitlab.png";
import npmImg from "./images/npm.png";
import otherLinkImg from "./images/npm.png";

import "./index.less";

interface IProps {
  title: string;
  nickname?: string;
  avatar?: ReactNode;
  assist?: string;
  description?: string;
  typeText?: string;
  mb?: number;
  link?: {
    url?: string;
    type?: string;
  };
  extra?: {
    // github, gitlab, npm, maturity, useList = []
    github?: string;
    gitlab?: string;
    npm?: string;
    gitee?: string;
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
  mb = 20,
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

  const colors = getColors(nickname || "a");

  return (
    <div className="tntx-package-meta" style={{ marginBottom: mb || 0 }}>
      <div className="author-header">
        <h2>{title}</h2>
        {url && type && (
          <div className="link-info">
            {/* <Link to={url}>
                    <i className='iconfont icon-hand'></i>
                    <span>{type === 'component' ? '查看配套组件' : '查看配套设计'}</span>
                </Link> */}
          </div>
        )}
      </div>
      <div className="author-body" style={{ borderLeftColor: colors[1] }}>
        {avatar && <div className="avatar">{avatar}</div>}
        <div className="info">
          {/* <h4>{title}</h4> */}
          <p>组件简介：{description}</p>
          <div className="extra">
            {github && (
              <a className="link-icon github" href={github} target="_blank">
                <Tooltip title="点击跳转到github">
                  <img src={githubImg} />
                </Tooltip>
              </a>
            )}
            {gitee && (
              <a className="link-icon gitee" href={gitee} target="_blank">
                <Tooltip title="点击跳转到gitee">
                  <img src={giteeImg} />
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
            {npm && (
              <a className="link-icon npm" href={npm} target="_blank">
                <Tooltip title="点击跳转到npm">
                  <img src={npmImg} />
                </Tooltip>
              </a>
            )}
            {otherLink && (
              <a className="link-icon link" href={otherLink} target="_blank">
                <Tooltip title="点击跳转网页">
                  <img src={otherLinkImg} />
                </Tooltip>
              </a>
            )}
            {!!maturity && (
              <div
                className={cn("git-tag", {
                  mr10: github || gitlab || npm,
                })}
              >
                <span>成熟度</span>
                <em className={maturityClass}>{`${maturity}%`}</em>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
