'use client'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './page.module.css'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App-header justify-content-start">
      <div className='d-flex align-items-center text-end mb-2 w-95 justify-content-between mt-5'>
        <p className='fs-5 fw-bolder text-start mb-0'>| 제시차량</p>

          <a href="/register" className='text-white bg-primary text-decoration-none p-2 px-4 rounded-3'>
            등록
          </a>

      </div>
      <Table className='w-95 text-center'>
            <thead>
                <tr>
                    <th className='bg-06b text-white'>등록일</th>
                    <th className='bg-06b text-white'>차량번호</th>
                    <th className='bg-06b text-white'>차명</th>
                    <th className='bg-06b text-white'>년식</th>
                    <th className='bg-06b text-white'>제시금액</th>
                    <th className='bg-06b text-white'>담당자</th>
                    <th className='bg-06b text-white'>제시번호</th>
                    <th className='bg-06b text-white'>매도일</th>
                    <th className='bg-06b text-white'></th>
                </tr>
            </thead>
            <tbody className='align-middle'>
                <tr>
                    <td>2023-11-30</td>
                    <td className='fw-bolder'>07두10121</td>
                    <td>볼로 S904D</td>
                    <td>2018</td>
                    <td>1,000,000</td>
                    <td className='fw-bolder'>권하늘</td>
                    <td>202311140755</td>
                    <td></td>
                    <td>
                      <a href="/info" className='text-white w-75 bg-cab text-decoration-none p-2 px-4 rounded-3'>
                        상세
                      </a>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}


