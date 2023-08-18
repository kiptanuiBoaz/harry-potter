import { DangerBtnPropTypes } from "@/types";
import "./danger-btn.scss";

export const DangerBtn = ({ children, clickHandler }: DangerBtnPropTypes) => {
    return (
        <button
            className="danger-btn"
            onClick={(e) => {
                e.preventDefault();
                clickHandler();
            }}
        >
            {children}
        </button>
    )
} 