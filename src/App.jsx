import React, { useEffect, useState } from "react";
import Data from "./Data.js";
import moment from "moment";
import {
  Wrapper,
  Table,
  Text,
  Thead,
  Tr,
  Th,
  Td,
  Active,
  Icon1,
  Icon2,
  InputAnt,
  InputWrapper,
} from "./style.js";
import { Modal, DatePicker, Select } from "antd";
export const App = () => {
  const [data, setData] = useState(Data);
  const [select, setSelect] = useState({});
  const [visible, setVisible] = useState(false);

  const getDelete = (id) => {
    const newArray = data.filter((value) => value.id !== id);
    setData(newArray);
  };

  const getEdit = (value) => {
    setVisible(true);
    setSelect(value);
  };

  const getSave = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...select,
      [name]: value,
    };

    setSelect(newData);
  };
  const onChangeDate = (e, name) => {
    const newData = {
      ...select,
      date: e?._d,
    };

    setSelect(newData);
  };

  const onSave = () => {
    let res = data.map((value) => (value.id === select.id ? select : value));
    setVisible(false);
    console.log(select, res, "res");
    setData(res);
  };

  const getSelect = (e) => {
    const newData = {
      ...select,
      status: e,
    };
    setSelect(newData);
  };

  return (
    <Wrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Title</Th>
            <Th>Status</Th>
            <Th>Age</Th>
            <Th>Role</Th>
            <Th>Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <tbody>
          {data.map((value) => (
            <Tr key={value.id}>
              <Td>
                <Text bold>{value.name}</Text>

                <Text>{value.email}</Text>
              </Td>
              <Td>{value.title}</Td>
              <Td>
                <Active status={value.status}>{value.status}</Active>
              </Td>
              <Td>{value.age}</Td>
              <Td>{value.role}</Td>
              <Td>
                <DatePicker value={moment(value.date)} format={"YYYY/MM/DD"}/>
                {/* <div>{value.date}</div> */}
              </Td>
              <Td>
                <span>
                  <Icon1 onClick={() => getDelete(value.id)}>sdsd</Icon1>
                </span>
                <Icon2 onClick={() => getEdit(value)}>edit</Icon2>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      {visible && (
        <Modal
          title="Update"
          centered
          visible={visible}
          onOk={() => onSave()}
          onCancel={() => setVisible(false)}
          width={500}
        >
          {/* <form action="" onSubmit={onSubmit}></form> */}
          <InputWrapper>
            <Text>Name:</Text>
            <InputAnt
              placeholder="name"
              name="name"
              defaultValue={select.name}
              onChange={(e) => getSave(e)}
            />
          </InputWrapper>
          <InputWrapper>
            <Text>Title:</Text>
            <InputAnt
              placeholder="title"
              name="title"
              defaultValue={select.title}
              onChange={(e) => getSave(e)}
            />
          </InputWrapper>
          <InputWrapper>
            <Text>Status:</Text>
            <Select
              defaultValue={select.status}
              onSelect={(e) => getSelect(e)}
              style={{ width: 200 }}
            >
              <Select.Option value={"ACTIVE"}>ACTIVE</Select.Option>
              <Select.Option value={"OFFLINE"}>OFFLINE</Select.Option>
              <Select.Option value={"INACTIVE"}>INACTIVE</Select.Option>
            </Select>
          </InputWrapper>
          <InputWrapper>
            <Text>Age:</Text>
            <InputAnt
              placeholder="age"
              name="age"
              defaultValue={select.age}
              onChange={(e) => getSave(e)}
            />
          </InputWrapper>
          <InputWrapper>
            <Text>Role:</Text>
            <InputAnt
              placeholder="role"
              name="role"
              defaultValue={select.role}
              onChange={(e) => getSave(e)}
            />
          </InputWrapper>
          <InputWrapper bottom>
            <Text>Date:</Text>

            <DatePicker
              style={{ width: "50%" }}
              onChange={(e) => onChangeDate(e, "date")}
              value={moment(select?.date, "YYYY/MM/DD")}
              
            />
          </InputWrapper>
        </Modal>
      )}
{/* <Pagination
                itemPerPage={20}
                showPageCounter
                // active={filters.paginateSize}
                total={20}
                // onClick={e => {
                //   setFilters({
                //     ...filters,
                //     paginateSize: e.current,
                //   })
                // }}
              /> */}
    </Wrapper>
  );
};
