import {BsPatchCheckFill} from "react-icons/bs";
import {AiOutlineEdit, AiOutlineStop} from "react-icons/ai";

export const ApproveIcon = ({
                                onApprove,
                                title = null,
                                color = null,
                                size = null
                            }) => {
    return <BsPatchCheckFill
        color={color ? color : "#21a321"}
        size={size > 10 ? size : "24"}
        title={title ? title : "Approve"}
        cursor={"pointer"}
        onClick={onApprove}/>
};

export const DeclineIcon = ({
                                onDecline,
                                title = null,
                                color = null,
                                size = null
                            }) => {
    return <AiOutlineStop
        color={color ? color : "#fd1212"}
        size={size > 10 ? size : "24"}
        cursor={"pointer"}
        title={title ? title : "Decline"}
        onClick={onDecline}/>
};

export const EditIcon = ({
    onEdit,
    title = null,
    color = null,
    size = null
}) => {
return <AiOutlineEdit
color={color ? color : "#fd1212"}
size={size > 10 ? size : "24"}
cursor={"pointer"}
title={title ? title : "Edit"}
onClick={onEdit}/>
};
