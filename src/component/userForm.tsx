import { Form, Input, Button } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Fellas from '../assets/List.json'

export default function UserForm () {

  const navigate = useNavigate()

  const handleLogin = (data: { nickname: string; password: number; }) => {
    const formData = Fellas.filter((value) => (data.nickname == value.username && data.password == value.password))
    
    formData.length != 0 ?
    navigate(`/${data.nickname.toLowerCase()}/${data.password}`) : alert("Incorrect username or password.")

  }

    return (
        <>
        <div className='flex flex-col content-center items-center justify-center content-center mt-[2vw] '>
        <h1 className='text-[10vw] pb-[2vw] pt-[10vw] font-bold text-white'>To My Fellas</h1>
        <hr className="w-[50vw] border-t border-white"></hr>
        <div className='flex flex-col max-w-100 p-[2vw] rounded-[2vw] m-2 [&_.ant-form-item-label_>_label]:!text-white'>
            <Form onFinish={handleLogin} layout="vertical">
                <Form.Item label="Nickname" name="nickname" rules={[{required : true, message : "Your nickname😩"}]}>
                    <Input /> 
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{required : true, message : "It's your birthday"}]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
        </div>
        </>
    )


}