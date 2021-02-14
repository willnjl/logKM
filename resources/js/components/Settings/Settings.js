import React from "react";
import PageWrap from "../PageWrap";
import TextField from "@material-ui/core/TextField";

export default function Settings() {
    return (
        <PageWrap>
            <form>
                <TextField label="Standard" />
            </form>
        </PageWrap>
    );
}
