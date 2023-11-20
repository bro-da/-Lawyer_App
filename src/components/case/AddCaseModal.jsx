import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { addCase, editCase } from "../../api/CaseRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { MdOutlineFileUpload } from "react-icons/md";
const { Dragger } = Upload;

const AddCaseModal = ({ editData, handleClose }) => {
  const [loading, setLoading] = useState();
  const [editDatas, setEditDatas] = useState(editData);
  const handleSubmit = async (caseData) => {
    try {
      setLoading(true);
      const { data } = editDatas
        ? await editCase(editDatas?._id, caseData)
        : await addCase(caseData);
      if (data?.success) {
        setLoading(false);
        toast.success("Case Added Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          handleClose();
        }, 2500);
      } else if (data?.update) {
        setLoading(false);
        toast.success("Case Updated Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          handleClose();
        }, 2500);
      }
    } catch (error) {
      console.log("error");
      setLoading(false);
      toast(error?.message);
      if (error.response?.data?.message) {
        toast(error?.response?.data?.message);
      }
    }
  };

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <>
      <h3>{editDatas ? "EditCase" : "Add New Case"}</h3>
      <p>{editDatas ? "Customize Case" : "add New Case"}</p>

      <hr />

      <Form
        className="relative"
        onFinish={handleSubmit}
        initialValues={{
          caseTitle: editDatas?.caseTitle,
          caseCategory: editDatas?.caseName,
          courtCategory: editDatas?.courtNumber,
          consultant: editDatas?.judge,
        }}
      >
        <div className="row">
          <div className="">
            <label>Case Title</label>
            <Form.Item
              name="caseTitle"
              rules={[
                {
                  type: "text",
                  message: "The input is not valid data!",
                },
                {
                  required: true,
                  message: "Please Enter Case Title!",
                },
              ]}
            >
              <Input className="h-10" />
            </Form.Item>
          </div>

          <div style={{display:"flex",gap:"10px"}}>
            <div className="" >
              <label>Case Category</label>
              <Form.Item
                name="caseCategory"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid data!",
                  },
                  {
                    required: true,
                    message: "Please Enter Case Category!",
                  },
                ]}
              >
                <Input className="h-10" />
              </Form.Item>
            </div>
            <div className="">
              <label>Court Category</label>
              <Form.Item
                name="courtCategory"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid data!",
                  },
                  {
                    required: true,
                    message: "Please Enter Court Category!",
                  },
                ]}
              >
                <Input className="h-10" />
              </Form.Item>
            </div>
            <div className="">
              <label>Consultant</label>
              <Form.Item
                name="consultant"
                rules={[
                  {
                    type: "text",
                    message: "The input is not valid data!",
                  },
                  {
                    required: true,
                    message: "Please Enter consultant!",
                  },
                ]}
              >
                <Input className="h-10" />
              </Form.Item>
              
            </div>
            
          </div>
<div>
<Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <MdOutlineFileUpload size={40} />
    </p>
    <p className="">Upload files from Device/Browser</p>
    
  </Dragger>
</div>
          <div >
            <div style={{ display: "flex", justifyItems: "flex-end", marginTop:"20px", gap:"20px" ,justifyContent:"end"}}>
              <Button
                onClick={() => {
                  handleClose()
                 
                }}
              >
                cancel
              </Button>
              <Button
                htmlType="submit"
                style={{ width: "140px", backgroundColor: "#0F2C64" ,color:"white"}}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </Form>
      <ToastContainer />
    </>
  );
};

export default AddCaseModal;
