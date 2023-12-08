import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

    const { name, contact, securitynum, email, otherinfo, carnum, carname, carinfoyear, carmileage, dateprsnt, caridnumber, offerprice, acqsttax, categoryprsnt, dealer, depositprsnt, evidence, memo  } = props.data;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Accordion.Body>
            <div className='d-flex justify-content-between text-end mb-2'>
                <p className='mb-0 fs-5'>- 알선정보 상세</p>
                <div className='d-flex'>
                    <Button variant="primary" className='me-1'>수정</Button>{' '}
                    <Button variant="danger">삭제</Button>{' '}
                </div>
            </div>
            <div className='d-flex'>
                <div className='col-6'>
                    <Table bordered hover className='mb-m-1'>
                        <tbody>
                            <tr>
                                <th className='bg-ddd'>알선구분</th>
                                <td>우리상사</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>판매구분</th>
                                <td>딜러</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>딜러명</th>
                                <td>이홍규</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>입금계좌</th>
                                <td>기업 123-12-*12345</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>상사명</th>
                                <td>(주) 뉴카카</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>상사연락처</th>
                                <td>010-9875-9875</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='col-6'>
                    <Table bordered hover className='mb-m-1 col-6'>
                        <tbody>
                            <tr>
                                <th className='bg-ddd'>알선 매출(세전)</th>
                                <td>3,000,000</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>공급가</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>부가세 (10%)</th>
                                <td>272,728</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>소득세 (3.3%)</th>
                                <td>90,000</td>
                            </tr>
                            <tr>
                                <th className='bg-ddd'>최종 지급액</th>
                                <td>2,637,272</td>
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
                            <th className='bg-ddd'>메모</th>
                            <td>특이사항없음</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Button variant="primary" size="lg" className='w-100 my-3'>
                <p className='m-0 fs-5 fw-bolder'>정산서 확인</p>
            </Button>
        </Accordion.Body>
        
    );
}

export default CarInfoTable;
