import { ReactNode } from "react";
import { getColors } from "./utils";
import HandIcon from "./HandIcon";
import Extra from "./Extra";

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
        <Extra extra={extra} />
      </div>
    </div>
  );
};
