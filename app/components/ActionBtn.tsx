"use client"
import { DangerBtnPropTypes } from "@/types";
import "./action-btn.scss";

export const ActionBtn = ({ children, clickHandler }: DangerBtnPropTypes) => {
    return (
        <button
            className="action-btn"
            onClick={(e) => {
                e.preventDefault();
                clickHandler();
            }}
        >
            {children}
        </button>
    )
} 