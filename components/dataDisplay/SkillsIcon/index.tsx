import classNames from "classnames";
import React from "react";

import { ISkillsIcon, MappingComponent } from "./SkillsIcon.type";

const SkillsIcon = React.memo(function SkillsIcon({ icon, direction = "horizontal", size = 60, className }: ISkillsIcon) {
  const Icon = MappingComponent[icon].icon;
  const title = MappingComponent[icon].title;
  const classes = classNames("flex p-4 text-center items-center justify-center", { "flex-col": direction === "vertical" }, className);
  return (
    <div className={classes}>
      <Icon size={size} />
      <span className="mt-3 text-sm font-medium">
        {title}
      </span>
    </div>
  );
});

export default SkillsIcon;
