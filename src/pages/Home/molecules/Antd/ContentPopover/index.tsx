import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const ContentPopover = () => (
  <div className="popover-wrapper">
    <Button type="link" icon={<InstagramFilled />} size="middle">
      Instagram
    </Button>
    <Button type="link" icon={<FacebookFilled />} size="middle">
      Facebook
    </Button>
  </div>
);

export default ContentPopover;
