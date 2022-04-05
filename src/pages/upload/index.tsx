import * as React from 'react';
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { cloneDeep } from 'lodash';

const { Dragger } = Upload;

const item = {
  name: 'customFile',
  percent: 20,
  status: 'success',
  uploadWay: 'url',
};

const UploadFile = () => {
  const [list, setList] = React.useState<any[]>([]);
  const props = {
    name: 'file',
    multiple: true,
    fileList: list,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    itemRender: (originNode: any, file: any, fileList: any, actions: any) => {
      (file as any).actions = actions;
      if (file.uploadWay !== 'url') {
        file.uploadWay = 'local';
      }
      return null;
    },
    onChange(info: any) {
      const { status } = info.file;
      setList(info.fileList);
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const addFle = () => {
    setList((pre) => [...pre, cloneDeep(item)]);
  };

  const changePercent = () => {
    const newList = list.map((item) => {
      item.percent = item.percent + 10;
      return item;
    });
    setList(newList);
  };

  console.log(list);

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
        </p>
      </Dragger>
      <div>
        {list.map((item: any) => (
          <div key={item.name}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <Button type="primary" onClick={addFle}>
        Add custom Item
      </Button>
      <Button type="primary" onClick={changePercent}>
        change url percent
      </Button>
    </div>
  );
};

export default UploadFile;
