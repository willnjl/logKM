import React from "react";
import Avatar from "@material-ui/core/Avatar";

export default function UserAvatar({ src, className }) {
    return <Avatar src={src} className={className} />;
}
