import { ReactNode } from "react";
import { getColors } from "./utils";
import HandIcon from "./HandIcon";
import Extra from "./Extra";

import "./index.less";

interface IProps {
  title?: string;
  description: string;
  author?: {
    nickname: string | string[];
    avatar: ReactNode;
  };
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
  author,
  description,
  link = {},
  extra = {},
}: IProps) => {
  const { url, type } = link;
  const { nickname, avatar } = author || {};

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
        {author && (
          <>
            <div className="package-meta-body-content">
              {avatar && <div className="avatar">{avatar}</div>}
              <div className="info">
                <div className="info-header">
                  <h4 style={{ marginBottom: 0 }}>
                    组件负责人：{computeNickname}
                  </h4>
                  <Extra extra={extra} />
                </div>
                <p>组件简介：{description}</p>
              </div>
            </div>
          </>
        )}
        {!author && (
          <>
            <div className="package-meta-body-content">
              {avatar && <div className="avatar">{avatar}</div>}
              <div className="info">
                <p>组件简介：{description}</p>
              </div>
            </div>
            <Extra extra={extra} />
          </>
        )}
      </div>
    </div>
  );
};
