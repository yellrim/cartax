import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface CarInfoTableProps {
    data: { 
        name: string,
        contact: string,
        securitynum: string,
        email: string,
        otherinfo: string,
        carnum: string,
        carname: string,
        carinfoyear: string,
        carmileage: string,
        dateprsnt: string,
        caridnumber: string,
        offerprice: string,
        acqsttax: string,
        categoryprsnt: string,
        dealer: string,
        depositprsnt: string,
        evidence: string,
        memo: string
    }
}

const CarInfoTable: React.FC<CarInfoTableProps> = (props) => {
    return (
        <Accordion.Body>
            <div className='text-end mb-2'>
                <Button variant="primary">수정</Button>{' '}
            </div>
            <div className='d-flex'>
                <div className='col-6'>
                    <Table bordered hover className='mb-m-1'>
                        <tbody>
                            <tr>
                                <th className='bg-ddd'>이름</th>
                                <td>홍길동</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>제시고객 타입</th>
                                <td>개인</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>주민번호</th>
                                <td>801205-*******</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>연락처</th>
                                <td>01012345678</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='col-6'>
                    <Table bordered hover className='mb-m-1 col-6'>
                        <tbody>
                            <tr>
                                <th className='bg-ddd'>E-MAIL</th>
                                <td>ddok@naver.com</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>비사업사실용확인서</th>
                                <td className='text-center'>Y</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>FAX</th>
                                <td>5678-1002</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'></th>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='col-12'>
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <th className='bg-ddd'>주소</th>
                            <td>경기도 용인시 기흥구 흥덕1로79번길2</td>
                        </tr>
                        <tr>
                            <th className='bg-ddd'>메모</th>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Accordion.Body>
    );
}

export default CarInfoTable;
