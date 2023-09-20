import React from "react";

export default function ErrorMessage({error}) {
    if (!error) return null;

    return <div className="validate">{error}</div>;
}