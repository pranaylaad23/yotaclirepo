import {BsPatchCheckFill} from "react-icons/bs";
import {AiOutlineEdit, AiOutlineStop} from "react-icons/ai";
import {IoMdAddCircle} from "react-icons/io";
import {PiUploadSimpleBold} from "react-icons/pi";

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

export const AddIcon = ({
                            onAdd,
                            title = null,
                            color = null,
                            size = null
                        }) => {
    return <IoMdAddCircle
        color={color ? color : "#0d74da"}
        size={size > 10 ? size : "24"}
        cursor={"pointer"}
        title={title ? title : "Add New"}
        onClick={onAdd}/>
};

export const UploadIcon = ({
                               onUpload,
                               title = null,
                               color = null,
                               size = null
                           }) => {
    return <PiUploadSimpleBold
        color={color ? color : "#0d74da"}
        size={size > 10 ? size : "24"}
        cursor={"pointer"}
        title={title ? title : "Upload"}
        onClick={onUpload}/>
}
