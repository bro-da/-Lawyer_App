import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Tabs, Button, Modal, Input } from "antd";
import { deletetCase, getAllCase } from "../../api/CaseRequest";
import iconDelete from "../../assets/icons/trash.svg";
import iconDownload from "../../assets/icons/download.svg";
import iconEdit from "../../assets/icons/edit.svg";
import AddCaseModal from "./AddCaseModal";
import searchIcon from "../../assets/icons/search.svg";
import { dummyData } from "../../assets/data";
const { confirm } = Modal;
const CaseList = () => {
  const [caseList, setCaseList] = useState(dummyData);
  const [loader, setLoader] = useState(false);
  const [trigger, setTrigger] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({});
console.log("editData",editData);
  const showModal = (data) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setEditData({});
  };

  //API For Get All Cases

  // useEffect(() => {
  //   const getCaseCall = async () => {
  //     setLoader(true);
  //     try {
  //       const { data } = await getAllCase();
  //       setCaseList(data?.data);
  //       setLoader(false);
  //     } catch (error) {
  //       console.log(error.message);

  //     }
  //   };
  //   getCaseCall();
  // }, [trigger]);

  const handleDelete = async (caseId) => {
    console.log("caseId", caseId);
    confirm({
      title: "Confirm Delete Cases?",

      onOk() {
        const deleteCall = async () => {
          try {
            const { data } = await deletetCase(caseId);
            if (data.msg === "deleted") {
              setTrigger(Date.now());
            }
          } catch (error) {
            console.log(error.message);
          }
        };
        deleteCall();
      },
      okButtonProps: {
        style: {
          backgroundColor: "#0F2C64",
          borderColor: "#0F2C64",
          color: "white",
          width: "140px",
        },
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const onChange = (key) => {
    console.log(key);
  };
  const columns = [
    {
      title: "",
      key: "tags",
      dataIndex: "._id",
      render: (_id) => (
        <>
          <Tag color={"blue"} key={_id}>
            {"new"}
          </Tag>
        </>
      ),
    },
    {
      title: "Case Title",
      dataIndex: "caseTitle",
      key: "name",
    },
    {
      title: "Case Category",
      dataIndex: "caseName",
      key: "age",
    },
    {
      title: "Court Category",
      dataIndex: "courtNumber",
      key: "address",
    },
    {
      title: "Consultant by",
      dataIndex: "judge",
      key: "address",
    },

    {
      title: "",
      key: "action",
      dataIndex: "status._id",
      render: (status, _id) => (
        <Space size="middle">
          <img src={iconDownload} alt="" />
          <img
            src={iconDelete}
            alt=""
            onClick={() => handleDelete(_id.id)}
            style={{ cursor: "pointer" }}
          />
          <img
            src={iconEdit}
            alt=""
            onClick={() => showModal(_id)}
            style={{ cursor: "pointer" }}
          />
        </Space>
      ),
    },
  ];

  const items = [
    {
      key: "1",
      label: "All Cases",
      children: (
        <Table columns={columns} dataSource={caseList} loading={loader} style={{ overflow:"scroll"}}/>
      ),
    },
    {
      key: "2",
      label: "Old Cases",
      children: "Content of Tab Old Cases",
    },
    {
      key: "3",
      label: "New Cases",
      children: "Content of Tab New Cases",
    },
    {
      key: "4",
      label: "Judgement Cases",
      children: "Content of Tab Judgement Cases",
    },
    {
      key: "5",
      label: "Closed Cases",
      children: "Content of Tab Closed Cases",
    },
  ];

  return (
    <>
      <div className="case-header">
        <div className="case-head-text">
          <h3>All Cases</h3>
          <p>Add and View legal cases</p>
        </div>
        <div className="searchbar">
          <div
            style={{
              height: "30px",
              width: "40px",
              backgroundColor: "#0F2C64",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
              cursor: "pointer",
            }}
          >
            <img src={searchIcon} alt="" />
          </div>
          <Input
            style={{
              height: "30px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "15px",
              borderTopRightRadius: "15px",
            }}
            placeholder="Search Cases"
          />
        </div>
        <div className="add-case" onClick={() => showModal()}>
          <p>Add New Case</p>
        </div>
      </div>
      <div>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          style={{ marginLeft: "20px" }}
        />
      </div>
      <Modal
        open={isModalOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        closable={false}
      >
        <AddCaseModal editData={editData} handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default CaseList;
